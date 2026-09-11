/**
 * Content for /career.
 *
 * ⚠️ Disclosability line: a résumé goes to one recruiter, a public page is
 * permanent. Metrics that describe the ENGINEERING stay — latency, TPS,
 * coverage, test time, table counts, country and locale counts. Internal
 * operational figures do not: headcounts served, seller and user counts,
 * incident user counts, record counts, asset and ticket inventories,
 * engineer-week sizings, commit counts, performance-rating language.
 *
 * ⚠️ Attribution, per the résumé's own notes: the Go→Java migration is
 * claimed as executive framing plus infrastructure hardening, not API
 * design; the bounce work is the monitoring system, not the root-cause fix.
 */

export const thesis = {
  kicker: 'Senior Software Engineer · Gurgaon',
  headline: 'Ten years of platforms with real users on the other end.',
  dek:
    'Amazon, 2016 to 2026. Bengaluru first — seller tools for the India ' +
    'marketplace — then Seattle, building internal career-mobility products ' +
    'that ran in fourteen countries. Finished as a Senior SDE.',
};

export interface Metric { value: string; label: string; detail: string }

export const metrics: Metric[] = [
  { value: '250ms → 40ms', label: 'API latency', detail: 'Seller rewards, after an Oracle-to-DynamoDB migration.' },
  { value: '20 → 5', label: 'tables', detail: 'That same schema, redesigned around O(1) access patterns.' },
  { value: '66%', label: 'TPS reduction', detail: 'Downstream load, from a typed eligibility API with caching.' },
  { value: '32 → 2 min', label: 'UI test time', detail: 'A 94% cut, across eight languages.' },
  { value: '~800ms', label: 'latency removed', detail: 'A GST compliance check, by caching instead of seven service calls.' },
  { value: '99%+', label: 'line coverage', detail: 'The notification platform, with 100% branch coverage.' },
  { value: '12', label: 'countries launched', detail: 'One EMEA expansion, four phased launches, on schedule.' },
  { value: '10 days → 12 hrs', label: 'incident detection', detail: 'Per-template bounce metrics replacing a silent failure.' },
];

export interface System { n: string; title: string; years: string; lede: string; hard: string; caption: string }

