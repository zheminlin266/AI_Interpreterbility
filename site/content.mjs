const original = 'https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher';
const authorUrl = 'https://www.alignmentforum.org/users/neel-nanda-1';

export const locales = {
  zh: {
    lang: 'zh-CN', label: '文', switchLanguage: '切换到英文', prefix: '',
    name: 'AI 可解释性知识库',
    intro: '从一次预测的输入归因，到语言模型内部的因果干预。这里用中英双语整理研究方法、入门材料和原始证据。',
    library: '文章', libraryTitle: '推荐资料', tracking: '推荐跟踪',
    trackingIntro: '按机构和研究者查找追踪入口、研究方向与贡献证据。',
    organizations: '机构', researchers: '研究者',
    trackingDetails: '成果与来源', contributionDetails: '贡献与来源',
    trackingChecked: '表格核验日期', trackingNote: '已核对原文，未做实验复现。',
    nav: '主导航', skip: '跳到正文', theme: '切换深浅色', toc: '目录', back: '返回文章索引',
    expandToc: '展开文章目录', collapseToc: '收起文章目录',
    footer: 'AI 可解释性 · 双语研究知识库', readOriginal: '在 Alignment Forum 阅读英文原文',
    sourceLabel: '原文作者', sourceDate: '原文发表于 2025 年 9 月 2 日',
  },
  en: {
    lang: 'en', label: 'EN', switchLanguage: 'Switch to Chinese', prefix: '/en',
    name: 'AI Interpretability',
    intro: 'From attributing a prediction to intervening in a language model. A bilingual knowledge base for research methods, getting started, and finding the original evidence.',
    library: 'Articles', libraryTitle: 'Articles', tracking: 'Research to follow',
    trackingIntro: 'Find research updates, areas of focus, and evidence of contributions by organization or researcher.',
    organizations: 'Organizations', researchers: 'Researchers',
    trackingDetails: 'Research and sources', contributionDetails: 'Contributions and sources',
    trackingChecked: 'Sources checked', trackingNote: 'Original sources checked; experiments not reproduced.',
    nav: 'Main navigation', skip: 'Skip to content', theme: 'Toggle light or dark theme', toc: 'On this page', back: 'Back to articles',
    expandToc: 'Expand contents', collapseToc: 'Collapse contents',
    footer: 'AI Interpretability · Bilingual research knowledge base', readOriginal: 'Read the original on Alignment Forum',
    sourceLabel: 'Original author', sourceDate: 'Original published September 2, 2025',
  },
};

export const articles = [
  {
    slug: 'mechanistic-interpretability-research-guide', original, author: 'Neel Nanda', authorUrl,
    zh: {
      title: '如何成为一名机制可解释性研究者',
      type: '中文全文译稿',
      description: 'Neel Nanda 分享如何掌握入门基础、用小型项目练习研究，再逐步过渡到完整项目。',
      file: 'how-to-become-a-mechanistic-interpretability-researcher-zh.md',
    },
    en: {
      title: 'How to Become a Mechanistic Interpretability Researcher',
      type: 'External article',
      description: 'Neel Nanda’s guide to learning the basics, practicing with mini-projects, and working up to full research projects.'
    },
  },
  {
    slug: 'transformer-inner-workings-primer',
    zh: {
      title: 'Transformer 语言模型内部机制入门',
      type: '论文全文译稿',
      description: 'Ferrando 等人对 Transformer 语言模型内部机制的技术综述，含全部正文章节、图表、公式与附录。',
      file: 'transformer-inner-workings-primer-zh.html',
    },
    en: {
      title: 'How Transformer Language Models Work: Paper Notes',
      type: 'Paper notes',
      description: 'A guide to Ferrando et al.’s primer, from residual streams and attention heads to what readouts, interventions, and circuit analysis can establish.',
      file: 'transformer-inner-workings-primer-en.md',
    },
  },
  {
    slug: 'transformer-circuits-framework',
    zh: {
      title: 'Transformer 回路的数学框架',
      type: '论文全文译稿',
      description: 'Anthropic 2021 年回路框架全文，含路径展开、QK 和 OV 分解、归纳头、后续勘误和附录。',
      file: 'transformer-circuits-framework-zh.html',
      guides: [
        {
          anchor: 'introduction', section: '引言',
          title: '引言解读：为什么要逆向工程 Transformer？',
          description: '从「模型答对了」这个例子出发，了解论文在追问什么，以及为什么从小模型开始。',
          file: 'transformer-circuits-framework-guide-introduction-zh.md',
        },
        {
          anchor: 'summary-of-results', section: '结果摘要',
          title: '结果摘要解读：从词对统计到归纳头',
          description: '用三个预测例子比较零层、单层和双层模型，先理解注意力头如何配合，再读公式。',
          file: 'transformer-circuits-framework-guide-summary-of-results-zh.md',
        },
      ],
    },
    en: {
      title: 'A Mathematical Framework for Transformer Circuits: Paper Notes',
      type: 'Paper notes',
      description: 'A guide to Anthropic’s 2021 circuits framework: path expansion, QK and OV circuits, induction heads, and the composition-plot erratum.',
      file: 'transformer-circuits-framework-en.md',
    },
  },
];
