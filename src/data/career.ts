/**
 * Content for /career.
 *
 * ⚠️ Confidentiality rule — the one that matters most. Never let a reader
 * pin internals to a specific system. A system may be NAMED, generically
 * ("a rewards service", "a notification platform", "an interceptor"), or
 * its INTERNALS may be described — databases, queues, keys, indexes,
 * call counts, how a check works — but never both in the same place:
 *   - Roles (`arc`) say what the work was for and what it achieved, with no
 *     databases, cloud services, keys or mechanisms.
 *   - Design write-ups, figures and diagrams describe mechanisms in
 *     vendor-neutral terms ("key-value store", "pub/sub topic") and do not
 *     say which product, programme, page or team they belong to.
 *   - No product, programme or internal tool names next to technology.
 *   - The Stack section lists skills, not where each one was used.
 *
 * ⚠️ Disclosability line: metrics that describe the ENGINEERING stay —
 * latency, TPS, coverage, test time, table counts, country and locale
 * counts. Internal operational figures do not: headcounts served, seller
 * and user counts, incident user counts, record counts, asset, alarm and
 * ticket inventories, engineer-week sizings, commit counts,
 * performance-rating language.
 *
 * ⚠️ Attribution, per the résumé's own notes: the Go→Java migration is
 * claimed as executive framing plus infrastructure hardening, not API
 * design; the bounce work is the monitoring system, not the root-cause fix.
 */

export const thesis = {
  kicker: 'Senior Software Engineer · Gurgaon',
  headline: 'Ten years of platforms with real users on the other end.',
  dek:
    'Amazon, 2016 to 2026, after an internship there in 2015. Bengaluru first — seller tools for the India ' +
    'marketplace — then Seattle, building internal career-mobility products ' +
    'that ran in fourteen countries. Finished as a Senior SDE.',
};

export interface Metric { value: string; label: string; detail: string }

export const metrics: Metric[] = [
  { value: '250ms → 40ms', label: 'API latency', detail: 'A rewards service, after a database migration and schema redesign.' },
  { value: '20 → 5', label: 'tables', detail: 'The same redesign, built around key-based access.' },
  { value: '66%', label: 'TPS reduction', detail: 'Downstream load, from a typed API with caching.' },
  { value: '32 → 2 min', label: 'UI test time', detail: 'A 94% cut, across eight languages.' },
  { value: '~800ms', label: 'latency removed', detail: 'An interceptor on a busy page: one cached read instead of seven service calls.' },
  { value: '99%+', label: 'line coverage', detail: 'A notification platform, with 100% branch coverage.' },
  { value: '12', label: 'countries launched', detail: 'Europe and Australia, in four phased launches, on schedule.' },
  { value: '10 days → 12 hrs', label: 'incident detection', detail: 'Per-template bounce metrics replacing a silent failure.' },
];

export interface System { n: string; title: string; years: string; lede: string; hard: string; caption: string }

