import {
  Accent,
  BigLoop,
  BigStats,
  Boxes,
  Cover,
  NumberedList,
  Quote,
  Section,
  Slide,
  SplitPanels,
  Statement,
  Step,
  type SlideDef,
} from './kit'

/*
 * hycle in action, Day 2, 14:00. Andreas presents.
 * A 25-minute message talk, theory only, no demo. Full outline and speaker
 * script: ../talk-outline.md. Entries with { node, steps } reveal on arrow keys.
 *
 * Arc: cold open, the factory as a magnifier (1-2) -> hycle named, the pun (3)
 * -> the bottleneck moved, intent + agency (4-5) -> the trap, two futures,
 * Block (6-9) -> the positive vision + the build/measure/learn loop (10-11) ->
 * what changes: three shifts, already happening at FINN (12-13) -> what's yours
 * vs what isn't, so take ownership at Notion (14-15) -> the three questions,
 * close (16-17).
 */

/* a small forward chevron, reused between the two flows */
const Chevron = () => (
  <svg className="shift-arrow" viewBox="0 0 16 24" aria-hidden="true">
    <path
      d="M 4 5 L 12 12 L 4 19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/* the core observation as a diagram: the slow stage is drawn fat. Then, build
 * was the constraint (struck on reveal of Now); Now, the decision is. */
function BottleneckShift() {
  return (
    <Slide>
      <h1>The bottleneck moved.</h1>
      <div className="shift">
        <div className="shift-row">
          <span className="shift-when">Then</span>
          <span className="shift-node shift-node-fast">Decide</span>
          <Chevron />
          <span className="shift-node shift-node-slow">Build</span>
          <span className="shift-cap">For thirty years, building was the constraint.</span>
        </div>
        <Step at={1} block>
          <div className="shift-row">
            <span className="shift-when">Now</span>
            <span className="shift-node shift-node-slow">Decide</span>
            <Chevron />
            <span className="shift-node shift-node-fast shift-struck">Build</span>
            <span className="shift-cap">
              The decision is the constraint.{' '}
              <span className="shift-cap-key">Intent and agency.</span>
            </span>
          </div>
        </Step>
      </div>
    </Slide>
  )
}

export const slides: SlideDef[] = [
  /* 1 — cover */
  <Cover
    event="hycle in action / Day 2, 14:00"
    title={
      <>
        The factory is the <Accent>easy part</Accent>.
      </>
    }
    subtitle="You built a factory. Now change the organization that decides what it builds."
    presenters="Andreas Stephan"
  />,

  /* 2 — cold open. The hook: contradict the last day and a half. Opens with the
   * Day-1 callback to Tereza's keynote (slide 11, "Starting is simple. A team
   * factory isn't.") to re-establish the cross-day bookend. */
  <Statement
    eyebrow="A day and a half ago, you built a software factory"
    sub="On Day 1, Tereza told you starting is simple and the team factory is the uncharted part. She was right, and what she set up I am here to answer. A factory is a magnifying glass: it amplifies whatever your organization already is. On its own it will not make your company better. It can even make it worse. For the next twenty minutes, let me convince you why, and what to change."
  >
    It works.
  </Statement>,

  /* 3 — the bottleneck moved (core diagram), reveal Now on click */
  { node: <BottleneckShift />, steps: 1 },

  /* 4 — the two things that sit upstream: intent + agency. Handlungsfähigkeit
   * appears once here, as the named concept (matches hycle.org). */
  <Boxes
    eyebrow="What sits upstream now"
    title="The constraint is the decision."
    cols={2}
    boxes={[
      {
        tone: 'teal',
        label: 'What to build',
        title: 'Intent',
        text: 'What the customer actually needs. The one thing an agent can never hand you.',
      },
      {
        tone: 'amber',
        label: 'The ability to act',
        title: 'Agency',
        text: 'Handlungsfähigkeit: competence, authority, and information together. Only those who know can decide — so knowledge sharing and failure culture are structural, not cultural.',
      },
    ]}
    footer="When execution was slow, you never noticed these were the real bottleneck. Now building is instant, and the slow decision is exposed."
  />,

  /* 5 — the trap, opened with Drucker. Punchline reveals the turn into the two futures. */
  {
    node: (
      <Quote
        eyebrow="The trap"
        quote={<>There is nothing so useless as doing efficiently that which should not be done at all.</>}
        attribution="Peter Drucker"
        punchline="Two futures follow from here. Both bad."
        stepped
      />
    ),
    steps: 1,
  },

  /* 6 — the two futures, second revealed on click */
  {
    node: (
      <SplitPanels
        title="Speed up execution, leave the decision where it is."
        stepped
        panels={[
          {
            tone: 'red',
            kicker: 'Future one',
            heading: 'Faster waste',
            items: [
              { t: 'Build the wrong thing in a day', d: 'instead of in two weeks' },
              { t: 'The build trap on a faster engine', d: 'more code, none of it closer to a customer' },
              { t: 'The empty backlog is a smoke alarm', d: 'you build faster than you can decide' },
            ],
          },
          {
            tone: 'red',
            kicker: 'Future two',
            heading: 'Rationalization',
            items: [
              { t: 'Same output, fewer people', d: 'cut cost, hold output' },
              { t: 'The market rewards it', d: 'in the short term' },
              { t: 'Not innovation', d: 'cheaper while you wait to be disrupted' },
            ],
          },
        ]}
      />
    ),
    steps: 1,
  },

  /* 7 — Block, the rationalization path made real (verified: CNN, Fortune 2026) */
  <BigStats
    eyebrow="Rationalization, made real"
    title="Block, February 2026."
    stats={[
      { value: '40%', label: 'of staff cut', tone: 'amber' },
      { value: '4,000+', label: 'people', tone: 'amber' },
    ]}
    footer="AI named as the reason. The stock went up. A real strategy that pays in the short term. Just do not call it innovation."
    note="Sources: CNN, Fortune, 2026"
  />,

  /* 8 — the turn: the third path you have to build */
  <Statement
    eyebrow="Two futures, one non-choice"
    sub="Both are what happens when you leave the decision where it is. The third path, the one where the factory makes you better, is a choice, and the factory will not make it for you."
  >
    These are the same future.
  </Statement>,

  /* 9 — the upside: a positive vision. The closing line fades in (step 1) and carries it. */
  {
    node: (
      <Slide center>
        <div className="eyebrow">The third path</div>
        <h1 className="statement-h">Delightful products.</h1>
        <p className="subtitle">
          MVPs were often mediocre compromises. Now software is malleable. You can build what genuinely
          meets a customer's need, and reach problems that were too expensive to touch before. But only if
          you listen, reflect, and learn.
        </p>
        <Step at={1} block>
          <p className="statement-standout">You can finally build what the customer actually needs. That is what this unlocks.</p>
        </Step>
      </Slide>
    ),
    steps: 1,
  },

  /* 10 — the loop you cannot skip; reinforces "listen, reflect, learn" from the vision */
  {
    node: (
      <BigLoop
        eyebrow="The loop you cannot skip"
        title="Build, measure, learn."
        stops={[{ label: 'Build' }, { label: 'Measure' }, { label: 'Learn' }]}
        badge="the lean loop"
        badgeTone="teal"
        prompt="Many teams only optimize build. The learning is where a product gets good."
        footer="Exhale. Reflect. Try again. Kill bad ideas early."
        speed="steady"
        stepped
      />
    ),
    steps: 1,
  },

  /* 11 — what changes: the three shifts, announced and enumerated on one slide */
  {
    node: (
      <NumberedList
        eyebrow="What actually changes"
        title="Three shifts. None of them technical."
        stepped
        items={[
          {
            text: 'Aim at decisions, not execution',
            hint: 'Don\'t only measure how fast you can build. Time your slowest decision. That number is your real cycle time.',
          },
          {
            text: 'Agency needs to be pushed down, create the right environment',
            hint: 'Information (only those who know can decide), Strategy (the frame that prevents chaos at speed), Decision Architecture (what replaces Scrum\'s gates). All three must live in the team.',
          },
          {
            text: 'Embrace blurring roles',
            hint: 'Discovery is the job an agent cannot do, and it is partly becoming yours.',
          },
        ]}
        footer="You do not need permission to start. Stop outsourcing discovery to one PM. Agree what you do the moment a decision is blocked."
      />
    ),
    steps: 3,
  },

  /* 12 — FINN: the restructure, already happening. Quote + reveal of the model.
   * Source: Andreas Stryz (CTO, FINN), LinkedIn, 2026
   * https://www.linkedin.com/posts/andreasstryz_engineeringleadership-ai-orgdesign-share-7455542713841565696-YLA1/ */
  {
    node: (
      <Quote
        eyebrow="Already happening, in the wild"
        quote={<>Scrum was a buffer for when code was expensive. I killed it.</>}
        attribution="Andreas Stryz, CTO at FINN, 2026"
        punchline="Micro teams. One PM, two product engineers. Each team owns one KPI, not a backlog."
        stepped
      />
    ),
    steps: 1,
  },

  /* 13 — what's yours vs what isn't: agency first, then the wall */
  <Boxes
    eyebrow="Why this is hard"
    title="What is yours, and what is not."
    cols={2}
    boxes={[
      {
        tone: 'green',
        label: 'Yours, on Monday',
        title: 'Your team',
        text: 'Build discovery in. Agree how you act when a decision is blocked. Prove it on your team, with a business KPI that moved. Nobody upstairs has to approve that.',
      },
      {
        tone: 'amber',
        label: 'Org-level conversations',
        title: 'Strategy & Authority',
        text: 'You can redesign your team\'s decision architecture. You cannot change the org\'s authority structure or strategy from inside your team. That takes conversations with people above you.',
      },
    ]}
    footer="The frustration when a good idea dies in an approval queue is not noise. It is data. It points at the structure that has to change."
  />,

  /* 14 — Notion: where authority is fuzzy, take ownership anyway. Follows the
   * "what is yours" wall as the answer to it.
   * Source: Max Schoening (Head of Product, Notion), Lenny's Podcast, May 2026
   * https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more */
  {
    node: (
      <Quote
        eyebrow="So take ownership"
        quote={<>Do you drive Notion like it's stolen?</>}
        attribution="Max Schoening, Head of Product at Notion"
        punchline="You may not own it officially. Move like you do. The decisions in your domain are yours to take."
        stepped
      />
    ),
    steps: 1,
  },

  /* 15 — what this is: hycle, an open inquiry. Lands the name late, as a release
   * after the argument is won, and unpacks the pun (hypercycle / heikel / hype
   * cycle). Drawn from hycle.org; sets up the close (slide 17). */
  <Statement
    eyebrow="Where these thoughts come from"
    sub={
      <>
        An open inquiry into how organizations change when execution stops being the bottleneck. Three words hide
        in the name. <Accent>Hypercycle</Accent>: coupled cycles that feed each other, the pattern that carried life
        from chemistry to biology. In German it sounds like <Accent>heikel</Accent>, delicate; reorganizing usually
        is. And <Accent>hype cycle</Accent> is in there too, for what stays once the hype is gone. <Accent>hycle.org</Accent>.
      </>
    }
  >
    hycle
  </Statement>,

  /* 16 — the three questions for the pod block */
  <NumberedList
    eyebrow="Three thoughts to take into the afternoon"
    title="For your own organization"
    items={[
      {
        text: 'A decision you cannot make today',
        hint: 'that you would need to make to use this factory fully.',
      },
      {
        text: 'Who holds the authority and the information you are missing',
        hint: 'and when did you last actually talk to them?',
      },
      {
        text: 'One structure to change first',
        hint: 'a role, a cadence, an approval. Which one?',
      },
    ]}
  />,

  /* 17 — close */
  <Statement
    sub={
      <>
        Now go change the organization that decides what it builds, and share your failures and successes with us
        at <Accent>hycle.org</Accent>.
      </>
    }
  >
    You built the factory.
  </Statement>,
]
