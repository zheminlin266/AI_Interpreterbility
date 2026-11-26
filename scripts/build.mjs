import { copyFile, cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import { articles, locales } from '../site/content.mjs';

const origin = 'https://aiinterpretability.zhemin.ltd';
const root = new URL('../', import.meta.url);
const dist = new URL('dist/', root);
const md = new MarkdownIt().use(footnote);
const esc = md.utils.escapeHtml;
const route = (locale, article) => `${locale.prefix}${article ? `/articles/${article.slug}` : ''}/`;
const mark = '<img alt="" width="32" height="32" src="/favicon.svg">';
const arrow = '<span aria-hidden="true">→</span>';

md.renderer.rules.table_open = (_tokens, _index, _options, env) => `<div class="table-scroll" role="region" aria-label="${esc(env.tableLabel)}" tabindex="0"><table>\n`;
md.renderer.rules.table_close = () => '</table></div>\n';

function renderMarkdown(source, lang) {
  const env = { tableLabel: lang === 'zh' ? '可横向滚动的对照表' : 'Scrollable comparison table' };
  const tokens = md.parse(source, env);
  if (tokens[0]?.tag === 'h1') tokens.splice(0, 3);
  const headings = [];
  const ids = new Set();
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
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

function layout(lang, article, body) {
  const t = locales[lang];
  const path = route(t, article);
  const title = article ? `${article[lang].title} · ${t.name}` : t.name;
  const description = article ? article[lang].description : t.intro;
  const alternate = locales[lang === 'zh' ? 'en' : 'zh'];
  return `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${esc(description)}">
  <title>${esc(title)}</title>
  <link rel="canonical" href="${origin}${path}">
${Object.values(locales).map(l => `  <link rel="alternate" hreflang="${l.lang}" href="${origin}${route(l, article)}">`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${origin}${route(locales.zh, article)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <script src="/main.js"></script>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <a class="skip" href="#main">${t.skip}</a>
  <header class="topbar">
    <nav class="topbar-inner" aria-label="${t.nav}">
      <a class="brand" href="${route(t)}">${mark}<span>${t.name}</span></a>
      <a class="nav-library" href="${route(t)}#articles">${t.library}</a>
      <a class="language-button" href="${route(alternate, article)}" hreflang="${alternate.lang}" aria-label="${t.switchLanguage}"><span lang="${alternate.lang}">${alternate.label}</span></a>
      <button class="theme" type="button" aria-label="${t.theme}" title="${t.theme}" hidden>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path class="moon" d="M20.7 14.3A8.7 8.7 0 0 1 9.7 3.3a9 9 0 1 0 11 11Z"/>
          <path class="sun" d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5m-2.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>
        </svg>
      </button>
    </nav>
  </header>
  ${body}
  <footer class="site-footer">${t.footer}</footer>
</body>
</html>\n`;
}

function home(lang) {
  const t = locales[lang];
  const guide = articles.find(article => article.original);
  return `<main id="main" class="home">
    <section class="intro" aria-labelledby="site-title">
      <h1 id="site-title">${esc(t.name)}</h1>
      <p class="lede">${esc(t.intro)}</p>
    </section>
    <section id="articles" aria-labelledby="articles-title">
      <h2 id="articles-title">${t.library}</h2>
      <ol class="entries">
${articles.map((article, i) => `<li><span class="entry-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><div><h3><a href="${route(t, article)}">${esc(article[lang].title)}</a></h3><p class="summary">${esc(article[lang].description)}</p><p class="entry-type">${article[lang].type}</p></div></li>`).join('\n')}
      </ol>
    </section>
    <section class="reading" aria-labelledby="reading-title"><h2 id="reading-title">${t.reading}</h2><p>${esc(t.readingNote)}</p><a href="${route(t, guide)}">${t.readingLink} ${arrow}</a></section>
    <section class="outlook" aria-labelledby="outlook-title"><h2 id="outlook-title">${t.next}</h2><p>${esc(t.nextNote)}</p></section>
  </main>`;
}

async function articlePage(lang, article) {
  const t = locales[lang];
  const a = article[lang];
  const source = a.file ? await readFile(new URL(`knowledge-base/${a.file}`, root), 'utf8') : a.markdown;
  // HTML files are imported, reviewed translation fragments, not Markdown with raw HTML enabled.
  const { html, headings } = a.file?.endsWith('.html') ? {
    html: source,
    headings: [...source.matchAll(/<h([2-6]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)].map(([, level, id, label]) => ({
      id, level: `h${level}`, text: md.utils.unescapeAll(label.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()),
    })),
  } : source ? renderMarkdown(source, lang) : { html: '', headings: [] };
  const shallowest = Math.min(...headings.map(({ level }) => Number(level[1])));
  const toc = headings.length ? `<aside class="toc" aria-label="${t.toc}">
    <button class="toc-toggle" type="button" aria-controls="toc-nav" aria-expanded="true" aria-label="${t.collapseToc}" data-expand="${t.expandToc}" data-collapse="${t.collapseToc}" hidden><span class="toc-icon" aria-hidden="true"><span></span><span></span><span></span></span><span>${t.toc}</span></button>
    <nav class="toc-nav" id="toc-nav" aria-label="${t.toc}">${headings.map(({ id, text, level }) => `<a style="--depth:${Math.min(3, Number(level[1]) - shallowest)}" href="#${esc(id)}">${esc(text)}</a>`).join('')}</nav>
  </aside>` : '';
  return `<main id="main" class="article-layout">
    <article>
      <header class="article-header">
        <a class="back" href="${route(t)}#articles"><span aria-hidden="true">←</span> ${t.back}</a>
        <p class="eyebrow">${a.type}</p>
        <h1>${esc(a.title)}</h1>
        <p class="lede">${esc(a.description)}</p>
        ${article.original ? `<div class="source"><p>${t.sourceLabel}: <a href="${article.authorUrl}">${esc(article.author)}</a> <span aria-hidden="true">·</span> <time datetime="2025-09-02">${t.sourceDate}</time></p><a href="${article.original}" hreflang="en">${t.readOriginal} <span aria-hidden="true">↗</span></a></div>` : ''}
      </header>
      ${toc}
      ${html ? `<div class="prose">${html}</div>` : ''}
    </article>
  </main>`;
}

async function writePage(path, html) {
  const folder = new URL(`.${path}`, dist);
  await mkdir(folder, { recursive: true });
  await writeFile(new URL('index.html', folder), html);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const asset of ['styles.css', 'main.js', 'favicon.svg']) {
  await copyFile(new URL(`site/${asset}`, root), new URL(asset, dist));
}
await cp(new URL('knowledge-base/paper-images/', root), new URL('paper-images/', dist), { recursive: true });
for (const [lang, t] of Object.entries(locales)) {
  await writePage(route(t), layout(lang, null, home(lang)));
  for (const article of articles) {
    await writePage(route(t, article), layout(lang, article, await articlePage(lang, article)));
  }
}
console.log(`Built ${(articles.length + 1) * Object.keys(locales).length} pages in dist/`);
