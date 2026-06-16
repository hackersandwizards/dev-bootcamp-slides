import { BlockPlan, Cover, type SlideDef } from './kit'

/*
 * Agenda module: exercise outlines for the three hands-on pod blocks.
 * One slide per block (Day 1 AM, Day 1 PM, Day 2 AM), each a timed plan.
 * Source of truth: ../dev-bootcamp-factory-workshop (block READMEs).
 *
 * Start times assume each block starts on time (eyebrow time) and run from
 * the durations in the workshop READMEs. Where a README gave a range, a single
 * value was picked so the clock math is exact and the block lands on its next
 * fixed point (lunch, customer reports, the 12:00 show & tell).
 *
 * Day 2 PM (Pod block 4 / cycle) is owned by Nermin and lives elsewhere, so
 * it is not covered here. Add a fourth BlockPlan when that block is set.
 */
export const slides: SlideDef[] = [
  <Cover
    title="Pod blocks at a glance"
    subtitle="What each hands-on block builds, and the timing per exercise."
  />,

  // ---- Day 1 AM ---- 11:30 start, 10 min shared kickoff, exercises from 11:40
  <BlockPlan
    eyebrow="Day 1 / 11:30 / Pod block 1"
    title="Day 1 morning: foundations"
    subtitle="A menu, not a checklist. Everyone starts together at 11:30 with a 10 minute kickoff on the mechanism ladder, then splits by experience. Nobody is expected to finish everything."
    columns={[
      {
        kicker: 'Track A / starter to intermediate',
        rows: [
          { t: '11:40', s: <><span className="ex-n">00</span>Pirate CLAUDE.md</>, dur: '15 min' },
          { t: '11:55', s: <><span className="ex-n">01</span>Pirate Skill</>, dur: '25 min' },
          { t: '12:20', s: <><span className="ex-n">04</span>Planning Skill</>, dur: '35 min' },
        ],
      },
      {
        kicker: 'Track B / advanced',
        rows: [
          { t: '11:40', s: <><span className="ex-n">02</span>Rules</>, dur: '20 min' },
          { t: '12:00', s: <><span className="ex-n">03</span>Subagent</>, dur: '30 min' },
          { t: '12:30', s: <><span className="ex-n">04</span>Planning Skill, made stricter</>, dur: '30 min' },
          { t: '', s: 'Hook guardrail, if you finish early', chip: 'optional', tone: 'plain' },
        ],
      },
    ]}
    footer="Convergence point: a planning Skill that writes a Bean with a High-Level Plan. The afternoon needs that artifact, however you produce it."
  />,

  // ---- Day 1 PM ---- 14:30 start, 90 min, ends 16:00
  <BlockPlan
    eyebrow="Day 1 / 14:30 / Pod block 2"
    title="Day 1 afternoon: the pipeline"
    subtitle="One common factory spine: planner, refine, implement. Start from the supplied baseline and swap in your own work as it is ready."
    columns={[
      {
        kicker: 'Flow / the block',
        rows: [
          { t: '14:30', s: 'Explain the factory contract', dur: '15 min' },
          { t: '14:45', s: 'Build: pick one level (right)', dur: '50 min' },
          { t: '15:35', s: 'Implement demo: trainer runs /implement', dur: '15 min' },
          { t: '15:50', s: 'Debrief: what glued the factory together', dur: '10 min' },
        ],
      },
      {
        kicker: 'Build / pick one level',
        rows: [
          { t: 'L1', s: 'Run the supplied planner and refine, inspect the Bean' },
          { t: 'L2', s: 'Replace the planner with your morning Skill' },
          { t: 'L3', s: 'Harden refine: a read-only subagent and stricter checks' },
        ],
      },
    ]}
    footer="The contract is the glue: planner writes the High-Level Plan, refine adds the Refined Plan, implement reads it. Rename a heading and the next station breaks."
  />,

  // ---- Day 2 AM ---- 10:00 start, 120 min, ends 12:00 (show & tell)
  <BlockPlan
    eyebrow="Day 2 / 10:00 / Pod block 3"
    title="Day 2 morning: instrument your factory"
    subtitle="Three moves on the Day 1 calculator factory: see a run, test it, make the fix stick. Do them in order."
    columns={[
      {
        kicker: 'Timeline / 10:00 to 12:00',
        rows: [
          { t: '10:00', s: 'Setup and framing', dur: '10 min' },
          { t: '10:10', s: <><span className="ex-n">01</span>See it</>, dur: '30 min' },
          { t: '10:40', s: <><span className="ex-n">02</span>Test it</>, dur: '35 min' },
          { t: '11:15', s: <><span className="ex-n">03</span>Make it stick</>, dur: '35 min' },
          { t: '11:50', s: 'Reveal and show and tell prep', dur: '10 min' },
        ],
      },
      {
        kicker: 'The three moves',
        rows: [
          { t: '01', s: <><strong>See it.</strong> Observability: make one run inspectable</> },
          { t: '02', s: <><strong>Test it.</strong> Evals: validated on a good and a broken bean</> },
          { t: '03', s: <><strong>Make it stick.</strong> Learning loops: turn a failure into a guard</> },
        ],
      },
    ]}
    footer="You cannot eval what you cannot see, and you cannot close a loop you cannot eval. The order is the lesson."
  />,
]
