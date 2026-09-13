<script>
  import RoadmapCanvas from "$lib/components/roadmap/RoadmapCanvas.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { roadmapNodes } from "$lib/roadmap";
  import { absoluteUrl, AUTHOR_SCHEMA, PERSON_ID, SITE_URL } from "$lib/site";

  const description = "An interactive legal operations roadmap for modernising an in-house legal team across knowledge, intake, data, contracts, careers, AI and infrastructure.";
  const roadmapSchema = {
    "@context": "https://schema.org",
    "@graph": [
      AUTHOR_SCHEMA,
      {
        "@type": "LearningResource",
        "@id": `${SITE_URL}/roadmap/#resource`,
        url: absoluteUrl("/roadmap/"),
        name: "Legal Ops Roadmap",
        description,
        inLanguage: "en-GB",
        author: { "@id": PERSON_ID },
        learningResourceType: "Interactive roadmap",
        about: roadmapNodes.filter((node) => node.id !== "modern-team").map((node) => node.title)
      }
    ]
  };

  const pillars = [
    { index: "01", title: "Knowledge", copy: "Curate the sources, scan for change, version the business position and make it discoverable at the point of need." },
    { index: "02", title: "Demand", copy: "Give the business one useful front door, then answer or route each request with the right context." },
    { index: "03", title: "Data", copy: "Measure demand, delay, capacity and outcomes so the next improvement is grounded in evidence." },
    { index: "04", title: "Contracts", copy: "Connect the repository, structured data and deterministic drafting without forgetting historic or third-party documents." },
    { index: "05", title: "People", copy: "Build respected paths for legal subject-matter experts, Legal Operations and Legal Engineering." },
    { index: "06", title: "Infrastructure", copy: "Provide a dependable core stack and a safe environment for capable experiments to become real services." }
  ];
</script>

<Seo
  title="Legal Ops Roadmap | Modern Legal Team Framework"
  {description}
  path="/roadmap/"
  structuredData={roadmapSchema}
/>

<section class="roadmap-hero paper-grid">
  <div class="shell hero-grid">
    <div>
      <p class="eyebrow">A working framework / Version 0.1</p>
      <h1 class="display">Legal Ops<br /><span class="outline">Roadmap.</span></h1>
    </div>
    <div class="hero-copy">
      <p class="lede">A connected view of what a modern legal team needs: governed knowledge, intelligent intake, useful data, dependable contract systems and the people and infrastructure to keep improving them.</p>
      <p>This is a living model rather than a maturity score. Start with the pressure the team can feel, follow its connections, and build the smallest useful piece of the system.</p>
    </div>
  </div>
</section>

<RoadmapCanvas />

<section class="orientation">
  <div class="shell">
    <div class="orientation-head">
      <p class="eyebrow">How to use it</p>
      <h2 class="section-title">Modernisation is a connected problem.</h2>
      <p class="lede">Choose a node on the canvas to see what it means, how I would approach it and the signals worth watching. The lines matter: a polished front door struggles without governed knowledge; dashboards say little without reliable intake data.</p>
    </div>
    <div class="pillar-grid">
      {#each pillars as pillar}
        <article>
          <span>{pillar.index}</span>
          <h3>{pillar.title}</h3>
          <p>{pillar.copy}</p>
        </article>
      {/each}
    </div>
    <div class="roadmap-note">
      <p class="eyebrow">A living roadmap</p>
      <p>I have built and operated many of these capabilities; others are directions I am actively exploring. Advanced nodes are marked openly. The framework will change as the work teaches me more.</p>
      <a class="arrow-link" href="/#contact">Compare notes with me <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<style>
  .roadmap-hero { padding-block: clamp(3.5rem, 6vw, 6rem); border-bottom: 1px solid var(--line); }
  .hero-grid { display: grid; grid-template-columns: 1.25fr .75fr; align-items: end; gap: clamp(3rem, 8vw, 8rem); }
  .hero-copy { padding-bottom: .5rem; }
  .hero-copy .lede { margin: 0 0 1.3rem; }
  .hero-copy > p:last-child { max-width: 590px; margin: 0; color: var(--muted); font-size: .87rem; line-height: 1.65; }
  .orientation { padding-block: clamp(5rem, 10vw, 9rem); }
  .orientation-head { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 5rem; align-items: end; }
  .orientation-head .eyebrow { grid-column: 1 / -1; margin-bottom: 0; }
  .orientation-head .lede { margin: 0; font-size: 1rem; }
  .pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 5rem; border-top: 1px solid var(--ink); border-left: 1px solid var(--line); }
  .pillar-grid article { min-height: 230px; padding: 1.5rem; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .pillar-grid span { color: var(--signal-dark); font-size: .68rem; font-weight: 820; letter-spacing: .12em; }
  .pillar-grid h3 { margin: 3rem 0 .75rem; font-size: 1.5rem; letter-spacing: -.04em; }
  .pillar-grid p { margin: 0; color: var(--muted); font-size: .85rem; line-height: 1.6; }
  .roadmap-note { display: grid; grid-template-columns: .6fr 1.2fr auto; align-items: center; gap: 2rem; margin-top: 6rem; padding: 2.5rem; color: white; background: var(--ink); }
  .roadmap-note .eyebrow { margin: 0; color: #a9abff; }
  .roadmap-note p:not(.eyebrow) { margin: 0; color: #bbb; font-size: .9rem; line-height: 1.65; }
  .roadmap-note .arrow-link { white-space: nowrap; }
  @media (max-width: 850px) {
    .hero-grid, .orientation-head, .roadmap-note { grid-template-columns: 1fr; }
    .pillar-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .pillar-grid { grid-template-columns: 1fr; }
    .pillar-grid article { min-height: auto; }
    .pillar-grid h3 { margin-top: 2rem; }
    .roadmap-note { padding: 1.6rem; }
  }
</style>
