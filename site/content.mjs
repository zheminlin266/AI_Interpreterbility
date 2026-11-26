const original = 'https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher';
const authorUrl = 'https://www.alignmentforum.org/users/neel-nanda-1';

export const locales = {
  zh: {
    lang: 'zh-CN', label: '文', switchLanguage: '切换到英文', prefix: '',
    name: 'AI 可解释性知识库',
    intro: '从一次预测的输入归因，到语言模型内部的因果干预。这里用中英双语整理研究方法、入门材料和原始证据。',
    library: '文章', reading: '推荐阅读',
    readingNote: '先用方法综述分清不同工具能支持什么结论，再读 Neel Nanda 的指南，挑一个能快速检验的小问题动手。',
    readingLink: '打开研究入门导读', next: '接下来关注什么',
    nextNote: '后续将跟踪哪些团队在做这类研究、研究者各自探索什么问题，以及公开证据能确认他们对哪些具体成果作出了贡献。',
    nav: '主导航', skip: '跳到正文', theme: '切换深浅色', toc: '本页目录', back: '返回文章索引',
    footer: 'AI 可解释性 · 双语研究知识库', readOriginal: '在 Alignment Forum 阅读英文原文',
    sourceLabel: '原文作者', sourceDate: '原文发表于 2025 年 9 月 2 日',
  },
  en: {
    lang: 'en', label: 'EN', switchLanguage: 'Switch to Chinese', prefix: '/en',
    name: 'AI Interpretability',
    intro: 'From attributing a prediction to intervening in a language model. A bilingual knowledge base for research methods, getting started, and finding the original evidence.',
    library: 'Articles', reading: 'Suggested reading',
    readingNote: 'Use the methods survey to see what each tool can tell you. Then read Neel Nanda’s guide and pick a small question you can test quickly.',
    readingLink: 'Open the research guide', next: 'What we’ll follow next',
    nextNote: 'We plan to track the teams doing this work, the questions individual researchers investigate, and which contributions to specific results the public evidence supports.',
    nav: 'Main navigation', skip: 'Skip to content', theme: 'Toggle light or dark theme', toc: 'On this page', back: 'Back to articles',
    footer: 'AI Interpretability · Bilingual research knowledge base', readOriginal: 'Read the original on Alignment Forum',
    sourceLabel: 'Original author', sourceDate: 'Original published September 2, 2025',
  },
};

export const articles = [
  {
    slug: 'ai-interpretability-methods',
    zh: {
      title: '现在做 AI 可解释性的主流方法是什么？',
      type: '方法综述',
      description: '六类常用方法各能回答什么？从输入归因到回路分析，区分相关信号、因果干预和机制证据。',
      file: 'ai-interpretability-methods.md',
    },
    en: {
      title: 'What Are the Main Methods in AI Interpretability Today?',
      type: 'Methods survey',
      description: 'Six families of methods, from input attribution to circuit analysis, and what each can tell us about correlation, causation, and mechanisms.',
      file: 'ai-interpretability-methods-en.md',
    },
  },
  {
    slug: 'mechanistic-interpretability-research-guide', original, author: 'Neel Nanda', authorUrl,
    zh: {
      title: '如何成为机制可解释性研究者：阅读导读',
      type: '原文导读',
      description: 'Neel Nanda 怎样安排从基础学习、小型实验到完整项目的过渡？这份导读帮你选出下一步。',
      markdown: `这是一份站内导读。Neel Nanda 的原文提供分阶段建议、练习思路和例子；文中的时间安排反映作者的经验，可以按自己的背景和反馈调整。

## 先学到能开始做实验

挑一个小型 Transformer，试着用 [ARENA 的可解释性教程](https://arena-chapter1-transformer-interp.streamlit.app/) 跑通一次实验。重点是能看懂激活、能改实验条件并读出结果。遇到具体知识缺口，再回头补线性代数、PyTorch 或架构背景。

## 用小项目练习快速验证

给自己几天，选一个范围明确的问题。先用探索实验找线索，再写下哪个结果会推翻自己的猜测。比如某次消融改变了输出，可以试试它是否也在另一组输入上改变同一行为，并和无关组件的干预结果比较。

## 从短实验过渡到完整项目

挑最有进展的小项目，再用一到两周检验它。写清比较基线、对照、未成功的实验和结论适用范围。作者也讨论了如何获取反馈、找导师，以及怎样把研究写成其他人看得懂的公开成果。

还不熟悉探针、消融或回路分析？可以先看[方法综述](/articles/ai-interpretability-methods/)，弄清不同工具能给出哪一级证据，再回到指南挑练习。`,
    },
    en: {
      title: 'How to Become a Mechanistic Interpretability Researcher: Reading Guide',
      type: 'Reading guide',
      description: 'How does Neel Nanda suggest moving from the basics to mini-projects and then to full research projects? Find a practical next step.',
      markdown: `This is an editorial reading guide to Neel Nanda’s original article, which offers advice, exercises, and examples for each stage. Its suggested timelines reflect the author’s experience; adapt them to your background and feedback.

## Learn enough to run an experiment

Pick a small Transformer and run one experiment with the [ARENA interpretability tutorials](https://arena-chapter1-transformer-interp.streamlit.app/). Aim to inspect activations, change an experimental condition, and read the result. Fill gaps in linear algebra, PyTorch, or model architecture as they come up.

## Get fast feedback from mini-projects

Give yourself a few days and pick a narrow question. Explore first, then write down what would disprove your hunch. If an ablation changes the output, for example, check whether it changes the same behavior on a second set of inputs and compare it with an intervention on an unrelated component.

## Develop a short experiment into a full project

Take the most promising mini-project and spend another week or two testing it. Document the baseline, controls, failed experiments, and where the conclusions apply. Nanda also discusses getting feedback, finding mentors, and writing up work so other people can understand it.

Unfamiliar with probes, ablation, or circuit analysis? Start with the [methods survey](/en/articles/ai-interpretability-methods/) to see what each tool can establish, then return here to pick an exercise.`,
    },
  },
];