export const systems: System[] = [
  {
    n: 'Fig. 1',
    title: 'One service where there had been ten scripts',
    years: '2018–2019',
    lede:
      'Seller notifications were scattered across a decade of ad-hoc jobs. Ten-plus ' +
      'script-based clients each tracked their own success, errors and retries, so ' +
      'nobody could answer the only question that mattered: did the seller get it? ' +
      'I proposed the consolidation, got approval, and built one platform across ' +
      'WhatsApp, SMS and email. The WhatsApp channel came next — seven packages ' +
      'covering opt-in and preferences, event dispatch, multi-region configuration ' +
      'and channel metrics, with per-marketplace enablement behind experiments.',
    hard:
      'The return path. Provider status callbacks reconcile through a Lambda into ' +
      'DynamoDB under concatenated keys, so delivery state is queryable in O(1) ' +
      'instead of living in ten scripts’ private logs.',
    caption: '<strong>Unified seller notification platform.</strong> Two ingress paths, one service, three channels.',
  },
  {
    n: 'Fig. 2',
    title: 'A career-profile platform, from inception',
    years: '2022–2026',
    lede:
      'A gateway and its data layer, built from nothing on AppSync, Lambda, ' +
      'DynamoDB and CDK. I wrote the low-level design — service decomposition, ' +
      'data flow, per-resolver caching, pipeline versus unit resolver criteria — ' +
      'and the schema-driven patterns the team adopted. It grew into five ' +
      'microservices across Java, TypeScript CDK, Go, Kotlin and React Native, ' +
      'serving fourteen countries in forty-odd locales.',
    hard:
      'Choosing GraphQL over REST for clients whose query shapes kept changing, ' +
      'then keeping a single-table DynamoDB design honest as access patterns ' +
      'multiplied. Change streams fan out through SNS so consumers never poll.',
    caption: '<strong>Career-profile platform.</strong> Schema-driven gateway, single-table store, event fan-out.',
  },
  {
    n: 'Fig. 3',
    title: 'Configuration that stops drifting',
    years: '2025',
    lede:
      'Two independently-owned services held overlapping configuration and drifted ' +
      'apart by hand. I designed an event-driven sync: a config object lands in S3 ' +
      'and flows through SNS, a FIFO queue, schema validation and an approval gate ' +
      'before it is written. The schema underneath is hierarchical — role, country ' +
      'and region composite keys with per-attribute overrides, so a product manager ' +
      'can change behaviour without a deployment.',
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
    blurb:
      'Five microservices serving career-mobility features across fourteen ' +
      'countries and forty-odd locales.',
    work: [
      'Led a twelve-country EMEA expansion across four phased launches, coordinating dependency teams in several organisations, then wrote the eight-step runbook that cut each later country launch by roughly 60%.',
      'Drove requirements for runtime country-level feature flags, turning a multi-day deployment cycle into a rollout or emergency rollback measured in minutes.',
      'Took a core service to full continuous-delivery certification in a week against a three-week estimate — reviewer gates, bake times, auto-rollback monitors, alarm coverage — then made it reusable, cutting the remaining pipeline work by about a third.',
      'Replaced brittle matching with a typed eligibility API across four GraphQL endpoints. Caching dropped downstream TPS by 66% and removed multi-second latency spikes; it also fixed an internationalisation defect where English-only patterns failed against localised job titles in twelve countries.',
      'Designed a self-service cohort-ingestion system with fail-closed validation and automated ticketing for missing translations, breaking a dependency bottleneck that had blocked new roles from onboarding.',
      'Ran a production DynamoDB backfill through six optimisation phases — table scans to GSI queries, a tenfold improvement — with optimistic locking, resumable state and configurable rate limiting. Zero failures, zero race conditions.',
      'Deprecated legacy infrastructure in three phases using natural expiration, with no downtime.',
    ],
  },
  {
    period: '2021–2024',
    title: 'Software Development Engineer II',
    place: 'Seattle · across several teams',
    blurb: 'Career profile, internal mobility, and a stretch on seller logistics.',
    work: [
      'Built the career-profile gateway and its data layer from inception, and co-designed the migration off a legacy third-party tool onto a three-tier serverless platform.',
      'Built a configurable matching engine on a graph model so product managers could tune how candidates rank against roles without a code change, with override semantics on role, country and region composite keys.',
      'Delivered time-boxed delegation — TTL-based automatic access revocation over secondary-index query patterns — so managers could hand over talent-review access that expired on its own.',
      'Designed the metrics pipeline behind internal transfer analytics: database streams, event publishing, bulk backfill.',
      'Led a serverless micro-frontend migration for the career-profile and resume-builder tenants onto a rendering framework serving millions of weekly users.',
      'Earlier in the stretch: a capacity-reservation system for a logistics platform, taken through operational readiness into production, and auto-resolution orchestration for seller-assurance claims across multi-country launches — partial cancellations, multi-shipment orders, the awkward cases.',
    ],
  },
  {
    period: '2018–2021',
    title: 'Software Development Engineer II',
    place: 'Bengaluru · seller experience',
    blurb: 'Global marketplace tools, tax compliance, and international expansion.',
    work: [
      'Proposed, designed and built the unified multi-channel notification platform, then the WhatsApp channel end-to-end on the enterprise notification bus.',
      'Built a serverless notification-action handler with dependency injection, VPC networking and infrastructure as code, plus an integration test harness and a load-performance pipeline.',
      'Led the Oracle-to-DynamoDB migration for the seller rewards programme — twenty relational tables into five, with LSI and GSI for O(1) access. Average API latency fell from 250ms to 40ms, and partial-attribute updates halved QA effort.',
      'Built the subscription model and an operations admin panel so non-technical teams could manage reward programmes without code changes.',
      'Delivered the Tax-Collected-at-Source compliance interceptor for India marketplace sellers, inside the government deadline.',
      'Built No-Cost EMI validation and opt-in for the seller promotions platform, later extended to mobile.',
      'Authored the technical design for expanding a seller reimbursement claims system into new Middle East and North Africa marketplaces, and led QA coordination and production accounting validation for those launches.',
      'Selected as Code Review Bar Raiser in training — the first junior engineer on the team — completing 225+ reviews.',
    ],
  },
  {
    period: '2016–2018',
    title: 'Software Development Engineer',
    place: 'Bengaluru · registration & onboarding',
    blurb: 'Seller onboarding, and India’s GST transition.',
    work: [
      'Built India’s seller post-launch onboarding portal from scratch on a template pattern, supporting seven independent business concepts as reusable fragments — and was first on the team to introduce gradual-rollout experimentation. It shipped with zero high-severity tickets.',
      'Implemented the event pipeline behind it: seller engagement events into a data exchange, daily manifest consolidation from sixty-plus files a day down to one, and data-warehouse ingestion.',
      'Led India’s GST tax-reform integration across six seller-facing services — a four-treatment experimentation system with weblab-controlled rollout, and a compliance interceptor that cached tax classification rather than making seven service calls, removing about 800ms from the homepage. Delivered three days ahead of the government deadline.',
      'Wrote the staging, validation and backfill tooling for that transition, migrating sellers onto the new registration platform across a thirty-package service merge.',
      'Mentored a six-month intern end to end, and gave the team’s first recorded tech talk on AWS Lambda.',
    ],
  },
];

export interface Design { title: string; body: string }