export const systems: System[] = [
  {
    n: 'Fig. 1',
    title: 'One service where there had been ten scripts',
    years: '2018–2019',
    lede:
      'Notifications were scattered across years of ad-hoc jobs. Ten-plus ' +
      'script-based senders each tracked their own success, errors and retries, so ' +
      'nobody could answer the only question that mattered: did it arrive? ' +
      'I proposed the consolidation, got approval, and built one platform across ' +
      'WhatsApp, SMS and email — opt-in and preferences, event dispatch, ' +
      'per-market configuration and channel metrics, with each market enabled ' +
      'behind an experiment.',
    hard:
      'The return path. Provider status callbacks reconcile through a serverless ' +
      'function into a key-value store under composite keys, so delivery state is ' +
      'a single lookup instead of living in ten scripts’ private logs.',
    caption: '<strong>Unified notification platform.</strong> Two ingress paths, one service, three channels.',
  },
  {
    n: 'Fig. 2',
    title: 'A GraphQL platform, built from nothing',
    years: '2022–2026',
    lede:
      'A gateway and its data layer, built from nothing on a managed GraphQL API, ' +
      'serverless functions and a key-value store, all as infrastructure as code. ' +
      'I wrote the low-level design — service decomposition, data flow, ' +
      'per-resolver caching, when to chain resolvers and when not to — and the ' +
      'schema-driven patterns the team adopted. It grew into five microservices ' +
      'across several languages.',
    hard:
      'Choosing GraphQL over REST for clients whose query shapes kept changing, ' +
      'then keeping a single-table design honest as access patterns multiplied. ' +
      'Changes fan out from the table’s change stream through pub/sub, so ' +
      'consumers never poll.',
    caption: '<strong>GraphQL platform.</strong> Schema-driven gateway, single-table store, event fan-out.',
  },
  {
    n: 'Fig. 3',
    title: 'Configuration that stops drifting',
    years: '2025',
    lede:
      'Two independently-owned services held overlapping configuration and drifted ' +
      'apart by hand. I designed an event-driven sync: a config object lands in ' +
      'object storage and flows through a pub/sub topic, a FIFO queue, schema ' +
      'validation and an approval gate before it is written. The schema underneath ' +
      'is hierarchical, with per-attribute overrides, so a product manager can ' +
      'change behaviour without a deployment.',
    hard:
      'Ordering and replay. FIFO delivery keeps changes in sequence and the final ' +
      'write is idempotent, so a redelivery cannot corrupt the target. The gate ' +
      'keeps a human in the loop without putting one in the critical path.',
    caption: '<strong>Cross-service configuration sync.</strong> Ordered, validated, gated, idempotent.',
  },
  {
    n: 'Fig. 4',
    title: 'Finding failures that were failing silently',
    years: '2024–2025',
    lede:
      'Email delivery failures were going unnoticed for over a week. I integrated a ' +
      'preference service to stop the bleeding, then built the monitoring so the ' +
      'next one would surface in hours rather than days.',
    hard:
      'Granularity. Aggregate bounce rates hid the problem — one misbehaving ' +
      'template disappears into a healthy overall number. Per-template metrics, ' +
      'composite alarms and a daily report cut detection from ten days to under ' +
      'twelve hours.',
    caption: '<strong>Bounce monitoring.</strong> Per-template metrics turn an invisible failure into a paging one.',
  },
];

export interface Role { period: string; title: string; place: string; blurb: string; work: string[] }

export const arc: Role[] = [
  {
    period: '2024–2026',
    title: 'Senior Software Development Engineer',
    place: 'Seattle · career mobility',
    blurb: 'Career-mobility features across fourteen countries and forty-odd locales.',
    work: [
      'Led a twelve-country expansion across Europe and Australia in four phased launches, coordinating dependency teams in several organisations, then wrote the eight-step runbook that cut each later country launch by roughly 60%.',
      'Drove requirements for runtime country-level feature flags, turning a multi-day deployment cycle into a rollout or emergency rollback measured in minutes.',
      'Took a core service to full continuous-delivery certification in a week against a three-week estimate, then made the work reusable, cutting the remaining pipeline work by about a third.',
      'Replaced brittle matching with a typed API; caching cut downstream load by 66% and removed multi-second latency spikes, and it fixed a defect where English-only patterns failed against localised job titles.',
      'Designed self-service onboarding for new roles, with fail-closed validation and automatic tickets for missing translations, breaking a dependency bottleneck.',
      'Ran a production data backfill through six optimisation phases — a tenfold improvement — with no failures and no race conditions.',
      'Deprecated legacy infrastructure in three phases with no downtime.',
    ],
  },
  {
    period: '2021–2024',
    title: 'Software Development Engineer II',
    place: 'Seattle · across several teams',
    blurb: 'Internal mobility products, and a stretch on seller logistics.',
    work: [
      'Tech lead for an employee-facing platform, owning its end-to-end architecture from inception, including the move off a legacy third-party tool.',
      'Built a configurable matching engine so product managers could tune how candidates rank against roles without a code change.',
      'Delivered time-boxed delegation, so managers could hand over talent-review access that expired on its own.',
      'Designed the metrics pipeline behind internal-transfer analytics.',
      'Led a micro-frontend migration for two product surfaces onto a shared rendering framework.',
      'Earlier in the stretch: a capacity-reservation system for a logistics platform, taken through operational readiness into production, and auto-resolution for seller claims across multi-country launches — partial cancellations, multi-shipment orders, the awkward cases.',
    ],
  },
  {
    period: '2018–2021',
    title: 'Software Development Engineer II',
    place: 'Bengaluru · seller experience',
    blurb: 'Global marketplace tools, tax compliance, and international expansion.',
    work: [
      'Proposed, designed and built a unified multi-channel notification platform, then its WhatsApp channel end to end.',
      'Built the action handler behind those notifications, with an integration-test harness and a load-test pipeline.',
      'Led a rewards service’s database migration and schema redesign; average API latency fell from 250ms to 40ms, and partial updates halved QA effort.',
      'Built the subscription model and an operations admin panel so non-technical teams could manage reward programmes without code changes.',
      'Delivered a tax-compliance change for marketplace sellers inside the government deadline.',
      'Built validation and opt-in for a seller promotions feature, later extended to mobile.',
      'Authored the technical design for taking a seller claims programme into Saudi Arabia and Egypt, with a right-to-left Arabic interface, and led QA and accounting validation for those launches.',
      'Selected as Code Review Bar Raiser in training — the first junior engineer on the team — completing 225+ reviews.',
    ],
  },
  {
    period: '2016–2018',
    title: 'Software Development Engineer',
    place: 'Bengaluru · registration & onboarding',
    blurb: 'Seller onboarding, and India’s GST transition.',
    work: [
      'Built a post-launch page for new sellers from scratch, and was first on the team to roll a change out gradually behind an experiment. It shipped with zero high-severity tickets.',
      'Built the analytics pipeline behind it, consolidating many files a day into one daily load.',
      'Worked on India’s GST transition across several seller-facing services, delivered three days ahead of the government deadline.',
      'Wrote the staging, validation and backfill tooling for that transition.',
      'Mentored a six-month intern end to end, and gave the team’s first recorded tech talk, on serverless functions.',
    ],
  },
];

