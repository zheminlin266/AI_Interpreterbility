// Snapshot of the workbook's 机构 and 个人 sheets. Keep these entries in sync when updating the workbook.
export const trackingCheckedOn = '2026-11-26';

export const tracking = {
  organizations: [
    {
      name: 'Anthropic',
      zh: {
        role: 'Interpretability Team',
        focus: '用稀疏自编码器识别模型特征；用回路追踪和归因图研究 Claude 如何完成具体任务。',
        evidence: 'Transformer Circuits 首页自述为团队研究发布页，有按日期归档的论文和更新。',
      },
      en: {
        role: 'Interpretability Team',
        focus: 'Uses sparse autoencoders to identify model features, and circuit tracing and attribution graphs to study how Claude performs specific tasks.',
        evidence: 'The Transformer Circuits homepage describes itself as the team’s research publication page and archives papers and updates by date.',
      },
      links: [
        ['https://transformer-circuits.pub/', 'Transformer Circuits Thread'],
        ['https://www.anthropic.com/research/team/interpretability', 'Anthropic team page', 'Anthropic 团队官网'],
        ['https://www.anthropic.com/research/tracing-thoughts-language-model', 'Tracing the thoughts of a large language model'],
      ],
    },
    {
      name: 'Google DeepMind',
      zh: {
        role: 'Language Model Interpretability Team（官方成果署名）',
        focus: '用稀疏自编码器拆解 Gemma 的层内表征；用转码器追踪跨层、多步计算。',
        evidence: 'Gemma Scope 是官方项目页，不是独立团队主页；Gemma Scope 2 公告署名为 Language Model Interpretability Team（2025-12-19）。',
      },
      en: {
        role: 'Language Model Interpretability Team (as credited)',
        focus: 'Uses sparse autoencoders to decompose Gemma’s representations within layers, and transcoders to trace multi-step computation across layers.',
        evidence: 'Gemma Scope is an official project page, not a standalone team homepage. The Gemma Scope 2 announcement credits the Language Model Interpretability Team (2025-12-19).',
      },
      links: [
        ['https://deepmind.google/models/gemma/gemma-scope/', 'Gemma Scope project page', 'Gemma Scope 官方项目页'],
        ['https://deepmind.google/blog/gemma-scope-2-helping-the-ai-safety-community-deepen-understanding-of-complex-language-model-behavior/', 'Gemma Scope 2 · Team credit', 'Gemma Scope 2 · 团队署名'],
        ['https://deepmind.google/research/publications/', 'DeepMind publications index', 'DeepMind 论文总索引'],
      ],
    },
    {
      name: 'Goodfire',
      zh: {
        role: 'Goodfire 研究团队（公司层级）',
        focus: '研究神经元如何参与模型计算、内部表征的几何结构，以及能否利用内部表征监测或调整模型行为。',
        evidence: 'Research 页按 Neuron Interpretability、Neural Geometry、Mechanistic Alignment 等主题分类，不视为正式组名。',
      },
      en: {
        role: 'Goodfire research team (company level)',
        focus: 'Studies how neurons participate in computations, the geometry of internal representations, and whether those representations can help monitor or steer model behavior.',
        evidence: 'The Research page lists themes such as Neuron Interpretability, Neural Geometry, and Mechanistic Alignment. These are not treated as formal group names.',
      },
      links: [
        ['https://www.goodfire.com/research', 'Goodfire Research'],
        ['https://www.goodfire.com/company', 'Goodfire · Company and team', 'Goodfire · 公司与团队'],
        ['https://www.goodfire.com/research/neurons-as-an-interpretable-basis', 'Neurons as an Interpretable Basis'],
      ],
    },
    {
      name: 'OpenAI',
      zh: {
        role: 'Interpretability Team（Alignment 招聘页用语）',
        focus: '用稀疏自编码器分解 GPT‑4 的内部表征；探索能否直接训练出更易追踪的稀疏计算回路。',
        evidence: '团队职责见招聘页 About the Team；Research Index 是公司级索引。表征分解见该索引的 Extracting concepts from GPT‑4（2024-06-06）。',
      },
      en: {
        role: 'Interpretability Team (Alignment job listing)',
        focus: 'Uses sparse autoencoders to decompose GPT‑4’s internal representations and explores training models with sparse circuits that are easier to trace.',
        evidence: 'See About the Team in the job listing for team responsibilities. The Research Index is company-wide and includes Extracting concepts from GPT‑4 (2024-06-06).',
      },
      links: [
        ['https://openai.com/research/index/', 'OpenAI Research Index'],
        ['https://openai.com/careers/researcher-alignment-interpretability-san-francisco/', 'Alignment Interpretability · Team responsibilities', 'Alignment Interpretability · 团队职责'],
        ['https://openai.com/index/understanding-neural-networks-through-sparse-circuits/', 'Understanding neural networks through sparse circuits'],
      ],
    },
  ],
  researchers: [
    {
      name: 'Chris Olah',
      zh: {
        role: 'Anthropic 联合创始人；带领研究模型内部结构的团队',
        focus: '逆向工程神经网络：理解 Transformer 注意力头怎样组合成回路、归纳头怎样支持上下文学习。',
        evidence: '2021 年论文作者贡献声明：提出理论框架的基础思想、发现归纳头，并与 Neel Nanda 共同分析玩具模型。',
      },
      en: {
        role: 'Anthropic co-founder; leads a team studying model internals',
        focus: 'Reverse-engineers neural networks to understand how Transformer attention heads form circuits and how induction heads support in-context learning.',
        evidence: 'The 2021 author-contributions statement credits Olah with the core ideas of the framework, discovering induction heads, and analyzing toy models with Neel Nanda.',
      },
      links: [
        ['https://colah.github.io/about.html', 'Chris Olah’s personal site', 'colah 的个人主页'],
        ['https://transformer-circuits.pub/', 'Transformer Circuits Thread'],
        ['https://www.anthropic.com/news/chris-olah-pope-leo-encyclical', 'Anthropic · Olah’s remarks', 'Anthropic 官网 · Olah 发言'],
        ['https://transformer-circuits.pub/2021/framework/index.html#author-contributions', 'Transformer Circuits · Author contributions', 'Transformer Circuits · 作者贡献'],
      ],
    },
    {
      name: 'Neel Nanda',
      zh: {
        role: 'Google DeepMind · 机制可解释性团队负责人（本人及 MATS 公开资料）',
        focus: '逆向工程模型内部计算；近期更关注用内部信号理解异常行为、监测已部署模型。',
        evidence: '2023 年以独立研究者身份担任模加法 grokking 论文第一兼通讯作者，研究小型 Transformer 学到的算法；个人主页列出其创建的 TransformerLens。',
      },
      en: {
        role: 'Google DeepMind mechanistic interpretability team lead (personal site and MATS)',
        focus: 'Reverse-engineers model computations, with a more recent focus on using internal signals to understand unusual behavior and monitor deployed models.',
        evidence: 'As an independent researcher in 2023, Nanda was first and corresponding author of the modular addition grokking paper on an algorithm learned by a small Transformer. His personal site lists TransformerLens as a project he created.',
      },
      links: [
        ['https://www.neelnanda.io/about', 'Neel Nanda’s personal site', 'Neel Nanda · 个人主页'],
        ['https://deepmind.google/models/gemma/gemma-scope/', 'Gemma Scope project page', 'Gemma Scope 官方项目页'],
        ['https://www.matsprogram.org/stream/nanda', 'MATS Winter 2027 · Role and research', 'MATS 2027 冬季 · 角色与方向'],
        ['https://arxiv.org/html/2301.05217v3#S4', 'Modular addition grokking · Paper', '模加法 grokking · 论文原文'],
      ],
    },
  ],
};