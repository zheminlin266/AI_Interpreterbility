# AI 可解释性知识库

本项目追踪哪些公司在持续开展 AI 可解释性研究、哪些团队负责具体研究方向，以及研究者在解决什么问题、对哪些成果作出了什么贡献。我们从论文、技术报告和开源项目出发，把研究问题、方法、证据和人员贡献联系起来，方便读者从一项成果追溯到相关团队，也能沿一条研究线了解它如何发展。

知识库覆盖从解释单次预测到理解模型内部计算的方法，重点关注大语言模型的机制可解释性：模型内部表征了什么，哪些组件参与了某种行为，以及干预实验能在多大程度上支持这些解释。

## 知识库与阅读入口

| 资料 | 适合用来做什么 |
| --- | --- |
| 如何成为一名机制可解释性研究者：[中文译稿](knowledge-base/how-to-become-a-mechanistic-interpretability-researcher-zh.md) · [Neel Nanda 英文原文](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher) | 了解如何从入门学习和小项目练习，逐步开展独立研究。 |
| Transformer 语言模型内部机制入门：[中文全文](https://aiinterpretability.zhemin.ltd/articles/transformer-inner-workings-primer/) · [English notes](knowledge-base/transformer-inner-workings-primer-en.md) · [arXiv 原文](https://arxiv.org/html/2405.00208v3) | 从残差流、注意力和前馈层入手，了解行为定位、信息解码与已发现的机制。 |
| Transformer 回路的数学框架：[中文全文](https://aiinterpretability.zhemin.ltd/articles/transformer-circuits-framework/) · [English notes](knowledge-base/transformer-circuits-framework-en.md) · [Anthropic 原文](https://transformer-circuits.pub/2021/framework/index.html) | 了解路径展开、QK 与 OV 分解、归纳头及组合图勘误。 |
| [AI 可解释性研究跟踪表](AI可解释性研究跟踪.xlsx) | 按机构、团队、研究者和代表成果查找研究线索。 |

想动手做机制可解释性研究，可以从研究指南入手；想了解某个团队或研究者，可以从跟踪表出发，回到相关论文和项目原文。

站点两篇 Transformer 论文以机器辅助全文译稿发布，原始图、公式、参考文献和附录随文保留。英文页提供阅读笔记与原文链接。

## 如何核验研究信息

- **分开核验机构、团队和个人贡献。** 区分成果发表时的署名单位与当前归属，也区分单次合作与持续研究方向。共同署名不能单独证明谁主导了项目或负责哪部分工作。
- **标明证据来源和核验进度。** 关键结论尽量指向原文的具体章节、图表或贡献声明，并区分仅看摘要、已核对原文、有独立验证和本仓库已复现。公开材料不足时，明确写明尚未确认。
- **区分线索和机制证据。** 能从模型内部读出某个信号，不代表模型使用了它；干预结果也要结合对照实验、替代解释及适用的模型和任务来解读。
