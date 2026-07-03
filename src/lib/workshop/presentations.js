/** @typedef {{kicker: string, title: string, body?: string, bullets?: string[], activity?: string, visual?: string, speakerNote?: string}} WorkshopSlide */
/** @typedef {{slug: string, label: string, title: string, href: string, time: string}} PresentationLink */
/** @typedef {{slug: string, label: string, title: string, summary: string, time: string, duration: string, audience: string, status: string, draftNote: string, tone: string, slides: WorkshopSlide[]}} WorkshopDeck */
/** @typedef {{slug: string, label: string, title: string, summary: string, time: string, duration: string, href: string, tone: string, slideCount: number, flowPosition: number, previous: null | PresentationLink, next: null | PresentationLink}} PresentationListItem */

/** @type {WorkshopDeck[]} */
export const presentationDecks = [
  {
    slug: "what-is-legal-technology",
    label: "Part 1",
    title: "What is Legal Technology?",
    summary:
      "A shared foundation for the workshop: who is in the room, why legal technology matters, what the core terms mean, and where the roles sit across the legal market.",
    time: "10:00-11:15",
    duration: "75 mins",
    audience: "Introductory",
    status: "Needs team review",
    draftNote:
      "Draft for Jay, Martin, El and Mercy to tune with personal examples, VWV context and preferred terminology.",
    tone: "foundation",
    slides: [
      {
        kicker: "Opening",
        title: "Legal technology is legal work changing shape",
        body:
          "This session is about the practical bridge between legal expertise, better processes and tools that help people get useful legal work done.",
        bullets: [
          "Not a coding lecture",
          "Not a product sales pitch",
          "A practical way to think about legal work, systems and AI",
        ],
        speakerNote:
          "Set the tone early: legal tech is not separate from legal work. It is one way legal work gets designed, delivered and improved.",
      },
      {
        kicker: "Introductions",
        title: "How we each got here",
        body:
          "Each facilitator gives a short route into their current work, including background, role and the moment legal technology became interesting.",
        bullets: [
          "What did you study or do before this?",
          "What does your role involve now?",
          "What surprised you about working in legal tech?",
        ],
        activity:
          "Three minutes each from Jay, Martin, El and Mercy. Keep the stories personal and concrete.",
        visual: "Four profile tiles with one photo, one role line and one unexpected pathway detail.",
      },
      {
        kicker: "Room check",
        title: "Where are we starting from?",
        body:
          "Before introducing more concepts, get a read on the room's confidence, curiosity and concerns.",
        bullets: [
          "Who has used AI for work, study or personal tasks?",
          "Where do you already see value?",
          "What concerns or risks feel most real?",
        ],
        activity:
          "Use hands, a quick poll or sticky notes. Capture concerns without trying to solve every one immediately.",
      },
      {
        kicker: "Definition",
        title: "Legal tech is not just software",
        body:
          "Legal technology includes the tools, processes, data, people and design choices that shape how legal services are delivered.",
        bullets: [
          "A document automation system is legal tech",
          "A better intake workflow can be legal tech",
          "A chatbot is only useful if the surrounding process works",
        ],
        speakerNote:
          "This is where the workshop can start moving away from shiny tools and toward systems thinking.",
      },
      {
        kicker: "Key term",
        title: "Prompting is instruction design",
        body:
          "Prompting is the practice of giving an AI system enough context, task direction, constraints and examples to produce a useful output.",
        bullets: [
          "Context: what the AI needs to know",
          "Task: what you want it to do",
          "Constraints: what good, safe and appropriate looks like",
          "Examples: the style or structure you want back",
        ],
        visual: "Prompt recipe: context plus task plus constraints plus examples equals better output.",
      },
      {
        kicker: "Key term",
        title: "Legal operations makes legal work run better",
        body:
          "Legal operations focuses on the business and delivery side of legal work: process, data, vendors, budgets, reporting and continuous improvement.",
        bullets: [
          "How does work arrive?",
          "Who handles it?",
          "Where does it slow down?",
          "What evidence tells us it is improving?",
        ],
      },
      {
        kicker: "Key term",
        title: "Legal engineering turns legal knowledge into systems",
        body:
          "Legal engineering is the craft of structuring legal knowledge so it can power repeatable tools, workflows, documents or decision support.",
        bullets: [
          "Break legal reasoning into steps",
          "Define rules, exceptions and escalation points",
          "Design outputs people can trust and use",
        ],
        speakerNote:
          "A helpful line: legal engineering does not replace judgment; it creates a better route to apply judgment consistently.",
      },
      {
        kicker: "Key term",
        title: "Systems thinking asks what surrounds the task",
        body:
          "A legal task rarely exists alone. It sits inside people, handoffs, deadlines, documents, incentives, risks and feedback loops.",
        bullets: [
          "If one step changes, what else changes?",
          "Where does information enter the system?",
          "Where do people need reassurance, review or escalation?",
        ],
        visual: "Simple system map showing client, lawyer, matter data, output, review and next action.",
      },
      {
        kicker: "Landscape",
        title: "The legal tech market has several homes",
        body:
          "Legal technology shows up in vendor products, in-house legal teams, law firms and hybrid innovation roles.",
        bullets: [
          "Vendors build products for many legal customers",
          "In-house teams use tech to manage demand and risk",
          "Law firms use tech to improve delivery and client experience",
          "Legal ops and AI engineering roles connect the pieces",
        ],
      },
      {
        kicker: "Transition",
        title: "Now we turn the ideas into a workflow",
        body:
          "The build session starts with process mapping. Before anyone reaches for AI or software, we need to understand the legal journey we are trying to improve.",
        bullets: [
          "Map the matter",
          "Spot friction and repetition",
          "Gather requirements",
          "Use AI to help move from concept to prototype",
        ],
        speakerNote:
          "End Part 1 by making Part 2 feel like the natural next step, not a separate technical session.",
      },
    ],
  },
  {
    slug: "process-mapping",
    label: "Section A",
    title: "Process Mapping the Matter",
    summary:
      "A broad, practical introduction to mapping a legal matter so participants can see handoffs, decisions, risks and opportunities for automation.",
    time: "11:30-12:00",
    duration: "30 mins",
    audience: "Workshop exercise",
    status: "Needs example matter",
    draftNote:
      "Draft assumes a generic matter flow. Replace with the exact scenario the team wants participants to map.",
    tone: "foundation",
    slides: [
      {
        kicker: "Set-up",
        title: "Before we build, we map",
        body:
          "A process map shows what actually happens, who is involved, what information moves and where decisions are made.",
        bullets: [
          "It gives everyone the same picture",
          "It exposes hidden work",
          "It helps us choose the right intervention",
        ],
      },
      {
        kicker: "Concept",
        title: "A process is a story with handoffs",
        body:
          "Most legal work moves through stages: request, intake, triage, advice, document work, review, communication and next action.",
        bullets: [
          "What starts the matter?",
          "What happens next?",
          "Who needs to do or approve something?",
          "What is produced at the end?",
        ],
        visual: "Horizontal timeline with swimlanes for client, legal team and operations.",
      },
      {
        kicker: "Matter flow",
        title: "Map the matter at human level first",
        body:
          "Keep the first version broad. The goal is not to capture every exception. The goal is to understand the core journey.",
        bullets: [
          "Start with the trigger",
          "Add the main legal and administrative steps",
          "Mark decision points",
          "End with the output or next action",
        ],
        speakerNote:
          "Avoid getting trapped in edge cases too early. Park exceptions for later.",
      },
      {
        kicker: "Opportunity",
        title: "Friction points are clues",
        body:
          "Automation opportunities usually appear where work is repeated, delayed, copied between systems, manually checked or unclear to users.",
        bullets: [
          "Duplicate data entry",
          "Waiting for missing information",
          "Manual document drafting",
          "Repeated status updates",
          "Unclear escalation rules",
        ],
      },
      {
        kicker: "Legal lens",
        title: "What happens after the interaction?",
        body:
          "For legal work, the post-interaction steps matter as much as the front door. The map should show how an input becomes a legal output.",
        bullets: [
          "What does the user receive?",
          "What does the legal team need to review?",
          "What evidence is recorded?",
          "What prepares the next consultation?",
        ],
      },
      {
        kicker: "Judgment",
        title: "Not every step should be automated",
        body:
          "The point is to identify the right balance between automation, assistance, review and human judgment.",
        bullets: [
          "Automate repeatable collection and formatting",
          "Assist with summaries and drafts",
          "Escalate risk, ambiguity and judgment-heavy issues",
          "Keep a record of what changed and why",
        ],
      },
      {
        kicker: "Exercise",
        title: "Build the first map",
        body:
          "Participants map the matter from first contact through to the next useful legal action.",
        bullets: [
          "Use sticky notes or cards for each step",
          "Mark people or roles above each step",
          "Add pain points in a different colour",
          "Circle one automation opportunity",
        ],
        activity:
          "Give groups 8-10 minutes to sketch, then ask each group to share one friction point and one opportunity.",
      },
      {
        kicker: "Bridge",
        title: "The map becomes the brief",
        body:
          "The next section turns the process map into requirements: who the tool serves, what it must do and what good looks like.",
        bullets: [
          "Process tells us what happens",
          "Requirements tell us what the tool must support",
          "AI can help draft from both, but it needs clear inputs",
        ],
      },
    ],
  },
  {
    slug: "requirements-gathering",
    label: "Section B",
    title: "Requirements Gathering",
    summary:
      "A legal operations view of gathering requirements for an app, chatbot or automation, with personas and roles kept close to the build.",
    time: "12:05-12:25",
    duration: "20 mins",
    audience: "Ops and product thinking",
    status: "Needs final scenario",
    draftNote:
      "Draft includes placeholder personas and the Jeff Bezos anchor from the notes. Tune the example before sharing externally.",
    tone: "ops",
    slides: [
      {
        kicker: "Shift",
        title: "A process map is not yet a product",
        body:
          "Requirements gathering turns the map into a practical brief: who needs help, what they need to do and what constraints the solution must respect.",
        bullets: [
          "Who is the user?",
          "What are they trying to achieve?",
          "What does the legal team need from them?",
          "What would make this safe and useful?",
        ],
      },
      {
        kicker: "Personas",
        title: "Different users need different design choices",
        body:
          "A tool that works for a lawyer may fail for a client. A tool that works for a confident user may fail for someone anxious, busy or not tech savvy.",
        bullets: [
          "External customer or client",
          "Internal legal team",
          "Business-as-usual team",
          "Reviewer, approver or escalation contact",
        ],
      },
      {
        kicker: "Customer",
        title: "Mrs Smith: capable, busy, not tech savvy",
        body:
          "This persona helps participants remember that legal tools need clarity, reassurance and simple language.",
        bullets: [
          "Needs to understand what is being asked",
          "May not know legal terminology",
          "Needs confidence that the next step is safe",
          "May abandon the flow if it feels cold or confusing",
        ],
        speakerNote:
          "The point is not the name. The point is to design for someone who does not live inside legal or technical language.",
      },
      {
        kicker: "Internal users",
        title: "The legal team needs usable inputs",
        body:
          "Internal users need enough structure to review, advise and act without spending time reconstructing the facts.",
        bullets: [
          "Clean summary of the request",
          "Key facts and missing information",
          "Risk flags and urgency",
          "Suggested next steps with review points",
        ],
      },
      {
        kicker: "Operations",
        title: "The BAU team needs repeatability",
        body:
          "A business-as-usual team needs the solution to be maintainable, measurable and easy to fit into existing work.",
        bullets: [
          "Clear ownership",
          "Simple handover",
          "Reusable templates",
          "Reporting on volume, time saved and outcomes",
        ],
      },
      {
        kicker: "Anchor",
        title: "Jeff Bezos is a stress test",
        body:
          "Use an exaggerated high-profile persona to test whether the requirements still hold when urgency, complexity and scrutiny rise.",
        bullets: [
          "What if the client is extremely time-poor?",
          "What if the facts are commercially sensitive?",
          "What if the matter needs senior review immediately?",
          "What if the output must be board-ready?",
        ],
        speakerNote:
          "Frame this as a memorable stress test, not a literal client scenario.",
      },
      {
        kicker: "Requirements",
        title: "Good requirements are testable",
        body:
          "A requirement should be specific enough that someone can later say whether the prototype meets it.",
        bullets: [
          "The user can submit the key facts in under five minutes",
          "The legal team receives a structured summary",
          "High-risk answers trigger escalation",
          "The tool explains what will happen next",
        ],
      },
      {
        kicker: "Exercise",
        title: "Turn the map into a mini brief",
        body:
          "Groups choose one automation opportunity from their process map and write a short requirements brief.",
        bullets: [
          "Name the primary user",
          "Name one internal user",
          "Write three must-have requirements",
          "Write one risk or escalation rule",
        ],
        activity:
          "Ask each group to produce a one-page brief that can be handed to the agentic build section.",
      },
    ],
  },
  {
    slug: "agentic-development",
    label: "Section B",
    title: "Agentic Development",
    summary:
      "A conceptual bridge from requirements and process maps into AI-assisted development with Codex, Claude or similar agents.",
    time: "12:25-12:40",
    duration: "15 mins",
    audience: "Build thinking",
    status: "Needs tool choice",
    draftNote:
      "Draft keeps the tool references broad. Add a live Codex or Claude example once the demo path is decided.",
    tone: "engineering",
    slides: [
      {
        kicker: "Build mode",
        title: "Agents can help turn legal design into working prototypes",
        body:
          "AI development agents are useful when the problem, users, workflow and constraints have been made clear enough to build from.",
        bullets: [
          "They can draft pages, forms, logic and tests",
          "They can refactor and iterate quickly",
          "They still need human direction and review",
        ],
      },
      {
        kicker: "Inputs",
        title: "The agent needs a good brief",
        body:
          "The quality of the build depends on the quality of the context. The process map and requirements become the agent's working material.",
        bullets: [
          "Purpose of the tool",
          "User journeys and personas",
          "Data to collect",
          "Outputs to generate",
          "Risks, boundaries and review rules",
        ],
      },
      {
        kicker: "Prompt pattern",
        title: "From vague request to build instruction",
        body:
          "A useful agent instruction describes the desired experience, the constraints and how success should be checked.",
        bullets: [
          "Build a client intake page for this matter type",
          "Use plain English and accessible design",
          "Collect these facts and flag these risks",
          "Generate a summary for legal review",
          "Run the app and verify the key flow",
        ],
        visual: "Side-by-side: weak prompt vs build-ready prompt.",
      },
      {
        kicker: "Human role",
        title: "The lawyer stays in the loop",
        body:
          "Agentic development accelerates implementation, but it does not remove legal responsibility, judgment or quality control.",
        bullets: [
          "Review legal assumptions",
          "Check language and user expectations",
          "Test edge cases",
          "Approve risk handling",
          "Decide what can go live",
        ],
      },
      {
        kicker: "Risk",
        title: "Build speed needs guardrails",
        body:
          "The faster a prototype appears, the more important it is to define what it is not allowed to do.",
        bullets: [
          "No final advice without review",
          "No unsupported claims about outcomes",
          "No hidden collection of unnecessary data",
          "No automation of judgment-heavy escalation points",
        ],
      },
      {
        kicker: "Workflow",
        title: "A simple agentic build loop",
        body:
          "Move in short cycles: brief, build, inspect, test, refine. The agent helps with the work, but the team decides whether it is right.",
        bullets: [
          "Give the agent the brief",
          "Ask for a first prototype",
          "Inspect the user journey",
          "Test against requirements",
          "Refine copy, logic and review points",
        ],
        visual: "Loop diagram: brief, build, review, test, refine.",
      },
      {
        kicker: "Outputs",
        title: "What can an agent produce for this workshop?",
        body:
          "For the workshop, web pages are a fast presentation format and a useful bridge to real prototypes.",
        bullets: [
          "Presentation pages",
          "Client intake mockups",
          "Internal summary screens",
          "Workflow diagrams",
          "Draft requirements and test cases",
        ],
      },
      {
        kicker: "Transition",
        title: "Now we walk through the product idea",
        body:
          "The product walkthrough shows how the process map and requirements become a user-facing experience and internal legal output.",
        bullets: [
          "What the user sees",
          "What the legal team receives",
          "Where review happens",
          "How feedback improves the next version",
        ],
      },
    ],
  },
  {
    slug: "product-walkthrough",
    label: "Section B",
    title: "Product Walkthrough",
    summary:
      "A short walkthrough structure for showing the prototype or product concept from user entry through legal review and next action.",
    time: "12:40-12:45",
    duration: "5 mins",
    audience: "Demo",
    status: "Needs final prototype",
    draftNote:
      "Draft is a walkthrough scaffold. Replace placeholder screens with the actual prototype once built.",
    tone: "engineering",
    slides: [
      {
        kicker: "Demo frame",
        title: "A product walkthrough is a story of use",
        body:
          "The goal is to show how a person moves through the tool and how the legal team receives something more useful than an unstructured request.",
        bullets: [
          "Start with the user problem",
          "Show the flow in sequence",
          "Explain the decisions behind the design",
          "Invite reactions on usefulness and risk",
        ],
      },
      {
        kicker: "Screen 1",
        title: "The user knows what this is for",
        body:
          "The opening screen should set expectations: what the tool can help with, what it cannot do and what happens after submission.",
        bullets: [
          "Plain English purpose",
          "No false promise of instant legal advice",
          "Clear next step",
          "Reassuring tone",
        ],
        visual: "Prototype landing screen with purpose, boundaries and start action.",
      },
      {
        kicker: "Screen 2",
        title: "The intake asks for the right facts",
        body:
          "A good intake flow collects facts in a way that makes sense to the user and is structured enough for the legal team.",
        bullets: [
          "One question at a time or grouped sections",
          "Definitions where legal terms are unavoidable",
          "Progressive disclosure for complex areas",
          "Save or handoff where appropriate",
        ],
      },
      {
        kicker: "Screen 3",
        title: "Risk flags are handled early",
        body:
          "The flow should identify urgency, complexity or sensitive issues before producing any confident output.",
        bullets: [
          "Urgent deadlines",
          "Sensitive personal or commercial information",
          "Conflicting facts",
          "Areas requiring senior legal review",
        ],
      },
      {
        kicker: "Screen 4",
        title: "The legal team gets a structured summary",
        body:
          "The internal output should help the legal team move faster while still applying judgment.",
        bullets: [
          "Matter summary",
          "Key facts",
          "Missing information",
          "Risk flags",
          "Suggested next action",
        ],
        visual: "Internal review panel with summary, risk status and next-step checklist.",
      },
      {
        kicker: "Review",
        title: "Ask what would make this trustworthy",
        body:
          "Use the walkthrough to invite useful critique rather than simple approval.",
        bullets: [
          "What would a client misunderstand?",
          "What would a lawyer need to check?",
          "Where could this fail in practice?",
          "What should the next prototype improve?",
        ],
        activity:
          "Invite quick reactions from the room: one thing that works, one risk, one improvement.",
      },
      {
        kicker: "Close",
        title: "A prototype is a conversation starter",
        body:
          "The first version is not the finished product. It is a concrete object the team can test, critique and improve.",
        bullets: [
          "It makes assumptions visible",
          "It reveals gaps in requirements",
          "It helps legal and technical people collaborate",
        ],
      },
    ],
  },
  {
    slug: "wrap-up-careers",
    label: "Section C",
    title: "Wrap-Up and Careers",
    summary:
      "A closing section that connects the workshop activities to legal careers, transferable skills and practical confidence with AI in law.",
    time: "12:45-13:00",
    duration: "15 mins",
    audience: "Reflection",
    status: "Needs closing ask",
    draftNote:
      "Draft includes broad career messages. Add the exact final call-to-action once the audience and follow-up plan are confirmed.",
    tone: "wrap",
    slides: [
      {
        kicker: "Recap",
        title: "Today moved from concepts to build thinking",
        body:
          "The workshop started with legal technology as a landscape, then moved into mapping, requirements and AI-assisted prototyping.",
        bullets: [
          "Legal tech language",
          "Process mapping",
          "Requirements gathering",
          "Agentic development",
          "Product walkthrough",
        ],
      },
      {
        kicker: "Careers",
        title: "Legal careers are broadening",
        body:
          "Modern legal work increasingly includes process design, product thinking, operations, data, automation and AI.",
        bullets: [
          "You can be legal and operational",
          "You can be legal and technical",
          "You can be legal and design-focused",
          "You can help translate between disciplines",
        ],
      },
      {
        kicker: "Skill",
        title: "Process mapping is a legal career skill",
        body:
          "Being able to show how legal work happens makes you better at improving it, explaining it and choosing the right tools.",
        bullets: [
          "See hidden work",
          "Spot bottlenecks",
          "Compare current and future state",
          "Give technical teams better context",
        ],
      },
      {
        kicker: "Skill",
        title: "Requirements gathering is translation",
        body:
          "Requirements gathering turns messy human needs into a brief that a team or agent can build from.",
        bullets: [
          "Listen for user needs",
          "Separate must-haves from nice-to-haves",
          "Define risk and review points",
          "Make success testable",
        ],
      },
      {
        kicker: "AI",
        title: "AI is useful when the work is well framed",
        body:
          "AI is powerful for drafting, structuring, summarising and prototyping. It works best when people bring context, judgment and clear constraints.",
        bullets: [
          "Better questions produce better outputs",
          "Clear workflows produce better tools",
          "Human review remains essential",
          "The skill is knowing how to direct and evaluate the system",
        ],
      },
      {
        kicker: "Confidence",
        title: "You do not need to know everything to start",
        body:
          "Legal technology rewards curiosity, clarity and iteration. The first map, brief or prototype does not need to be perfect to be useful.",
        bullets: [
          "Start with a real problem",
          "Map what happens now",
          "Choose one useful improvement",
          "Test it with the people affected",
        ],
      },
      {
        kicker: "Reflection",
        title: "What will you notice differently now?",
        body:
          "Close by asking participants to name one legal process they now see as a candidate for improvement.",
        activity:
          "One-minute reflection: write down one process, one user and one improvement opportunity.",
      },
      {
        kicker: "Close",
        title: "Legal tech is a way of making legal work more usable",
        body:
          "The strongest legal technology work is grounded in legal understanding, user empathy and careful systems design.",
        bullets: [
          "Know the work",
          "Understand the user",
          "Design the process",
          "Use AI and tools with judgment",
        ],
      },
    ],
  },
];

const basePresentationList = presentationDecks.map((deck, index) => ({
  slug: deck.slug,
  label: deck.label,
  title: deck.title,
  summary: deck.summary,
  time: deck.time,
  duration: deck.duration,
  href: `/legal-tech-workshop/presentations/${deck.slug}/`,
  tone: deck.tone,
  slideCount: deck.slides.length,
  flowPosition: index + 1,
}));

/** @type {PresentationListItem[]} */
export const presentationList = basePresentationList.map((deck, index, decks) => ({
  ...deck,
  previous: decks[index - 1] ?? null,
  next: decks[index + 1] ?? null,
}));

export const talkStart = presentationList[0];

/** @param {string} slug */
export function getPresentationDeck(slug) {
  return presentationDecks.find((deck) => deck.slug === slug) ?? null;
}

/** @param {string} slug */
export function getPresentationWithNavigation(slug) {
  const deck = getPresentationDeck(slug);
  const navigation = presentationList.find((item) => item.slug === slug);
  if (!deck || !navigation) return null;

  return {
    ...deck,
    href: navigation.href,
    flowPosition: navigation.flowPosition,
    flowTotal: presentationList.length,
    previous: navigation.previous,
    next: navigation.next,
  };
}
