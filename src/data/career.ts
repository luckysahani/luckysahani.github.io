/**
 * Content for /career.
 *
 * ⚠️ Disclosability line, carried over from the LinkedIn rewrite: a résumé
 * goes to one recruiter, a public page is permanent. Keep metrics that
 * describe the ENGINEERING (latency, TPS, coverage, test time, country
 * counts). Leave out internal operational figures — headcounts served,
 * seller counts, incident user counts, record counts, asset and ticket
 * inventories, engineer-week sizings, commit counts, and anything that
 * references an internal performance-rating system.
 */

export const thesis = {
  kicker: 'Senior Software Engineer · Gurgaon',
  headline: 'Ten years of platforms with real users on the other end.',
  dek:
    'Amazon, 2016 to 2026 — Bengaluru then Seattle, finishing as a Senior SDE. ' +
    'Three domains, one habit: own the thing end to end, including the pager.',
};

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export const metrics: Metric[] = [
  {
    value: '250ms → 40ms',
    label: 'API latency',
    detail: 'Seller rewards, after an Oracle-to-DynamoDB migration.',
  },
  {
    value: '20 → 5',
    label: 'tables',
    detail: 'Relational schema redesigned around O(1) access patterns.',
  },
  {
    value: '66%',
    label: 'TPS reduction',
    detail: 'Downstream load, from a typed eligibility API with caching.',
  },
  {
    value: '32 → 2 min',
    label: 'UI test time',
    detail: 'A 94% cut across eight languages.',
  },
  {
    value: '12',
    label: 'countries launched',
    detail: 'One EMEA expansion, four phased launches, on schedule.',
  },
  {
    value: '10 days → 12 hrs',
    label: 'incident detection',
    detail: 'Per-template bounce metrics replacing a silent failure mode.',
  },
];

export interface System {
  n: string;
  title: string;
  years: string;
  lede: string;
  hard: string;
  caption: string;
}

export const systems: System[] = [
  {
    n: 'Fig. 1',
    title: 'One service where there had been ten scripts',
    years: '2018–2019',
    lede:
      'Seller notifications were scattered across a decade of ad-hoc jobs. Ten-plus ' +
      'script-based clients each tracked their own success, errors and retries, so the ' +
      'organisation had no single answer to the only question that mattered: did the ' +
      'seller actually get it? I proposed the consolidation, got approval, and built one ' +
      'platform across WhatsApp, SMS and email.',
    hard:
      'The return path. Provider status callbacks reconcile through a Lambda into ' +
      'DynamoDB under concatenated keys, so delivery state is queryable in O(1) instead ' +
      'of living in ten scripts’ private logs. Delivery tracking became a first-class ' +
      'concern rather than something bolted onto each sender.',
    caption:
      '<strong>Unified seller notification platform.</strong> Two ingress paths, one service, three channels.',
  },
  {
    n: 'Fig. 2',
    title: 'A career-profile platform, from inception',
    years: '2022–2026',
    lede:
      'A gateway and its data layer, built from nothing on AppSync, Lambda, DynamoDB and ' +
      'CDK. I wrote the low-level design — service decomposition, data flow, caching — and ' +
      'the GraphQL schema-driven patterns the team went on to adopt. It ended up serving ' +
      'career-mobility features across fourteen countries and forty-odd locales.',
    hard:
      'Choosing GraphQL over REST for clients whose query shapes kept changing, then ' +
      'keeping a single-table DynamoDB design honest as access patterns multiplied. ' +
      'Change streams fan out through SNS so downstream consumers never poll.',
    caption:
      '<strong>Career-profile platform.</strong> Schema-driven gateway, single-table store, event fan-out.',
  },
  {
    n: 'Fig. 3',
    title: 'Configuration that stops drifting',
    years: '2025',
    lede:
      'Two independently-owned services held overlapping configuration and drifted apart ' +
      'by hand. I designed an event-driven sync: a config object lands in S3 and flows ' +
      'through SNS, a FIFO queue, schema validation and a manual approval gate before it ' +
      'is written.',
    hard:
      'Ordering and replay. FIFO delivery keeps changes in sequence, and the final write ' +
      'is idempotent, so a redelivery cannot corrupt the target. The approval gate keeps a ' +
      'human in the loop without putting one in the critical path.',
    caption:
      '<strong>Cross-service configuration sync.</strong> Ordered, validated, gated, idempotent.',
  },
  {
    n: 'Fig. 4',
    title: 'Finding failures that were failing silently',
    years: '2024–2025',
    lede:
      'Email delivery failures were going unnoticed for over a week. I integrated a ' +
      'preference service to stop the bleeding, then built monitoring so the next one ' +
      'would surface in hours.',
    hard:
      'Granularity. Aggregate bounce rates hid the problem — a single misbehaving template ' +
      'disappears into a healthy overall number. Per-template metrics, composite alarms and ' +
      'a daily report cut detection from ten days to under twelve hours.',
    caption:
      '<strong>Bounce monitoring.</strong> Per-template metrics turn an invisible failure into a paging one.',
  },
];

