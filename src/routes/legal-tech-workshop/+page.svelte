<script>
  import { presentationList, talkStart } from "$lib/workshop/presentations.js";

  const facilitators = [
    { name: "Jay", role: "Remote" },
    { name: "Martin", role: "VWV" },
    { name: "El", role: "VWV" },
    { name: "Mercy", role: "VWV" },
  ];

  const partOne = [
    {
      time: "10:00-10:15",
      title: "Profile Introductions",
      duration: "15 mins",
      description:
        "Each facilitator gives a three-minute introduction covering their route into legal technology, role context, and personal pathway.",
      detail: "Jay, Martin, El and Mercy",
    },
    {
      time: "10:15-10:20",
      title: "Opening Q&A",
      duration: "5 mins",
      description:
        "A short first pause for questions before moving into shared language and concepts.",
      detail: "Audience questions",
    },
    {
      time: "10:20-10:30",
      title: "Temperature Check",
      duration: "10 mins",
      description:
        "Gauge current confidence, use of AI, views on value, and concerns around legal technology.",
      detail: "AI usage, value, concerns",
    },
    {
      time: "10:30-10:45",
      title: "Key Terms",
      duration: "15 mins",
      description:
        "Define the core vocabulary participants will use through the workshop.",
      detail:
        "Prompting, legal operations, AI, legal engineering, systems thinking",
    },
    {
      time: "10:45-10:55",
      title: "Concept Q&A",
      duration: "10 mins",
      description:
        "Check understanding and invite reactions to the terminology before applying it.",
      detail: "Clarify language and examples",
    },
    {
      time: "10:55-11:10",
      title: "Legal Tech Landscape",
      duration: "15 mins",
      description:
        "Map the wider ecosystem: vendor products, in-house teams, law firm innovation, legal operations, and AI engineering roles.",
      detail: "Vendors, in-house, law firms, roles",
    },
    {
      time: "11:10-11:15",
      title: "Q&A and Workflow Set-Up",
      duration: "5 mins",
      description:
        "Close Part 1 by answering final questions and preparing the workflow that participants will use in the build session.",
      detail: "Prepare the shared workflow",
    },
  ];

  const partTwo = [
    {
      time: "11:30-12:00",
      section: "Section A",
      title: "Process Mapping the Matter",
      duration: "30 mins",
      tone: "broad",
      href: "/legal-tech-workshop/presentations/process-mapping/",
      description:
        "Introduce process mapping, then use a legal matter flow to identify where automation or AI support could help.",
      bullets: [
        "Explain the purpose of process mapping",
        "Map the matter from intake to next action",
        "Identify automation opportunities",
        "Extend the map into legal outputs and consultation preparation",
      ],
    },
    {
      time: "12:00-12:05",
      section: "Reset",
      title: "Pseudo Break",
      duration: "5 mins",
      tone: "pause",
      description:
        "A short pause to reset the room while keeping momentum for the build-focused section.",
      bullets: ["Quick stretch", "Questions captured", "Transition into requirements"],
    },
    {
      time: "12:05-12:25",
      section: "Section B",
      title: "Requirements Gathering",
      duration: "20 mins",
      tone: "ops",
      href: "/legal-tech-workshop/presentations/requirements-gathering/",
      description:
        "Move from process thinking into legal operations: what needs to be true for an app, chatbot, or automation to be useful?",
      bullets: [
        "Client-facing and internal automation use cases",
        "Personas and roles",
        "Customer example: Mrs Smith, not tech savvy",
        "Internal legal team and BAU team needs",
        "Anchoring example: Jeff Bezos",
      ],
    },
    {
      time: "12:25-12:40",
      section: "Section B",
      title: "Agentic Development",
      duration: "15 mins",
      tone: "engineering",
      href: "/legal-tech-workshop/presentations/agentic-development/",
      description:
        "Show how requirements and process maps can be turned into a build plan, then accelerated with AI agents such as Codex or Claude.",
      bullets: [
        "Translate maps into product requirements",
        "Use AI to draft structure, copy, logic, and prototypes",
        "Explain where human legal judgment remains essential",
      ],
    },
    {
      time: "12:40-12:45",
      section: "Section B",
      title: "Product Walkthrough",
      duration: "5 mins",
      tone: "engineering",
      href: "/legal-tech-workshop/presentations/product-walkthrough/",
      description:
        "Walk through the prototype or product concept so participants can see the bridge from legal process to working tool.",
      bullets: ["Demo the user journey", "Call out build decisions", "Invite quick reactions"],
    },
    {
      time: "12:45-13:00",
      section: "Section C",
      title: "Wrap-Up and Careers",
      duration: "15 mins",
      tone: "wrap",
      href: "/legal-tech-workshop/presentations/wrap-up-careers/",
      description:
        "Close by broadening the career lens and reinforcing the practical value of process mapping, requirements gathering, and AI-assisted building in law.",
      bullets: [
        "Legal careers are broadening",
        "AI and technology are increasingly part of legal work",
        "Process mapping and requirements gathering are transferable skills",
        "AI is powerful for building useful things in law",
      ],
    },
  ];

  const outputs = presentationList;

  const itineraryRows = [
    { heading: "Part 1 - What is Legal Technology", items: partOne },
    {
      heading: "Break",
      items: [
        {
          time: "11:15-11:30",
          title: "Break",
          duration: "15 mins",
          description: "Fifteen minutes to reset before the build session.",
        },
      ],
    },
    { heading: "Part 2 - Building Workshop", items: partTwo },
  ];

  const itineraryText = [
    "# Legal Tech Workshop Itinerary",
    "",
    "Time: 10:00-13:00",
    "Team: Jay (Remote), Martin (VWV), El (VWV), Mercy (VWV)",
    "",
    ...itineraryRows.flatMap((section) => [
      `## ${section.heading}`,
      "",
      ...section.items.flatMap((item) => [
        `- ${item.time} (${item.duration}) - ${item.title}`,
        `  ${item.description}`,
      ]),
      "",
    ]),
  ].join("\n");

  const itineraryDownloadHref = `data:text/markdown;charset=utf-8,${encodeURIComponent(
    itineraryText,
  )}`;
