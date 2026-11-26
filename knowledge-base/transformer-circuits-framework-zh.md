# Transformer 回路的数学框架：论文阅读笔记

> **原文：** Nelson Elhage 等，*A Mathematical Framework for Transformer Circuits*，*Transformer Circuits Thread*，2021 年 12 月 22 日。署名机构为 Anthropic。[原文](https://transformer-circuits.pub/2021/framework/index.html) · [完整引文与作者名单](https://transformer-circuits.pub/2021/framework/index.html#citation)
>
> **核验状态：** 已核对原文及其勘误；未独立验证或在本仓库复现实验。以下为原创阅读笔记。

## 这篇文章解决什么问题？

如何把 Transformer 的权重和激活拆成可以检查的计算路径，并据此解释一个具体预测行为？作者选用零层、一层和两层的简化模型：主要案例不含 MLP，用来隔离注意力头之间的交互。文章的贡献既有代数分解，也有对具体模型的经验分析；公式可展开，不代表所有项都有简洁的人类解释。[模型简化](https://transformer-circuits.pub/2021/framework/index.html#model-simplifications)

## 三个工具：残差流、路径展开、QK 与 OV

- **残差流是组件的通信通道。** 注意力头把输出加进残差流，下游组件从中读取。把上游输出矩阵与下游输入矩阵相乘，可得到两个组件之间的有效连接，原文称为“虚拟权重”。这能找出一条可能的通信路径；它是否在特定输入上发挥作用，还要看激活和干预结果。[残差流与虚拟权重](https://transformer-circuits.pub/2021/framework/index.html#residual-comms)
- **路径展开把总分数按计算路线拆开。** 零层模型只能把当前 token 的嵌入直接映射到输出分数，近似学习二元词元统计。在一层纯注意力模型中，logit 可以写成直连项 `W_U W_E` 加上各注意力头的贡献。更深的模型还能展开跨头路径。在分解某次前向传播的 OV 路径时，可固定该次运行的注意力模式；这不意味着注意力在不同输入下不变。[零层模型](https://transformer-circuits.pub/2021/framework/index.html#zero-layer-transformers) · [一层模型的路径展开](https://transformer-circuits.pub/2021/framework/index.html#onel-path-expansion)
- **QK 决定去哪里读，OV 决定读到后写什么。** QK 给查询和键打分，当前上下文中的候选位置经 softmax 竞争；OV 变换被读取的内容。在一层模型中，把嵌入和输出映射纳入分析，就能检查类似 `A … B → C` 的跳跃三元组：当前位置 `B` 读取更早的 `A`，从而改变下一 token `C` 的 logit。这些是依赖上下文的分数贡献，不是相互独立的预测概率。[QK 与 OV 分解](https://transformer-circuits.pub/2021/framework/index.html#splitting-attention-head-terms-into-circuits) · [跳跃三元组](https://transformer-circuits.pub/2021/framework/index.html#interpretation-as-skip-trigrams)

## 两层怎样组成归纳头？

下游头可以从上游头的写入构造 **Q、K 或 V**：Q/K 组合会改变注意力的匹配，V 组合会改变选定位置后传递的内容。经典归纳回路使用 K 组合。看到 `A B … A` 时，上一 token 头先把较早的 `A` 写入 `B` 位置；后层归纳头在该位置构造包含 `A` 信息的键。末尾 `A` 的查询由此匹配到 `B` 的位置，归纳头的 OV 路径再提高输出 `B` 的分数。这比一层模型仅凭当前 token 和较早 token 的组合进行复制多用了一步：**找到先前的匹配，再取它后面的 token**。[三种组合](https://transformer-circuits.pub/2021/framework/index.html#three-kinds-of-composition) · [归纳头机制](https://transformer-circuits.pub/2021/framework/index.html#how-induction-heads-work)

## 证据支持到哪里？

- **权重分析支持候选机制。** 作者用特征值统计量检查候选归纳头的 QK 匹配和 OV 复制特性，并明确把它当作工作指标。单凭注意力图或一个矩阵统计量，不能确认完整算法。[机制检验](https://transformer-circuits.pub/2021/framework/index.html#checking-the-mechanistic-theory)
- **消融有明确的条件。** 作者固定实际运行中的注意力模式，再比较不同路径阶数对损失的边际影响。被分析的两层模型中，二阶 OV 路径的边际影响较小。这个结果针对 V 组合，不排除 Q/K 组合，也不能推广到更深模型。[路径项重要性分析](https://transformer-circuits.pub/2021/framework/index.html#term-importance-analysis)
- **读原图时对照勘误。** 原组合图因底层库错误地重排矩阵乘积来计算 Frobenius 范数，漏掉了一些组合。修正后，上一 token 头的 K 组合仍然重要，同时有两个归纳头还与一个读取前面多个 token 的头发生组合。最小双头机制不应被读成唯一实现。[注意力头组合图勘误](https://transformer-circuits.pub/2021/framework/index.html#comment-errata)
- **分解不等于完整理解。** 一层模型即使能展开为词表上的矩阵，仍有大量条目需要归纳；大模型的 MLP、更多交互和跨任务推广也不在这些实验的验证范围内。[一层模型理解到什么程度](https://transformer-circuits.pub/2021/framework/index.html#do-we-fully-understand-one-layer-models) · [适用范围](https://transformer-circuits.pub/2021/framework/index.html#where-does-this-leave-us)

## 团队与贡献

据原文贡献声明，Nelson Elhage、Catherine Olsson、Neel Nanda 和 Chris Olah 共同发展框架。声明列出的贡献例子包括：Elhage 找到启发残差流通信视角的证据；Olsson 细致刻画神经元和注意力头；Nanda 推进了对注意力头组合的理解；Olah 提出框架的基础想法并发现归纳头。这些是该项目发表时记录的贡献，不是排他的分工，也不代表作者当前归属。[作者贡献声明](https://transformer-circuits.pub/2021/framework/index.html#author-contributions)

建议先读一层模型的 QK/OV 分解，再读两层归纳头和勘误。作为配套阅读，[Transformer 语言模型的内部机制：论文阅读笔记](/articles/transformer-inner-workings-primer/) 把这篇原始工作放回更广的归因、干预和回路方法中。
