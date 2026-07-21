<script>
  import LegalSystemDiagram from "$lib/components/LegalSystemDiagram.svelte";
  import CareerProfile from "$lib/components/CareerProfile.svelte";
  let { data } = $props();

  const capabilities = [
    { number: "01", title: "Legal operations", body: "Making complex legal work visible, measurable and easier to deliver." },
    { number: "02", title: "Product & systems", body: "Turning real user needs into useful tools, integrations and services." },
    { number: "03", title: "Applied AI", body: "Finding responsible, practical uses for AI in drafting, advice and operations." }
  ];

  const appearances = [
    { type: "Podcast", source: "The Wired Wig", title: "Re-Engineering Legal", href: "https://open.spotify.com/episode/0ZPRzMjBhZEN0ZyuZIFGHa?si=t7b_1LgzQUKrnBUciTTffg" },
    { type: "Article", source: "With Colin Levy", title: "What can LegalOps learn from implementation science?", href: "https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science" },
    { type: "Essay", source: "Data Driven Investor", title: "Why lawyers (should) make great developers", href: "https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0" },
    { type: "Talk", source: "LegalTech in the South West", title: "A Purposeful Journey", href: "https://ltinsw.com/" },
    { type: "Talk", source: "Bristol + Bath LegalTech", title: "We R LegalTech Festival", href: "https://www.bblegaltech.com/event/we-r-legaltech-festival-2024/" }
  ];
</script>

<svelte:head>
  <title>Jay Smith — Legal engineer, builder & writer</title>
  <meta name="description" content="Jay Smith writes and builds at the intersection of law, systems and technology." />
</svelte:head>

<section class="hero paper-grid">
  <div class="shell hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">Legal engineer / Builder / Writer</p>
      <h1 class="display">Better law<br /><span class="outline">by design.</span></h1>
      <p class="lede">I’m Jay Smith. I translate legal intent into processes, products and systems that people can actually use.</p>
      <div class="hero-actions">
        <a class="button" href="/blog/">Explore my notes</a>
        <a class="button ghost" href="/projects/">See selected work</a>
      </div>
    </div>
    <div class="portrait-wrap">
      <div class="portrait halftone">
        <img src="/images/jay.png" alt="Jay Smith" />
      </div>
      <span class="portrait-note">Based in the UK<br />Working across law + tech</span>
    </div>
  </div>
</section>

<section class="positioning">
  <div class="shell positioning-grid">
    <p class="eyebrow">The proposition</p>
    <div>
      <h2 class="section-title">The gap between policy and practice is an engineering problem.</h2>
      <p class="lede">Legal teams don’t need more theatre. They need clearer requirements, thoughtful process design and technology that fits how work really happens.</p>
    </div>
  </div>
</section>

<section class="diagram-section">
  <div class="shell">
    <LegalSystemDiagram />
  </div>
</section>

