import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { articles, locales } from '../site/content.mjs';

const dist = new URL('../dist/', import.meta.url);
const origin = 'https://aiinterpretability.zhemin.ltd';
const pages = new Map();
const assets = ['favicon.svg', 'main.js', 'styles.css'];
const expected = [...assets];

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
    for (const l of Object.values(locales)) {
      assert.ok(html.includes(`hreflang="${l.lang}" href="${origin}${l.prefix}${suffix}"`), path);
    }
    const alternate = locales[lang === 'zh' ? 'en' : 'zh'];
    assert.equal([...html.matchAll(/<a class="language-button"/g)].length, 1, path);
    assert.ok(html.includes(`class="language-button" href="${alternate.prefix}${suffix}" hreflang="${alternate.lang}" aria-label="${locale.switchLanguage}"><span lang="${alternate.lang}">${alternate.label}</span>`), path);
    if (article) assert.ok(html.includes('class="toc"'), path);
    if (article?.original) assert.ok(html.includes(`href="${article.original}"`) && html.includes(article.author), path);
    if (article?.slug === 'ai-interpretability-methods') assert.equal([...html.matchAll(/<tr>/g)].length, 7, path);
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
const citations = (path) => [...pages.get(path).matchAll(/\bhref="(https:\/\/[^"]+)"/g)].map(([, url]) => url).filter(url => !url.startsWith(origin));
const methodsPath = `/articles/${articles[0].slug}/`;
assert.ok(citations(methodsPath).length > 0);
assert.deepEqual(citations(methodsPath), citations('/en' + methodsPath), 'translated survey must preserve citations');
const entries = await readdir(dist, { recursive: true, withFileTypes: true });
const files = entries.filter(entry => !entry.isDirectory()).map(entry => relative(fileURLToPath(dist), join(entry.parentPath, entry.name)).replaceAll('\\', '/'));
assert.deepEqual(files.sort(), expected.sort(), 'unexpected deployment files');
console.log(`Checked ${pages.size} pages: locale links, headings, anchors, citations and output files.`);
