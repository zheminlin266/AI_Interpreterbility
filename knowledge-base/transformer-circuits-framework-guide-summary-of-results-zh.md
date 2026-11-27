# 结果摘要解读：从词对统计到归纳头

> 根据 [ChatGPT 分享对话](https://chatgpt.com/share/6b08f3b6-104c-83ea-9730-47c7bf64460d) 整理，已核对[英文原文「结果摘要」](https://transformer-circuits.pub/2021/framework/index.html#summary-of-results)，未复现实验。下面的序列和数字是教学示例，不是论文的实测数据。

读这一节时，可以先问两个问题：**多加一层，模型能做什么新事情？** **作者用什么办法拆解这些计算？** 前一个问题对应「逆向工程结果」，后一个对应「概念要点」。

## 逆向工程结果：多一层带来了什么？

### 零层：根据当前 token 猜下一个

看到 `I love`，如果当前 token 是 `love`，零层模型只能用 `love` 预测下一项。比如它可能给 `you` 50%、`music` 25%、`life` 15%，其余合计 10%。换掉更早的 `I`，但保留当前位置的 `love`，在这个模型里不会改变预测。

这就是 **bigram（二元语法）** 的直觉：已知当前 token，预测下一个 token 的概率。

```mathml
<mi>P</mi><mo>(</mo><msub><mi>x</mi><mrow><mi>t</mi><mo>+</mo><mn>1</mn></mrow></msub>
<mo>∣</mo><msub><mi>x</mi><mi>t</mi></msub><mo>)</mo>
```

下标 t 表示当前位置，t + 1 表示下一个位置，竖线读作「在……已知的条件下」。作者可以从零层模型的权重中直接算出词对分数表。见原文[零层模型](https://transformer-circuits.pub/2021/framework/index.html#zero-layer-transformers)。

### 单层：还能利用更早的线索

看到 `France … the capital is`，当前 token `is` 可以通过注意力读取更早的 `France`，这个头就可能提高 `Paris` 的分数。参与预测的三项是「更早的 A、当前的 B、待预测的 C」，A 与 B 中间可以隔着不少 token，这就是 **skip-trigram（跳跃三元语法）**。当前 token 的直接预测仍然在；注意力头增加的是依赖上下文的分数贡献。见原文[跳跃三元语法](https://transformer-circuits.pub/2021/framework/index.html#interpretation-as-skip-trigrams)。

![二元语法只用当前的 B 预测下一项 C；跳跃三元语法还从 B 回看更早的 A](/guide-images/bigram-and-skip-trigram.svg)
图 1. 上下两行对比：加入注意力后，预测还能利用隔着若干位置的线索。 · [据分享对话重绘][figure-source]

### 双层：把「找匹配」和「接着抄」串起来

试试 `X Y Z A B X`：最后一个 `X` 后面可以接什么？一种典型的**归纳回路**可以这样工作：

1. **第一层做标记。** 在早先的 `Y` 位置，前一 token 注意力头读到 `X`，把「我前面是 `X`」的信息写回 `Y` 的位置。
2. **第二层找匹配。** 最后一个 `X` 发出查询，与早先 `Y` 位置上带有 `X` 信息的键匹配，于是读到那个 `Y`。
3. **把匹配结果用于预测。** 第二层的归纳头提高 `Y` 作为下一项的分数。可以把这个行为记成 `A B … A → B`：遇到重复的 A，就借用上一次 A 后面的 B。

![第一层把 X 的信息写到早先的 Y 位置；第二层从最后一个 X 匹配到这个位置，提高 Y 的分数](/guide-images/induction-head.svg)
图 2. 两层归纳回路在 X Y Z A B X 教学序列中的分工。 · [据分享对话重绘][figure-source]

整个过程只利用当前输入，不需要更新权重。这是**上下文学习**的一个例子。论文也观察到单层模型能做简单的上下文学习；区别在于，双层模型可以让两个头先后完成组成同一个算法的步骤。见原文[逆向工程结果](https://transformer-circuits.pub/2021/framework/index.html#reverse-engineering-results)与[归纳头工作原理](https://transformer-circuits.pub/2021/framework/index.html#how-induction-heads-work)。

## 七个概念要点：怎样拆开模型的计算？

按原文[概念要点](https://transformer-circuits.pub/2021/framework/index.html#conceptual-take-aways)的顺序，可以用下面七句话建立直觉：

1. **同一层的头分别计算，输出相加。** 它们都从该层输入读取信息，各自写出一份结果，最后加回残差流。

   ![同一份输入被三个注意力头分别读取，三个输出相加后再写回残差流](/guide-images/parallel-attention-heads.svg)
   图 3. 同层注意力头各自计算，输出最后汇合。 · [据分享对话重绘][figure-source]

2. **路径展开把分数拆成几份贡献。** 假设直接路径给 `Paris` 加 1 分，头 A 加 3 分，头 B 减 1 分。这里加的是 **logit**（转成概率之前的分数）。

   ```mathml
   <mn>1</mn><mo>+</mo><mn>3</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn>
   ```

3. **模型里有不少线性计算。** 以「翻倍」为例：先加起来再翻倍，和各自翻倍后再相加，结果一样。

   ```mathml
   <mtable>
     <mtr><mtd><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><mi>x</mi></mtd></mtr>
     <mtr><mtd><mi>f</mi><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>a</mi><mo>)</mo><mo>+</mo><mi>f</mi><mo>(</mo><mi>b</mi><mo>)</mo></mtd></mtr>
   </mtable>
   ```

   论文做路径分析时，会把这一次运行的注意力分配固定下来，再合并连续运算。换一条输入，注意力的分配也可能改变；整个 Transformer 并不是线性的。

4. **QK 管读哪里，OV 管读到后写什么。** QK 比较当前位置的查询和各候选位置的键，得到注意力分配；OV 把被读取位置的信息转换成要写回的内容。
5. **能把若干权重矩阵合在一起看。** 例如：

   ```mathml
   <mtable>
     <mtr><mtd><msub><mi>W</mi><mi>QK</mi></msub><mo>=</mo><msubsup><mi>W</mi><mi>Q</mi><mtext>T</mtext></msubsup><msub><mi>W</mi><mi>K</mi></msub></mtd></mtr>
     <mtr><mtd><msub><mi>W</mi><mi>OV</mi></msub><mo>=</mo><msub><mi>W</mi><mi>O</mi></msub><msub><mi>W</mi><mi>V</mi></msub></mtd></mtr>
   </mtable>
   ```

   W 表示权重矩阵，右上角的 T 表示转置（交换行和列）。第一行算的是 QK 回路用来比较位置的矩阵，第二行算的是 OV 回路用来转换内容的矩阵。

6. **前一层可以改变后一层的 Q、K 或 V。** Q 组合改变当前位置怎样寻找信息，K 组合改变先前的位置怎样被匹配，V 组合改变被读出的内容。归纳回路里，第一层让 `Y` 的键带上 `X` 的信息，就是典型的 K 组合。
7. **残差流是组件之间的通信通道。** 每个 token 位置都有一组内部数值。把它想成供各层读写的共享工作区；不同组件可以沿不同方向写入或读取信息。

   ![残差流纵向向后传递；不同计算模块分别读取其中的信息，再把结果加回去](/guide-images/residual-stream.svg)
   图 4. 各计算模块通过残差流交换信息。 · [据分享对话重绘][figure-source]

## 数学先补哪几样？

一个数（如 3）是**标量**；一组有顺序的数（如 [1, 2]）是**向量**；排成行列的数是**矩阵**。**点积**是把两个向量对应位置的数字分别相乘，再求和。比如 [1, 2] 和 [3, 4] 的点积是：

```mathml
<mn>1</mn><mo>×</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>11</mn>
```

先认清这几样，就可以继续读 Transformer 概述。子空间和矩阵的秩可以在读到具体用途时再学。

## 自测：猫后面应该接什么？

把每个标签当成一个 token。给模型 `猫 123 狗 456 猫`，它预测下一个 token 是 `123`。如果在前文对调 `123` 和 `456`，一个会用归纳回路的模型有机会改猜 `456`。为什么零层模型做不到这次改猜？双层模型可以怎样找到答案？需要改权重吗？

**答案提示：** 零层在这两条输入里都只看到当前的 `猫`。双层模型如果有上述归纳回路，就可以找到早先的 `猫`，再借用它后面的 token；变化来自输入，权重可以保持不变。

接下来读：[译稿「Transformer 概述」](/articles/transformer-circuits-framework/#transformer-overview)。

[figure-source]: https://chatgpt.com/share/6b08f3b6-104c-83ea-9730-47c7bf64460d