export interface Design { title: string; body: string }

export const designs: Design[] = [
  {
    title: 'A reporting service, re-architected',
    body:
      'An API that pulled entire datasets into the service and filtered them in ' +
      'code — memory pinned at 100%, and the largest exports timing out at the ' +
      'gateway. The proof of concept moved long exports to an asynchronous job that ' +
      'says when the file is ready, built on federated queries.',
  },
  {
    title: 'A failure-notification pipeline',
    body:
      'Event-driven, with parallel eligibility checks, dead-letter fault tolerance ' +
      'and expiring-link resource delivery. Preceded by a feasibility study on ' +
      'event-source reliability and multi-channel delivery timing.',
  },
  {
    title: 'Migrating an in-app notification surface',
    body:
      'Compared three architectures — in-service rendering, event-driven push, and a ' +
      'hybrid pull/push — with lifecycle management, alarm root-cause analysis and a ' +
      'cost-versus-latency trade-off for each, sized four ways.',
  },
  {
    title: 'Choosing a data store on evidence',
    body:
      'A cached key-value store against a managed configuration service with ' +
      'client-side extensions and auto-rollback on alarms. Cost, latency and ' +
      'failure modes compared so the team could pick on evidence.',
  },
  {
    title: 'A data-lineage investigation',
    body:
      'Traced one field across five services, showing how a single upstream ' +
      'decision to stop providing it propagated silent failures into three ' +
      'downstream APIs, each carrying its own duplicate workaround.',
  },
  {
    title: 'Per-client throttling at the edge',
    body:
      'Consolidating six API domains onto one endpoint concentrates blast radius, so ' +
      'throttling went in per consumer with tiered limits and a catch-all block.',
  },
  {
    title: 'Identity-native per-caller throttling',
    body:
      'Argued that the caller’s resolved identity is already in the service logs, so ' +
      'enforcement needs no onboarding from callers — a distributed token bucket ' +
      'with shadow, enforce and fail-open rollout modes.',
  },
];

export const alsoBuilt: string[] = [
  'A Go-to-Java runtime migration — the executive plan and the infrastructure hardening: 49 integration tests, 26 load tests, and custom DNS consolidating six domains onto one endpoint.',
  'An ML deployment pipeline design that removed manual infrastructure edits between model registration and production.',
  'AI-assisted internationalisation validation — CLI tooling detecting cross-locale spelling, URL formatting and translation inconsistencies across 40+ languages.',
  'Text-to-speech greetings in an onboarding flow, generating personalised audio for new users.',
  'Static-analysis onboarding across eight service packages, with baselines and quality gates.',
];

export interface OpsItem { title: string; body: string }

