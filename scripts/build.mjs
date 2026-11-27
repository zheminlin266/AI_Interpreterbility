import { copyFile, cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import { articles, locales } from '../site/content.mjs';
import { tracking, trackingCheckedOn } from '../site/tracking.mjs';

const origin = 'https://aiinterpretability.zhemin.ltd';
const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
const md = new MarkdownIt().use(footnote);
const esc = md.utils.escapeHtml;
const route = (locale, article, guide) => `${locale.prefix}${article ? `/articles/${article.slug}` : ''}${guide ? `/guide/${guide.anchor}` : ''}/`;
const importedHeading = /<h([2-6]) id="([^"]+)">([\s\S]*?)<\/h\1>/g;
const mark = '<img alt="" width="32" height="32" src="/favicon.png">';
const arrow = '<span aria-hidden="true">↗</span>';

md.renderer.rules.table_open = (_tokens, _index, _options, env) => `<div class="table-scroll" role="region" aria-label="${esc(env.tableLabel)}" tabindex="0"><table>\n`;
md.renderer.rules.table_close = () => '</table></div>\n';

const renderFence = md.renderer.rules.fence;
md.renderer.rules.fence = (tokens, index, options, env, renderer) => {
  const { info, content } = tokens[index];
  if (info.trim() !== 'mathml') return renderFence(tokens, index, options, env, renderer);
  // Permit formula elements only; Markdown raw HTML remains disabled.
  if (/<(?!\/?(?:mi|mn|mo|mtext|mrow|msub|msubsup|mtable|mtr|mtd)>)/.test(content)) {
    throw new Error(`Unsupported markup in MathML formula: ${content.trim()}`);
  }
  return `<div class="equation"><math display="block">${content.trim()}</math></div>\n`;
};

function renderMarkdown(source, lang) {
  const env = { tableLabel: lang === 'zh' ? '可横向滚动的对照表' : 'Scrollable comparison table' };
  const tokens = md.parse(source, env);
  if (tokens[0]?.tag === 'h1') tokens.splice(0, 3);
  const headings = [];
  const ids = new Set();
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'paragraph_open') {
      const [image, lineBreak, ...caption] = tokens[i + 1].children ?? [];
      // A guide image and its caption are consecutive lines in one Markdown paragraph.
      if (image?.type === 'image' && image.attrGet('src')?.startsWith('/guide-images/') && lineBreak?.type === 'softbreak' && caption.length) {
        const inline = children => md.renderer.renderInline(children, md.options, env);
        token.type = 'html_block';
        token.content = `<figure class="guide-figure">${inline([image])}<figcaption>${inline(caption)}</figcaption></figure>\n`;
        tokens.splice(i + 1, 2);
      }
    }
    if (token.type !== 'heading_open') continue;
    const text = tokens[i + 1].children.map(t => t.type === 'softbreak' ? ' ' : t.content).join('');
    const base = text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{M}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'section';
    const legacyId = tokens[i - 3]?.type === 'paragraph_open' && tokens[i - 2].content.match(/^<a name="([A-Za-z0-9_]+)"><\/a>$/)?.[1];
    if (legacyId) {
      tokens.splice(i - 3, 3);
      i -= 3;
    }
    const stem = legacyId || `section-${base}`;
    let id = stem;
    for (let n = 2; ids.has(id); n++) id = `${stem}-${n}`;
    ids.add(id);
    token.attrSet('id', id);
    headings.push({ id, text, level: token.tag });
  }
  return { html: md.renderer.render(tokens, md.options, env), headings };
}

function addGuideLinks(locale, article, html, guides) {
  const entries = new Map(guides.map(guide => [guide.anchor,
    `<aside class="chapter-guide"${guide.anchor === 'introduction' ? ' id="introduction"' : ''} aria-label="${esc(guide.section)}解读"><a href="${route(locale, article, guide)}">${esc(guide.title)} <span aria-hidden="true">→</span></a><p>${esc(guide.description)}</p></aside>`,
  ]));
  // The unheaded introduction starts after the translation disclosure.
  if (entries.has('introduction')) {
    html = html.replace(/^<blockquote>[\s\S]*?<\/blockquote>|^/, opening => opening + entries.get('introduction'));
    entries.delete('introduction');
  }
  const linked = html.replace(importedHeading, (heading, _level, id) => {
    const entry = entries.get(id);
    entries.delete(id);
    return entry ? heading + entry : heading;
  });
  if (entries.size) throw new Error(`${article.slug}: missing guide anchors ${[...entries.keys()].join(', ')}`);
  return linked;
}

