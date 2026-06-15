# Hycle Ignite talk — 25-minute message talk for the alphalist DEV Bootcamp

## Context

Andreas speaks on Day 2 of the alphalist Agentic Engineering DEV Bootcamp (June 16–17, 2026, Jufa Hotel Hamburg, 50 senior engineers / EMs / tech leads in five pods). His slot is **Day 2, 14:00–14:30**, currently titled "Live walkthrough: hycle in action." It hands off directly to **Pod Block 4 (14:30–16:00, Nermin & Stefan, "cycle")**, whose stated purpose is "what changes for roles, teams, and process when execution becomes instant."

By the time Andreas takes the stage, the pods have spent a day and a half **building a software factory**: foundation (skills, hooks, rules) → pipeline (RPI, sub-agents, fast feedback, determinism) → evals & optimization. They have a working factory and have not yet been confronted with the organizational question.

The talk is the "so what" turn of the whole bootcamp. Its message: **the factory you built is the easy part. On its own it makes the company worse, because the bottleneck has moved from execution to decisions. If you speed up execution without changing who decides what to build, you ship unneeded features faster, or AI becomes a cost-cutting tool instead of an innovation engine.** The talk does not give answers; it sets up the three questions Nermin's pod block makes participants answer for their own organization.

Drawn from the **Hycle manifesto** (the bottleneck shift, Handlungsfähigkeit, the seven hypotheses, the operating model and roles) and the **agentic PM trainings** (the "build trap on steroids," discovery as the human capability AI can't replace, the role shift).

### Decisions locked
- **Language:** English (matches all bootcamp materials, brand deck rules, international audience).
- **Format:** Pure 25-minute message talk. No live demo.
- **Edge:** Provocative / Ignite. Confront the room.
- **Status:** outline + full speaker script below. Slides built afterward.

---

## The spine

- **One-line message:** You built a factory. Now change the organization that decides what it builds, or the factory just makes your company faster at being wrong.
- **Working title:** *The factory is the easy part.* Alternates: *You built a factory. Now what?* / *The bottleneck moved.*
- **Audience voice:** peer to peer. Senior engineers who just did the hands-on work. No vendor language, no hype.
- **Arc:** hook → the bottleneck moved → the trap (two bad futures) → what actually changes (structure, not tools) → what's yours vs what isn't (start bottom-up, then the authority you can't refactor alone) → handoff to Nermin.
- **Timing target:** ~22 minutes of content in a 25-minute slot, leaving buffer for a slow start and the handoff.

### Constraints when slides are built (from `brand/`)
- Slidev or TS deck, h&w theme, logo watermark on every slide.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels).
- **Banned terms:** "leverage", "best practices", "transform", "methodology", bare multipliers like "10x". Sentence-case headings, plain ASCII punctuation, no em-dashes.
- Concrete claims, active voice. One idea per slide.

---

## Beat-by-beat outline

| # | Beat | Time | Slide visual (for later build) | Purpose |
|---|------|------|--------------------------------|---------|
| 0 | Title | 0:30 | "The factory is the easy part." h&w mark. | Set tone. |
| 1 | Cold open | 2:00 | Black slide, one line: "It works. And on its own, it makes your company worse." | Hook. Earn attention by contradicting their last 1.5 days. |
| 2 | The bottleneck moved | 5:00 | Constraint diagram: old bottleneck (execution) crossed out, arrow upstream to "the decision." | The core Hycle observation. |
| 3 | The trap: two futures | 4:30 | Two paths that converge: "faster waste" / "rationalization" (Block, Feb 2026). | The provocation. Name the uncomfortable outcomes. |
| 4 | What actually changes | 6:00 | Three shifts, revealed one at a time; FINN as the proof. | The substance: structure, not tools. |
| 5 | What's yours, what isn't | 3:00 | Split: "Monday, your team" vs "the conversation outside the room." | Give agency first, then name the wall. |
| 6 | Handoff to Nermin | 1:30 | The three questions, full screen. | Tee up the pod block. |

---

## Full speaker script

Written for the room, first person (Andreas). Provocative, peer voice. Pauses marked `[beat]`.

### Beat 1 — Cold open (2:00)

> A day and a half ago you walked in here. Since then you built a software factory. Skills, hooks, rules. A pipeline that plans, builds, and checks its own work. Evals that tell you when it drifts. I watched a few of your pods this morning. Some of you are already shipping faster than you did last month.
>
> So let me ruin your afternoon. [beat]
>
> The factory you just built is the easy part. And on its own, it will not make your company better. It can make it worse. For the next twenty minutes I want to convince you why, and what you actually have to change. Because the thing that has to change is not the code.

### Beat 2 — The bottleneck moved (5:00)

> Every few decades a technology removes a constraint that everyone quietly built their organization around. We are living through one of those right now.
>
> For thirty years the constraint in software was execution. Building the thing was slow, expensive, scarce. So we built everything around that scarcity. Sprints, to batch the work into two-week boxes. Reviews, to inspect the work after the fact. Roadmaps a quarter long, because that is how long building took. Estimation, story points, the whole apparatus. All of it exists for one reason: writing the code was the bottleneck.
>
> In the last day and a half, you laid the groundwork to remove that bottleneck. You built the engine. Point it at real work and a developer with an agent starts doing in a day what a team used to do in two weeks. [beat]
>
> Here is the question nobody in your building wants to ask out loud. If execution is no longer the constraint, what is?
>
> The constraint did not disappear. It moved upstream, to the decision. Who knows what to build. Who is allowed to decide it. Who has the information to decide it well. When those three things sit in the same place, a team can act. Competence, authority, information, together. When execution was slow, you never noticed the decision was the real bottleneck, because building always took longer anyway. Now building is instant, and the slow decision is standing there exposed. And most companies have no idea how slow their decisions actually are.

### Beat 3 — The trap: two futures (4:00)

> So what happens if you speed up execution and leave the decisions exactly where they are? Two things. Both bad.
>
> The first: you ship faster. That sounds like a win, and part of it is real. A faster factory means cheaper experiments, and cheaper experiments can make your decisions better, because you get to test instead of argue. But an experiment only improves a decision if someone is allowed to act on the result. If the answer still waits nine days for approval, you did not speed up the decision. You built a faster way to produce things nobody acts on. And if you did not know whether a feature was worth building in the first place, you now build the wrong thing in a day instead of in two weeks. You took the build trap and bolted it to a faster engine. The empty backlog your teams are about to hit is not a trophy. It is a smoke alarm. It means your teams can build faster than your organization can decide what is worth building.
>
> The second future is worse. [beat] If you never fix the decision bottleneck, AI has exactly one reliable use left: producing the same output with fewer people. That is the rationalization path. In February, Block did exactly this. Cut about forty percent of staff, more than four thousand people, and named AI as the reason. The stock went up. Profit guidance went up. The market rewarded it. So be honest: this is a real strategy, it pays in the short term, and plenty of companies are choosing it right now. But be honest about the other half too. It is not innovation. It is a company deciding it is out of ideas, and choosing to be cheaper while it waits to get disrupted.
>
> Notice these two are really the same future. Both are what happens when you speed up execution and leave the decision exactly where it is. The factory does not pick one of them for you. And it does not hand you the third path either, the one where it actually makes you better. That path you have to build. With structure, not with tools.

### Beat 4 — What actually changes (6:00)

> So what is the structure. Three things change, and none of them are technical.
>
> **One. Aim at decisions, not execution.** Stop measuring how fast you build. Start measuring how fast you decide. If a team can build in a day but waits nine days for someone upstairs to approve what to build, your bottleneck is not the agent. It is the approval. Go find your slowest decision and time it. That number is your real cycle time now.
>
> **Two. Push the ability to act down to where the work happens, inside a frame.** Competence, authority, information, in the same place. Today they are scattered. The engineer has the competence. A PM two floors up holds the authority. A stakeholder in another department has the information. As long as those three are separated, every real decision becomes a meeting, and your whole company runs on the calendar of one overloaded person. Bring them together. And do not hear that as everyone does whatever they want. The frame is strategy: an honest read of where you actually are, a clear line on what you will and will not do. Give a team that frame plus real authority, then get out of the way.
>
> **Three. The roles blur.** The clean split between the person who decides what and the person who builds it is dying. The role that wins talks to a customer in the morning, decides what actually matters, and has it built by the afternoon. The skill that makes that person valuable is the one thing the agent cannot do: working out what is worth building at all. Discovery. Judgment. Understanding what a human actually meant. If you are an engineer who thinks discovery is someone else's job, that job is about to be yours. And you do not need anyone's permission to start. Stop outsourcing discovery to a single PM. Decide as a team what is worth building, and agree in advance what you do the moment a decision is blocked: who calls it, how fast, when you escalate.
>
> When these three things happen, the rest follows on its own. And this is not theory. In 2026 Andreas Stryz, the CTO of FINN, killed Scrum outright. No sprints, no standups, no retros, no backlog grooming. His reasoning: Scrum was a buffer for when code was expensive. AI compressed the build cycle from weeks to hours, the buffer disappeared, engineers finished faster than anyone could define the next task, and sprints became a waiting room. What replaced it: micro teams, one PM and a few product engineers, each team owning one business KPI instead of a backlog. Not a feature list. A number to move. Three weeks in, his report was sharper decisions and more ownership than in years. That is the shape of it. The two-week sprint dies, because the work took a day. The review where you present after two weeks is absurd when the thing was done on Tuesday. Humans work at the level of the epic and the story, the agent handles the tasks, and you stop managing tickets and start steering direction.

### Beat 5 — What's yours, what isn't (3:00)

> Here is why this is hard, and why I am not going to hand you a checklist.
>
> Start with the part that is yours. The team-level moves I just described, you can start on Monday, without asking anyone. Build discovery into the team. Agree how you act when a decision is blocked. Prove it works on one team, with a number that moved. Nobody upstairs has to approve that.
>
> But the bigger lever is authority. Who is allowed to decide. And authority is the one thing you cannot refactor from inside your own team. You can change your code this afternoon. You cannot change who is allowed to decide without talking to the people who hold that decision today. Your manager. The PM. The stakeholder who owns the budget. The executive who is quietly hoping AI just means a smaller team next year.
>
> So the org-wide version is not a Monday morning rollout, and not a framework you install. It starts with that one team proving it works, and then it takes uncomfortable conversations with people who are not in this room. [beat]
>
> And one more thing. The frustration you feel when a good idea dies in an approval queue. That frustration is not noise. It is data. It is pointing straight at the structure that has to change.

### Beat 6 — Handoff to Nermin (1:30)

> So I am not going to give you the answers. Nermin is about to make you find your own. Before you do, sit with three questions.
>
> One. What is a decision you cannot make today that you would need to make to use this factory fully?
>
> Two. Who holds the authority and the information you are missing, and when did you last actually talk to them?
>
> Three. If you could change one structure, one role, one cadence, one approval, which one do you start on first?
>
> You built the factory. Now go change the organization that decides what it builds. [beat] Nermin, over to you.

---

## Handoff design

The three closing questions are the bridge into Pod Block 4. They map onto Nermin's stated scope ("what changes for roles, teams, and process"):
- Q1 (decision you can't make) → surfaces the **decision bottleneck** in their real org.
- Q2 (who holds authority/information, who to talk to) → the **people and conversations** outside the team. This is the "who do you have to talk to" outcome Andreas wants.
- Q3 (one structure to change first) → forces a concrete **role / cadence / artifact / ownership** change, the raw material for the pod's "cycle" work.

Confirm with Nermin & Stefan that these three questions are the exact prompts the pod block opens on, so the talk and the exercise are one continuous motion.

---

## Open items / flags to resolve before the deck is built

1. **Module README divergence (must resolve).** This module's `README.md` currently scopes the slot as a *live walkthrough with demo fallback*, not a message talk. Update the README to match the new framing, and make sure the other trainers (Tereza, Stefan, Nermin) know the slot changed character.
2. **Block example — verified, with one correction (resolved).** Block cut about 40% of staff (more than 4,000 people, down to just under 6,000) in February 2026 and named AI as the reason; the stock rose and 2026 profit guidance went up ~54%. Sources: [CNN](https://www.cnn.com/2026/02/26/business/block-layoffs-ai-jack-dorsey), [Fortune](https://fortune.com/2026/04/17/twitter-cofounder-block-ceo-jack-dorsey-thought-process-laid-off-40-staff-ai/). Correction to the original note: the 40% was the headcount cut, not the stock move (stock jumped ~22% on the announcement). Beat 3 now says "the stock went up" without a precise figure, which is safe; if a number goes on a slide, use "40% of staff / 4,000+ people" and cite CNN. Dorsey's framing: Block's internal AI tool (Goose) lifted code-per-engineer ~40% in six months, so fewer engineers were needed.
3. **FINN / Stryz quote — confirm the source link before the slide.** Beat 4 quotes Andreas Stryz (CTO, FINN) on killing Scrum ("I killed Scrum at FINN", LinkedIn, 2026). Andreas supplied the quote; add the canonical LinkedIn URL to the deck's references and confirm the wording before it goes on a slide.
4. **Glossing Handlungsfähigkeit.** The script renders it as "the ability to act / competence, authority, information together" and never uses the German word. Decide whether to show the German term once on a slide as the named concept, or stay fully English.
5. **Day-1 keynote overlap.** Confirm the keynote ("From AI Experiments to the AI Factory") and customer reports have not already delivered "the bottleneck moved" message, so this talk still lands as a reveal on Day 2. (Flagged earlier as the highest-risk open item: the entire arc depends on this landing as a reveal.)

---

## Verification

- **Time it.** Read the script aloud at presentation pace. Target 22:00–23:00. Trim Beat 4 first if long (it is the densest).
- **Run it past the voice/brand filter.** Check the final slide copy against the banned-term list (`leverage`, `best practices`, `transform`, `methodology`, `10x`) and the AI-tells list before building. The script above already avoids em-dashes and contrastive-reframe constructions.
- **Dry-run the handoff with Nermin.** Confirm the three questions open Pod Block 4 verbatim, and that the pod worksheet captures answers to all three.
- **Sanity-check the provocation with one trainer** (Stefan or Tereza) who knows the room: confirm "it will make your company worse" lands as productive challenge, not as an attack on the work they just did.