export const ops: OpsItem[] = [
  {
    title: 'Two production incident reviews, authored',
    body:
      'A multi-hour failure during a live launch — root cause in 77 minutes, ' +
      'resolved in nine hours. And an outage traced to header handling in a ' +
      'reverse proxy, mitigated in 66 minutes behind a feature gate, with a ' +
      'five-whys and thirteen action items behind it.',
  },
  {
    title: 'An outage that kept a calendar',
    body:
      'Database connection-pool timeouts every couple of months, clearing on their own ' +
      'within hours, with no root cause. Added performance insights, enhanced monitoring ' +
      'and error-log shipping, right-sized the instances and added reader auto-scaling — ' +
      'then lined the outages up against the database credential’s 60-day automatic ' +
      'rotation. The service’s copy of the secret was falling out of sync each time.',
  },
  {
    title: 'An alarm audit that found the alarms were not connected',
    body:
      'Most of the composite alarms across a set of production services routed to ' +
      'nobody. Fixed those, then added real-user monitoring for Web Vitals and ' +
      'automated investigation on alarm-triggered tickets.',
  },
  {
    title: 'Tech debt, counted rather than argued about',
    body:
      'Audited pipeline health and continuous-delivery maturity across the platform ' +
      'and used blocking-chain reasoning to show one migration unblocking three ' +
      'initiatives at once. That turned a standing argument into a prioritisation ' +
      'decision.',
  },
  {
    title: 'Operational readiness as a standing cadence',
    body:
      'Owned five readiness reviews and served as change-management point of contact ' +
      'for the platform — a change template, a monthly deployment SOP, Sev-2 ' +
      'escalation criteria with quantified thresholds, and on-call procedures ' +
      'covering every launched country.',
  },
  {
    title: 'Planning that checks itself against production',
    body:
      'Annual roadmap sizing where each intake was code-verified against what was ' +
      'already shipped — which found one intake already complete and another needing ' +
      'no engineering from the team at all, and routed it to its real owner.',
  },
];

export const stack = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript / Node.js', 'TypeScript', 'Go', 'Kotlin', 'GraphQL', 'SQL'] },
  { group: 'AWS', items: ['Lambda', 'DynamoDB', 'DAX', 'AppSync', 'SQS', 'SNS', 'S3', 'CloudWatch', 'EventBridge', 'Step Functions', 'AppConfig', 'API Gateway', 'CloudFront', 'WAF', 'Route 53', 'KMS', 'IAM'] },
  { group: 'Patterns', items: ['Event-driven', 'Single-table design', 'Schema-driven GraphQL', 'Serverless-first', 'FIFO + idempotent writes', 'Feature flagging', 'Infrastructure as code'] },
  { group: 'Tools', items: ['AWS CDK', 'Netflix DGS', 'Dagger 2', 'Guava', 'Spring Boot', 'React Native'] },
];

export const people: string[] = [
  'Around 300 code reviews a year, with feedback on race conditions, internationalisation regressions, monitoring gaps and security risk rather than formatting.',
  'Ran a promotion assessment across nine stakeholders including three principal engineers, and wrote evidence-based promotion feedback for several teammates.',
  'Interviewed for SDE and campus hiring across multiple quarters — coding, system design and behavioural.',
  'Gave internal tech talks — on serverless functions, on running a whole GraphQL API from a single function, and on federated queries over a relational store.',
  'Mentored engineers through migrations, schema design and service onboarding without taking the work off them.',
  'Built the team wiki from scratch — services, runbooks, dev setup, architecture, dashboards — replacing tribal knowledge with something a new joiner could read.',
  'Drove AI-assisted development across engineering, product and data teams, including the guardrails that stop it doing damage.',
];

export const before = {
  education: 'IIT Kanpur — B.Tech, Computer Science and Engineering, 2012–2016.',
  items: [
    'Summer 2015 at Amazon in Bengaluru, interning on a seller-facing team: a tool that turned raw product data into a validated catalogue feed. Full-time from July 2016.',
    'Co-founded jutja.com, a project-management site that laid tasks out as mind maps, and built its front end.',
    'Projects across computer vision, distributed systems, compilers and graphics — licence-plate detection on the campus surveillance feed, skyline queries on MapReduce, a Java-to-MIPS compiler, 3-D Tetris in OpenGL.',
  ],
  link: { label: 'Every IIT Kanpur project, in detail', href: '/projects/' },
};

export const ask = {
  lede: 'What I am looking for',
  body:
    'Senior or Staff engineering roles, based in India, remote or hybrid. ' +
    'Distributed systems, platform work, or anything where owning the whole ' +
    'lifecycle is the point. Applying from December 2026.',
  links: [
    { label: 'Email', href: 'mailto:luckythegreat4@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luckysahani' },
    { label: 'GitHub', href: 'https://github.com/luckysahani' },
  ],
};
