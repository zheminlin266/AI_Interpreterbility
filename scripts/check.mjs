import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import { articles, locales } from '../site/content.mjs';
import { tracking, trackingCheckedOn } from '../site/tracking.mjs';

const dist = new URL('../dist/', import.meta.url);
const md = new MarkdownIt().use(footnote);
const origin = 'https://aiinterpretability.zhemin.ltd';
const pages = new Map();
const assets = ['favicon.svg', 'main.js', 'styles.css'];
const expected = [...assets];
const paperAssets = await readdir(new URL('../knowledge-base/paper-images/', import.meta.url), { recursive: true });
for (const name of paperAssets.filter(name => name.endsWith('.webp'))) {
  const path = `paper-images/${name.replaceAll('\\', '/')}`;
  assets.push(path);
  expected.push(path);
}

for (const [lang, locale] of Object.entries(locales)) {
  for (const article of [null, ...articles]) {
    const suffix = article ? `/articles/${article.slug}/` : '/';
    const path = locale.prefix + suffix;
    const file = path.slice(1) + 'index.html';
    const html = await readFile(new URL(file, dist), 'utf8');
    expected.push(file);
    pages.set(path, html);
    assert.ok(html.includes(`<html lang="${locale.lang}">`), path);
    assert.ok(html.includes(`<link rel="canonical" href="${origin}${path}">`), path);
    assert.equal([...html.matchAll(/<h1(?:[ >])/g)].length, 1, path);
    if (!article) {
      assert.doesNotMatch(html, /全文译稿|id="(?:reading|outlook)-title"/, `${path}: removed homepage content`);
      const section = html.match(/<section id="tracking"[^>]*>([\s\S]*?)<\/section>/)?.[1];
      assert.ok(section?.includes(`<h2 id="tracking-title">${locale.tracking}</h2>`), `${path}: missing tracking section`);
      assert.ok(section.includes(`datetime="${trackingCheckedOn}"`), `${path}: missing verification date`);
      for (const entry of Object.values(tracking).flat()) {
        assert.ok(section.includes(`<h4>${md.utils.escapeHtml(entry.name)}</h4>`), `${path}: missing ${entry.name}`);
        for (const [url] of entry.links) assert.ok(section.includes(`href="${md.utils.escapeHtml(url)}"`), `${path}: missing ${url}`);
      }
    }
    for (const l of Object.values(locales)) {
      assert.ok(html.includes(`hreflang="${l.lang}" href="${origin}${l.prefix}${suffix}"`), path);
    }
    const alternate = locales[lang === 'zh' ? 'en' : 'zh'];
    assert.equal([...html.matchAll(/<a class="language-button"/g)].length, 1, path);
    assert.ok(html.includes(`class="language-button" href="${alternate.prefix}${suffix}" hreflang="${alternate.lang}" aria-label="${locale.switchLanguage}"><span lang="${alternate.lang}">${alternate.label}</span>`), path);
    if (article && (article[lang].file || article[lang].markdown)) {
      const toc = html.match(/<aside class="toc"[^>]*>\s*<button[^>]+aria-controls="toc-nav" aria-expanded="true"[^>]*>.*?<\/button>\s*<nav class="toc-nav" id="toc-nav"[^>]*>([\s\S]*?)<\/nav>\s*<\/aside>/)?.[1];
      assert.ok(toc, `${path}: missing Agora-style collapsible contents`);
      const anchors = [...toc.matchAll(/href="#([^"]+)"/g)].map(([, id]) => id);
      const headings = [...html.matchAll(/<h[2-6] id="([^"]+)"/g)].map(([, id]) => id);
      assert.ok(headings.length, `${path}: missing section headings`);
      assert.deepEqual(anchors, headings, `${path}: contents must cover every section in order`);
      if (article[lang].file) {
        const source = await readFile(new URL(`../knowledge-base/${article[lang].file}`, import.meta.url), 'utf8');
        const rendered = html.match(/<div class="prose">([\s\S]*?)<\/div>\s*<\/article>/)?.[1];
        if (article[lang].file.endsWith('.html')) {
          assert.equal(rendered, source, `${path}: incomplete full translation`);
          const primer = article.slug === 'transformer-inner-workings-primer';
          assert.ok(html.includes('机器辅助全文翻译'), `${path}: missing translation disclosure`);
          for (const id of primer ? ['S1', 'S7', 'bib', 'A1', 'A4'] : ['summary-of-results', 'related-work', 'appendices', 'paper-references']) {
            assert.ok(headings.includes(id), `${path}: missing original section ${id}`);
          }
          assert.equal([...source.matchAll(/<math\b/g)].length, primer ? 395 : 283, `${path}: missing mathematics`);
          assert.equal([...source.matchAll(/<img\b/g)].length, primer ? 16 : 28, `${path}: missing figures`);
          assert.doesNotMatch(source, /<(?:script|iframe|object|embed|form|link|meta)\b|\son\w+\s*=|(?:href|src)="\s*(?:javascript|vbscript|data):|ZXQ\s*\d+\s*QXZ/i, `${path}: unexpected imported markup`);
          continue;
        }
        const body = rendered?.replace(/(<h[2-6]) id="[^"]+"/g, '$1');
        const normalized = body?.replace(/<div class="table-scroll"[^>]*><table>/g, '<table>').replaceAll('</table></div>', '</table>');
        const legacyAnchors = /^<a name="([A-Za-z0-9_]+)"><\/a>\r?$/gm;
        for (const [, id] of source.matchAll(legacyAnchors)) assert.ok(headings.includes(id), `${path}: missing legacy anchor ${id}`);
        assert.equal(normalized, md.render(source.replace(legacyAnchors, '')).replace(/^<h1>.*?<\/h1>\n/, ''), `${path}: incomplete Markdown body`);
      }
    } else if (article) {
      assert.ok(article.original, `${path}: missing original for link-only page`);
      assert.doesNotMatch(html, /class="(?:toc|prose)"/, `${path}: link-only page must not render a body or contents`);
    }
    if (article?.original) assert.ok(html.includes(`href="${article.original}"`) && html.includes(article.author), path);
  }
}
for (const [path, html] of pages) {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
  assert.equal(new Set(ids).size, ids.length, `${path}: duplicate IDs`);
  for (const [, link] of html.matchAll(/\b(?:href|src)="([/#][^"]*)"/g)) {
    const target = new URL(link, origin + path);
    if (!target.hash && assets.includes(target.pathname.slice(1))) continue;
    const destination = pages.get(target.pathname);
    assert.ok(destination, `${path}: missing page ${link}`);
    if (target.hash) assert.ok(destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${path}: missing anchor ${link}`);
  }
}
const entries = await readdir(dist, { recursive: true, withFileTypes: true });
const files = entries.filter(entry => !entry.isDirectory()).map(entry => relative(fileURLToPath(dist), join(entry.parentPath, entry.name)).replaceAll('\\', '/'));
assert.deepEqual(files.sort(), expected.sort(), 'unexpected deployment files');
console.log(`Checked ${pages.size} pages: locale links, headings, anchors and output files.`);