function layout(lang, article, body, guide) {
  const t = locales[lang];
  const path = route(t, article, guide);
  const page = guide ?? article?.[lang];
  const title = page ? `${page.title} · ${t.name}` : t.name;
  const description = page?.description ?? t.intro;
  const alternate = locales[lang === 'zh' ? 'en' : 'zh'];
  const alternateLinks = guide ? '' : `${Object.values(locales).map(l => `  <link rel="alternate" hreflang="${l.lang}" href="${origin}${route(l, article)}">`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${origin}${route(locales.zh, article)}">\n`;
  return `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${esc(description)}">
  <title>${esc(title)}</title>
  <link rel="canonical" href="${origin}${path}">
${alternateLinks}  <link rel="icon" href="/favicon.png" type="image/png">
  <script src="/main.js"></script>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <a class="skip" href="#main">${t.skip}</a>
  <header class="topbar">
    <nav class="topbar-inner" aria-label="${t.nav}">
      <a class="brand" href="${route(t)}">${mark}<span>${t.name}</span></a>
      <a class="nav-library" href="${route(t)}#articles">${t.library}</a>
      ${guide ? '' : `<a class="language-button" href="${route(alternate, article)}" hreflang="${alternate.lang}" aria-label="${t.switchLanguage}"><span lang="${alternate.lang}">${alternate.label}</span></a>`}
      <button class="theme" type="button" aria-label="${t.theme}" title="${t.theme}" hidden>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path class="moon" d="M20.7 14.3A8.7 8.7 0 0 1 9.7 3.3a9 9 0 1 0 11 11Z"/>
          <path class="sun" d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5m-2.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>
        </svg>
      </button>
    </nav>
  </header>
  ${body}
  <footer class="site-footer">${esc(t.name)}</footer>
</body>
</html>\n`;
}

function trackingLink([url, en, zh], lang, primary = false) {
  return `<a${primary ? ' class="tracking-link"' : ''} href="${esc(url)}">${esc(lang === 'zh' && zh ? zh : en)}${primary ? `&nbsp;${arrow}` : ''}</a>`;
}

function trackingSection(lang) {
  const t = locales[lang];
  return `<section id="tracking" class="tracking" aria-labelledby="tracking-title">
      <h2 id="tracking-title">${esc(t.tracking)}</h2>
${Object.entries(tracking).map(([group, entries]) => `      <div class="tracking-group">
        <h3 id="tracking-${group}">${esc(t[group])}</h3>
        <ul class="tracking-grid" aria-labelledby="tracking-${group}">
${entries.map(entry => {
  const { role, focus, evidence } = entry[lang];
  const [primary, ...sources] = entry.links;
  const details = group === 'organizations' ? t.trackingDetails : t.contributionDetails;
  return `          <li class="tracking-card">
            <h4>${esc(entry.name)}</h4>
            <p class="tracking-role">${esc(role)}</p>
            <p class="summary">${esc(focus)}</p>
            ${trackingLink(primary, lang, true)}
            <details class="tracking-details">
              <summary>${esc(details)}</summary>
              <p>${esc(evidence)}</p>
              <ul>${sources.map(link => `<li>${trackingLink(link, lang)}</li>`).join('')}</ul>
            </details>
          </li>`;
}).join('\n')}
        </ul>
      </div>`).join('\n')}
      <p class="tracking-meta">${esc(t.trackingChecked)}${lang === 'zh' ? '：' : ': '}<time datetime="${trackingCheckedOn}">${trackingCheckedOn}</time> · ${esc(t.trackingNote)}</p>
    </section>`;
}

