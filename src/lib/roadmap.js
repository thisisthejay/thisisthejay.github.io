export const ROADMAP_WIDTH = 2400;
export const ROADMAP_HEIGHT = 1500;

export const roadmapNodes = [
  {
    id: "modern-team", x: 1120, y: 650, width: 260, kind: "centre", group: "Operating model",
    title: "Modern legal team", kicker: "The connected system",
    summary: "A legal function becomes easier to use and improve when knowledge, demand, documents, data and people operate as one system.",
    meaning: "The roadmap is deliberately interconnected. Intake creates data. Knowledge powers answers. Documents carry structured information. Legal Operations runs the service, Legal Engineers build its connective tissue, and lawyers define what good looks like.",
    setup: ["Choose one high-volume service and trace it end to end.", "Name an owner for the service, its knowledge and its data.", "Improve the links between capabilities before buying more isolated tools."],
    signals: ["People know where to ask", "Routine work follows a visible path", "Feedback changes the system"],
    links: [{ label: "The Modern Lawyer Builds Systems", href: "/blog/the-modern-lawyer-builds-systems/", internal: true }]
  },
  {
    id: "knowledge", x: 500, y: 300, width: 250, kind: "pillar", group: "Knowledge",
    title: "Legal knowledge", kicker: "Curated · versioned · available",
    summary: "A governed body of law, guidance and internal positions that can support people and agents at the point of need.",
    meaning: "Useful knowledge has provenance, ownership and a history. Primary and secondary sources inform a horizon scanner; accepted changes flow into versioned internal SOPs, and those positions shape internal and customer-facing answers.",
    setup: ["Inventory authoritative sources and assign owners.", "Record the source, jurisdiction, effective date and review date.", "Create a change path from horizon scanning into SOPs and downstream guidance."],
    signals: ["Knowledge has an owner", "Positions can be reconstructed for any date", "Advice cites the controlling source"]
  },
  {
    id: "primary", x: 80, y: 70, width: 210, kind: "source", group: "Knowledge",
    title: "Primary sources", kicker: "Authority",
    summary: "Legislation, regulations, judgments and regulatory materials: the sources from which the legal position begins.",
    meaning: "Primary material should be linked rather than copied wherever possible, tagged by jurisdiction and monitored for change. The important metadata is often as valuable as the prose.",
    setup: ["Define the authoritative source for each jurisdiction.", "Store citations and effective dates.", "Connect material changes to the horizon-scanning queue."],
    signals: ["Traceable citations", "Effective dates captured", "Jurisdiction is explicit"]
  },
  {
    id: "secondary", x: 330, y: 35, width: 220, kind: "source", group: "Knowledge",
    title: "Secondary sources", kicker: "Interpretation",
    summary: "Practical Law, Westlaw, Lexology and other expert commentary that helps teams interpret and apply primary material.",
    meaning: "Secondary sources accelerate understanding but carry their own scope, assumptions and publication dates. Curate the sources the team trusts and keep their role distinct from binding authority.",
    setup: ["Agree the subscriptions and publications that matter.", "Tag commentary to the primary source and internal topic.", "Capture publication and access dates."],
    signals: ["Trusted source list", "Commentary linked to authority", "Access is licensed appropriately"],
    links: [
      { label: "Practical Law", href: "https://legal.thomsonreuters.com/en/products/practical-law" },
      { label: "Westlaw", href: "https://legal.thomsonreuters.com/en/products/westlaw" },
      { label: "Lexology", href: "https://www.lexology.com/" }
    ]
  },
  {
    id: "horizon", x: 210, y: 330, width: 230, kind: "capability", group: "Knowledge",
    title: "Horizon scanner", kicker: "Observe change",
    summary: "A repeatable way to detect, assess and route legal or regulatory change before it surprises the business.",
    meaning: "The scanner turns incoming change into a decision: irrelevant, watch, investigate or implement. Its value comes from reaching an owner and changing the operating position when action is required.",
    setup: ["Define topics, jurisdictions and trusted feeds.", "Triage changes by impact, certainty and effective date.", "Route accepted changes into an owned SOP update."],
    signals: ["Time from publication to triage", "Changes awaiting an owner", "SOPs updated before effective date"]
  },
  {
    id: "sops", x: 520, y: 520, width: 240, kind: "capability", group: "Knowledge",
    title: "Internal SOPs", kicker: "The derived position",
    summary: "Versioned playbooks that express how this business applies the law, exercises judgement and handles exceptions.",
    meaning: "This is where law meets commercial reality. A good SOP records the accepted position, rationale, risk appetite, owner, effective date and escalation path. Version history lets the business understand what its principles were at any point in time.",
    setup: ["Start with decisions and exceptions, then add prose.", "Use approvals and version control for material changes.", "Publish one canonical version into the places people work."],
    signals: ["Current version is obvious", "Historic positions are recoverable", "Exceptions produce learning"]
  },
  {
    id: "help", x: 900, y: 70, width: 230, kind: "capability", group: "Knowledge",
    title: "Help centre", kicker: "Customer knowledge",
    summary: "Plain-language guidance and FAQs for customers or business users, derived from the governed internal position.",
    meaning: "A help centre gives recurring answers a durable home. Articles should be written for the question people actually ask, connected back to the controlling SOP and reviewed when that position changes.",
    setup: ["Use search and intake data to identify recurring questions.", "Write task-shaped articles in plain language.", "Connect every article to an owner and internal source."],
    signals: ["Search success", "Article-assisted resolution", "Questions without useful coverage"]
  },
  {
    id: "agents", x: 790, y: 300, width: 250, kind: "agent", group: "Knowledge",
    title: "Agentic lawyers", kicker: "Two interfaces",
    summary: "Secure agent interfaces that make governed knowledge discoverable for colleagues internally and customers externally.",
    meaning: "Few people begin by browsing a knowledge tree. An internal agent can surface SOPs and support legal triage; a customer agent can answer within a narrower published boundary. Both need citations, permissions, evaluation and a clean route to a person.",
    setup: ["Separate internal and customer permissions and instructions.", "Ground answers in approved, versioned knowledge.", "Evaluate accuracy, citation quality, refusal and escalation before release."],
    signals: ["Grounded-answer rate", "Escalation quality", "Unanswered questions feeding the knowledge backlog"]
  },
  {
    id: "ontology", x: 605, y: 20, width: 255, kind: "advanced", group: "Knowledge",
    title: "Legal ontology", kicker: "Advanced · exploring",
    summary: "A shared model of the entities, relationships and constraints that describe the business as it operates today.",
    meaning: "Foundation models arrive with broad pre-training. They still need a reliable picture of this organisation: what a customer, worker, jurisdiction, contract, risk or approved position means here, and how those things relate. I am exploring how ontologies can provide that map.",
    setup: ["Begin with a bounded use case and its vocabulary.", "Define relationships and constraints with domain experts.", "Test whether the model improves retrieval, reasoning or interoperability before scaling it."],
    signals: ["Terms mean the same thing across systems", "Relationships are machine-readable", "Model remains governed and usable"],
    links: [
      { label: "Read the ontology note", href: "/blog/legal-ontologies-a-map-for-agents/", internal: true },
      { label: "W3C Web Ontology Language", href: "https://www.w3.org/OWL/" }
    ]
  },
  {
    id: "intake", x: 160, y: 700, width: 250, kind: "pillar", group: "Demand",
    title: "Legal intake", kicker: "One front door",
    summary: "A central place for employees or customers to ask for legal support and have work triaged to the right route.",
    meaning: "Intake should collect enough structure to act without making the requester understand the legal team’s org chart. Deals, employment, tax, NDAs and other work can share a front door while following different paths behind it.",
    setup: ["Map how requests arrive today, including Slack and Teams.", "Design the smallest useful question set for each topic.", "Route by expertise, capacity, geography, urgency and availability.", "Make adoption part of the SOP and continuously refine it from feedback."],
    signals: ["Adoption by channel", "Time to triage", "Correct-first-time routing", "Requester effort"]
  },
  {
    id: "triage", x: 500, y: 790, width: 235, kind: "agent", group: "Demand",
    title: "Agentic triage", kicker: "Answer or route",
    summary: "An AI layer that answers robustly from approved knowledge or packages the request for the right human.",
    meaning: "The useful version is connected to the knowledge system and the team’s real availability. It can resolve known questions, identify missing facts and hand complex work to a person with the context already organised.",
    setup: ["Start with low-risk, high-volume topics.", "Require grounded answers and preserve source citations.", "Use calendars or availability data carefully.", "Keep an observable human hand-off."],
    signals: ["Self-served requests", "Human hand-off rate", "Re-triage rate", "Answer acceptance"]
  },
  {
    id: "metrics", x: 260, y: 1130, width: 270, kind: "pillar", group: "Data",
    title: "Metrics, metrics, metrics", kicker: "See the service",
    summary: "Operational evidence that shows demand, delay, complexity, capacity and where the legal service should improve.",
    meaning: "Metrics should help the team make a decision: add capacity, repair a bottleneck, publish knowledge, change an SOP or simplify a deal path. Agree definitions before building dashboards so the numbers remain comparable.",
    setup: ["Instrument intake and workflow events at source.", "Create a small data dictionary with named owners.", "Segment by topic, complexity, region and channel.", "Review trends with the people who can change the system."],
    signals: ["Total time to resolution", "Time to triage", "Self-service and agent resolution", "Topic and complexity mix", "Backlog age and bottlenecks", "Workload by lawyer and team", "Reopened or re-routed work", "Customer satisfaction"],
    links: [{ label: "CLOC Core Metrics", href: "https://cloc.org/blog/core-12/core-metrics-creating-a-common-language-for-legal-operations/" }]
  },
  {
    id: "repository", x: 1520, y: 180, width: 250, kind: "pillar", group: "Contracts",
    title: "Document repository", kicker: "Every document, one home",
    summary: "A complete, permissioned home for executed documents—including historic and third-party paper the team did not create.",
    meaning: "A repository can be SharePoint, Google Drive or a dedicated contract system. The architectural question is whether every material document can be found, governed and connected to the metadata needed by the business.",
    setup: ["Define the authoritative home and retention rules.", "Migrate or connect historic documents deliberately.", "Use AI extraction to propose metadata, with review for fields that matter.", "Keep source documents and corrections auditable."],
    signals: ["Repository coverage", "Search success", "Required metadata completeness", "Extraction correction rate"]
  },
  {
    id: "clm", x: 1880, y: 85, width: 215, kind: "optional", group: "Contracts",
    title: "Optional CLM", kicker: "Buy with care",
    summary: "End-to-end contract lifecycle management can create real value when the operating model can absorb the implementation.",
    meaning: "CLMs carry substantial upfront cost in time, migration and process commitment. Before selecting one, test how historic and third-party documents enter, how much data entry each matter needs, and whether its drafting experience is genuinely first class.",
    setup: ["Prove the process and data model before procurement.", "Cost migration and ongoing administration honestly.", "Test the full lifecycle with real users and awkward contracts.", "Keep integration and exit routes visible."],
    signals: ["Adoption across lifecycle", "Time to first value", "Metadata completeness", "Administration effort"]
  },
  {
    id: "docauto", x: 1650, y: 570, width: 270, kind: "pillar", group: "Contracts",
    title: "Document automation", kicker: "Rules before free drafting",
    summary: "Deterministic assembly of lawyer-approved templates and clauses, with AI helping structure the messy inputs.",
    meaning: "Lawyers draft the available positions and exception clauses. Legal Engineers build the logic and integrations between them. AI is particularly useful upstream: turning meeting notes, emails and side conversations into proposed parameters that a person can verify before deterministic generation.",
    setup: ["Choose a frequent, stable document with visible pain.", "Model questions, variables, clauses and exceptions.", "Keep approved language under lawyer ownership and version control.", "Use AI for extraction and classification with confirmation where errors matter."],
    signals: ["Generation time", "Post-generation edits", "Exception frequency", "Template and clause reuse"],
    links: [
      { label: "docassemble", href: "https://docassemble.org/" },
      { label: "Contract Express", href: "https://legal.thomsonreuters.com/en/products/contract-express" },
      { label: "Gavel", href: "https://www.gavel.io/legal-contract-automation" },
      { label: "Avvoka", href: "https://avvoka.com/solutions-lawfirms" }
    ]
  },
  {
    id: "digital-contract", x: 2020, y: 390, width: 270, kind: "advanced", group: "Contracts",
    title: "Executable contracts", kicker: "Advanced · a direction of travel",
    summary: "Documents whose meaning, variables and incorporated materials travel with the readable agreement as structured data.",
    meaning: "I imagine this rather like software dependencies: a contract can reference governed modules—definitions, policies, schedules or rule sets—with explicit versions, instead of silently copying everything into one frozen file. The result could be machine-readable, testable against simulated or real events, and still reviewable as a legal document.",
    setup: ["Keep the human-readable agreement authoritative while exploring.", "Embed stable identifiers, structured terms and provenance.", "Resolve incorporated materials to explicit versions.", "Test obligations and events in a bounded use case."],
    signals: ["Terms survive system changes", "Dependencies resolve reproducibly", "Obligations can be evaluated", "Human review remains possible"]
  },
  {
    id: "career", x: 1780, y: 1080, width: 270, kind: "pillar", group: "People",
    title: "Three career paths", kicker: "Law · operations · engineering",
    summary: "A legal team needs distinct, respected paths for subject-matter expertise, operational leadership and systems engineering.",
    meaning: "All three paths benefit from legal training, requirements gathering and confident use of AI. Lawyers deepen legal and commercial judgement. Legal Operations adds process, change and service management. Legal Engineering combines legal fluency with business analysis and software engineering. One person may span them; a durable team should not depend on finding that rarity.",
    setup: ["Define capability expectations at each level.", "Allow lateral movement and shared foundational training.", "Create senior destinations: GC or CLO, Head of Legal Operations, and Head of Legal Engineering.", "In smaller teams, make combined responsibilities explicit rather than invisible."],
    signals: ["Clear progression in all three paths", "Skills gaps have owners", "Cross-disciplinary work is rewarded"],
    tracks: [
      { name: "Lawyer", skills: "Subject-matter expertise · judgement · commerciality", levels: ["Legal Counsel", "Senior Counsel", "Head of Legal", "General Counsel / CLO"] },
      { name: "Legal Operations", skills: "Process · change · service management", levels: ["Legal Ops Analyst", "Legal Ops Manager", "Legal Ops Director", "Head of Legal Operations"] },
      { name: "Legal Engineering", skills: "Requirements · systems · software", levels: ["Associate Legal Engineer", "Legal Engineer", "Lead Legal Engineer", "Head of Legal Engineering"] }
    ],
    links: [
      { label: "Legal Ops and Legal Engineering", href: "/blog/legal-ops-vs-legal-engineering/", internal: true },
      { label: "The Modern Lawyer Builds Systems", href: "/blog/the-modern-lawyer-builds-systems/", internal: true }
    ]
  },
  {
    id: "stack", x: 1270, y: 1150, width: 280, kind: "capability", group: "Infrastructure",
    title: "Core technology stack", kicker: "Boring, connected, dependable",
    summary: "A pragmatic set of tools for planning, drafting, storing, communicating, building and reporting.",
    meaning: "The exact products matter less than clear ownership, interoperability and fit with the way people work. A typical stack spans project management, drafting, document storage, communication, meetings, LLM access, application hosting and BI.",
    setup: ["Map the system of record for each information type.", "Prefer tools already present when they meet the requirement.", "Design identity, permissions, integrations and data flows together.", "Review duplicated capability before adding another platform."],
    signals: ["Project and notes: Notion, Asana, Trello or Linear", "Drafting: Word, Google Docs or both", "Repository: SharePoint or Google Drive", "Communication: Slack or Teams", "Meetings: Zoom, Teams and Google Meet", "LLMs: Anthropic and OpenAI", "Reporting: Sigma, Power BI, Notion or a custom build"]
  },
  {
    id: "safe-place", x: 940, y: 1260, width: 270, kind: "agent", group: "Infrastructure",
    title: "A safe place to play", kicker: "Build inside the fence",
    summary: "A secure hosted environment where the team can use capable models and deploy internal applications.",
    meaning: "Curiosity becomes capability when experiments can touch realistic workflows and have a route towards production. The environment needs approved models, identity, logging, data boundaries, deployment paths and engineering support proportional to the risk.",
    setup: ["Provide secure access to capable frontier models.", "Create reusable hosting, authentication and observability.", "Make data classifications and boundaries easy to understand.", "Give promising prototypes a path into supported production."],
    signals: ["Time from idea to safe prototype", "Experiments reaching real users", "Reusable components created", "Incidents and near misses learned from"],
    links: [{ label: "Read Safe Places to Play", href: "/blog/safe-places-to-play/", internal: true }]
  }
];

export const roadmapEdges = [
  ["primary", "horizon"], ["secondary", "horizon"], ["horizon", "sops"], ["sops", "help"],
  ["sops", "agents"], ["help", "agents"], ["ontology", "agents"], ["knowledge", "modern-team"],
  ["intake", "triage"], ["agents", "triage"], ["triage", "modern-team"], ["intake", "metrics"],
  ["modern-team", "metrics"], ["repository", "clm"], ["repository", "docauto"],
  ["docauto", "digital-contract"], ["docauto", "modern-team"], ["modern-team", "career"],
  ["stack", "modern-team"], ["safe-place", "stack"], ["safe-place", "docauto"], ["metrics", "career"]
];

export const roadmapNodeMap = new Map(roadmapNodes.map((node) => [node.id, node]));