<section class="capabilities rule">
  <div class="shell">
    <div class="section-heading">
      <div>
        <p class="eyebrow">What I do</p>
        <h2 class="section-title">Work across the whole system.</h2>
      </div>
      <p class="lede">From the first ambiguous question to the thing running in production, I connect legal judgement, operational reality and technical delivery.</p>
    </div>
    <div class="capability-grid">
      {#each capabilities as item}
        <article>
          <span>{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<CareerProfile />

<section class="featured-work">
  <div class="shell work-grid">
    <div class="work-copy">
      <p class="eyebrow">Selected work / SenseCheck</p>
      <h2 class="section-title">Solving trust at a difficult moment.</h2>
      <p class="lede">I founded a product to help estate-planning lawyers verify beneficiaries and bank details with less friction—combining legal domain knowledge, product thinking and delivery.</p>
      <a class="arrow-link" href="/projects/">Read the case study <span>→</span></a>
    </div>
    <div class="product-frame">
      <div class="frame-bar"><span></span><span></span><span></span></div>
      <img src="/images/sensecheck-dashboard.png" alt="SenseCheck product dashboard" loading="lazy" />
    </div>
  </div>
</section>

<section class="writing rule">
  <div class="shell">
    <div class="section-heading compact-heading">
      <div><p class="eyebrow">Current thinking</p><h2 class="section-title">Notes from the field.</h2></div>
      <a class="arrow-link" href="/blog/">All notes <span>→</span></a>
    </div>
    <div class="post-grid">
      {#each data.latestPosts as post, index}
        <article class:lead-post={index === 0}>
          <div class="post-meta"><span>{post.formattedDate}</span><span>{post.tags[0] ?? 'Note'}</span></div>
          <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
          <p>{post.excerpt}</p>
          <a class="arrow-link" href={`/blog/${post.slug}/`}>Read note <span>→</span></a>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="appearances">
  <div class="shell appearances-grid">
      <div><p class="eyebrow">In public</p><h2 class="section-title">Speaking & publishing.</h2><p class="appearances-intro">Conversations and essays where I test ideas, share what I’ve learned and help make legal engineering more legible.</p></div>
    <div class="appearance-list">
      {#each appearances as item}
        <a href={item.href} target="_blank" rel="noreferrer">
          <span class="appearance-type">{item.type}</span>
          <span><small>{item.source}</small>{item.title}</span>
          <b>↗</b>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero { overflow: hidden; border-bottom: 1px solid var(--line); }
  .hero-inner { display: grid; min-height: min(760px, calc(100vh - 76px)); grid-template-columns: minmax(0, 1fr) 310px; align-items: center; gap: clamp(2rem, 7vw, 8rem); padding-block: clamp(4.5rem, 9vw, 8rem); }
  .hero-copy .lede { margin: 2rem 0 0; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
  .portrait-wrap { position: relative; }
  .portrait { position: relative; width: 100%; aspect-ratio: .78; border: 1px solid var(--ink); transform: rotate(2deg); }
  .portrait::before { position: absolute; z-index: -1; inset: -14px 14px 14px -14px; border: 1px solid var(--signal); content: ""; }
  .portrait img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.08); mix-blend-mode: multiply; }
  .portrait-note { display: block; margin-top: 1.25rem; color: var(--muted); font-size: .68rem; font-weight: 680; letter-spacing: .09em; line-height: 1.5; text-transform: uppercase; }
  .positioning { padding-block: clamp(5rem, 10vw, 9rem) 3rem; }
  .positioning-grid { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; }
  .positioning .lede { margin: 2rem 0 0; }
  .diagram-section { padding-bottom: clamp(5rem, 10vw, 9rem); }
  .capabilities { padding-block: clamp(5rem, 9vw, 8rem); }
  .section-heading { display: grid; grid-template-columns: 1.3fr 1fr; align-items: end; gap: 3rem; }
  .section-heading .lede { margin: 0; }
  .capability-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 4rem; border-top: 1px solid var(--line); }
  .capability-grid article { padding: 1.5rem 2rem 2rem 0; border-right: 1px solid var(--line); }
  .capability-grid article + article { padding-left: 2rem; }
  .capability-grid article:last-child { border: 0; }
  .capability-grid span { color: var(--signal); font-size: .7rem; font-weight: 800; }
  .capability-grid h3 { margin: 2.5rem 0 .75rem; font-size: 1.35rem; letter-spacing: -.03em; }
  .capability-grid p { margin: 0; color: var(--muted); line-height: 1.65; }
  .featured-work { padding-block: clamp(5rem, 10vw, 9rem); color: white; background: #212121; }
  .work-grid { display: grid; grid-template-columns: .75fr 1.25fr; align-items: center; gap: clamp(3rem, 7vw, 7rem); }
  .work-copy .eyebrow, .work-copy .lede { color: #aaa; }
  .work-copy .lede { margin: 1.8rem 0; }
  .product-frame { overflow: hidden; border: 1px solid #4a4a4a; background: #111; box-shadow: 18px 18px 0 #171717; transform: rotate(-1deg); }
  .frame-bar { display: flex; gap: 5px; padding: .7rem; border-bottom: 1px solid #444; }
  .frame-bar span { width: 6px; height: 6px; border-radius: 50%; background: #777; }
  .product-frame img { display: block; filter: grayscale(.8); }
  .writing { padding-block: clamp(5rem, 10vw, 9rem); }
  .compact-heading { grid-template-columns: 1fr auto; }
  .post-grid { display: grid; grid-template-columns: repeat(2, 1fr); margin-top: 3.5rem; border-top: 1px solid var(--line); }
  .post-grid article { padding: 2rem 2rem 2rem 0; border-bottom: 1px solid var(--line); }
  .post-grid article:nth-child(even) { padding-right: 0; padding-left: 2rem; border-left: 1px solid var(--line); }
  .post-meta { display: flex; justify-content: space-between; color: var(--muted); font-size: .65rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .post-grid h3 { margin: 2.5rem 0 .8rem; font-size: clamp(1.7rem, 3vw, 2.5rem); line-height: 1.02; letter-spacing: -.045em; }
  .post-grid h3 a:hover { color: var(--signal-dark); }
  .post-grid p { min-height: 3.2rem; color: var(--muted); line-height: 1.6; }
  .post-grid .arrow-link { margin-top: 1rem; font-size: .8rem; }
  .appearances { padding-block: clamp(5rem, 10vw, 9rem); background: var(--soft); }
  .appearances-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 5rem; }
  .appearances-intro { max-width: 430px; margin: 1.5rem 0 0; color: var(--muted); line-height: 1.65; }
  .appearance-list { border-top: 1px solid var(--ink); }
  .appearance-list a { display: grid; grid-template-columns: 80px 1fr auto; align-items: center; gap: 1rem; padding: 1.35rem 0; border-bottom: 1px solid #c7c7c2; transition: padding .2s ease; }
  .appearance-list a:hover { padding-left: .6rem; }
  .appearance-list small { display: block; margin-bottom: .2rem; color: var(--muted); font-size: .68rem; }
  .appearance-type { color: var(--signal-dark); font-size: .65rem; font-weight: 800; text-transform: uppercase; }
  .appearance-list b { font-weight: 500; }
  @media (max-width: 800px) {
    .hero-inner { min-height: auto; grid-template-columns: 1fr; }
    .portrait-wrap { width: min(260px, 75%); margin-left: auto; }
    .positioning-grid, .section-heading, .work-grid, .appearances-grid { grid-template-columns: 1fr; }
    .capability-grid { grid-template-columns: 1fr; }
    .capability-grid article, .capability-grid article + article { padding: 1.6rem 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .capability-grid h3 { margin-top: 1rem; }
  }
  @media (max-width: 600px) {
    .post-grid { grid-template-columns: 1fr; }
    .post-grid article, .post-grid article:nth-child(even) { padding: 1.7rem 0; border-left: 0; }
    .compact-heading { grid-template-columns: 1fr; }
    .appearance-list a { grid-template-columns: 62px 1fr auto; }
  }
</style>
