---
title: "matt pococks agentic engineering workflow just copy him"
tags:
  - ai-coding
  - agentic-engineering
  - claude-code
  - skills
  - strategic-programming
  - matt-pocock
keywords:
  - agentic engineering
  - tactical vs strategic programming
  - AI harness
  - claude code skills
  - AFK agents
  - vibe coding
  - agent queues
draft: true
created: 2026-06-22
updated: 2026-06-22
note_id: 260622GN43
cssclasses:
  - tech-journal
  - analysis
  - longform
---

# Matt Pocock's Agentic Engineering Workflow

A deep dive into how one of the most prolific AI coding tool builders thinks about agents, skills, and the harness around the model.

---

## The Core Thesis: Harness Over Model

Matt Pocock's central argument is contrarian and deliberate: "everyone's obsessed with the model and I think they should be more interested in the harness."

The harness is everything around the model — the prompts, the skills, the codebase architecture, the environment the agent runs in. His reasoning is that you have much more control over the harness than you do over the model, and improving the harness compounds with every model iteration rather than becoming obsolete.

This maps directly to the Bitter Lesson in ML — raw compute beats hand-crafted optimizations eventually — but Pocock argues that for practical software engineering today, harness improvements are *additive* with model improvements, not substitutes. A better model in a better harness beats a better model in a worse harness by more than the model improvement alone.

---

## Strategic vs Tactical Programming

The most important framework Pocock uses comes from John Ousterhout's *A Philosophy of Software Design*:

- **Tactical programming** — the day-to-day work of writing syntax, fixing bugs, creating commits. The trenches work.
- **Strategic programming** — winning the war, not the battle. Codebase architecture, interfaces between modules, test design, making the codebase easy to change.

His thesis: **AI has already eaten tactical programming.** AI is better at tactical programming than humans are, and it gets cheaper every quarter. The value of a human developer now comes entirely from strategic programming — designing systems, scoping tasks, and orchestrating the infinite fleet of tactical programmers you now command.

The upshot is brutal: if your job is primarily tactical, you are replaceable. If your job is strategic, you are leveraged by AI more than ever. This is why senior developers get a 10x boost from AI while juniors get a small bump — seniors already think strategically.

---

## Skills: Procedures vs Abilities

Pocock's skills repo (aihero.dev/skills, or GitHub mattpocock/skills) distinguishes two types of skills:

**Procedures** — user-invoked workflows where the human stays in control. Example: the "grill me" skill, which turns the agent into an adversarial interviewer. Before implementing anything, you run grill me to stress-test your plan. The skill is short — four sentences — and unreasonably effective.

**Abilities** — model-invoked knowledge that the agent can pull itself. Example: coding standards that the agent reads when it needs to write code in a certain style.

Pocock strongly prefers procedures over abilities. He wants to be the one in control, not delegate thinking to the model. His philosophy: "You should be pulling more into your own domain and delegating only the tactical stuff."

The description leakage problem is real — every ability skill leaks its description into the context window. With 100 skills, you're leaking 100 descriptions. Pocock mitigates this by making key skills user-invokable only (disable_model_invocation: true).

---

## The Teach Skill

Pocock's most interesting recent skill is "teach" — a stateful skill that encodes actual teaching principles (zone of proximal development, the difference between knowledge/skills/wisdom) into an agent workflow.

It works by:
1. Establishing a learner's mission (concrete project they want to build)
2. Creating a personalized learning path with trusted resources
3. Producing HTML lessons (not terminal output) with quizzes and exercises
4. Tracking a learning record so the teacher remembers what was covered
5. Using spaced repetition through built-in quizzes

The demo is remarkable: it turned a vibe coder who barely knows git into someone learning version control fundamentals in one session, all personalized around their specific project (a scheduling app for a voice teacher).

This is the pattern: the skill doesn't just tell you information — it orients you in the world and changes what you can do.

---

## AFK Agents: The Queue, Not the Loop

Pocock is skeptical of the "agentic loop" hype. His preferred model is a queue, not a loop.

**The queue model:** Tasks (bug reports, feature requests, explorations) sit in a backlog. An agent picks a task, explores it, labels it (trivial/needs human), implements it, reviews it, and either merges or escalates. The human reviews the system's output and the system's suggestions, not the raw code itself.

His tool Sandcastle runs agents inside sandboxed environments (Docker/Podman/Vercel sandboxes) so they can work in parallel without risking the local system. He runs these on GitHub Actions — label a PR with "agent-review" and it triggers an automated review pipeline.

The insight is that you don't need a while loop. You need a queue with human-in-the-loop checkpoints that get pushed further toward production as confidence increases. The ultimate goal: the human sees the bug report, sees the AI's exploration, sees the fix, and sees whether it's safe to auto-merge — all without writing a line of code.

---

## Key Takeaways

1. **Harness over model** — your skills, prompts, and codebase architecture matter at least as much as which model you use
2. **Strategic programming is the only game left** — tactical coding has been commoditized by AI
3. **Skills are procedures, not abilities** — stay in control, delegate implementation not thinking
4. **Queues not loops** — build task queues with graduated human-in-the-loop checkpoints
5. **Improve AX (Agent Experience)** — a codebase that's easy for humans to navigate is not automatically easy for agents. Design for both
6. **Start blank** — delete all your skills and plugins, observe what the agent does, then layer back only what adds value

---

## References
- Matt Pocock's skills: aihero.dev/skills, github.com/mattpocock/skills
- John Ousterhout — *A Philosophy of Software Design* (strategic vs tactical programming)
- Jeffrey Huntley — RALF loop (original agentic loop concept)
- Peter Strangeman — agentic loop discussions

## Related notes
- [[content/Notes/General_Notes/2026/gn42-startup-funding-complete-guide|Startup Funding Complete Guide]]