</script>

<svelte:head>
  <title>Legal Tech Workshop Timetable</title>
  <meta
    name="description"
    content="A polished timetable for the legal technology workshop with Jay, Martin, El and Mercy."
  />
</svelte:head>

<section class="workshop-page">
  <div class="hero-band">
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">Legal Tech Workshop</p>
        <h1>From legal process to buildable ideas</h1>
        <p class="lead">
          A practical half-day session introducing legal technology, process
          mapping, requirements gathering, and AI-assisted product building.
        </p>
        <div class="meta-row" aria-label="Workshop details">
          <span>10:00-13:00</span>
          <span>Two parts</span>
          <span>VWV + Remote</span>
        </div>
        <div class="hero-actions" aria-label="Presentation controls">
          <a class="primary-action" href={talkStart.href}>Start talk flow</a>
          <a class="secondary-action" href="/legal-tech-workshop/presentations/">
            View all draft decks
          </a>
          <a
            class="secondary-action"
            href={itineraryDownloadHref}
            download="legal-tech-workshop-itinerary.md"
          >
            Download itinerary
          </a>
        </div>
      </div>

      <div class="hero-panel" aria-label="Session summary">
        <div class="panel-line">
          <span class="panel-number">01</span>
          <div>
            <p>What is Legal Technology?</p>
            <strong>10:00-11:15</strong>
          </div>
        </div>
        <div class="panel-line">
          <span class="panel-number">02</span>
          <div>
            <p>Building Workshop</p>
            <strong>11:30-13:00</strong>
          </div>
        </div>
        <div class="panel-note">
          <span>Output focus</span>
          <p>Participants leave with a clearer map from legal problem to useful tool.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="content-shell">
    <section class="summary-band" aria-labelledby="facilitators-heading">
      <div>
        <p class="section-kicker">People</p>
        <h2 id="facilitators-heading">Workshop team</h2>
      </div>
      <div class="facilitator-grid">
        {#each facilitators as facilitator}
          <article class="person-card">
            <strong>{facilitator.name}</strong>
            <span>{facilitator.role}</span>
          </article>
        {/each}
      </div>
    </section>

    <section class="timeline-section" aria-labelledby="part-one-heading">
      <div class="section-heading">
        <p class="section-kicker">Part 1</p>
        <h2 id="part-one-heading">What is Legal Technology?</h2>
        <p>10:00-11:15 | Shared context, language, and landscape.</p>
        <a class="section-action" href={talkStart.href}>Load deck 1</a>
      </div>

      <div class="timeline-list">
        {#each partOne as item}
          <article class="timeline-item">
            <div class="time-block">
              <span>{item.time}</span>
              <small>{item.duration}</small>
            </div>
            <div class="item-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span class="detail-pill">{item.detail}</span>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="break-band" aria-label="Main break">
      <span>11:15-11:30</span>
      <strong>Break</strong>
      <p>Fifteen minutes to reset before the build session.</p>
    </section>

    <section class="timeline-section" aria-labelledby="part-two-heading">
      <div class="section-heading">
        <p class="section-kicker">Part 2</p>
        <h2 id="part-two-heading">Building Workshop</h2>
        <p>11:30-13:00 | Process mapping, requirements, agentic build thinking, and product walkthrough.</p>
      </div>

      <div class="workshop-grid">
        {#each partTwo as item}
          <article class={`workshop-card ${item.tone}`}>
            <div class="card-topline">
              <span>{item.section}</span>
              <strong>{item.time}</strong>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {#each item.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
            {#if item.href}
              <a class="card-action" href={item.href}>Open draft deck</a>
            {/if}
          </article>
        {/each}
      </div>
    </section>

    <section class="outputs-band" aria-labelledby="outputs-heading">
      <div>
        <p class="section-kicker">Web-first materials</p>
        <h2 id="outputs-heading">Presentation outputs to build here</h2>
        <p>
          Rather than preparing everything in Canva, the workshop materials can
          become fast, editable web pages that AI agents can help draft and
          improve.
        </p>
      </div>
      <div class="output-list">
        {#each outputs as output}
          <a href={output.href}>
            <span>{output.label}</span>
            <strong>{output.title}</strong>
            <small>{output.slideCount} draft slides | {output.duration}</small>
          </a>
        {/each}
      </div>
    </section>
  </div>
</section>

<style>
  :global(main) {
    margin-left: 0;
    margin-right: 0;
    background-color: #f8fafc;
    background-image: none;
  }

  .workshop-page {
    color: #13201b;
    background:
      linear-gradient(180deg, rgba(248, 250, 252, 0.92), #f8fafc 480px),
      radial-gradient(circle at 12% 18%, rgba(14, 116, 144, 0.14), transparent 28rem),
      radial-gradient(circle at 86% 8%, rgba(190, 24, 93, 0.12), transparent 24rem);
    min-height: 100vh;
  }

  .hero-band {
    padding: 4rem 1.5rem 3rem;
  }

  .hero-grid,
  .content-shell {
    width: min(1120px, calc(100vw - 2rem));
    margin: 0 auto;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
    gap: 2rem;
    align-items: end;
  }

  .hero-copy {
    padding: 2rem 0;
  }

  .eyebrow,
  .section-kicker {
    margin: 0 0 0.75rem;
    color: #0f766e;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1 {
    max-width: 820px;
    margin-bottom: 1.25rem;
    color: #10231d;
    font-size: clamp(3rem, 9vw, 6.8rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 0;
  }

  .lead {
    max-width: 720px;
    color: #334155;
    font-size: clamp(1.12rem, 2vw, 1.35rem);
    line-height: 1.55;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 2rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .meta-row span,
  .detail-pill {
    border: 1px solid rgba(15, 118, 110, 0.2);
    border-radius: 999px;
    background: #ffffff;
    color: #115e59;
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.2;
  }

  .meta-row span {
    padding: 0.7rem 0.95rem;
  }

  .primary-action,
  .secondary-action {
    display: inline-flex;
    border-radius: 999px;
    padding: 0.8rem 1.05rem;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.2;
    text-decoration: none;
  }

  .primary-action {
    background: #0f766e;
    color: #ffffff;
  }

  .secondary-action {
    border: 1px solid rgba(15, 118, 110, 0.2);
    background: #ffffff;
    color: #115e59;
  }

  .hero-panel {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0 24px 80px rgba(15, 23, 42, 0.12);
    padding: 1rem;
  }

  .panel-line {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #e2e8f0;
    padding: 1rem 0.5rem;
  }

  .panel-line p,
  .panel-note p {
    margin-bottom: 0.2rem;
    color: #475569;
  }

  .panel-line strong {
    color: #0f172a;
    font-size: 1.15rem;
  }

  .panel-number {
    display: grid;
    width: 3rem;
    height: 3rem;
    place-items: center;
    border-radius: 8px;
    background: #0f766e;
    color: #ffffff;
    font-weight: 900;
  }

  .panel-note {
    margin-top: 1rem;
    border-radius: 8px;
    background: #10231d;
    color: #ffffff;
    padding: 1.1rem;
  }

  .panel-note span {
    display: block;
    margin-bottom: 0.3rem;
    color: #99f6e4;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .panel-note p {
    color: #e2e8f0;
  }

  .content-shell {
    display: grid;
    gap: 2.5rem;
    padding: 0 0 5rem;
  }

  .summary-band,
  .timeline-section,
  .outputs-band {
    border-top: 1px solid rgba(15, 23, 42, 0.1);
    padding-top: 2rem;
  }

  .summary-band {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .summary-band h2,
  .section-heading h2,
  .outputs-band h2 {
    margin-bottom: 0.5rem;
    color: #0f172a;
    font-size: clamp(1.9rem, 4vw, 3.1rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0;
  }

  .facilitator-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .person-card,
  .timeline-item,
  .workshop-card {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 8px;
    background: #ffffff;
  }

  .person-card {
    padding: 1rem;
  }

  .person-card strong {
    display: block;
    color: #0f172a;
    font-size: 1.1rem;
  }

  .person-card span {
    color: #475569;
    font-size: 0.92rem;
  }

  .section-heading {
    max-width: 820px;
    margin-bottom: 1.4rem;
  }

  .section-heading p:last-child,
  .outputs-band p {
    color: #475569;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .section-action,
  .card-action {
    display: inline-flex;
    width: fit-content;
    border-radius: 999px;
    background: #0f766e;
    color: #ffffff;
    font-size: 0.88rem;
    font-weight: 900;
    line-height: 1.2;
    text-decoration: none;
  }

  .section-action {
    margin-top: 0.8rem;
    padding: 0.75rem 1rem;
  }

  .card-action {
    margin-top: 1rem;
    padding: 0.65rem 0.85rem;
  }

  .timeline-list {
    display: grid;
    gap: 0.75rem;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 1.25rem;
    padding: 1rem;
  }

  .time-block {
    border-radius: 8px;
    background: #f1f5f9;
    padding: 0.95rem;
  }

  .time-block span {
    display: block;
    color: #0f172a;
    font-size: 1rem;
    font-weight: 900;
  }

  .time-block small {
    color: #64748b;
    font-weight: 800;
  }

  .item-copy h3,
  .workshop-card h3 {
    margin-bottom: 0.35rem;
    color: #0f172a;
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: 0;
  }

  .item-copy p,
  .workshop-card p {
    margin-bottom: 0.85rem;
    color: #475569;
    line-height: 1.55;
  }

  .detail-pill {
    display: inline-block;
    max-width: 100%;
    padding: 0.45rem 0.7rem;
  }

  .break-band {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 1rem;
    align-items: center;
    border-radius: 8px;
    background: #0f172a;
    color: #ffffff;
    padding: 1.1rem 1.25rem;
  }

  .break-band span {
    color: #99f6e4;
    font-weight: 900;
  }

  .break-band strong {
    font-size: 1.2rem;
  }

  .break-band p {
    margin-bottom: 0;
    color: #cbd5e1;
  }

  .workshop-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .workshop-card {
    position: relative;
    overflow: hidden;
    padding: 1.15rem;
  }

  .workshop-card::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 0.35rem;
    background: #0f766e;
  }

  .workshop-card.ops::before {
    background: #be185d;
  }

  .workshop-card.engineering::before {
    background: #2563eb;
  }

  .workshop-card.pause::before {
    background: #f59e0b;
  }

  .workshop-card.wrap::before {
    background: #16a34a;
  }

  .card-topline {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.9rem;
    color: #64748b;
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .workshop-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .workshop-card li {
    position: relative;
    padding-left: 1rem;
    color: #334155;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .workshop-card li + li {
    margin-top: 0.45rem;
  }

  .workshop-card li::before {
    content: "";
    position: absolute;
    top: 0.55rem;
    left: 0;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    background: #0f766e;
  }

  .outputs-band {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
    gap: 2rem;
    align-items: start;
  }

  .output-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .output-list a {
    display: grid;
    gap: 0.35rem;
    border: 1px solid rgba(15, 118, 110, 0.18);
    border-radius: 8px;
    background: #ffffff;
    color: #0f172a;
    padding: 0.9rem 1rem;
    text-decoration: none;
  }

  .output-list a:hover {
    border-color: #0f766e;
  }

  .output-list span {
    color: #0f766e;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .output-list strong {
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .output-list small {
    color: #64748b;
    font-weight: 800;
  }

  @media (max-width: 900px) {
    .hero-grid,
    .summary-band,
    .outputs-band {
      grid-template-columns: 1fr;
    }

    .facilitator-grid,
    .workshop-grid,
    .output-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .hero-band {
      padding-top: 2.5rem;
    }

    .hero-grid,
    .content-shell {
      width: min(100% - 1rem, 1120px);
    }

    h1 {
      font-size: clamp(2.6rem, 15vw, 4.2rem);
    }

    .facilitator-grid,
    .timeline-item,
    .workshop-grid,
    .output-list,
    .break-band {
      grid-template-columns: 1fr;
    }

    .timeline-item {
      gap: 0.75rem;
    }

    .break-band {
      gap: 0.35rem;
    }
  }
</style>
