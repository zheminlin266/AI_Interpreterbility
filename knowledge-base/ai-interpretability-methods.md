# 现在做 AI 可解释性的主流方法是什么？

> **资料核验截至 2026-11-26。** 本文聚焦机器学习模型的可解释性，以传统表格模型和大语言模型（LLM）为例。“主流”指有明确研究传统、常作基线或被多个研究团队采用的方法，不是按部署量、论文数或效果排名；近年的探索性方向单列。核验状态：**已核对所引原文，未在本仓库复现实验**。

**简短回答：**解释一次预测，通常从输入归因或反事实入手；如果能决定用什么模型，可以优先评估原生可解释的方案；若要解释 LLM 的内部计算，常用**探针或稀疏特征分解找候选，用激活干预验证，再用回路分析连接多个计算步骤**。这些方法并不互斥。关键是别把“某个信号与答案有关”“模型用到了这个信号”和“我们已经解释了完整机制”当成同一件事。[Sharkey 等，2025，§1.1.1、§2](https://arxiv.org/html/2501.16496v1#S2)

## 方法地图：每类工具能回答什么？

| 方法 | 主要回答的问题与优势 | 局限：不能从结果推出什么 |
| --- | --- | --- |
| **原生可解释模型**：稀疏线性模型、浅决策树、广义加性模型（GAM/EBM） | “模型按什么规则打分？”规则或加性项就是模型计算的一部分，不需再用另一个模型近似。适合作为结构化数据任务的基线。 | 可读性取决于输入特征、人能理解的交互数量及模型规模；模型规则不是现实因果规律。应在同一数据和指标上比较性能，而非预设它一定输给黑箱。见 [Rudin，2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC9122117/) 与 [InterpretML 的 EBM 文档](https://interpret.ml/docs/ebm.html)。 |
| **输入归因、局部代理与显著图**：LIME、SHAP、Integrated Gradients（IG） | “哪些输入推动了这次预测？”LIME 在样本附近拟合简单代理；SHAP 按所定义的背景分布和缺失特征处理分摊预测差值；IG 沿基线到输入的路径积分梯度。可快速定位值得检查的字段、词或图像区域。 | LIME 依赖扰动和邻域定义；SHAP 的结果受背景数据及相关特征处理影响；IG 依赖基线和路径，且需要梯度访问。热图好看不代表忠实，更不说明中间计算；有些显著图在模型参数随机化后仍相似。见 [LIME，§3](https://ar5iv.labs.arxiv.org/html/1602.04938)、[SHAP，§4](https://ar5iv.labs.arxiv.org/html/1705.07874#S4)、[IG，§3–4](https://ar5iv.labs.arxiv.org/html/1703.01365)、[Adebayo 等的随机化检验](https://ar5iv.labs.arxiv.org/html/1810.03292)。 |
| **输入反事实**：寻找能改变预测的替代输入 | “输入怎么变，模型才会改判？”相比重要性排名，更直接地展示决策边界附近的变化；也可给出多条可能路径。 | 数学上接近的输入未必现实可达，变量可能不可改或互相依赖。让模型改判不等于现实结果会改变，也不揭示决策的全部机制。见 [Mothilal 等，2020，§3、§6](https://ar5iv.labs.arxiv.org/html/1905.07697#S6)。 |
| **概念探针（probing）**：在冻结模型的隐藏状态上训练读出器 | “概念 X 能否从某层读出来？”有明确目标概念与标签时，可快速比较层、位置和模型，给后续干预缩小搜索范围。 | **读得出来 ≠ 原模型用了它。** 高分也可能来自标签捷径、词身份或探针自身记忆。应与输入基线、随机标签或合适的控制任务比较，并通过独立干预检验是否被用到。见 [Hewitt 与 Liang，2019，§2–3](https://ar5iv.labs.arxiv.org/html/1909.03368#S2)、[Sharkey 等，§2.2.3](https://arxiv.org/html/2501.16496v1#S2.SS2.SSS3)。 |
| **表征分解**：稀疏自编码器（SAE）等 | “激活里有哪些反复出现的模式？”SAE 在不预设概念标签的情况下学习稀疏特征，用少数活跃方向近似重建每次内部激活；研究者可据此寻找、标注和测试候选特征。见 [OpenAI 的 GPT‑4 SAE 研究](https://openai.com/index/extracting-concepts-from-gpt-4/)、[Google DeepMind 的 Gemma Scope](https://deepmind.google/models/gemma/gemma-scope/)。 | 字典是学出来的，不是模型真实概念的唯一清单。一个概念可分裂成多个特征，也可能被其他特征吸收；重建误差会漏掉有用信号。**同等稀疏度下重建得更好，也不一定在下游解释任务上表现更好。** 见 [Karvonen 等，2025，SAEBench §3–5](https://arxiv.org/html/2503.09532v4#S4)。 |
| **因果干预与回路分析**：消融、激活替换（activation patching）、回路追踪 | “改动某个内部状态，行为会怎样变？哪些组件共同实现了这个行为？”可以将对照样本的激活换进目标运行、移除组件或只保留候选回路，再看目标输出是否随之改变。相比相关性，它能检验具体的机制假设。 | 因果结论限于指定干预、模型和任务。对照样本、替换方式及指标可能改变结果；极端改动可能把模型推到不自然状态。一个小回路能保住表现，并不证明它是唯一回路，更不能覆盖其他任务。见 [Zhang 与 Nanda，§3–6](https://arxiv.org/html/2309.16042v2#S6)、[Conmy 等的自动回路发现（ACDC）](https://arxiv.org/html/2304.14997)。 |

## LLM 前沿：三个值得跟踪、但还不能当成通解的方向

- **从“表示了什么”到“怎么计算”。** SAE 通常重建同一位置的激活；转码器（transcoder）则用稀疏特征从组件输入近似其输出，跨层变体可近似多层的 MLP 计算。Anthropic 用这些近似建归因图，提出 Claude 3.5 Haiku 如何做两步事实推理等假设，再回到原模型做干预。**归因图来自局部替代模型，不是原模型执行日志。** Goodfire 在 GPT‑2 Small 的大小比较任务上用相同思路找回相关特征，但与此前直接分析所得机制有差异；两项研究共同说明它有诊断价值，也说明不能拿图本身当证明。[Ameisen 等，2025，方法与忠实度限制](https://transformer-circuits.pub/2025/attribution-graphs/methods.html#limitations-faithfulness)；[Lindsey 等，2025，两步推理案例](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-tracing)；[Goodfire，2025，独立团队的跨任务检验与局限](https://www.goodfire.com/research/replicating-circuit-tracing-for-a-simple-mechanism#limitations-and-future-work)。
- **到底该解释哪些计算单元？** 稀疏字典并非唯一选择。Goodfire 在 Qwen3.6-35B-A3B 上报告，经筛选和检验，原始 MLP 神经元也能提供可读的解释线索；这是特定模型上的证据，不等于每个神经元都只有一个功能，也不等于能替代 SAE。另一条路线是改变训练：OpenAI 通过限制权重连接，让研究中的模型在简单任务上形成更容易拆解的回路；这里的稀疏性属于**原模型的权重**，不同于给已有模型训练一个**激活** SAE。能力、训练效率和向前沿模型推广仍有限制。[Tigges 等，Goodfire，2026](https://www.goodfire.com/research/neurons-as-an-interpretable-basis)；[Gao 等，OpenAI，2025，§3、§5](https://arxiv.org/html/2511.13653#S5)。
- **把内部激活翻译成自然语言。** Anthropic 的自然语言自编码器（NLA）把激活编码成文本、再由文本重建激活。它让人更快读懂候选线索，但训练目标不是陈述真实性；作者报告了捏造细节、难以定位具体内部机制和成本等局限。它也不同于模型直接输出的思维链（CoT）：后者是可观测文本，在对照实验中可能遗漏改变答案的提示，所以适合作为审计线索，而不是完整的内部过程记录。[Fraser-Taliente 等，2026，Introduction / Limitations](https://transformer-circuits.pub/2026/nla/index.html)；[Turpin 等，2023，§3–4](https://ar5iv.labs.arxiv.org/html/2305.04388)；[Anthropic，2025，Testing for faithfulness / Conclusions](https://www.anthropic.com/research/reasoning-models-dont-say-think)。

## 读一篇可解释性论文，先问四个问题

1. **到底想解释什么？** 写明模型版本、行为、输入分布、输出指标，以及解释的是单次预测、统计规律还是内部算法。仅有 API 输出时，通常先做输入对照；无法读写激活时，不把行为结果写成内部机制证据。
2. **证据到了哪一步？** 从“能预测”起步；再检验“改变候选因素，行为是否按预期变”；若声称找到回路，再问“移除它会否破坏行为、只保留它能否复现行为、有没有替代路径”。把这些检验的条件写在结论里。
3. **有没有能推翻解释的对照？** 改变归因基线、提示措辞、激活替换方式或输出指标，比较简单基线与不相关组件，并用留出样本检查效果与副作用。对照结果不一致时，保留差异而不是挑出最漂亮的图。[Zhang 与 Nanda，§6](https://arxiv.org/html/2309.16042v2#S6)；[SAEBench，§3.5](https://arxiv.org/html/2503.09532v4#S3.SS5)。
4. **结论能推广到哪里？** 一个模型、一种提示或一个成功案例，只支持相应范围的结论；另报失败案例、未解释的输出贡献和跨任务或跨模型表现。论文作者自测、其他团队对照检查、自己复现是三件事。[Lindsey 等，Limitations](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#limitations)。
