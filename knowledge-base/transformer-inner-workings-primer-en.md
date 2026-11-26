# How Transformer Language Models Work: Paper Notes

> **Paper:** *A Primer on the Inner Workings of Transformer-based Language Models*, by Javier Ferrando, Gabriele Sarti, Arianna Bisazza, and Marta R. Costa-jussà. arXiv:2405.00208, first submitted April 30, 2024; v3 posted October 13, 2024. [arXiv record](https://arxiv.org/abs/2405.00208) · [Full text (v3)](https://arxiv.org/html/2405.00208v3)
>
> **Verification:** We checked the v3 full text. These are original reading notes; we did not independently verify or reproduce the experiments the paper reviews. The paper lists Universitat Politècnica de Catalunya (Ferrando), CLCG at the University of Groningen (Sarti and Bisazza), and FAIR at Meta (Costa-jussà). These affiliations do not establish current appointments or individual contributions.

## What question does the paper answer?

This technical primer focuses on **generative, decoder-only Transformers**. The authors explain how a model computes next-token scores, then organize methods into two groups: **behavior localization** asks which inputs or internal components affect a prediction, while **information decoding** asks what can be read from internal representations. The paper then surveys findings about attention heads, feedforward networks, residual streams, and multi-component circuits. [Introduction, §1](https://arxiv.org/html/2405.00208v3#S1)

## Start with the model’s computation

Each token position has a **residual stream** updated across layers. In the architecture described in the paper, an attention head uses queries and keys (QK) to select and weight source positions, while its value and output projections (OV) determine what it writes to the residual stream. The feedforward network (FFN, often called an MLP) computes an update independently at each position. The final prediction head maps the representation to vocabulary scores, or logits. The additive residual stream lets us decompose what components wrote on a given forward pass. That decomposition is not an intervention: editing an early component can also change what later components compute. [Model components and decompositions, §2](https://arxiv.org/html/2405.00208v3#S2)

## Two lines of analysis, three kinds of evidence

| Method | What it can answer | What it does not establish by itself |
| --- | --- | --- |
| [Input attribution, §3.1](https://arxiv.org/html/2405.00208v3#S3.SS1) | Which input tokens matter to a chosen prediction under the attribution rule? | Token importance does not explain the model’s internal processing; attention weights alone omit what is written and its downstream effects. |
| [Direct logit attribution, §3.2.1](https://arxiv.org/html/2405.00208v3#S3.SS2.SSS1) | How much did a component’s write directly contribute to the target logit on this run? | This is not the effect of removing the component, and it omits indirect effects through other components. |
| [Activation patching, §3.2.2](https://arxiv.org/html/2405.00208v3#S3.SS2.SSS2) | How does a target metric change when an activation is replaced with a value from a control run? | The effect depends on the replacement source, location, and metric. It does not automatically generalize across inputs, tasks, or models. |
| [Circuit analysis, §3.2.3](https://arxiv.org/html/2405.00208v3#S3.SS2.SSS3) | Which components and connections work together to produce the behavior? Edge or path patching can test specific interactions. | A working pathway need not be unique or explain the entire behavior. |
| [Probes, §4.1](https://arxiv.org/html/2405.00208v3#S4.SS1) | Can a supervised readout predict a labeled property from these activations? | A high score does not show that the original model uses the property; the probe could be learning the task itself. |
| [Sparse autoencoders (SAEs), §4.2](https://arxiv.org/html/2405.00208v3#S4.SS2) | Which sparse features approximately reconstruct the activations and offer candidates for interpretation? | The dictionary need not be unique, and not every feature necessarily corresponds to a nameable concept. |
| [Logit and tuned lenses, §4.3](https://arxiv.org/html/2405.00208v3#S4.SS3) | Which tokens appear when we map an intermediate state into vocabulary space? A tuned lens first applies a learned transformation. | The readout is not the original model’s prediction after its later layers run, and it does not show that a token signal has a causal effect. |

A useful progression is **read out a signal → change behavior through intervention → explain how components work together**. Each step calls for additional evidence.

## Two examples of discovered mechanisms

- **Induction heads.** For a pattern like `A B … A`, in a classic two-head mechanism, a previous-token head first passes information about `A` to the earlier `B` position. The induction head can then use the current `A` to find that position and raise the score for `B`. This illustrates QK matching and OV copying for one continuation pattern, not an explanation of all in-context learning. [Induction and copying, §5.1.2](https://arxiv.org/html/2405.00208v3#S5.SS1.SSS2)
- **Indirect object identification (IOI).** The primer summarizes Wang et al.’s work on GPT‑2 Small: a sentence introduces Mary and John, then says John gives something to someone; the target is Mary. In the proposed circuit, one group of heads signals that John occurs twice, another uses that signal to suppress selection of John, and name-copying heads promote Mary. The result is specific to the model and prompt distribution studied. [Multi-component behaviors, §5.4, Figure 15](https://arxiv.org/html/2405.00208v3#S5.SS4)

## How to read and use it

- **To try an experiment:** Start with the architecture in §2, then read activation patching in §3.2.2 and the IOI example in §5.4. Use paired prompts and held-out examples to test the same behavior. Record the patch location, control source, and target-token logit difference, then check whether changing the control alters the conclusion. This is a suggested exercise; we did not run it in this repository. [Tools overview, §6](https://arxiv.org/html/2405.00208v3#S6)
- **To assess what the evidence supports:** Read §4 to distinguish readout from intervention, then §7. The authors identify a key challenge: turning findings from controlled toy tasks into practical ways to debug models and improve reliability. The primer does not establish that this transfer has been achieved. [Conclusion and future directions, §7](https://arxiv.org/html/2405.00208v3#S7)