export const designs: Design[] = [
  {
    title: 'Assessment-failure notification pipeline',
    body:
      'Event-driven, with parallel eligibility checks on CompletableFuture, DLQ-based ' +
      'fault tolerance and presigned-URL resource delivery. Preceded by a feasibility ' +
      'study on event-source reliability and multi-channel delivery timing.',
  },
  {
    title: 'Notification-tile migration',
    body:
      'Compared three architectures — in-service rendering, event-driven push, and a ' +
      'hybrid pull/push — with lifecycle management, alarm root-cause analysis and a ' +
      'cost-versus-latency trade-off for each, sized four ways.',
  },
  {
    title: 'Multi-strategy data-store choice',
    body:
      'DynamoDB with DAX against a managed configuration service with Lambda ' +
      'extensions and auto-rollback on alarms. Cost, latency and failure modes ' +
      'compared so the team could pick on evidence.',
  },
  {
    title: 'Data-lineage investigation',
    body:
      'Traced a title-resolution constraint across five services, showing how one ' +
      'upstream decision to stop vending internal titles propagated silent failures ' +
      'into three downstream APIs, each carrying its own duplicate workaround.',
  },
  {
    title: 'Per-client WAF throttling',
    body:
      'Consolidating six API domains onto a single Lambda endpoint concentrates ' +
      'blast radius, so throttling went in per consumer with tiered limits and a ' +
      'catch-all block.',
  },
  {
    title: 'IAM-native per-caller throttling',
    body:
      'Argued that resolved IAM identity is already in the service logs, so ' +
      'enforcement needs no onboarding from callers — a distributed token bucket ' +
      'with shadow, enforce and fail-open rollout modes.',
  },
];

export const alsoBuilt: string[] = [
  'Go-to-Java runtime migration — executive plan and infrastructure hardening: 49 integration tests, 26 load tests, custom DNS consolidating six domains onto one endpoint, ACM certificates, AppSync custom domains with Route 53.',
  'ML deployment pipeline design — AppConfig-driven, removing manual CDK edits between model registration and production.',
  'AI-assisted internationalisation validation — CLI tooling detecting cross-locale spelling, URL formatting and translation inconsistencies across 40+ languages.',
  'Text-to-speech greetings in the seller onboarding flow, generating personalised audio for newly registered sellers.',
  'SonarQube onboarding across eight service packages, establishing static analysis baselines and quality gates.',
];

export interface OpsItem { title: string; body: string }

export const ops: OpsItem[] = [
  {
    title: 'Two production incident reviews, authored',
    body:
      'A six-hour redirect failure across twelve countries during a live launch — ' +
      'root cause in 77 minutes, resolved in nine hours. And a mobile outage traced ' +
      'to authentication-header handling in a reverse proxy, mitigated in 66 minutes ' +
      'by feature gate, with thirteen action items and a five-whys behind it.',
  },
  {
    title: 'An alarm audit that found the alarms were not connected',
    body:
      'Across five production services, four of five composite alarms routed to ' +
      'nobody. Fixed those, then added Real User Monitoring for Web Vitals and ' +
      'onboarded four services to automated investigation on alarm-triggered tickets.',
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
      'for the platform — a fourteen-section change template, a monthly deployment ' +
      'SOP, Sev-2 escalation criteria with quantified thresholds, and on-call ' +
      'procedures covering nine countries.',
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
  { group: 'Languages', items: ['Java', 'TypeScript', 'Go', 'Kotlin', 'GraphQL', 'SQL'] },
  { group: 'AWS', items: ['Lambda', 'DynamoDB', 'DAX', 'AppSync', 'SQS', 'SNS', 'S3', 'CloudWatch', 'EventBridge', 'Step Functions', 'AppConfig', 'API Gateway', 'CloudFront', 'WAF', 'Route 53', 'KMS', 'IAM'] },
  { group: 'Patterns', items: ['Event-driven', 'Single-table DynamoDB', 'Schema-driven GraphQL', 'Serverless-first', 'FIFO + idempotent writes', 'Feature flagging', 'Infrastructure as code'] },
  { group: 'Tools', items: ['AWS CDK', 'Netflix DGS', 'Dagger 2', 'Guava', 'Spring Boot', 'React Native'] },
];

export const people: string[] = [
  'Around 300 code reviews a year, with feedback on race conditions, internationalisation regressions, monitoring gaps and security risk rather than formatting.',
  'Ran a promotion assessment across nine stakeholders including three principal engineers, and wrote evidence-based promotion feedback for several teammates.',
  'Interviewed for SDE and campus hiring across multiple quarters — coding, system design and behavioural.',
  'Mentored engineers through migrations, DynamoDB schema design and service onboarding without taking the work off them.',
  'Built the team wiki from scratch — services, runbooks, dev setup, architecture, dashboards — replacing tribal knowledge with something a new joiner could read.',
  'Drove AI-assisted development across engineering, product and data teams, including the guardrails that stop it doing damage.',
];

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
