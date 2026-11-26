# AI 可解释性知识库

中英双语静态站点，目标域名为 <https://aiinterpretability.zhemin.ltd/>。中文首页位于 `/`，英文首页位于 `/en/`，两种语言的文章可以分别分享。

## 本地运行

需要 Node.js 22 或更新版本。

```sh
npm ci
npm test
npx --yes serve dist --listen tcp://127.0.0.1:4173
```

访问 <http://127.0.0.1:4173/>。修改内容后运行 `npm run build` 重新生成 `dist/`。

## 内容维护

- `site/content.mjs` 管理双语导航、首页文案、文章元数据和短导读。新增文章时添加唯一的 URL `slug`，提供 `zh` 和 `en` 的标题、摘要及内容。`file` 读取 `knowledge-base/` 中指定的 Markdown，短文可直接用 `markdown`。
- Markdown 首行可写一级标题；页面标题来自元数据。用二级及以下标题组织正文和目录，支持表格及标准 Markdown 脚注（`[^1]` 与 `[^1]: ...`）。引用应尽量链接到原文的具体位置。
- 方法综述发布中英文全文。Neel Nanda 的指南只发布原创双语导读、署名和原文链接；仓库中的中文全文译稿不进入构建，待确认公开转载许可后再调整。

## 部署

1. Git 部署：将 Vercel 项目关联到 GitHub 仓库，生产分支选 `main`。根目录的 `vercel.json` 指定 `npm ci`、`npm run build` 和 `dist/`，只发布构建产物。
   手动部署：运行 `npm ci` 和 `npm test`，将 **`dist/` 的内容**复制到独立空目录，在该目录执行 `vercel deploy --prod`。不要从工作区根目录手动部署；工作簿的本地修改不应进入站点提交。
2. 验证 Vercel 默认地址的六个页面，再在项目 Settings → Domains 添加 `aiinterpretability.zhemin.ltd`。仅在腾讯云 DNSPod 添加 Vercel 显示的目标 CNAME，以及控制台确实要求的验证记录。不要沿用其他子域的记录。
3. 等待 Vercel 域名和证书状态正常，再确认公开 DNS、HTTPS 及双语页面响应。腾讯云 CDN 不属于直连配置；只有在确认接入权限、备案（如适用）、证书、HTTPS 回源和费用无问题，并实测通过后，才考虑切换。