export interface Role {
  period: string;
  title: string;
  place: string;
  blurb: string;
}

export const arc: Role[] = [
  {
    period: '2024–2026',
    title: 'Senior Software Development Engineer',
    place: 'Seattle · career mobility',
    blurb:
      'Led a twelve-country EMEA expansion across four phased launches, coordinating ' +
      'dependency teams in several organisations, then wrote the runbook that cut each ' +
      'later country launch by roughly 60%. Took a core service to full continuous-delivery ' +
      'certification in a week against a three-week estimate.',
  },
  {
    period: '2021–2024',
    title: 'Software Development Engineer II',
    place: 'Seattle · across several teams',
    blurb:
      'Built the career-profile gateway and data layer from inception. Built a configurable ' +
      'matching engine on a graph model, so product managers could tune how candidates rank ' +
      'against roles without a code change — plus time-boxed delegation with TTL-based ' +
      'access revocation. Earlier in the stretch, a capacity-reservation system for a ' +
      'logistics platform and claims auto-resolution across multi-country launches.',
  },
  {
    period: '2018–2021',
    title: 'Software Development Engineer II',
    place: 'Bengaluru · seller experience',
    blurb:
      'Proposed and built the unified notification platform. Migrated a rewards backend ' +
      'from Oracle to DynamoDB. Delivered India’s GST tax-reform integration across six ' +
      'seller-facing services, ahead of the government deadline. First junior engineer on ' +
      'the team made a code-review bar raiser.',
  },
  {
    period: '2016–2018',
    title: 'Software Development Engineer',
    place: 'Bengaluru · registration & onboarding',
    blurb:
      'Built India’s seller post-launch onboarding portal from scratch on a template ' +
      'pattern, and the event pipeline behind it — first on the team to introduce ' +
      'gradual-rollout experimentation.',
  },
];

export const principles: { title: string; body: string }[] = [
  {
    title: 'Alarms that page a human',
    body:
      'An audit across five services found four of five composite alarms routing to ' +
      'nobody. An alarm nobody receives is worse than no alarm, because it buys false ' +
      'confidence.',
  },
  {
    title: 'Incident reviews written honestly',
    body:
      'Two production correction-of-error documents, both with the awkward parts left in. ' +
      'A review that protects someone’s feelings teaches nothing.',
  },
  {
    title: 'Tech debt quantified, not complained about',
    body:
      'I catalogued open debt across nearly two years of tickets and used blocking-chain ' +
      'reasoning to show one migration unblocking three initiatives at once. That turns an ' +
      'argument into a decision.',
  },
  {
    title: 'Pipelines that refuse bad changes',
    body:
      'Full continuous-delivery certification on a core service in a week — reviewer gates, ' +
      'bake times, auto-rollback monitors — then made reusable so the rest of the team ' +
      'inherited it.',
  },
];

export const leadership = {
  lede:
    'The part that compounds. Most of what I am proud of from the last few years is not ' +
    'code I wrote.',
  items: [
    'Around 300 code reviews a year, with feedback on race conditions, internationalisation regressions, monitoring gaps and security risk — not just style.',
    'Ran a promotion assessment across nine stakeholders including three principal engineers, and wrote promotion feedback for several teammates.',
    'Interviewed for SDE and campus hiring across multiple quarters — coding, system design and behavioural.',
    'Built the team wiki from scratch, replacing tribal knowledge with something a new joiner could actually read.',
    'Drove AI-assisted development across engineering, product and data teams, including the guardrails that stop it going wrong.',
  ],
};

export const ask = {
  lede: 'What I am looking for',
  body:
    'Senior or Staff engineering roles, based in India, remote or hybrid. Distributed ' +
    'systems, platform work, or anything where owning the whole lifecycle is the point. ' +
    'Applying from December 2026.',
  links: [
    { label: 'Email', href: 'mailto:luckythegreat4@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luckysahani' },
    { label: 'GitHub', href: 'https://github.com/luckysahani' },
  ],
};
