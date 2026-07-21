<script>
  import LegalSystemDiagram from "$lib/components/LegalSystemDiagram.svelte";
</script>

<svelte:head>
  <title>Selected work — Jay Smith</title>
  <meta name="description" content="Selected legal engineering, product and software work by Jay Smith." />
</svelte:head>

<section class="work-hero paper-grid">
  <div class="shell">
    <p class="eyebrow">Selected work / 2015—Now</p>
    <h1 class="display">Building what<br /><span class="outline">the work needs.</span></h1>
    <p class="lede">Products and systems shaped by domain knowledge, careful requirements and the realities of the people who use them.</p>
  </div>
</section>

<section class="case-study dark">
  <div class="shell case-grid">
    <div class="case-copy">
      <div class="case-index"><span>Case study 01</span><span>LegalTech / SaaS</span></div>
      <p class="eyebrow">SenseCheck</p>
      <h2>Make verification feel less like friction.</h2>
      <p class="lede">Estate administration depends on knowing that people and bank details are what they claim to be. I founded SenseCheck to make that high-stakes step more secure, more legible and easier to complete.</p>
      <dl>
        <div><dt>Role</dt><dd>Founder · Product lead · Legal SME</dd></div>
        <div><dt>Focus</dt><dd>AML · Identity · Service design</dd></div>
        <div><dt>Contribution</dt><dd>Discovery · Requirements · Delivery</dd></div>
      </dl>
    </div>
    <div class="case-visual">
      <div class="browser-bar"><span></span><span></span><span></span></div>
      <img src="/images/sensecheck-dashboard.png" alt="SenseCheck verification dashboard" />
    </div>
  </div>
</section>

<section class="case-study light">
  <div class="shell case-grid reverse">
    <div class="case-copy">
      <div class="case-index"><span>Case study 02</span><span>Education / Internal tool</span></div>
      <p class="eyebrow">BE School reporting</p>
      <h2>Give time back to teachers.</h2>
      <p class="lede">An outdated student-reporting process created repetitive work for teachers and administrators. I built a maintainable full-stack application to bring permissions, reporting and oversight into one clear workflow.</p>
      <dl>
        <div><dt>Role</dt><dd>Full-stack developer</dd></div>
        <div><dt>Focus</dt><dd>Workflow · Roles · Reporting</dd></div>
        <div><dt>Technology</dt><dd>Laravel · Relational data</dd></div>
      </dl>
    </div>
    <div class="case-visual light-frame">
      <div class="browser-bar"><span></span><span></span><span></span></div>
      <img src="/images/beschool-dashboard.png" alt="BE School reporting dashboard" />
    </div>
  </div>
</section>

<section class="method">
  <div class="shell method-grid">
    <div>
      <p class="eyebrow">How I work</p>
      <h2 class="section-title">Start with the system, not the software.</h2>
      <p class="lede">Technology is only one part of the intervention. I look at the policy, people, incentives, information and hand-offs before deciding what should be built.</p>
    </div>
    <LegalSystemDiagram compact={true} />
  </div>
</section>

<style>
  .work-hero { padding-block: clamp(5rem, 11vw, 10rem); border-bottom: 1px solid var(--line); }
  .work-hero .lede { margin: 2rem 0 0; }
  .case-study { padding-block: clamp(5rem, 11vw, 10rem); }
  .dark { color: white; background: var(--ink); }
  .light { background: var(--soft); }
  .case-grid { display: grid; grid-template-columns: .75fr 1.25fr; align-items: center; gap: clamp(3rem, 8vw, 8rem); }
  .case-grid.reverse { grid-template-columns: 1.25fr .75fr; }
  .reverse .case-copy { order: 2; }
  .case-index { display: flex; justify-content: space-between; margin-bottom: 4rem; padding-bottom: .8rem; border-bottom: 1px solid currentColor; color: #888; font-size: .62rem; font-weight: 760; letter-spacing: .08em; text-transform: uppercase; }
  .case-copy .eyebrow { color: var(--signal); }
  .case-copy h2 { margin: 0; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .95; letter-spacing: -.06em; }
  .dark .lede { color: #aaa; }
  .case-copy .lede { margin: 1.8rem 0 2.5rem; font-size: 1rem; }
  dl { margin: 0; border-top: 1px solid currentColor; }
  dl div { display: grid; grid-template-columns: 105px 1fr; gap: 1rem; padding: .85rem 0; border-bottom: 1px solid color-mix(in srgb, currentColor 25%, transparent); font-size: .78rem; }
  dt { color: #888; }
  dd { margin: 0; }
  .case-visual { overflow: hidden; border: 1px solid #4a4a4a; background: #111; box-shadow: 18px 18px 0 #090909; transform: rotate(1deg); }
  .light-frame { border-color: var(--ink); background: white; box-shadow: 18px 18px 0 #d0d0cb; transform: rotate(-1deg); }
  .case-visual img { display: block; filter: grayscale(.82); }
  .browser-bar { display: flex; gap: 5px; padding: .75rem; border-bottom: 1px solid #4a4a4a; }
  .browser-bar span { width: 6px; height: 6px; border-radius: 50%; background: #777; }
  .method { padding-block: clamp(5rem, 10vw, 9rem); }
  .method-grid { display: grid; grid-template-columns: .7fr 1.3fr; align-items: center; gap: clamp(3rem, 8vw, 8rem); }
  .method .lede { margin: 1.8rem 0 0; }
  @media (max-width: 850px) { .case-grid, .case-grid.reverse, .method-grid { grid-template-columns: 1fr; } .reverse .case-copy { order: initial; } }
</style>
