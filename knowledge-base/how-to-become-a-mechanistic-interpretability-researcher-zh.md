# 如何成为一名 Mechanistic Interpretability 研究者

- 作者：[Neel Nanda](https://www.alignmentforum.org/users/neel-nanda-1?from=post_header)
- 原文：[How To Become A Mechanistic Interpretability Researcher](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher)，发表于 2025 年 9 月 2 日
- 译注：正文以作者第一人称呈现，专业术语保留英文。文中的招募状态、模型评价和研究建议反映原文写作时点。

*原文标注最后更新于 2025 年 9 月 2 日。*

*注：如果你想在这类研究上发展职业生涯，欢迎申请我负责的 MATS 方向！目前尚未开放申请，[可在这里登记接收通知](https://neelnanda.io/mats-notifications)。*

<a name="TL_DR"></a>

## 要点速览（TL;DR）

- 这篇文章讲的是，如果你想真正**做** mechanistic interpretability 研究，我推荐怎样的心态和流程。我希望给你一个明确的方向，因此会给出立场鲜明的建议和具体做法。
  - Mech interp 是一个能以较小投入产生较大影响的领域。它的反馈周期短，对算力的要求不高，可以自学。
  - **学会最低限度的基础知识，然后开始做研究。** Mech interp 是一门实证科学。
- 三个阶段：
  - [**掌握入门基础**](#Stage_1__Learning_the_Ropes) **（不超过一个月）**：掌握必需知识，先求广度。
  - [**用小型研究项目学习**](#Stage_2__Practicing_Research_with_Mini_Projects)：每个项目做 1–5 天，练习基本研究技能，尤其是反馈快的技能。
  - [**逐步过渡到完整项目**](#Stage_3__Working_Up_To_Full_Research_Projects)：每次集中研究 1–2 周，继续推进最有希望的项目。培养更深层的技能，并理解优秀研究者的思考方式。
- [**阶段一：**](#Stage_1__Learning_the_Ropes) **掌握入门基础**
  - **广度优先于深度；基础够用就好，不必追求完美。**
  - **学习基础知识**：[从零实现 Transformer](#Machine_Learning___Transformer_Basics)、[关键的 mech interp 技术](#Mechanistic_Interpretability_Techniques)、[领域全貌](#Using_LLMs_for_Learning)、[linear algebra 直觉](#Machine_Learning___Transformer_Basics)，以及[怎么写 mech interp 代码](#Mechanistic_Interpretability_Coding___Tooling)（[ARENA 能帮上忙](https://arena-chapter1-transformer-interp.streamlit.app/)）。
  - **亲自动手**：别只看资料。Mech interp 本质上是一门实证科学。
  - **一个月后进入下一阶段。** 不要期待自己觉得「全学完了」，也别指望入门知识面面俱到。有需要再补学。如果不开始做点实际的东西，就很难碰到有价值的研究洞见。
  - [**多用 LLM**](#Using_LLMs_for_Learning)：它们并不完美，但现在比你懂 mech interp！用对方法，它们就是非常重要的学习工具。
- [**拆解研究流程**](#The_Big_Picture__Learning_the_Craft_of_Research)：
  - 研究涉及[许多技能](#Unpacking_the_Research_Process)，可以按反馈周期分类。
    - 快（几分钟到几小时）：比如编写、运行和调试实验。
    - 慢（几周）：比如怎样排优先级，何时转向。
    - 很慢（几个月）：比如提出好的研究点子。
  - **不要试图同时学会所有技能。** 先专注于反馈快或中等的技能，再慢慢扩展。
  - [研究的四个阶段](https://www.alignmentforum.org/posts/hjMy4ZxS5ogA9cTYK/how-i-think-about-my-research-process-explore-understand)：寻找研究点子（**ideation**）→ 建立直觉和初步猜测（**exploration**）→ 检验假设（**understanding**）→ 提炼并写成文稿（**distillation**）。
- [**阶段二：**](#Stage_2__Practicing_Research_with_Mini_Projects) **小型项目**（每个 1–5 天，共 2–4 周）
  - [探索心态](#Practicing_Exploration)：**尽量提高单位时间的信息增益**，学会摆脱卡壳。只要还在学到东西，没有计划也可以。
  - [理解心态](#Practicing_Understanding)：**任何研究结果，在证据证明其成立前，都先当它是错的。** 越令人兴奋的结果越可能是错的。做自己最严厉的批评者。
  - 点子的质量（ideation）和撰写报告（distillation）暂时不是重点；**research taste 和排优先级的能力都要靠实践来培养。**
  - 学会提出好的研究点子需要很长时间。**选早期项目时不妨抄近路！** [选范围明确的项目](#Choose_A_Project)，比如在一篇论文的基础上做扩展（该节有具体点子）。
  - [**多用 LLM**](#Using_LLMs_for_Research_Code)：如果用得对，研究和写代码的速度都会快很多！
- [**阶段三：**](#Stage_3__Working_Up_To_Full_Research_Projects) **走向完整项目**
  - **每次集中做 1–2 周**，结束后复盘。除非项目进展特别好，否则就换一个。
  - [**反馈较慢的技能**](#Deepening_Your_Skills)和[**关键心态**](#Key_Research_Mindsets)：审慎质疑、了解文献、排好优先级，以及保持高产。
  - [**做扎实的科学**](#Doing_Good_Science)，别追求花哨。诚实交代局限，拿出证据说明自己没有挑选有利结果，亲自查看数据，使用简单有效的方法和真正有参照价值的 baseline。
  - **[把工作写出来](#Write_up_your_work_)！** 先提炼出一条叙事主线，再逐步扩写成文。
    - **高质量的公开成果是[最有说服力的资历](#Why_aim_for_public_output_)**，无论是求职、申请 PhD，还是找导师。
    - **不要把写作留到最后再想。** 为它留出时间。[读者能理解的比你以为的少。](#Common_mistakes)
  - **练习[提出研究点子](#Practicing_Ideation)**。如果可能，试着模仿并习得[导师的 research taste](#Research_Taste_Exercises)。
    - [避开一时的风潮](#Avoiding_Fads)，同时思考[mech interp 最近有哪些新进展值得关注](#What_s_New_In_Mech_Interp_)。
- [**主动联系导师**](#Advice_on_finding_a_mentor)。有好导师，什么都会容易许多。可以发 cold email、申请导师项目等。
  - 联系那些有时间指导你的研究者，不必追着名气最大的人跑。
- **职业发展：** 如果你想在这个领域工作，就去申请！比如[工作岗位](#Where_to_apply)、[导师项目](#Mentoring_programs)、[研究资助](#Applying_for_grants)或[学术实验室](#Relevant_Academic_Labs)。
  - 还有一些补充想法：[招聘负责人看重什么](#What_do_hiring_managers_look_for)、[好的研究导师到底做些什么](#So_what_does_a_research_mentor_actually_do_)，以及[你该不该读 PhD](#Should_you_do_a_PhD_)？
- 我也会谈谈自己现在如何看待这个领域，以及哪些看法发生了变化。我把这些观点和实操建议分开，你可以自行取舍。
  - 新增（2025 年 12 月 1 日）：可阅读[我正在采用的、务实得多的研究做法](https://neelnanda.io/vision)和[我们看好的研究方向](https://neelnanda.io/agenda)。
  - 内容包括：[我目前如何界定这个领域](#Interlude__What_is_mech_interp_)、为何我[不看好雄心勃勃的 reverse engineering，却对更务实的做法感兴趣](#A_Pragmatic_Vision_for_Mech_Interp)，以及[我看好哪些近期工作](#What_s_New_In_Mech_Interp_)并建议读者在此基础上继续研究。

<a name="Introduction"></a>

## 引言

以我非常偏心的看法，mechanistic interpretability（mech interp）是最令人兴奋的研究领域之一。我们有非常复杂、自己却不理解的 AI 模型，模型内部又显露出一些诱人的迹象，提示那里确实存在某种结构。即使只理解其中一部分，也能打开很多可能性，但 99% 的 machine learning 研究者都忽略了它。有太多事可以做了！

在我看来，mech interp 是一个格外适合自学的领域：教学材料很多，不需要太多算力，反馈周期也短。但如果你刚接触这个领域，起步仍可能让人望而生畏。这是我更新后的指南，讲怎么培养技能、参与进来、成长到能做真正研究的程度，以及如何进一步走向相关职业或学术岗位。

这份指南特意写得很有个人倾向。我的目标是传达我认为有用的思考方式和具体步骤，给你一个明确方向，不求面面俱到或提供万无一失的建议。（许多链接指向我自己的工作，因为我最熟悉它们。抱歉！）

<a name="High_Level_Framing"></a>

### 总体思路

我对 mech interp 入门的核心看法是：尽快掌握最低限度的基础知识，马上转到在实际研究中学习。

没必要先把每篇论文都读完才碰研究。做研究时，你会发现知识缺口，再回头补学。手头有个具体项目，你会更清楚该往哪里学，也更容易理解学到的东西为什么有用。基础只需够你启动一个项目，并大致清楚自己在做什么。

一开始别为研究质量焦虑，也别追求完美的项目点子。[Research taste](https://www.alignmentforum.org/s/5GT3yoYM9gRmMEKqL/p/Ldrss6o3tiKT6NdMm) 和排优先级等关键技能都需要时间。经验哪怕一团乱，也能让你学会怎样运行和解读实验等基本技能，进而帮助你培养更高层的能力。

我把这个过程分成三个阶段：

1. [**掌握入门基础**](#Stage_1__Learning_the_Ropes)：按广度优先的方式学基础，最多一个月，之后进入第二阶段。
2. [**用小型项目练习研究**](#Stage_2__Practicing_Research_with_Mini_Projects)：做用完即可放下的研究项目，每个 1–5 天。专注于练习反馈最快的基本研究技能，不用纠结点子是不是最好的，或非得把项目写出来。2–4 周后进入第三阶段。
3. [**逐步过渡到完整项目**](#Stage_3__Working_Up_To_Full_Research_Projects)：每次集中做 1–2 周，每轮结束后复盘。除非这个项目进展很好、还在往前走，否则就尝试别的方向。最终，你应该会找到一项值得长期做的工作。开始琢磨更深层的技能和研究心态，练习提出好点子，并优先把进展顺利的短期项目写成高质量的公开文章。

<a name="Stage_1__Learning_the_Ropes"></a>

## 第一阶段：入门

这一阶段的目标是学习基础知识：如何用mechanistic interpretability（mech interp）库编写实验、如何理解核心概念，以及如何对整个领域形成初步认识。

你的目标是学到足以通过做研究继续学习的程度，_不必_把所有东西都学完。取舍要果断。**最多花 1 个月**[^1]**，然后进入第二阶段**。我标出了哪些内容我认为必不可少，哪些只是锦上添花。

**别只读论文**\- 学术背景的人常犯的一个错误是：在动手写代码前，先花几个月把能找到的论文尽量都读一遍。别这么做。mechanistic interpretability是一门实证科学，亲自动手能为学习提供关键背景。把阅读论文和做编程教程或小型研究探索穿插起来。可以看看[我的研究过程讲解](https://www.youtube.com/playlist?list=PL7m7hLIqA0hr4dVOgjNwP2zjQGVHKeB7T)，了解很小的探索性项目可以是什么样子。

LLM 是一项关键工具。关于如何用好它们，请参见[下文相关章节](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher#h.ab01gbohcxm5)。

<a name="Machine_Learning___Transformer_Basics"></a>

### machine learning与 Transformer 基础

_假设你已经掌握基本的 Python 和入门级 ML 概念。_

- **数学：**
  - **linear algebra最重要（必学）：** 你需要能够熟练地用向量和矩阵来思考。对mechanistic interpretability或 ML 研究来说，在值得学习的通用数学知识中，linear algebra的价值遥遥领先。
    - _资源：_ 3Blue1Brown 的 [Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)。
    - **强烈推荐**：把 [A Mathematical Framework For Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html) 放进 context window，让 LLM 出题，检验你对 Transformer 内部机制的直觉。
    - LLM 很适合帮你检查自己是不是真的理解了linear algebra。试着总结你学到的内容，以及不同概念之间的联系，再问 LLM 你的理解是否正确。例如：
      - 确认你理解 SVD（奇异值分解）及其为何有效
      - 换基是什么意思，为什么重要
      - 低秩矩阵与满秩矩阵有哪些关键区别
  - **其他内容：** 基础概率论、信息论、优化、向量微积分。
    - 让 LLM 当导师，针对与 Transformer 最相关的部分出题，检验你的理解。
  - 一般不用费心学习数学的其他领域（除非你自己觉得好玩！）。
- **用 PyTorch 实践 ML（必学）：**
  - 从零实现一个简单的 Transformer（比如 GPT-2）。ARENA 第 1.1 章是很棒的编程教程[^2]。

    - 这既能培养你对mechanistic interpretability的直觉，_也_能培养你对 PyTorch 用法的直觉。

    - 我有两个从基础讲起的视频教程。如果不知道该做什么，就[从这里开始](https://www.youtube.com/watch?v=bOYE6E8JrtU&list=PL7m7hLIqA0hoIUPhC26ASCVs_VrqcDpAz)！

    - 也可以用 LLM 补上你欠缺的背景知识，比如 PyTorch 基础。
- **云端 GPU：**
  - 你需要能够运行语言模型，而这通常需要 GPU。
  - 可以用 Google Colab 快速起步，但长期使用会有很多限制。学会租用和使用云端 GPU。
    - 较新的 MacBook Pro 或配有高性能游戏显卡的电脑，也可能在本地运行 LLM。
  - _资源：_ ARENA 有一份[指南](https://arena-chapter0-fundamentals.streamlit.app/#vm-setup-instructions)。我喜欢用 [runpod.io](http://runpod.io/)，[vast.ai](http://vast.ai/) 更便宜。
  - nnsight 也支持你[在他们自行托管的部分模型上做可解释性研究](https://nnsight.net/notebooks/tutorials/get_started/start_remote_access/)，其中包括 LLaMA 3 405B。这可能是使用较大模型的好办法。

<a name="Mechanistic_Interpretability_Techniques"></a>

### mechanistic interpretability技术

mechanistic interpretability研究，很大一部分在于知道该用哪项技术，以及该在什么情境下用。刚入门时，这是应该优先弄懂的一件事。你可以结合阅读学习材料和动手做 ARENA 等编程教程来掌握它（下一小节会谈到 ARENA）。

- [Ferrando 等人的综述](https://arxiv.org/abs/2405.00208)对关键技术做了很好的**概览**。篇幅较长，不必优先通读，但很适合查阅。
  - 把它放进 LLM 的 context window，再向 LLM 提问，或让它为你出练习题。
- **必学**：务必理解以下**核心技术**，达到能自己动手编写代码、在 GPT-2 Small 之类的简单模型上实现它们的程度[^3]：

  - Activation Patching（激活修补）

  - Linear Probes（线性探针）

  - 使用 Sparse Autoencoders（SAE，稀疏自编码器；只需要写代码使用 SAE，不需要训练它）

  - Max Activating Dataset Examples（数据集中使激活值最高的样本）

  - 有余力可学：

    - Steering Vectors（引导向量）

    - Direct Logit Attribution（DLA，直接 logit 归因；一个更简单的版本叫 logit lens）
  - **关键练习**：把 Ferrando 等人的综述放进 LLM 的 context window，逐项向它描述这些技术并请它反馈。反复修正，直到全部说对。

    - 用 anti-sycophancy prompt（反迎合提示词）来获得真实反馈，假装你的回答出自他人之手，例如：“我看到有人这么说，但我觉得挺不靠谱的。你能帮我针对他们遗漏的内容，给出直接又有建设性的反馈吗？\[插入你的描述\]”
- 别忘了还有不少有价值的**黑箱可解释性（black-box interpretability）**技术！（也就是不使用模型内部信息的技术。）读模型的 chain of thought（思维链），常常就能猜对它用的算法。仔细调整 prompt，是检验因果假设的有力方法。
  - 这些技术是额外的工具。调查时，正确的第一步往往就是跟模型多聊聊，观察它的行为。别抱着纯粹主义的态度，觉得它们“不严谨”就不屑一顾。它们和其他技术一样，有用处也有缺点。
    - 我指导过[一个项目](https://www.alignmentforum.org/posts/wnzkjSmrgWZaBa2aC/self-preservation-or-instruction-ambiguity-examining-the)，旨在解释前沿模型的“自我保护”行为。项目从简单的黑箱技术入手，结果直接奏效，全程没用到更复杂的方法。
  - 了解更复杂的黑箱技术，比如 [token forcing](https://arxiv.org/abs/2312.12321)（也叫 prefill attacks），也就是替模型说出一些话。

<a name="Mechanistic_Interpretability_Coding___Tooling"></a>

### mechanistic interpretability的编程与工具

- **目标：** 熟练地运行实验，自如地“玩转”模型内部组件。掌握基本的工程技能[^4]。亲自动手**。**

- **ARENA**：ARENA 有[一套由 Callum McDougall 编写的精彩编程教程](https://arena-chapter1-transformer-interp.streamlit.app/)，直接去做就行。不过内容非常多，所以**取舍要果断**。
  - **必学**_**：**_ **第 1.2 章**（Interpretability Basics，可解释性基础；优先学习关于工具、直接观察和 patching 的前三节）。
  - _推荐：_ 1.4.1（Causal Interventions & Activation Patching，因果干预与激活修补；这是一项核心技术）。
  - _值得学：_ 1.3.2（Sparse Autoencoders (SAEs)，稀疏自编码器；略读或跳过第 1 节。其余内容的重点是形成直觉：SAE 是什么、有什么优缺点、怎么使用开源 SAE。不用操心训练）。
- **工具（必学）：** 熟练掌握至少一个mechanistic interpretability库，之后就用它运行实验。
  - [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens)：对于不超过 9B 的小模型，如果想编写更复杂的可解释性实验，或想同时用多个模型，它是最佳选择。
    - 截至 2025 年 9 月上旬，TransformerLens [v3](https://github.com/TransformerLensOrg/TransformerLens/releases/tag/v3.0.0a5) 尚处于 alpha 阶段，对大型模型支持良好，灵活性也高得多。
  - [nnsight](http://nnsight.net/)：性能更高，在较大的模型上也运行良好；本身只是 HuggingFace transformers 等标准 LLM 库的一层封装（wrapper）。
- **LLM API**：学会通过 LLM API 以编程方式调用 LLM。这对衡量数据的一些定性特征，以及生成合成数据集非常有用。
  - 我喜欢 [openrouter.ai](http://openrouter.ai/)，它让你从同一个入口访问几乎所有重要的 LLM。GPT5 和 Gemini 价格合理，适合作为默认选择，也都有不同规模的版本。
    - Cerebras 和 Groq 的吞吐量比普通服务商_高得多_，也提供少数几个开源模型，值得看看。
  - 练习：制作一个快乐情绪的 steering vector（例如用于 GPT-2 Small）。通过 API 让 LLM 生成 32 条快乐的 prompt 和 32 条悲伤的 prompt，再计算两组平均激活值之差[^5]（例如，取中间层的 residual stream）。在模型针对一些示例 prompt 生成回复时，把这个向量加到模型的 residual stream[^6] 上。用 LLM API 给这些回复看起来有多快乐打分，看看施加引导后分数如何上升。
- **开源 LLM**：你会经常用到开源 LLM，把它们当作要解释的对象。哪个开源 LLM 最好，经常在变。
  - 截至 2025 年 9 月上旬，Qwen3 是一个不错的默认模型系列。每个模型都有 reasoning（推理）和 non-reasoning（非推理）模式，可选规模丰富，而且大多数都是 dense（稠密）模型[^7]。

    - Gemma 3 和 LLaMA 3.3 是不错的非推理模型。我听到过关于 gpt-oss 和 LLaMA 4 的负面评价。
  - _容易踩的坑：_ 不同的开源 LLM 往往采用不同的 tokenization（分词方式），chat token 或 reasoning token 的格式也各不相同。用错 token 格式可能只让性能下降一点，不容易察觉，却会破坏你的实验结果。留意这个问题，尽量找出这些信息记录在哪里，并做基本的合理性检查，例如与官方 evals（评测结果）对照。

<a name="Understanding_the_literature"></a>

### 了解研究文献

应优先理解概念和基础知识，不过你也需要对领域全貌有所了解，所以至少要练习读几篇论文。

- 记住，**广度优先于深度**。先略读，了解有哪些研究，只对最感兴趣的内容深入钻研。
  - 在这里应大量使用 **LLM**。把你在考虑要不要读的材料交给 LLM，让它总结，向它询问有关研究的问题，再把自己的理解概括给它听，请它反馈（配合 anti-sycophancy prompt）。
    - 如果自己无法核验，就问多个 LLM，交叉对照，确认它们的说法一致。
- 这是[我最喜欢的论文清单](https://www.alignmentforum.org/posts/NfFST5Mio7BCAQHPA/an-extremely-opinionated-annotated-list-of-my-favourite)（截至 2024 年年中），附有总结和个人看法。
  - _别_试图把这些论文全都通读一遍。略读总结和摘要，选几篇用 LLM 深入了解，_然后_再决定是否读全文。
  - [我的 YouTube 频道](https://www.youtube.com/@neelnanda2469)：[论文讲解](https://www.youtube.com/watch?v=KV5gbOmHbjU&list=PL7m7hLIqA0hpsJYYhlt1WbHHgdfRLM2eY&pp=gAQB)、[我做研究时的录像](https://www.youtube.com/watch?v=LP_NTmMvp10&list=PL7m7hLIqA0hr4dVOgjNwP2zjQGVHKeB7T)，以及一些演讲。
- [Open Problems In Mechanistic Interpretability](https://arxiv.org/abs/2501.16496) 是一篇不错的近期文献综述，有许多顶尖的mechanistic interpretability研究者参与撰写。
  - 提醒一下，这篇论文基本上是由一群很有主见、彼此也不太买账的研究者各写各的章节，往往还带着鲜明的立场。别太把它奉为权威，不过它是快速了解领域现状的好途径。
- **精读**：至少认真通读一篇论文。这项技能很有用，研究项目中如果有少数几篇与你的项目极为相关的论文，就会用到它。
  - 这远不只是把文字读一遍！你应该写出总结，试着借助 LLM 理解论文的相关背景，并能解释为什么会有这篇论文、研究动机是什么、论文试图解决什么问题，等等。
  - 尽量采取杠铃策略（barbell strategy）：在大多数论文上投入很少精力，在少数论文上投入大量精力。
- **LLM**：LLM 是探索文献的利器，但用不好也容易给自己挖坑。
  - 把它当作研究文献的搜索引擎（尤其是在 context 中放入几篇文献综述，或一篇作为起点的论文时），让它帮你做文献调研、为你关心的问题寻找相关研究，等等。
    - 把它当作略读论文的辅助工具：把论文放进 context window[^8]，让它总结、向它提问等。

    - 如果担心 hallucination（幻觉），可以让它引用原文来支持回答（并核实引文确实存在、也能支持回答），或把它的回答交给另一个 LLM，请对方严厉指出所有不准确之处。不过说实话，我经常懒得这么做，现在的前沿推理模型已经相当不错了。
  - 把它当作精读的辅助工具：论文还是得自己读，但我建议边读边开着 LLM 对话，把论文放在 context 里。每次遇到不懂的地方，就向它提问、请它补充背景等。

<a name="Using_LLMs_for_Learning"></a>

### 使用 LLM 学习

_注：我预计本节内容很快就会过时！写于 2025 年 9 月上旬。_

LLM 是非常有用的学习工具，尤其是在进入一个新领域时。它们很难胜过专家，但常常比新手强。如果你在整个过程中没有经常用它们，我猜你错过了不少收益。

不过，LLM 有一些不寻常的缺点和长处，值得认真想想该怎么用：

- **用一个好模型**：最好的付费模型比免费的 ChatGPT 等强多了。别舍不得花钱；经济条件允许的话，就订一个每月 20 美元的套餐，体验会大不相同。Gemini 2.5 Pro、启用 extended thinking 的 Claude 4.1 Opus，以及 GPT-5 Thinking 都是合理的选择。（_不要_用非思考版 GPT-5，也不要用 GPT-4o 之类更老的模型；推理模型是一次显著升级。）
  - 如果没法付费订阅，Gemini 2.5 Pro 也能免费使用，是最好的免费选择。
  - 通过 [AI Studio](https://aistudio.google.com/prompts/new_chat) 使用 Gemini 2.5 Pro。它比 Gemini 主界面好用得多，对免费用户的频率限制也宽松不少。始终开启 compare mode（顶部有两个箭头的按钮），并排看 Pro 给出的两份回答。
  - 我在 MATS 的往届学员 Paul Bogdan 写了[一段心得](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher?commentId=jDzbZGnjWDMsNjDPQ)，比较了不同 LLM 在学习中的表现，也谈到为什么他目前更喜欢 Gemini。
- **System Prompts（系统提示词）：** System prompt 能带来很大差别。具体、明确地说清你想要什么，以及希望模型怎么做。
  - LLM 很擅长写这个：我只管对着它絮叨任务是什么、我的标准是什么、有哪些不希望出现的 failure modes（失效模式），它就会帮我写出 prompt。
  - 如果 prompt 不奏效，告诉 LLM 它哪里做错了，看看它能不能帮你重写 prompt。
- **融合不同观点**：
  - 把同一个问题问几个不同的前沿 LLM，把 LLM B 的回答交给 LLM A，请它评估优缺点，再把两份回答合并。
    - 如果两份原始回答都提到某一点，它很可能不是幻觉。
  - 如果你想核查某个 LLM 回答中的事实，就把回答交给另一个 LLM，并使用 anti-sycophancy prompt。
- **Anti-Sycophancy Prompts（反迎合提示词）：** LLM 不擅长给出批判性反馈。把请求写成这样：假装你要评价的东西是别人写的，让模型顺着你的意思时恰好会挑毛病。
  - _“我有个朋友写了这段解释，想听毫不客气的真话。如果我有所保留，他们会不高兴。请帮我给出最有用的反馈。”_
  - _“我看到有人这么说，但我觉得这说法挺蠢的。你怎么看？”_
  - _“有个蠢货写了这玩意儿，看得我很烦。请帮我写一段毫不留情但实事求是的回应。”_
- **主动学习，别被动接收：**
  - 用自己的话向 LLM **复述**你的理解，并请它给出批判性反馈。每读一篇论文或学一个新概念，都这么做一次。
  - 试着让它以**苏格拉底式提问（Socratic method）**来教你。注意：你很可能可以设计出比官方“study mode”更好的 system prompt。
  - 让 LLM **生成练习题**来检验你的理解，视情况加入数学题和编程题。
    - Gemini 可以出选择题，有些人喜欢这种形式。
    - 编程练习可以要求附带测试和模板代码，在模板中留空函数供你补全，就像 ARENA 教程那样。
- **Context engineering（上下文工程）：** 把相关信息放进 context，现代 LLM 就会有用得多。把正在讨论的论文或相关库的源代码[^9]交给它们，它们就能提供大得多的帮助。

  - [这个文件夹](https://drive.google.com/drive/u/0/folders/1GfrgKJwndk-twnJ8K7Ba-TE9i_8wBWAU)里存了许多可用于mechanistic interpretability提问的 context 文件。如果不知道需要什么，直接用[这个默认文件](https://drive.google.com/file/d/18cF3lkU17_elUSv0zk8KSVejM1jGfNnz/view?usp=drive_link)。

  - 我推荐通过 [aistudio.google.com](http://aistudio.google.com/) 使用 Gemini 2.5 Pro（1M context window），因为界面更好用。始终打开 compare mode，就能并排看到两个回答。
- **语音听写（voice dictation）**：用免费的语音转文字软件对着 LLM 口述，转写后不加编辑就直接发送，它也能理解。我个人觉得这样轻松多了，尤其是想把脑子里的想法一股脑儿倒出来时。
  - Mac 上的 [Superwhisper](http://superwhisper.com/) 很好用；Superwhisper 目前没有 Windows 版，不过 Windows 用户可以用 [Whispr Flow](https://wisprflow.ai/)。
- **编程**：Cursor 这类 LLM 工具很适合编程，但如果目标是学习，就_不适合_。做 ARENA 这类练习时，只允许自己用网页版 LLM，并且只把它当导师。别复制粘贴代码，你的目标是学会知识，做完练习并非目的。

<a name="Interlude__What_is_mech_interp_"></a>

## 插曲：什么是mechanistic interpretability？

_可以直接跳到_ _“_ [接下来我该做什么](#The_Big_Picture__Learning_the_Craft_of_Research) _”这一部分。_

到了这里，值得想一想mechanistic interpretability_到底是什么_。我们究竟在做什么？对于如何确切地定义mechanistic interpretability，目前并没有共识，不同研究者会给出差别很大的看法。不过，_我_采用的工作定义如下[^10]。

- **可解释性（Interpretability）**研究如何理解模型，深入认识模型的行为、内部的认知过程，以及它们为何有效、如何运作等。这一点最重要，也是整个领域的核心。
- **机制（Mechanistic）**意味着利用模型的内部信息，也就是权重和激活值。
- 因此，**mechanistic interpretability（mechanistic interpretability）**涵盖任何利用模型内部信息来理解模型的方法。
  - 这与其他一些有价值的方向不同，比如**黑箱可解释性（black box interpretability）**，即不使用内部信息来理解模型，以及**模型内部研究（model internals）**，即利用模型内部信息做其他事情，比如构建 steering vectors。

**为什么这样定义？** 要做有影响力的研究，往往可以从别人忽略的方向入手。我认为machine learning的大部分研究既不关心机制，也不以解释为目标。99% 的 ML 研究只看模型的输入和输出，把控制模型行为当作最高指引。只要让某个数字上升就算有进展，无须解释为什么有效。这种做法非常成功，但在我看来，还有很多价值没被挖掘出来。mechanistic interpretability试图在这个基础上做得更好，也已经取得了不少有意思的成果，例如[通过解释 AlphaZero，教国际象棋特级大师下得更好](https://arxiv.org/abs/2310.16410)。

**为什么值得关心？** 显然，我们的目标并非“当且仅当一件事符合上述定义时才去做”，但我觉得这个定义很有用。要讨论这一点，先来看看我们真正想实现什么。对我来说，**最终目标是让达到或超越人类水平的 AI 系统更安全**。我做mechanistic interpretability，是因为我相信我们可以充分理解模型内部在发生什么，让这种理解在实践中发挥作用（也因为mechanistic interpretability很好玩！）：比如更好地理解模型如何运作，判断它们是否在对我们撒谎，以及发现和诊断意外的 failure modes 等等。不过，每个人的目标都不同，比如求今天就能派上用场、追求美感，或寻求科学洞见。值得想想你的目标是什么。

这种看待问题的方式有几个值得说明的含义：

- 我最终的**最高指引是实用主义**\- 获得足够的理解，并让这种理解能够（可靠地）派上用场。“彻底逆向工程模型”这样的子目标，只是达到目的的手段。
  - 近几年，我在研究优先级上的一个重大转变，是得出结论：**逆向工程（reverse engineering）并不是合适的目标**。我认为应该更直接地开展务实的研究，让我们能利用模型内部信息做有用的事。我会在[后文](#A_Pragmatic_Vision_for_Mech_Interp)进一步讨论这一转变。
- 这是一个**宽泛的定义**。这个领域过去主要关注一些更具体的研究议程，比如雄心勃勃的模型逆向工程。但我认为我们不该局限于此，还有许多重要却被忽视的方向，这个领域也足够大，能够容纳广泛的探索[^11]。

- 重点在于**理解**，不能停留在使用内部信息。Steering vectors 之类的 model internals 方法可以用来塑造模型行为，但也要和 prompting（提示）及 fine-tuning（微调）等许多强有力的方法竞争。只有极少数 ML 研究方向能让我们真正理解模型。
- **别做纯粹主义者**\- 使用模型内部信息是实现目标的手段。如果黑箱方法才是合适的工具，那就用它。

<a name="The_Big_Picture__Learning_the_Craft_of_Research"></a>

## 总览：学习做研究的本领

你已经学完了教程，理解了核心概念，也能写一些基本的实验代码。接下来才是难点：学会真正开展 mechanistic interpretability（简称 mech interp）研究[^12]。

这当然本来就不好学。但在我看来，人们往往误解自己在这里需要做什么，试图一次学会所有东西，或是以其他方式给自己徒增难度。关键是把过程拆开，弄清涉及哪些不同的技能，并优先**学习反馈回路最快的部分**。

我建议把这个过程分成两个阶段[^13]。

**阶段 2**：做一批做完就可以放下的小项目，每个用时 1–5 天。不用为挑出最好的项目或产出可公开发布的成果而焦虑。目标是学会那些反馈回路最快的技能。

**阶段 3：** 做了几周这类小项目之后，可以把目标定得更高一些：更用心地选择项目，掌握更微妙的技能，并学习如何把成果写出来。我仍然建议以一到两周为一个 sprint，迭代推进；如果进展顺利，就逐步发展成较长期的项目。

注：和阶段 1 到阶段 2 不同，阶段 2 到阶段 3 的过渡应当相当平缓，随着你接手更大的项目、把目标定得更高而自然发生。通常可以在阶段 2 进行了三到四周后过渡，但没必要搞一次正式的大转变。

**导师指导**：一位好导师能大大加快你的进步，找导师应当是你的一项重要优先事项。在职业发展部分，我会就[如何寻找一位好导师](#Advice_on_finding_a_mentor)以及[导师具体能提供哪些帮助](#So_what_does_a_research_mentor_actually_do_)给出建议。下文大多会假设你没有导师，并在合适的地方指出可以如何借助导师的帮助。

<a name="Unpacking_the_Research_Process"></a>

### 拆解研究流程

我觉得，把研究看成由四个不同阶段构成的循环很有帮助。完整细节可以参阅[我关于研究流程的博文](https://www.alignmentforum.org/posts/hjMy4ZxS5ogA9cTYK/how-i-think-about-my-research-process-explore-understand)，简要来说：

- **构思（Ideation）：** 选择一个研究问题或一个大致的领域作为重点。
- **探索（Exploration）：** 你可能还没有明确的假设；此时只是试着找出该问哪些问题，并加深对这个领域的直觉。首要目标是获取更多信息，拓宽可探索的范围（surface area）。
- **理解（Understanding）：** 当你有了一个具体的假设，也对该领域有了一些直觉上的理解，这个阶段就开始了。首要目标是让自己确信该假设是真是假。
- **提炼（Distillation）：** 一旦你自己确信了，首要目标就是把发现提炼成可以向外界传达的、简洁严谨的结论：拿出足以说服他人的实验证据，清楚地写下来，再分享出去。

这些阶段以一系列技能为基础，最好按照从运用技能到获得反馈所需的时间来分类。我们靠动手和获取反馈来学习，所以反馈快的技能学起来要快得多。下面是我粗略列出并分类的一份清单。

我的一般建议是**按反馈回路从快到慢的顺序优先学习这些技能**。如果看起来非得具备某项反馈慢的技能才能起步，比如需要有眼光挑出好的研究问题，那就找个办法抄近路，不必为还没有这项技能而焦虑（例如，在一篇论文的基础上做一点扩展，请导师给你一个研究问题，等等）。

- **快速反馈回路（几分钟到几小时）：**
  - 规划实验代码并动手编写
    - **中速**：设计出色的实验
    - **中速**：知道什么时候可以写凑合能用的代码，什么时候该写高质量代码
  - 运行实验和调试
    - **中速／慢速**：发现并修复不易察觉的 bug（例如，tokenization 有细微错误，或 hyperparameter 搜索不够充分，等等）
  - 解读单次实验的结果
    - **中速**：看懂结果是否支持你的结论
    - **慢速**：识别隐蔽的可解释性错觉（interpretability illusions），也就是结果看似支持你的主张，实际上并没有
- **中速反馈回路（几天）：**
  - 建立对 mechanistic interpretability 的概念性理解
    - **慢速**：察觉并厘清自己那些不易发现的困惑
    - **慢速**：深入了解相关文献
  - 知道怎样探索才不会卡住
  - 把结果写下来
    - **慢速**：真正把你的工作讲清楚，让别人听懂
    - **慢速**：向别人讲清楚你的工作为什么_有意思_
- **慢速反馈回路（几周）：**
  - 决定下一步优先做哪个实验
  - 知道何时应该沿着某个研究方向继续，何时应该换个切入角度或换个项目
  - _不必_先把一个研究想法做成项目，就能判断它不好
- **极慢反馈回路（几个月）：**
  - 想出好的研究点子。这是「research taste（研究品味）」的核心。

你的进阶路线应当很简单：先用做完即可放下的项目，专心练习探索和理解所需的快速和中速技能。接着进阶到做完整的端到端项目，刻意练习更深层的技能，同时练习构思与提炼。

<a name="What_is_research_taste_"></a>

### 什么是 research taste？

有一类特别重要又不太容易说清的技能，叫作 research taste（研究品味）。我的理解是，积累了足够的研究经验后，你会形成一整套直觉，帮助你想出好点子、预判某个点子有没有潜力、对好的研究方向有坚定的判断，等等。想看更多想法，可以读[我谈这个话题的博文](https://www.alignmentforum.org/posts/Ldrss6o3tiKT6NdMm/my-research-process-understanding-and-cultivating-research)。

总的来说，我认为你目前不妨先把它放在一边，想办法弥补经验尚浅带来的不足，集中学习反馈速度快或中等的技能。这会为日后培养研究品味打下好得多的基础。尤其是，有导师指导，学起来会快得多，所以如果刚起步时没有导师，应当优先做别的事。

不过你终究还是要培养它，所以一路上可以留意这项技能，找机会练习、吸取经验。我建议把它当成一项加分项，不必为它焦虑。

有个重要的陷阱值得注意：良好的研究品味往往表现为对某个研究方向充满信心、判断坚定。但新手研究者往往早早就有了这份信心和确信，远_早于_他们学会不对坏点子盲目自信的时候。你可能深信某件事会做出惊人的成果，结果追下去才发现自己错了；有一两次这样的经历，通常很能让人学到东西。所以这种结果也不算太糟，尤其是在阶段 2（小项目）期间，但还是要当心。

<a name="Stage_2__Practicing_Research_with_Mini_Projects"></a>

## 阶段 2：用小项目练习做研究

有了上面的整体认识，就来动手吧。你可以用大约 2–4 周做一系列各需约 1–5 天的小项目。眼下的目标是学会做研究，不必做出突破性的成果。

专注练习探索和理解，掌握反馈快或中等的技能，暂时把构思和提炼放在一边。如果做出了很酷的东西，也想写出来，那太好了！但这只是加分项，不是优先事项。

每做完一个小项目，记得做一次复盘。至少花一小时分析：你做了什么？尝试了什么？哪些奏效了？哪些没奏效？犯了什么错？如果重来，会怎么做？又该如何把这些经验用到今后的研究策略中？

<a name="Choose_A_Project"></a>

### 选择一个项目

一些适合起步的项目建议：

- **复现并扩展一篇论文：** 这种做法之所以经典，自有其道理。先复现一个关键结果，再做扩展。建议：
  - [Refusal is mediated by a single direction](https://arxiv.org/abs/2406.11717)
    - 扩展论文的难度可能相差很大。比如，把其中的方法用到一个新模型上研究 refusal 很容易，因为可以复用同一批数据；把方法用到一个新概念上就更难了。
    - 技能：练习 activation patching 和 steering vectors。
  - [Thought Anchors](http://thought-anchors.com/)：把这些 reasoning model interpretability 方法用到新类型的 prompt 上，或者用链接中的界面探索一些 prompt，也可以看看能否改进这些方法或发明自己的方法。
    - 技能：reasoning model interpretability、使用 LLM API、使用现代模型。
  - 在更新的模型上复现 [Geometry of Truth](https://arxiv.org/abs/2310.06824) 中的 truth probes，并尝试把它们用到更有意思的场景中。它们的泛化能力如何？你能让它们失效吗？如果能，可以修好这个问题吗？
    - 技能：probing、监督学习、创建数据集。
- **找个有意思的东西试着玩玩：**
  - 用 [Neuronpedia 的 attribution graphs](https://www.neuronpedia.org/gemma-2-2b/graph) 对 Gemma 2B 提出一个假设，再用其他方法（例如 prompting）验证它。
    - 技能：attribution graphs、科学思维、prompting。
  - 玩玩 [Bartosz Cywiński 的 taboo models](https://huggingface.co/collections/bcywinski/gemma-2-9b-it-taboo-6826efbb186dfce0616dd174)，这些模型被预先设定了一个秘密词。尽可能多试几种方法，看看能不能找出那个词。
    - 如果你想挑战难一点的任务：自己训练一些带有更复杂秘密的模型，再试着解释它们。
    - 技能：logit lens、SAEs、black-box 方法。
  - 探索关于 [emergent](https://www.emergent-misalignment.com/) [misalignment](https://www.alignmentforum.org/posts/gLDSqQm8pwNiq7qst/narrow-misalignment-is-hard-emergent-misalignment-is-easy) 的[论文](https://openai.com/index/emergent-misalignment/)里的[模型](https://github.com/clarifying-EM/model-organisms-for-EM)。
    - 技能：steering vectors、SAEs，可能还包括 fine-tuning。
  - 从 [Chain-of-Thought Reasoning In The Wild Is Not Always Faithful](https://arxiv.org/abs/2503.08679) 中选一些 prompt，试着更深入地理解究竟发生了什么。
    - 技能：开放式探索，使用任何看起来合适的工具。

这些建议涵盖两类入门项目：

- **侧重理解**：选一个已有充分研究的领域，在其中尝试检验一个假设（例如，扩展一篇你仔细读过的论文）。
  - 注意，你还是要做_一些_
- **侧重探索**：选一个现象（可以从某种技术、某个模型、某种现象等入手），动手摆弄一番，试着搞清楚是怎么回事。
  - 侧重探索的项目往往是大家不太熟悉的类型，所以记得也做几个！

常见错误：

- 人们常常纠结于找到「最好」的项目。可惜，这不会发生。不妨先做点什么，看看会发生什么；更好的想法和灵感会慢慢出现。
- 别对第一个项目太执着。它很可能没选好！这些项目做过就可以放下；等到它不能再让你学到多少东西时，就换下一个。
- 反过来，也别在点子之间跳得太频繁，以至于始终没能积累一套「卡住时怎么办」的工具。
- 避开算力需求高的论文（例如涉及训练 cross-layer transcoders 的论文），或技术门槛很高的论文（例如 Sparse Feature Circuits）。

<a name="Practicing_Exploration"></a>

### 练习探索

把探索当作一个独立阶段，这个想法常让 mechanistic interpretability 的新手感到不适应。他们觉得自己总得有个计划，任何时候都要清楚自己在做什么，等等。按我的经验，你常常会花掉一个项目一半以上的时间，试图弄明白到底是怎么回事，以及自己觉得接下来该怎么做。这完全没问题！

你不必事先有计划。感到困惑也没关系。不过，这_不_意味着你可以随便瞎折腾。你的首要目标：针对这个问题获取更多信息，拓宽可探索的范围[^14]。你要采取能让单位时间内的信息收益最大化的行动。如果两小时过去还什么都没学到，就换一种做法。如果两三种做法都走进了死胡同，直接换一个问题也可以。

我在 [YouTube 频道上有几段研究过程的实录讲解](https://www.youtube.com/watch?v=LP_NTmMvp10&list=PL7m7hLIqA0hr4dVOgjNwP2zjQGVHKeB7T)，我觉得它们展示了探索时的思维方式，也展示了我认为合适的推进速度。比如，如果实验运行时间不长，我觉得你应当争取每隔几分钟就画一张新图（甚至更快！）。

一个常见的困难是觉得自己「卡住了」，不知道该做什么。在我看来，这主要是技能问题。碰到这种情况时，我推荐用下面这套工具：

- 使用能「拓宽探索范围」的方法，也就是能带出新的想法和联系，或单纯给你一些可供分析的原始数据的方法：看看模型的输出或 chain-of-thought，改一改 prompt，用 probe 检测某个概念，看看 SAE 或 attribution graph，读读数据集中的样例，试试 logit lens 或 steering，等等。
- 设一个[五分钟计时器](https://www.neelnanda.io/blog/post-28-on-creativity-the-joys-of-5-minute-timers)，集中想想你对什么好奇，或有哪些方向可以试试。
- 如果对某件事感到困惑或好奇，设一个[五分钟计时器](https://www.neelnanda.io/blog/post-28-on-creativity-the-joys-of-5-minute-timers)，尽可能多想几种可能正在发生的情况。

其他建议：

- 在做任何超过 30 分钟的实验之前，先停下来想想其他方案。这_真的是_获取信息最快的方式吗？
- 暂停半天，去补一些关键的背景知识，完全没问题。
- 养成记研究日志的习惯，把发现记录下来，再建一份「亮点」文档，专门记那些特别精彩的发现。
  - 如果合适，可以把 Slack 或 Discord 的一个频道当作研究日志，这也挺不错。
- 记住：在探索并思考如何解释神秘现象时，你分配的大部分概率质量应该落在「某个我还没想到的解释」上。
- 练习跟着好奇心走，但要知道，一开始它常常会把你带偏。走偏了就留心观察：你能从中学到什么？

<a name="Practicing_Understanding"></a>

### 练习理解

如果探索顺利，你会开始对问题产生一些猜想。比如，你觉得自己已经成功地（用 linear probing）探测到了某个概念；或者，你发现了一个介导 refusal 的方向；又或者，一周中的各天在一个二维子空间里被表示成一个圆。

有了这样的猜想，你就该去弄清楚它究竟是不是真的。注意，「非常确信它是真的」的感觉和它确实是真的，两者差别很大。做一个好的研究者，部分在于你足够擅长检验和证伪自己钟爱的假设，以至于当你未能证伪其中某个假设时，它确实有相当大的可能是真的。不过，你现在大概还没到那一步。

注：虽然我觉得把这些看作不同的阶段很有帮助，但你常常会在它们之间来回切换。一种很好的探索方式是：针对眼前的情况提出猜想和微型假设，做个快速实验来检验它们，再把结果纳入你对问题的理解，然后回到起点重新构思。

你的首要目标：让自己确信一个假设是真是假。关键是保持怀疑。建议：

- 检验假设之前，设一个五分钟计时器，集中想想：「在哪些情况下，这个假设可能是错的？」
- 也可以把支持你的假设的最有力论证写出来，看看论证的哪些环节显得薄弱。
  - 试着用一个 anti-sycophancy prompt（「这是我朋友写的，他想听毫不留情的反馈……」），让 LLM 对你的论证做 red-teaming。这可能不起作用，但说不定有帮助。
- 或者设一个五分钟计时器，尽可能多为你的观测结果想出一些替代解释。

接下来，要把发现的这些漏洞和替代假设转化为具体的实验。**实验设计是一项很有深度的技能**。老实说，除了靠实践积累经验，我也不知道该怎么教。不过我有一条建议：仔细研究那些你欣赏的论文中的实验，分析它们为什么如此巧妙、有效。我还建议，每当你觉得自己（大致）证实或证伪了某个假设，就把它记进一份持续更新的「我相信为真的事」文档，记录假设、实验和结果。

<a name="Using_LLMs_for_Research_Code"></a>

### 用 LLM 编写研究代码

在我看来，写代码是 LLM 的用处最显而易见的领域之一。让我印象很深的是，我带的 MATS 学员六个月前的表现比十二个月前好得多，而我觉得，这在很大程度上归功于他们有了好得多的 LLM 可用。如果你还没有把 LLM 作为编码工作流的核心组成部分，我觉得你做错了。

- **用 [Cursor](http://cursor.com/)：** 它就是集成了出色 AI 功能的 VS Code。记得用 `@` 添加相关库的文档，让 AI 掌握上下文。条件允许的话，每月 20 美元的套餐值得订阅，另外还有[免费学生版](https://cursor.com/students)。
  - Claude Code 很让人心动，但不太适合学习和迭代。我会用它做不打算保留的东西或写初稿；如果初稿里 bug 很多，那就自己读一遍代码，或者直接丢掉从头再来。在我看来，Cursor 比 Claude Code 更方便阅读 AI 写的代码。
- **一个提醒：** 如果你在学一个新库（比如在做 ARENA 的练习时），先试着自己写。卡住时再用 LLM，不要用它替代学习过程。
- 到了考虑怎么撰写结果的时候，如果关键实验主要靠 vibe coding 写成，我建议亲手重新实现一遍，确保没有混进 LLM 犯下的低级错误。

<a name="Interlude__What_s_New_In_Mechanistic_Interpretability_"></a>

## 插曲：Mechanistic Interpretability 有哪些新进展？

_你可以直接跳到「_ [_接下来该做什么_](#Stage_3__Working_Up_To_Full_Research_Projects) _」那一节。_

Mechanistic interpretability（mechanistic interpretability）发展得很快。从外围一直关注这个领域的人，入行时掌握的信息往往已经相当过时。以下是我认为你需要知道的事，同样经过了我个人观点和偏见的过滤。

<a name="Avoiding_Fads"></a>

### 别盲目追热点

这段插曲尤其重要，因为**这个领域经常有一阵阵热潮**：某个研究方向风行一年左右，取得一些进展，也发现不少局限，随后大家就转向别处了。但如果你刚入行，还在补读文献，你可能意识不到这一点。我经常看到新人在做一些老方向，我认为现在再做这些已经不太有成效了。过去的热点包括：

- 解释在算法任务上训练的玩具模型（例如我的 [grokking 研究](https://arxiv.org/abs/2301.05217)）
  - 我已不再建议做这个方向，因为我认为我们基本已经知道「在算法任务上训练的模型有时是可解释的」。这类模型过于人工化，离真实模型也太远，所以我对更深、更具体的洞见能否推广并不乐观。
- 通过对模型组件施加因果干预进行 circuit analysis（回路分析）（例如 [IOI 论文](https://arxiv.org/abs/2211.00593)）
  - 这个方向稍微复杂一些。我觉得值得了解，activation patching 和 attribution patching 之类的技术也确实有用。
  - 但核心问题是，一旦找到了模型中负责某项任务的稀疏子图，就很难回答「接下来呢？」。这通常不会带来更深的洞见，因为节点（例如层，或者注意力头）并非单义（monosemantic）的；实际情况常比直观的解释更复杂，可我们没有工具继续深挖。
  - 能看到这件事居然做得到，本身就很酷，但这个方向的研究已经足够多了，现在要做出新贡献，门槛高了许多。
  - 仅仅找出一个回路已不够；你需要用这个回路揭示模型某个更深层、不显而易见的性质。我建议探索[基于 attribution graph 的方法](https://www.neuronpedia.org/graph/info)。
- 对 [sparse autoencoder（稀疏自编码器）的渐进式研究](https://transformer-circuits.pub/2023/monosemantic-features)[^15] 热潮已近尾声（这里指专注于基础技术的简单应用和改进）。

  - 把这个方向称为一阵热潮，可能更有争议（至少因为它兴起得更晚）。

  - 我_具体_批评的是这波论文，其中也有我参与的：有些对 sparse autoencoder 的架构做渐进式改进，有些初步展示 SAE 能拿来做什么，还有些选一个 downstream task（下游任务），看看 SAE 在上面有什么表现。

    - 当初 SAE 看起来可能彻底改变整个领域，而且每篇这样的新论文都能让我们学到东西，那时做这些还有一定道理。我认为那个阶段已经过去了；它并没有像我曾经期望的那样改变整个领域。参见[我在这里写的更多想法](https://www.alignmentforum.org/posts/4uXCAJNuPKtKBsi28/sae-progress-update-2-draft)。
  - 我_并不_劝大家放弃以下方向：

    - 基于 attribution graph（归因图）的 circuit analysis。我觉得这个方向还远没有走到头，参见[我和别人合写的一篇近期综述](https://www.neuronpedia.org/graph/info)。

    - 尝试真正不同的 dictionary learning（字典学习）方法（如 [SPD](https://arxiv.org/abs/2506.20790) 或 [ITDA](https://arxiv.org/abs/2505.17769)），或尝试有针对性地解决现有技术在概念层面的局限（如 [Matryoshka](https://arxiv.org/abs/2503.17547)）。

    - 将 SAE 当作工具使用：可以用在探究 model biology（模型生物学）中奇怪现象的更大项目里，也可以用作某项 downstream task 的 baseline（基线）或方法。关键在于，动机_不应_仅仅是「如果我们用 SAE 做 X 会怎样？」，除非你有充分的理由。

      - 我尤其建议把它们用于你还不确切知道要找什么的任务，比如探索某些神秘现象。

我把这段放在第 2 阶段之后，是因为我认为**做最初那些做完就可以放下的项目时，你**_**不必**_**为新颖性或避开热点而焦虑** \- 你的目标只是学习。不过进入第 3 阶段后，只要条件允许，你就该更用心地挑选更令人兴奋或更有影响力的项目。

另外，把这些看成提醒和建议，不用当成指令。如果你看好的方向恰好属于我批评的那几类，也许是我错了，也许你那个方向就是例外。尽管放手试试，看看会发生什么。

<a name="What_s_New_In_Mech_Interp_"></a>

### Mech Interp 有哪些新进展？

好了，以上是我对哪些事不该做的一些可能有争议的看法。那该做什么呢？我认为过去一年 mech interp 出现了一些很酷的新机会，新人可能还没接触过。下面是过去一年里我最喜欢的论文中的一些关键主题，很希望读者能在这些基础上继续做下去：

1. **Downstream tasks（下游任务）**。如果我们的终极目标是用 interpretability 做有用的事，一个检验技术的好办法就是把它用到现实任务上，看看能否胜过 baseline，或让我们做成原本做不到的事。
1. 即便不能直接在我们最关心的任务上检验，如果模型能让我们在_某些_领域做以前做不到的事，这也算是合理的证据，表明我们确实学到了真东西，并且这种证据很难造假。
2. 我最喜欢的例子之一是 **auditing games（审计竞赛）**：[Marks et al.](https://arxiv.org/abs/2503.10965) 的论文非常出色。他们训练出一个带有隐藏目标的模型，让多个团队比赛找出该目标，有些团队可以用 interpretability 技术，有些不用。假设是：如果 interpretability 确实有用，使用它的团队就应该获胜。
      1. 这项研究本身的结果有些模棱两可（mech interp 团队拿了第一和第三，一个 black box 团队拿了第二），但我觉得这是检验 interpretability 技术的绝佳方式，后续还有很大空间，可以在不同类型的竞赛中评估 interpretability。
      2. 基本思路只是找一个具有某种已知隐藏属性的模型，再用不同技术看看哪些能把这个属性揭示出来。安排不同团队、允许它们使用不同技术等，都只是一种实现方式。
2. **Model organisms（模式生物）**：auditing games 那篇论文之所以能做，是因为研究者能造出一个带有隐藏目标的模型[^16]，用作研究对象，也就是一个 model organism。总体上，我们正积累 [synthetic document fine-tuning（合成文档微调）](https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/)等技术，以构建真正有意思的 model organisms。

1. 这类工作潜力很大！如果我们想做一个测谎仪，核心难题之一是我们不知道如何检验它究竟有没有效。但如果能把信念或欺骗行为植入模型，很多原本做不了的项目就能做了。

2. 一个很好的入门项目是动手试试开源的 model organisms，例如 [Cywinski et al.](https://arxiv.org/abs/2505.14352) 提供的模型。
3. **拿真正的 AGI Safety（AGI 安全）问题练手**：过去，interpretability 只能拿[模加法](https://arxiv.org/abs/2301.05217)之类极其乏味的玩具问题练手。但现在已有一些模型展现出似乎确实关系到安全的复杂行为，我们可以直接研究它们，让取得实质进展容易得多。
1. 例如，[Rajamanoharan et al.](https://www.alignmentforum.org/posts/wnzkjSmrgWZaBa2aC/self-preservation-or-instruction-ambiguity-examining-the) 驳斥了对模型自我保存行为的一种推定，[Goldowsky-Dill et al.](https://www.apolloresearch.ai/research/deception-probes) 则用 probe 探测欺骗。
2. 奇怪的行为：模型能[做内幕交易，事后再撒谎](https://www.apolloresearch.ai/research/deception-probes)，能[察觉自己正在接受评估](https://www.apolloresearch.ai/blog/claude-sonnet-37-often-knows-when-its-in-alignment-evaluations)（并改变行为），还能[假装对齐（fake alignment）](https://arxiv.org/abs/2412.14093)、[钻奖励机制的空子（reward hacking）](https://metr.org/blog/2025-06-05-recent-reward-hacking/)，等等。
4. **Interpretability 的现实应用**：基于模型 interpretability 的技术开始在前沿语言模型中真正派上用场了！
1. [Linear probes（线性探针）](https://arxiv.org/abs/1610.01644) 是最简单的技术之一，却是很有竞争力的[低成本系统监测](https://alignment.anthropic.com/2025/cheap-monitors/)手段，可监测诸如用户试图制造生物武器之类的情况。
2. Interpretability 居然真的能派上用场，我觉得特别酷；不过，似乎只有一项十年前的技术很有帮助，这也有点尴尬。该有人做点什么了。说不定那个人就是你！
3. 这需要一种很不一样的研究：细致地做评估、与强 baseline 比较，并打磨方法。
5. **基于 attribution graph 的 circuit analysis**。试图用模型的注意力头、层等组件来分析回路，核心问题在于这些东西往往没有明确的含义。[Attribution graphs](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) 使用 [transcoders](https://arxiv.org/abs/2406.11944) 等在 [Anthropic 的 model biology](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) 研究中推广开来的技术，用节点具有明确含义的计算图来近似模型。
1. 参见这篇[多机构合写的博客文章](https://www.neuronpedia.org/graph/info)，了解社区正在做的后续工作，以及我参与编写的一份开放问题清单！[^17]

2. 你可以在 [Neuronpedia](https://www.neuronpedia.org/gemma-2-2b/graph) 上创建并分析自己的 attribution graphs。
6. **理解模型失效**：模型经常做些奇怪的事。如果我们的 interpretability 真有两下子，应该能理解这些事。最近已经看到了起色！
1. [Meng et al.](https://transluce.org/observability-interface) 研究了为什么有些模型认为 9.8 < 9.11。
2. 关于 [emergent misalignment（涌现性失对齐）](https://www.emergent-misalignment.com/)的一系列研究取得了一些洞见：为什么训练模型做一些范围狭窄的坏事，比如写不安全的代码，会把它们变成纳粹？[Wang et al.](https://arxiv.org/abs/2506.19823) 发现，这是由与电影反派相关的 sparse autoencoder latents（潜变量）[^18] 驱动的；在 [Turner et al.](https://www.alignmentforum.org/posts/gLDSqQm8pwNiq7qst/narrow-misalignment-is-hard-emergent-misalignment-is-easy) 中，我们发现，模型_本来可以_学到只适用于狭窄任务的解法，但这种解法在某种意义上没那么「高效」和「稳定」。
7. **Automated interpretability（自动化可解释性）**：用 LLMs 将 interpretability 自动化。Bills et al. 和 [Shaham et al.](https://arxiv.org/abs/2404.14394) 的工作已让我们看到一些苗头，但现在的 LLMs 真的有本事了！现在已经能做出基础的 interpretability agents，比如能[解开 auditing games](https://alignment.anthropic.com/2025/automated-auditing/)[^19]。而且，interpretability agents 以后只会比现在更强[^20]。

8. **Reasoning model interpretability（推理模型的可解释性）**：目前所有前沿模型都是 reasoning models，即通过 reinforcement learning（强化学习）训练、会在给出答案前先思考[^21]一段时间的模型。我认为，这要求我们大幅重新审视许多现有的 interpretability 方法[^22]，也有必要探索新的范式。在我看来，这一点目前被领域内的研究者忽视了，但将来会变得很重要。

1. 在 [Bogdan et al.](http://thought-anchors.com/) 中，我们探讨了一种可能的范式是什么样的。尤其值得注意的是，对于 reasoning models，可以用更有意思、更精细的 black box（黑箱）技术，例如对 chain of thought（思维链）的后半段重新采样，或每次模型说出某一类句子时就删掉该句并重新生成。

<a name="A_Pragmatic_Vision_for_Mech_Interp"></a>

### 对 Mech Interp 的务实愿景

细心的读者可能会注意到，上面的列表侧重于理解模型那些更偏定性的高层性质，没怎么涉及雄心勃勃的 reverse engineering（逆向工程）。这主要是因为，在我看来，前者进展很好，后者的根本障碍却没有被攻克多少。

我以前对雄心勃勃的 reverse engineering 非常兴奋，但现在觉得，要把一个模型彻底逆向工程到人能理解的程度，这个梦想基本注定无法实现。我对已有研究的解读是，模型中有一些人能理解的高层结构，驱动着重要的行为；此外还有一条很长的尾巴，由越来越冷门、越来越无关紧要的启发式规则和偏差组成。出于实用目的，这些大多可以不管；但如果我们想要获得某种保证，或宣称已经理解了模型的大部分，就不能不管。我认为，尽可能多地理解模型，仍然可以作为衡量我们离真正实用还有多远的一个合理 proxy（替代指标）。但这个领域过去过于看重这件事，如果我们的终极目标是实用，其他很多方法看起来更有希望。

某种程度上，这反倒让我更看好 interpretability 最终能为 AGI safety 派上用场！雄心勃勃的 reverse engineering 要是成功当然很棒，但希望一直很渺茫。不过，我觉得 mechanistic interpretability 的务实方法已经拿出了一些实在的成果；我也相当有信心，我们能够做出真正有用、又很难用其他方法做到的事情。

<a name="Stage_3__Working_Up_To_Full_Research_Projects"></a>

## 第 3 阶段：逐步开展完整的研究项目

做完几个小项目后，你就该更有野心一些了。你需要考虑培养更深层的（需要中等或较长时间习得的）技能，并开始探索 ideation（构思）和 distillation（提炼）。

不过，你仍然应该预期项目经常会失败，也应该更重广度、少求深度，避免陷在某个已经不成功、自己却舍不得放弃的项目里。为了解决这两者的矛盾，我建议**以 1–2 周为一个 sprint（冲刺周期）开展工作**。每个 sprint 结束时，回顾一下，有意识地做出决定：**继续，还是转向？** 除非项目确实很有前景，否则默认应该转向。放弃一些事能让时间花得更值，那就是好事！但如果进展很顺利，当然要继续。

这个策略应该能让你在找到_好_项目时，最终投入更长时间，同时不至于被自己试的第一个雄心勃勃的点子拖住。

我建议回顾前面的技能列表，逐项想想自己觉得掌握得怎么样，以及如何在下一个项目里刻意练习。之后，每个 sprint 结束时，在决定是否转向之前，花一两个小时做次复盘：你学到了什么？各项技能有哪些进步？下次你会做哪些调整？你的目标是学习，留出时间切实消化积累下来的数据，学习效果会好得多！

<a name="Key_Research_Mindsets"></a>

### 关键的研究心态

拆解学习任务的一种方式，是想想研究心态：优秀研究者需要哪些特质和思维习惯，而这些特质和习惯又贯穿多个阶段。想了解更多，可以看[我写的这篇博客文章](https://www.alignmentforum.org/posts/cbBwwm4jW6AZctymL/my-research-process-key-mindsets-truth-seeking)。下面简要说说我目前的看法。

1. **Skepticism/Truth-seeking（怀疑与求真）：** 默认你的研究结论是错的，因为做研究很难。你始终应以发现_真实_的洞见为最高目标[^23]。

1. 持续主动地思考自己的研究在哪些方面可能有错，并诚实认真地检验这些可能性，一般不是人的本能。你可以学得更好，但往往要靠练习。

2. 这对 understanding（理解）和 distillation 至关重要，对 exploration（探索）也有一定的重要性。

3. 一个常见错误是抓住任何一点蛛丝马迹去找「正面」结果，觉得除此之外什么都不值得分享。

      1. 在我看来，分析扎实的负面结果或不确定结果，比证据薄弱的正面结果好得多。我往往会欣赏愿意公开有细节、有分寸的负面结果的人，不太看得起假装结果比实际更好的人。
2. **Prioritization（排优先级）：** 你的时间有限。做研究要作出许多决定，本质上是在高维空间中搜索。优秀研究者与平庸研究者的区别，在于能不能做好这些决定。
1. 如果你有好导师，起初可以在这方面依靠他们，但最终得学会自己做决定。
2. 这对 exploration 和 ideation 绝对至关重要，在其他阶段也相当重要。
3. 一个好练法是事后回看自己做过的决定，比如在 sprint 复盘时想想，当时怎样才能做得更好，又有哪些可推广的经验能用在以后。
3. **Productivity（效率）**[^24]**：** 我合作过的最优秀的研究者，能完成的工作比那些只是不错的研究者多一倍以上。部分原因是他们有好的 research taste（研究品味），也擅长排优先级；但也有一部分原因很简单：他们就是很能把活干完。

1. 这不一定意味着工时长到把自己累垮，也不意味着偷工减料、做事马虎。这里讲的是从长远看累计能做成多少事。

      1. 比如，有时最高效的做法是先别开工，设个 5 分钟的计时器，想想接下来有哪些事可以做，再选最好的一个点子。
2. 这体现在很多方面，每个人最该优先练的也不尽相同：

      1. 知道何时该写好代码、避免引入 bug，免得以后浪费时间调试；也知道何时写个凑合能用的东西就够了。

      2. 知道哪些键盘快捷键能让写代码更快。

      3. 知道什么时候该求助，也认识能在适当时帮你摆脱卡点的人。

      4. 善于管理自己的时间和任务，这样一旦决定什么事最优先，就真的去做那件事。

      5. 能腾出时间，深度专注于关键问题。
3. 练习：偶尔**审计一下自己的时间**。用 [Toggl](http://toggl.com/) 之类的工具记录一两天自己在做什么，再反思：时间都去哪了？哪些地方效率低？下次怎样能快 10%？

      1. 目标不是让自己内疚，是找出改进机会，比如为一项烦琐的任务写个 utility function（工具函数）。
4. **Knowing the literature（熟悉文献）**：不管是 mech interp 领域内还是领域外，以往的论文都已积累了不少智慧（也有不少扯淡的东西）。
1. 这贯穿所有阶段：
      1. 在 ideation 阶段，你不希望一不小心重复造轮子。并且，好点子往往来自已有工作的启发。
      2. 在 exploration 阶段，你需要能够察觉工作之间的联系、借鉴有趣的技术等。
      3. 在 understanding 阶段，你需要知道该按什么证明标准来检验、什么技术最好用、还有哪些替代假设（可能已有其他工作提出过），等等。
      4. 在 distillation 阶段，写论文时，别人会期望你能说明自己的工作在现有研究中的位置（即编写 related work 章节[^25]），这对其他研究者判断你的工作值不值得关注很重要。如果你不知道通行的证明方法、大家都会追问的关键 baseline，或应该检查的关键陷阱，等等，也不会有人相信你的工作。
2. LLMs 在这里是极其有用的工具。GPT-5 thinking 或带网页搜索的 Claude 4 都相当好用，速度更慢但更全面的 deep research 工具也一样（截至本文写作时，Google 的工具可免费使用）。
      1. 我建议在整个项目过程中经常使用这些工具，并多尝试不同的用法。
      2. 你不一定要去读它们找出来的每一篇文献；光看 LLM 生成的摘要，就能让你更了解有哪些研究，日积月累也会形成更深入的认识。
3. 当然，如果_确实_有一篇论文看起来和你的工作高度相关，你应该花时间深入研读，不能只靠 LLM 的摘要。
4. 不用焦虑，深入熟悉文献需要时间。重要的是确保自己一直在进步，不要想当然地认为更广泛的文献都没用。
5. 反过来，许多论文_的确_极具误导性，甚至完全是错的，所以别只做了点批判性思考，就把它们信以为真！[^26]

好，那么这些怎么和各个研究阶段联系起来？现在四个阶段都需要考虑。我们先谈怎样加深已有的 exploration 和 understanding 技能，接下来再谈怎么练习 ideation，以及怎么真正把工作写出来。

<a name="Deepening_Your_Skills"></a>

### 深化你的技能

你仍然要做 exploration 和 understanding，不过要更注重严谨性，也要更重视那些培养起来较慢的技能。除了前面谈及研究心态时提到的想法，这里还有一些更具体的建议。

- **Deeper Exploration（深入探索）**的重点是内化追求最高效率的思维方式，在这里就是让单位时间的信息增益尽可能大。经常问自己：「我有在学到东西吗？」
  - _避免钻牛角尖：_ 一个常见错误是，碰巧发现一个异常，就一头扎进去。知道何时转向至关重要。设个计时器，每隔一两个小时退一步看全局，问问自己有没有在取得进展。
    - 我建议，每当你发现自己有点卡住、分心或偏离正轨时，设个 5 分钟的计时器，想一想：接下来我可以做什么？我应该做什么？我现在做的是最重要的事吗？
  - _别把精力摊得太薄：_ 很多事都浅尝辄止，结果就是没有哪一件有意思。
  - 如果你用了五个多小时还没学到新东西，大概该试试另一种方法了。
    - 如果你用了两天多还没学到新东西，就该认真考虑转向，做点别的。
  - 要练习排优先级，就有意识地做决定：写下你_为什么_觉得这个实验选得对，之后再回顾判断是否正确。这样能把直觉摆到明面上，更容易修正。
- **Deeper Understanding（深入理解）**的重点是练习怀疑精神，建立经得起攻击的论证。毫不留情地对自己的结果做 red-teaming（红队检验）。
  - 有些实验远比另一些更有影响力、信息量也更大！别脑子里冒出第一个实验就去做。想想假设_可能_在哪些关键方面出错，又该怎么检验。也想想，怀疑者能不能用别的解释把正面实验结果说过去。
    - 一个有用的练习是想象你在和一个特别难缠的怀疑者交谈：对方不停抱怨说不信你，还能不断想出论点说你搞错了。你可以做什么，让对方的论点完全站不住脚？
  - 当然，也要考虑优先级。有时，如果你处理的是不重要的附带主张，或某件从先验判断看就极为可信的事，做个不太深入、仍有可能出错的论证就已经足够了。这时你就该继续往前，去做别的更有意思的事。
  - 练习：要练习识别不易察觉的假象，可以对自己读的论文做 red-teaming，想想潜在缺陷，最好亲自跑一遍实验。

<a name="Doing_Good_Science"></a>

### 做好科学研究

- **避免 cherry-picking（挑拣证据）**：研究者可能无意或有意地拿出看起来比实际更有说服力的证据。一个经典手法就是 cherry-picking：只展示看起来最有说服力的例子。
  - 把工作写出来时，一定要放一些随机选取的例子，尤其是你对特定对象做了大量定性分析时。如果篇幅紧张，放进附录也可以，但一定要有。
- **使用 baseline**：一个常见错误是，人们试图通过展示某种技术能得到「还不错」的结果来证明它有效，却没有证明它胜过别人可能会用的合理替代方案或该领域的标准做法。比如，你想让大家用你那些很酷的 steering vector（引导向量）成果，就得证明它比改 system prompt（系统提示词）更有效。
- **别故意把 baseline 做弱**：同样，人很容易在为自己的技术找好 hyperparameters（超参数）上，比为 baseline 花更多工夫。尽量确保你的 baseline 能达到与领域内以往工作相当的结果。
- **给花哨的方法做 ablation（消融实验）**：人很容易设计出有很多组件的花哨方法，其实许多组件没有必要。一定要试着去掉一个组件，看看方法会不会失效。每个组件都这么试一遍。
  - 例如，[RMU 论文](https://arxiv.org/abs/2403.03218)的[原版 unlearning（机器遗忘）方法](https://arxiv.org/abs/2403.03218v1)声称它的基础在于找到一个有意义的 steering vector，后来后续研究发现，起作用的只不过是加一个范数很高的向量，让模型失灵；随机向量的表现也一样好。
- **（非正式地）预注册主张**：务必清楚记录哪些实验结果是在你提出主张之前得到的，哪些是在之后得到的。Post-hoc analysis（事后分析，也就是先看到结果再解释）天然不如通过事先指定的实验得到验证的预测有说服力。
- **确保 reproducibility（可复现性）**：条件允许时，分享代码、数据和模型。
  - 如果有时间，确保代码能在一台全新环境的机器上运行，并附上一份好用的 README，链接到关键的模型权重和数据集。
  - 这样做不仅意味着别人可以查证你的工作是否可信，还更可能让人相信你的工作、在此基础上继续开展研究[^27]：复现研究更有可能出现，大家也更容易查看这些复现，接着做的门槛也低了。
- **Simplicity（简单）：** 优先试简单、显而易见的方法。花哨的技术可能是个陷阱。好的研究讲求实用，不靠炫技。
  - 如果你在设计一项花哨的技术或实验，每增加一个细节，就多一个可能出错的地方。
  - 在尝试解释神秘现象时，新手研究者经常忽视一些简单到有点傻的假设，比如「也许 MLP0 对_所有_输入都极其重要，我的 prompt 根本没有什么特别之处」。
- **定性**_**与**_**定量并重**：推动现代 machine learning 进步的一大因素是做定量研究，有 benchmarks（基准测试），并能展示某种技术在上面提升了分数。推动 mech interp 进步的一个关键因素则是愿意做定性研究：汇总统计会丢掉大量信息。真正深入地看看到底发生了什么，我们能学到什么？
  - 在我看来，最好的研究会争取兼得两者的长处：先通过定性分析理解正在发生什么，再用更定量的方法验证。如果论文只做了其中一种，可能就错过了不少东西。
- **读你自己的数据**：尤其是在 exploration 阶段，实实在在地读一读你正在用的数据，或者模型的 chains of thought 和回答，是非常值得花时间的。
  - 数据质量往往对实验结果有关键影响。数据质量也经常很差。
  - 有时，项目的大部分工作就是发现数据里的问题并制作一个更好的数据集。花时间把这件事弄清楚非常值得。
  - 同样，在附录里放一些随机抽取的数据样本，让读者可以自行抽查。
- **不要重复造轮子**：在 mech interp 中，一个常见错误是做了别人已经做过的事[^28]。现在已经能借助 LLM 做文献调研，更没有理由不先查了。先查！

- **令人兴奋，本身就是可能在扯淡的证据**：一般来说，大多数真实的结果并不令人兴奋，错误结果中却有相当一部分令人兴奋。所以从 Bayesian（贝叶斯）角度看，一个结果如果很酷、令人兴奋，它出错的概率反倒比平常更高！
  - 克制激动的冲动！面对令人兴奋的结果，正确态度是保持深度怀疑，直到你已经非常努力地尝试证伪，并且再也想不出新的办法。
- **把统计做对**：在样本量是否合适、手头的证据能支持哪些推断又不能支持哪些推断等问题上，有许多陷阱需要避开。我的一位 MATS 往届学员 Paul Bogdan 就这个话题写了篇很棒的博客文章，[见这里](https://www.alignmentforum.org/posts/GxhtzqMwdTHo6326y/statistical-suggestions-for-mech-interp-research-and-beyond)。

<a name="Practicing_Ideation"></a>

### 练习 Ideation

好，现在你想真正想出值得做的好研究点子。具体该怎么做？我建议把这件事分成两步：先**生成点子**，然后**评估**，找出最好的几个。

要生成点子，我通常会先打开一份空白文档，留出至少一小时，把能想到的点子尽量都写下来。先求数量，不求质量。至少想 20 个。

还可以做一些别的事来帮助自己产生点子：

- 在之前的每个 sprint 中，每当你偶然对什么产生好奇，或注意到什么古怪的事，就把它写进一份长期维护的大文档。
- 同样，读论文时，记下困惑、好奇之处，以及显而易见值得试的事。

好，现在你有了一份长长的清单。怎么从中找出最好的点子？

- 理想情况下，如果你有导师，或者至少有合作者，直接请他们打分就行。
  - 如果这么做，在看他们的回复之前，先私下给每个点子打个分，满分 10 分。把分数拿来比较，每当差距很大，就和导师聊聊，搞清楚你们的直觉为什么不同。这是培养 research taste 的绝佳监督数据来源。
- 即使没有导师，我认为，把清单过一遍，凭直觉逐个打分再排序，也是不逊于其他方法的筛选方式。
- 对于排在前面的几个点子，我建议试着回答几个问题。
  - 这个点子做成功了会是什么样？
  - 如果做了一个月，什么有意思的事都没发生，我会有多惊讶？
  - 这需要哪些技能？我已经会了吗，或者能轻松学会吗？
  - 这需要哪些模型、数据、算力等资源？
  - 和最相关的已有工作相比，这个点子有什么异同？我能不能先查查已有工作，看看能找到什么相关成果？

<a name="Research_Taste_Exercises"></a>

#### Research Taste 练习

Research taste 提升得慢，因为反馈周期很长。你可以通过能更快提供 proxy feedback（替代性反馈）的练习来加快它。（感谢 [Chris Olah 在这里提供的灵感](https://colah.github.io/notes/taste/)）

- 如果有导师，可以向他们请教对具体研究问题的判断，快速拿到反馈数据，再试着模仿他们的判断方式。具体来说：
  - 每次会面前，写一份问题清单，再试着写下你预测导师会怎么说。然后真的问导师，看看他们怎么回答，并加以比较。如果有出入，跟导师聊聊，试着弄懂为什么。
  - 同样，如果导师提出了你没想到的建议或问题，试着追问他们是怎么想到的。
  - 经常用自己的话向导师复述你对他们意思的理解，再请他们指出你理解错的地方[^29]。
- **用论文当作「offline data（离线数据）」来学习：** 读论文时别只是被动接收。读完引言先停下来。试着预测作者用了哪些方法、关键结果会是什么。然后继续读，看看自己的预测和论文有多接近。分析作者为什么做了不同的选择。这能在比你自己的研究大得多、反馈也快得多的数据集上训练你的直觉。

也值得花点时间想想 research taste 究竟是什么。想了解更多，[可以看我的文章](https://www.alignmentforum.org/posts/Ldrss6o3tiKT6NdMm/my-research-process-understanding-and-cultivating-research)。我把它拆成以下几部分：

1. **Intuition（直觉，System 1）：** 这是快速、发自本能的感觉，也是人们提起 research taste 时通常想到的东西：对某个方向、实验或结果感到好奇、兴奋、无聊或怀疑。
2. **Conceptual Framework（概念框架，System 2）**：指深厚的领域知识和对底层原理的理解。
3. **Strategic Big Picture（战略全局观）**：理解领域的整体背景。哪些问题重要？主要的开放问题有哪些？哪些方法已经试过？什么才算有新意的贡献？

<a name="Write_up_your_work_"></a>

### 把你的工作写出来！

到了这个阶段，你应该认真考虑怎么把工作写出来。很多时候，直到动笔，你才第一次真正明白这个项目到底在做什么，或发现关键局限，或想起忘做的实验。你应该看看[我那篇关于怎么写 ML 论文的博客文章](https://www.alignmentforum.org/posts/eJGptPbbFPZGLpjsp/highly-opinionated-advice-on-how-to-write-ml-papers)，那里有更详细的想法（也适用于花很多心力写的博客文章！）。下面我试着简要概括。

<a name="Why_aim_for_public_output_"></a>

#### 为什么要以公开发表为目标？

如果一想到要公开发表就有压力，你暂时可以先写在一份私密的 Google Doc 里，或许再分享给一些朋友或合作者。但只要做得到，我都强烈鼓励大家争取公开发表。一般来说，如果没人读，你的研究就不会有影响。研究的目标是为人类[^30]的知识总量作贡献。如果没人理解你做了什么，那就产生不了影响。

此外，如果你想在这个领域发展，无论是找工作、读 PhD，还是仅仅和导师非正式地合作，**公开的研究成果就是你最好的资历证明**。这能很清楚、很具体地证明，你有能力，能把研究做下去，还能做出有意思的东西。别人考虑要不要跟你合作、要不要关注你说的话，恰恰看重这种证据。无论你是在知名 PhD 项目里写出来的，还是一个名不见经传的独立研究者写的，只要东西足够好，就会有人关心。

公开发表可以有几种形式：

- 博客文章（例如发在个人博客或 LessWrong 上）——最简单、最不正式的一种。
- arXiv 论文——比博客文章更容易被研究同行识别为正式成果；坦白说，如果你已经有一篇高质量的博客文章，额外要做的事也不多[^31]。

- Workshop 论文[^32]（也就是提交给 workshop 接受同行评审的论文；workshop 通常是大型 ML 会议的一部分，门槛比会议论文低得多）。

- Conference paper（会议论文；在 ML 领域相当于顶级期刊论文，有相当高的质量门槛[^33]，但录用结果也有_很大_的随机性[^34]）。


如果这些看来让人有点招架不住，先从写博客开始就好。但我觉得大家通常高估了发 arXiv 论文或 workshop 论文的门槛。如果你觉得自己在项目中学到了很酷的东西，完全值得把它写成论文！

<a name="How_to_write_stuff_up_"></a>

#### 怎么写出来？

一篇论文的核心在于叙事主线。读者最终记住的内容不会超过几句话。你的任务是确保他们记住的是最该记住的那几句，还要确保他们信服。

你要把论文提炼成一到三条关键主张（也就是你的贡献），呈现证明这些贡献成立的证据，并说明读者为什么该关心这些主张，再把这一切串成一条连贯的叙事主线。

**Iterate（迭代）**：我很喜欢一轮一轮地写。先想清楚贡献与叙事主线。然后写一份精炼的概述，也就是 abstract（摘要；博客文章里应该写成 TL;DR 或 executive summary，同样非常重要！）。再给论文写一份分点提纲：你想讲哪些要点，要提供什么证据，打算怎么逐步铺垫、引出这些证据，以及想怎样安排结构和顺序，等等。如果你有导师或合作者，分点提纲通常是征求反馈的最佳时机。如果导师很投入，也可以在形成叙事主线时就找他们。然后写 introduction（引言），确保自己对它满意。再往后（甚至可以在写引言之前）制作图表，图表极其重要！然后把提纲扩写成完整正文。读者花在摘要和引言上的时间比花在正文上的_多得多_，尤其是把所有只看摘要就停下来的人也算上。所以在这些部分，你应该平均为每个词多花很多时间。

**LLMs**：我觉得 LLMs 是很有帮助的写作工具。它们特别适合用来获取反馈，尤其是你在尝试一种不熟悉的写作风格时，例如你可能还不熟悉学术 ML 论文的写法。记得用 anti-sycophanty prompts（抑制奉承的提示词），才能获得真实的反馈。不过，LLM 写的劣质文章往往一眼就看得出来。所以把它们当工具用，别干脆把整篇东西都丢给它们写。不过，比如遇到写作卡壳时，让 LLM 帮你头脑风暴，或者生成初稿来找灵感，都可以很有帮助。

<a name="Common_mistakes"></a>

#### 常见错误

- **读者没有你掌握的背景**：你会觉得论文在自己脑子里很清楚，因为你刚在这个项目里沉浸了几周到几个月。读者可没有。你会高估读者觉得论文有多清楚，所以要大幅往反方向纠偏，尽可能直白地把一切交代清楚。
  - **这个错误极其常见** \- 做好自己也会犯的准备。
  - 主要的解决办法是找人给反馈：他们要有足够的研究背景，能真正读懂并参与讨论，也愿意给你有实质内容的负面反馈。
    - 当别人被你自认为很清楚的地方弄糊涂时，留意自己那种惊讶的感觉。试着弄懂他们为什么困惑，反复修改，直到表达清楚。
- **别把写作留到最后才考虑**：人们往往不把写作放在优先位置。他们觉得这是件烦人的收尾工作，于是先做完跑实验之类有趣的部分，把写作留到最后一刻。
- **承认局限**：一个常见错误是试图把自己的工作说得尽可能令人兴奋。通常你最在意其看法的那些人，都是有能力看穿这类做法的研究者。
- **好的写作很简单**：人们往往写得冗长，或把事情说得比实际更复杂、更花哨，好让它显得了不起。我认为这种策略很不奏效。
- **记得解释为什么值得关注**：你的论文为什么重要、哪里有趣，对读者而言通常并不显然。他们没有你掌握的背景。你有责任说服他们，让他们知道为什么该关注你的工作，最好在摘要里就说清楚，也可以放在引言里，免得他们干脆放弃，不再读下去。

<a name="Mentorship__Collaboration_and_Sharing_Your_Work"></a>

## 导师指导、合作与分享研究成果

上文反复提到一点：有一位导师，或至少有几位合作者，会非常有帮助。这里我会详细解释原因，并给出一些寻找导师的建议。

不过也值得一提：许多导师其实并不是出色的研究者，他们的研究品味（research taste）可能不佳，也可能不太适合mechanistic interpretability（mech interp）。遇到这种情况怎么处理，主要还是看你自己。

<a name="So_what_does_a_research_mentor_actually_do_"></a>

### 那么，研究导师到底做些什么？

一位好导师能极大地加快你的进步。学术界虽然有诸多弊病，但博士生和导师之间这种类似学徒制的安排之所以行得通，自有它的道理。我刚开始指导别人时，很惊讶于每周聊一次竟然能带来这么大的变化！以下是我对好导师能在哪些方面提供帮助的梳理：

- **提出研究点子**：刚起步时，让你先绕过最难的技能（构思研究点子，ideation），把精力放在执行上。
- **帮你排定优先级**：凭借更丰富的经验，帮你判断该做哪些实验，让你完成更多工作。
- **判断何时转向**：如果当前的研究方向走不通，有导师督促你转向，可能非常有价值[^35]

- **为培养研究品味提供监督数据（supervised data）**：对于构思研究点子、排定优先级这些需要很久甚至特别久才能练成的技能，起步时先学着模仿导师的做法，掌握起来会快_得多_。
- **充当你与研究文献之间的接口**：在你还没积累起深厚的知识之前，帮你找到相关研究。告诉你有哪些标准基线（baselines）、标准指标（metrics）、相关技术和已有研究，免得你重复造轮子，等等。
- **对研究结果做红队式审查（red-teaming）**，帮你发现那些不易察觉的可解释性假象，以及你因太熟悉自己的工作而看不到的推理漏洞。
- **指出你缺少哪些技能**，包括你之前甚至没意识到算是技能的东西。总体上指导你怎么学、先学什么。
- **手把手教你如何介绍自己的工作**，帮你提炼研究发现，清楚地传达给外界。
- **动力与督促**：许多人发现，只要有个可以汇报工作的人，即便对方不太干预，自己也会更有动力，更愿意对进度负责（尤其是比如想给导师留下好印象、想找工作等情况下。当然，这些也会增加压力！）
  - 对于容易陷入分析瘫痪（analysis paralysis）的人，碰到拿不准的决定时能听从导师的判断，可能很有帮助。
- **推荐与背书**：有位导师能为你的能力作证，会很有帮助，尤其是当他们认识将来可能聘用你的人时。

<a name="Advice_on_finding_a_mentor"></a>

### 寻找导师的建议

下面介绍一些在转入这个领域时获得指导的办法。读 PhD 或找一份研究工作等需要投入更多的途径，我会在下文讨论。

注意：无论你怎么找导师，能证明自己可以独立做研究都非常有帮助，值得优先考虑。具体来说，就是拿出公开成果，展示你能自我驱动、肯下功夫，最好还能展示确实有趣的研究发现。

<a name="Mentoring_programs"></a>

#### 导师指导项目（mentoring programs）

我认为像 [MATS](http://matsprogram.org/) 这样的导师指导项目是进入这个领域的绝佳途径。通常，你会全职参与几个月，在此期间写一篇论文，并每周与一位更有经验的研究者交流进度。体验会因导师水平而有很大差异，但至少对我指导过的 MATS 学员来说，即使此前完全没接触过 mech interp，也常能在几个月内发表一篇顶会论文。更多细节见[我的 MATS 申请说明文档](https://tinyurl.com/neel-mats-app)。

参加这些项目并从中受益的人**背景五花八门**：既有完全没接触过这个领域的人，也有拥有一年以上可解释性研究经验、想跟更有经验的导师合作的人；有年轻的本科生，也有处于职业生涯中期的专业人士（包括几位教授），等等。

我的 [MATS 10.0 申请](https://tinyurl.com/neel-mats-app)现已开放，截止日期为 **2025 年 12 月 23 日**。

其他项目（我认为整体质量不及 MATS，但视导师而定，往往仍值得申请）：

- _全职／线下：_ [MATS](https://www.matsprogram.org/)、[Pivotal](https://www.pivotal-research.org/fellowship)、[LASR](https://www.lasrlabs.org/)、[PIBBSS](https://pibbss.ai/fellowship/)
- _兼职／远程：_ [SPAR](https://sparai.org/)、[MARS](https://www.cambridgeaisafety.org/mars)

<a name="Sending_A_Good_Cold_Email"></a>

### 如何写一封好的陌生邮件（cold email）

你也可以主动出击，试着说服某个人担任你的导师。主动联系他人可能很有效，最好能请熟人引荐，但即使只是直接发一封陌生邮件也可能奏效。不过，我收到过很多这类邮件，其中不少效果不佳。以下是一些建议：

- **不要只给最知名的人发邮件**。很多人只会联系领域里最有名的人，请他们担任导师。这个办法不好！这些人很忙，收到的邮件也很多。每当有人发邮件请求指导，我几乎都会下意识地回复：「请申请我指导的那一期 MATS。」
  - 不过，有很多知名度没那么高的人可以提供相当有用的指导。他们更可能为收到一封陌生邮件而高兴，也更可能有时间交流，甚至有余力认真指导一个项目。
  - 我觉得，最近加入我团队的许多人，或曾在 MATS 期间和我一起做出很棒的论文的人，都能给刚入行的人带来很多帮助。我建议你联系他们！
    - 一条经验法则：给论文第一作者发邮件，不要只盯着名气大的末位作者。
- **从小事开始**：别给一个从未打过交道的人发邮件，一上来就问对方愿不愿意相对正式地指导你的某个项目。这需要对方作出很大的承诺。
  - 更好的说法是，你想聊聊对方的论文，或聊聊你在他们论文基础上开展的工作。
  - 或者只问问对方是否愿意抽空聊聊，给你的一些项目构想提点意见，等等。
  - 如果进展顺利，这可能会自然发展成更长期的指导关系！
- **拿实际工作说话（proof of work）**：证明你确实对这位收件人感兴趣，并非在到处群发邮件。
  - 表明你认真看过对方的工作，说点有见地的话，提几个问题。
    - 诚然，在 LLM 时代，做到这一点没以前那么费力，因此它也不像过去那样能证明你真的对这位收件人感兴趣。
    - 不过，附上你在对方工作基础上所做研究的链接，我觉得仍需要实实在在的投入，也很能让对方感受到你的重视。
- **果断排好优先级**。假设读者随时都可能停下来，把最关键、最能留下印象的信息放在开头。
- **说明你是谁**：如果收件人收到的邮件多到回不过来，他们就会决定优先回哪些。一个关键判断依据就是：你是谁、做过什么、有没有做过有趣且能体现潜力的事情、是否具备相关资历，等等。我个人觉得，如果对方在开头一两句话里就说清自己最出彩的地方，会很有帮助。
  - 想做到这一点又不显得自负，可以试试：「我想您一定经常收到这类邮件。为方便您判断是否优先处理，我先简单介绍一下自己的情况。」
- 用**粗体**标出关键短语，方便对方快速浏览邮件。
- **简洁**。我通常会喜欢这样一封邮件：先用一小段概括请求，再附一份较长文档的链接，等我感兴趣时可以点进去看详情。
- **提出能快速回答的问题**：一般来说，我看邮件时要么马上回复，要么再也不会回头看。如果能很快回完，我马上回复的概率就大得多。如果你确实想给一位忙碌的人发邮件，一开头就提出一个清楚、具体、对方可能帮得上忙的问题。

<a name="Community___collaborators"></a>

### 社群与合作者

找合作者比找导师容易得多。你可以找人一起做同一个项目，也可以找同样想多了解 mech interp 的人，一起交流、互相提意见：

- **线下：** 当地的 AI Safety 社群中心（伦敦、旧金山湾区等）、大学团体、ML 会议（例如我参与组织的 [NeurIPS Mech Interp workshop](http://mechinterpworkshop.com/)），以及 EAG/EAGx 会议。
  - 如果你是学生，可以看看自己学校有没有实验室里有人对可解释性感兴趣。即使没有教授做这个方向，也可能有感兴趣的博士生。
- **线上**：这些地方也很适合认识人！我建议分享自己的工作、征求反馈，或者直接问问谁和你有同样的兴趣。然后试着给有回应或看起来感兴趣的人发私信（DM），看看会有什么进展。
  - [Open Source Mechanistic Interpretability Slack](https://www.neelnanda.io/osmi-slack-invite)
  - [Eleuther Discord](https://discord.gg/nHS4YxmfeM)（interpretability-general 频道）
  - [Mech Interp Discord](https://discord.gg/ysVfhCfCKw)

**跟进领域动态**：另一个常见问题是如何跟上领域的最新进展。说实话，我觉得刚入行的人不必太操心。大多数新论文都与你无关，连那些被热议的也一样。不过，略微了解一下动态还是好的。这个社群在学术界内外都有相当一部分人，跟进两边动态的最佳方式往往不一样。

- LessWrong 和 AlignmentForum 是了解较少走学术路线的那一半社群动态的不错去处。
- Twitter 让人摸不着头脑，乱糟糟的，但用来跟进两边的动态也还行。该关注谁并不太明确。
  - [Chris Olah](http://x.com/ch402) 不常发推，但发出来的内容质量很高。
  - [我会发推](http://x.com/neelnanda5)介绍我自己所有的可解释性研究，有时也会介绍别人的研究。

<a name="Careers"></a>

## 职业发展

<a name="Where_to_apply"></a>

### 去哪里申请

- Anthropic 可解释性团队的岗位：[研究科学家（research scientist）](https://job-boards.greenhouse.io/anthropic/jobs/4020159008)、[研究工程师（research engineer）](https://job-boards.greenhouse.io/anthropic/jobs/4020305008)、[研究经理（research manager）](https://job-boards.greenhouse.io/anthropic/jobs/4009173008)
- [OpenAI 可解释性团队的岗位](https://openai.com/careers/research-engineer-scientist-interpretability)
- 我在 Google DeepMind 的团队有望[在 2026 年初招聘](https://deepmind.google/about/careers/#open-roles)！请留意后续消息。
- [Transluce](https://transluce.org/)——一家非营利研究实验室
- [Goodfire](https://www.goodfire.ai/)——一家 mech interp 初创公司，[正在招聘不少人](https://www.goodfire.ai/careers)。
  - 他们[最近完成了 5,000 万美元的 Series A（A 轮）融资](https://www.goodfire.ai/blog/announcing-our-50m-series-a)。截至写作时，他们希望既有人专注于产品，也有人专注于更基础的研究。
- 英国政府 AI Security Institute 的可解释性团队（[目前未招聘](https://www.aisi.gov.uk/careers#open-roles)）

<a name="Applying_for_grants"></a>

#### 申请资助

对于想通过 AI 安全社群进入 mech interp 的人，有一些资助方愿意为职业转型提供资助，帮助他们培养 mech interp 等新领域所需的技能。我知道的最佳去处大概是 [Open Philanthropy 的 Early Career Funding](https://www.openphilanthropy.org/career-development-and-transition-funding/)。

<a name="Explore_Other_AI_Safety_Areas"></a>

### 探索 AI Safety 的其他方向

Mech interp 并不是唯一的选择！安全领域还有许多重要方向，例如 Evals（评估）、AI Control（AI 控制）和 Scalable Oversight（可扩展监督）。与 mech interp 相比，尤其是后两个方向似乎没有得到足够的关注。[GDM AGI Safety Approach](https://arxiv.org/pdf/2504.01849) 概述了这个领域的不同方向。如果你投身这一领域是出于安全方面的考虑，我建议看看有没有其他关注较少的子领域也能吸引你！

<a name="What_do_hiring_managers_look_for"></a>

### 招聘经理看重什么

先不谈几乎所有岗位都会考虑的因素，例如这个人的性格是否合适（这通常只是留意有没有警讯）。以下是我对可解释性领域的招聘经理通常看重什么的理解。

一种有用的思考框架是：从招聘经理的角度看，他们要在带有一定博弈性的环境里，凭少量信息做一场结果不确定的押注。每个申请者都想把自己呈现为最合适的人选。这就意味着经理得依赖难以伪造的信号。但在真正和一个人共事相当一段时间之前，其实很难获得那么多关于对方的信息。

作为候选人，你的目标是为自己的能力提供有说服力、难以伪造的证据。最好的做法就是把研究做好，并公开分享。如果你的研究履历足够出色，面试可能只用来排查明显的警讯，并确认你确实能写好代码、做好实验。

关键技能：

- **研究技能：** 有从头到尾完成项目的记录，是最好的信号。论文是展示这项能力的好办法。
  - **研究品味（research taste）**：能想出很棒的研究点子，_又_能将其推进到完成，这种能力既少见又很有价值。
  - **实验设计（experiment design）**：能不能设计出好的实验，把研究构想具体化，再落实为可执行的步骤？
- **对 Mech Interp 概念的理解：** 你理解核心概念、熟悉相关文献吗？
- **产出效率与认真负责：** 这很难通过面试判断，但极为重要。公开可查的有趣成果是很好的信号，来自可信人士的有力推荐也是如此[^36]。

- **工程技能：** 你能熟练使用 Python notebook 吗？能又快又好地写出实验代码吗？能把事情做成吗？知道有哪些常见的坑吗？
- **扎实的工程能力（deep engineering skill）**：除了能迅速搭出实验，你还能在庞大复杂的代码库中找到头绪、写出易维护的代码、设计复杂的软件项目，等等吗？
  - 对于在大型实验室或科技公司做研究的人，这比对独立研究者或学术界研究者重要得多。
  - 有些研究者看起来很有潜力，但我们最终没把他们招进我的团队，最常见的原因之一就是工程能力不够强。
  - 显然，LLM 正在显著改变工程技能方面的游戏规则，但遗憾的是，我认为深层工程技能会比浅层技能难以自动化得多。
  - 遗憾的是，除了在更大、更复杂的代码库里工作并学会应付其中的问题，我没有什么好办法可以建议你用来获得这些技能。和更有经验的程序员结对编程（pair programming），是传递隐性知识的好方法。
- **质疑精神（skepticism）**：你能以建设性的方式看待研究并作出批判性评估吗？尤其是，你能对自己的研究也这么做吗？好的研究者需要能做出结论属实的研究。

<a name="Should_you_do_a_PhD_"></a>

### 你该读 PhD 吗？

我没有 PhD 学位（而且我认为，如果当初试图读一个 PhD，我的职业生涯会远没有现在成功），所以我的看法多少有点偏。不过，这是个常见问题。以下是我听过最有说服力的赞成理由：

- 你会拥有极高的**自主权**。如果你想花好几年深入研究一个没有任何业界实验室愿意资助的小众课题，读 PhD 是为数不多的可行途径之一。
- 这是培养**自行确定研究议程**这一能力的绝佳环境。这是一项重要且难以掌握的技能，在业界更难学到，因为研究议程常常由上而下制定（不过不同团队差异很大）。

以下是我认为读 PhD 往往不是个好主意的原因：

- 机会成本极高。你本可以花这 4–6 年在业界实验室积累直接相关的经验。
- 学术界的激励机制可能和做出有影响力的研究并不一致。例如，发表压力可能让你不愿承认自己工作的局限。
- 指导质量差别极大，糟糕的导师可能让你的日子很难过。
- 生活质量：待遇通常很差，你可能在乎，也可能不在乎；况且你可能只能拿到不在自己首选城市或国家的名额。

即便有上述种种顾虑，读 PhD 对某些人来说无疑是正确的选择！我的总体看法是：

- 最关键的是导师指导：身处一个能与比自己更出色的研究者共事、并向他们学习的环境。
  - 读 PhD 通常是获得这种指导的好办法。不过，如果有其他途径能给你同样的收获，或许更值得选那条路。毕竟读 PhD 也有许多缺点。
- 一般来说，学术导师各自之间的差异、业界经理各自之间的差异，比学术界与业界之间的差异更重要。因此，你应当特别留意具体是谁来指导或管理你。
  - 如果要读 PhD，尽量找机会私下和潜在导师的学生聊聊。如果他们的评价相当负面，你就有充分理由不选这位导师。
  - 一个常见错误是只追求声望最高、名气最大的导师。通常你更该找的是最有时间指导你的导师，而声望和能给你的时间往往负相关。
- 还有一个常见错误：觉得 PhD 一定得_读完_。但如果你真心认为读 PhD 的目的是获得一个学习环境，为什么正式结束博士学业的那一刻就恰好是离开的最佳时机？这些时间点其实多少有点随意。
  - 在我看来，你至少应该每六个月认真评估一次自己还有哪些机会，试着申请一些岗位或项目，并做好心理准备：如果有更好的机会，就愿意离开（同时把转换成本考虑进去）。
    - 注意，很多时候你其实可以先休学一年，想回来时再继续读。

<a name="Relevant_Academic_Labs"></a>

### 相关学术实验室

我很喜欢下面这两个实验室的研究成果，它们看起来都是很好的工作去处：

- David Bau（Northeastern）
- Martin Wattenberg 和 Fernanda Viegas（Harvard）

其他看起来也很适合做可解释性研究的实验室（注意，这并不是一份力求完整的名单！）：

- Yonatan Belinkov（Technion）
- Jacob Andreas（MIT）
- Jacob Steinhardt（Berkeley）
- Ellie Pavlick（Brown）
- Victor Veitch（UChicago）
- Robert West（EPFL）
- Roger Grosse（Toronto）
- Mor Geva（Tel Aviv）
- Sarah Wiegreffe（Maryland）
- Aaron Mueller（Boston University）

_非常感谢 Arthur Conmy、Paul Bogdan、Bilal Chughtai、Julian Minder、Callum McDougall、Josh Engels、Clement Dumas 和 Bart Bussmann 提供的宝贵反馈。_

## 原文脚注

[^1]: 注意，我这里指的是一个完整的全职工作月，大约 200 个工作小时。如果你只能兼职投入，用更长时间没关系。如果你能非常专注，或已经有基础，就早点进入下一阶段。
[^2]: 如果你想找个更容易的起点，我以前指导过的一位 MATS 学员推荐让 GPT-5 thinking 生成编程练习，比如一份留有空函数、附带完善测试的 Python 脚本。
[^3]: 写这些代码时需要大量借助 LLM，并查阅文档或教程，都没关系。这不是记忆测验。关键在于能向朋友或 LLM 正确解释每项技术的核心。
[^4]: 注意：这套课程的目标是让你能开始做*独立研究*。这通常足以满足学术实验室的要求，但大多数业界实验室的工程门槛高得多：你需要和数百位研究者一起在一个庞大、复杂的代码库中工作。这些技能需要长得多的时间才能掌握。
[^5]: 收集 activation 时应排除 prompt 的第一个 token。它是一个特殊的 attention sink，norm 往往很高，在不少方面都表现异常。
[^6]: 容易踩的坑：加上这个向量时，记得试一系列不同的系数。这个 hyperparameter 很关键，steering 后模型的行为会随它的取值显著变化。
[^7]: Mixture-of-Experts（MoE）模型的参数很多，每个 token 却只激活其中一部分，给 interpretability 研究带来不少麻烦。更大的模型意味着要用更多或更大显存的 GPU，既昂贵又难操作。尽可能优先使用 dense model。
[^8]: 可以下载 PDF 再上传给模型，也可以直接在 PDF 里全选，复制粘贴到聊天窗口。不用修正格式问题，LLM 很擅长忽略这些奇怪的排版痕迹。
[^9]: [repo2txt.com](http://repo2txt.com/) 是把 GitHub 仓库的内容拼成一个 TXT 文件的实用工具。
[^10]: 如果你想看其他观点，可以读 [Open Problems in Mechanistic Interpretability](https://arxiv.org/abs/2501.16496)（多位一流研究者近期撰写的综合文献综述）或 [Interpretability Dreams](https://transformer-circuits.pub/2023/interpretability-dreams/index.html)（Anthropic 两年前的文章）。
[^11]: 出于后面会讨论的原因，我现在对雄心勃勃的 reverse engineering 路线悲观得多。
[^12]: 即便你已有其他领域的研究背景，mechanistic interpretability 仍有足够多的独特之处，至少部分研究直觉需要重新培养。这个阶段对你依然很有用，不过你应该能学得更快。
[^13]: 下文会围绕这种研究学习方式来展开，并解释为什么我认为它合理。显然，学习研究没有唯一正确的方式！比如，我若把某种做法称为「错误」，请理解为「我经常看到有人这么做，而且觉得对他们来说不是最好的选择」，不表示「这种做法在任何研究学习路径下都不可能是个好主意」。
[^14]: 这是我用来概括相关知识、理解、直觉等的说法。
[^15]: 可以读读[我对 SAE 的看法](https://www.alignmentforum.org/posts/4uXCAJNuPKtKBsi28/sae-progress-update-2-draft)。还有有价值的工作可以做，但这个方向已经吸引了过多研究投入，我们应该提高标准。SAE 是有用的工具，只是前景没有我曾经期望的那么好。
[^16]: 这里用的是一种叫 synthetic document fine-tuning 的技术（另外也有一些创意）。基本思路是生成一批把某些错误信念当作事实来写的虚构文档，再用这些文档做 fine-tuning，从而把这些错误信念植入模型。
[^17]: 我们挑选了自己真心希望有人研究的问题，同时尽量避免形成追逐风潮的局面。
[^18]: Latents 指 SAE 的 hidden units。它们最初被叫作「features」，但这个词也可指「latent 所对应的可解释概念」，所以我改用不同的称呼，以尽量减少混淆。
[^19]: 我指导的一位 MATS 学员在一天内做出了一个能用的 GPT-5 model diffing agent。
[^20]: 这是全文唯一一句没有「截至 2025 年 9 月初」这一限定的话；我觉得这点不会很快过时。
[^21]: 注意：「think」和「chain of thought」都是很糟糕的术语。更有用的理解是：chain of thought 是一块 scratchpad，短期记忆非常有限的模型可以选择使用，也可以不使用。
[^22]: Reasoning model 让很多常用的 interpretability 技术不再适用：其 computational graph 现在要通过数千次 sampling，而 sampling 是离散、不可微且随机的。大多数 interpretability 技术聚焦于单次 forward pass。
[^23]: 例如，不限于能发论文的问题。
[^24]: 我在那篇博客里把这叫作「快速推进」，但我觉得这个说法可能让某些人误解了。
[^25]: 不过，很多时候，只需写一段好的引言就能做到。
[^26]: 遗憾的是，有知名研究者担任共同作者，也不足以排除这一点。我很肯定，我过去一两年合写的论文里，至少有一篇的主要内容是错的。
[^27]: 让别人基于你的工作继续做，对你自己很有利：这会让你的原始工作更显价值，而且看着别人深入研究你做的东西，本身也很酷。
[^28]: 有意复现既有研究，或尝试证明旧工作做得不扎实，完全合理。只需要避免在不知情的情况下重复造轮子。
[^29]: 不管你是否专注于培养 research taste，一般来说，这都是件值得做的事！
[^30]: 我想，如今大概也包括 LLM 方面的知识？
[^31]: 注意，你需要由一位发表过数篇 arXiv 论文的人为你背书。ML 论文通常归入 `cs.LG`。
[^32]: 只要 workshop 是 non-archival（不纳入正式论文集）的，同一份稿件就可以既投 workshop，也投 conference。
[^33]: 写 conference paper 要多花不少功夫。一般最好与熟悉学术惯例、行内规矩以及各个流程关卡的人合作。我觉得这可以是一个不错的目标，尤其是你刚起步、需要一些能证明自己的成果时。不过，mech interp 没有大多数学术子领域那么看重 peer review。
[^34]: 见[这个 NeurIPS 实验](https://blog.neurips.cc/2021/12/08/the-neurips-2021-consistency-experiment/)：换一组独立的评审，spotlight 论文中会有一半被拒。
[^35]: 在我看来，这是我为自己指导的 MATS 学员所做的最有价值的事情之一。
[^36]: 遗憾的是，通常的推荐文化，特别是在美国，基本上是说假话。不同情境下说得有多夸张也不一样，所以推荐意见大多没什么用，除非招聘负责人熟悉其文化背景；最好是推荐人本来就是对方认识并信任的人。这正是 MATS 等 AI safety 指导项目能非常有价值的原因之一：你的导师往往认识日后可能聘用你的人，这些人会因此觉得聘用你的风险更低。