function home(lang) {
  const t = locales[lang];
  return `<main id="main" class="home">
    <section class="intro" aria-labelledby="site-title">
      <h1 id="site-title">${esc(t.name)}</h1>
    </section>
    <section id="articles" aria-labelledby="articles-title">
      <h2 id="articles-title">${t.libraryTitle}</h2>
      <ol class="entries">
${articles.map((article, i) => {
  const entry = article[lang];
  const credit = entry.credit ?? article.credit ?? article.author;
  return `        <li><a href="${route(t, article)}">
          <span class="entry-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h3>${esc(entry.title)}</h3>
          <span class="entry-credit">${esc(credit)}</span>
          <span class="entry-arrow" aria-hidden="true">→</span>
        </a></li>`;
}).join('\n')}
      </ol>
    </section>
    ${trackingSection(lang)}
  </main>`;
}

async function articlePage(lang, article, guide) {
  const t = locales[lang];
  const a = guide ?? article[lang];
  const source = a.file ? await readFile(new URL(`knowledge-base/${a.file}`, root), 'utf8') : a.markdown;
  // HTML files are imported, reviewed translation fragments, not Markdown with raw HTML enabled.
  const { html, headings } = a.file?.endsWith('.html') ? {
    html: source,
    headings: [...source.matchAll(importedHeading)].map(([, level, id, label]) => ({
      id, level: `h${level}`, text: md.utils.unescapeAll(label.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()),
    })),
  } : source ? renderMarkdown(source, lang) : { html: '', headings: [] };
  const shallowest = Math.min(...headings.map(({ level }) => Number(level[1])));
  const toc = headings.length ? `<aside class="toc" aria-label="${t.toc}">
    <button class="toc-toggle" type="button" aria-controls="toc-nav" aria-expanded="true" aria-label="${t.collapseToc}" data-expand="${t.expandToc}" data-collapse="${t.collapseToc}" hidden><span class="toc-icon" aria-hidden="true"><span></span><span></span><span></span></span><span>${t.toc}</span></button>
    <nav class="toc-nav" id="toc-nav" aria-label="${t.toc}">${headings.map(({ id, text, level }) => `<a style="--depth:${Math.min(3, Number(level[1]) - shallowest)}" href="#${esc(id)}">${esc(text)}</a>`).join('')}</nav>
  </aside>` : '';
  const prose = a.guides ? addGuideLinks(t, article, html, a.guides) : html;
  const backHref = guide ? `${route(t, article)}#${guide.anchor}` : `${route(t)}#articles`;
  const backLabel = guide ? `返回「${guide.section}」译文` : t.back;
  return `<main id="main" class="article-layout">
    <article>
      <header class="article-header">
        <a class="back" href="${backHref}"><span aria-hidden="true">←</span> ${esc(backLabel)}</a>
        <h1>${esc(a.title)}</h1>
        ${!guide && article.original ? `<div class="source"><p>${t.sourceLabel}: <a href="${article.authorUrl}">${esc(article.author)}</a> <span aria-hidden="true">·</span> <time datetime="2025-09-02">${t.sourceDate}</time></p><a href="${article.original}" hreflang="en">${t.readOriginal} <span aria-hidden="true">↗</span></a></div>` : ''}
      </header>
      ${toc}
      ${prose ? `<div class="prose">${prose}</div>` : ''}
    </article>
  </main>`;
}

let pageCount = 0;
async function writePage(path, html) {
  const folder = new URL(`.${path}`, dist);
  await mkdir(folder, { recursive: true });
  await writeFile(new URL('index.html', folder), html);
  pageCount++;
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const asset of ['styles.css', 'main.js', 'favicon.png']) {
  await copyFile(new URL(`site/${asset}`, root), new URL(asset, dist));
}
for (const dir of ['paper-images', 'guide-images']) {
  await cp(new URL(`knowledge-base/${dir}/`, root), new URL(`${dir}/`, dist), { recursive: true });
}
for (const [lang, t] of Object.entries(locales)) {
  await writePage(route(t), layout(lang, null, home(lang)));
  for (const article of articles) {
    await writePage(route(t, article), layout(lang, article, await articlePage(lang, article)));
    for (const guide of article[lang].guides ?? []) {
      await writePage(route(t, article, guide), layout(lang, article, await articlePage(lang, article, guide), guide));
    }
  }
}
console.log(`Built ${pageCount} pages in dist/`);
