<script>
  import { presentationList, talkStart } from "$lib/workshop/presentations.js";
</script>

<svelte:head>
  <title>Draft Presentation Decks | Legal Tech Workshop</title>
  <meta
    name="description"
    content="Draft web-page presentation decks for the legal technology workshop."
  />
</svelte:head>

<section class="draft-index">
  <header class="index-hero">
    <nav class="index-nav" aria-label="Workshop navigation">
      <a href="/legal-tech-workshop/">Workshop timetable</a>
    </nav>

    <p class="eyebrow">Draft presentation pages</p>
    <h1>Workshop decks in progress</h1>
    <p class="lead">
      Section-by-section draft presentation pages for the legal technology
      workshop. These are deliberately web-first so the team can iterate quickly.
    </p>
    <div class="index-actions" aria-label="Presentation flow controls">
      <a class="primary-action" href={talkStart.href}>Start talk flow</a>
      <a class="secondary-action" href="/legal-tech-workshop/">Back to timetable</a>
    </div>
  </header>

  <div class="deck-grid">
    {#each presentationList as deck}
      <article class={`deck-card ${deck.tone}`}>
        <div class="deck-topline">
          <span>{deck.label}</span>
          <strong>{deck.time}</strong>
        </div>
        <h2>{deck.title}</h2>
        <p>{deck.summary}</p>
        <div class="deck-meta">
          <span>{deck.duration}</span>
          <span>{deck.slideCount} draft slides</span>
        </div>
        <a href={deck.href}>Load deck</a>
      </article>
    {/each}
  </div>
</section>

<style>
  :global(main) {
    margin-left: 0;
    margin-right: 0;
    background-color: #f8fafc;
    background-image: none;
  }

  .draft-index {
    min-height: 100vh;
    color: #10231d;
    background:
      linear-gradient(180deg, rgba(248, 250, 252, 0.94), #f8fafc 28rem),
      radial-gradient(circle at 16% 12%, rgba(15, 118, 110, 0.16), transparent 26rem),
      radial-gradient(circle at 84% 18%, rgba(190, 24, 93, 0.12), transparent 22rem);
    padding: 2rem 0 5rem;
  }

  .index-hero,
  .deck-grid {
    width: min(1120px, calc(100vw - 2rem));
    margin: 0 auto;
  }

  .index-nav {
    display: flex;
    margin-bottom: 4rem;
  }

  .index-nav a {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 999px;
    background: #ffffff;
    color: #0f172a;
    padding: 0.7rem 1rem;
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.2;
    text-decoration: none;
  }

  .index-nav a:hover {
    border-color: #0f766e;
    color: #0f766e;
  }

  .eyebrow {
    margin: 0 0 0.75rem;
    color: #0f766e;
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1,
  h2,
  p {
    margin-top: 0;
  }

  h1 {
    max-width: 860px;
    margin-bottom: 1.2rem;
    color: #0f172a;
    font-size: clamp(3rem, 8vw, 6.4rem);
    font-weight: 950;
    line-height: 0.95;
    letter-spacing: 0;
  }

  .lead {
    max-width: 720px;
    margin-bottom: 1rem;
    color: #334155;
    font-size: clamp(1.12rem, 2vw, 1.35rem);
    line-height: 1.55;
  }

  .index-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 3rem;
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

  .deck-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .deck-card {
    --accent: #0f766e;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 8px;
    background: #ffffff;
    padding: 1.15rem;
  }

  .deck-card.ops {
    --accent: #be185d;
  }

  .deck-card.engineering {
    --accent: #2563eb;
  }

  .deck-card.wrap {
    --accent: #16a34a;
  }

  .deck-card::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 0.35rem;
    background: var(--accent);
  }

  .deck-topline,
  .deck-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    align-items: center;
  }

  .deck-topline {
    justify-content: space-between;
    margin-bottom: 1.15rem;
    color: #64748b;
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .deck-card h2 {
    margin-bottom: 0.65rem;
    color: #0f172a;
    font-size: 1.45rem;
    font-weight: 950;
    line-height: 1.05;
    letter-spacing: 0;
  }

  .deck-card p {
    color: #475569;
    line-height: 1.55;
  }

  .deck-meta {
    margin: 1.2rem 0;
  }

  .deck-meta span {
    border-radius: 999px;
    background: #f1f5f9;
    color: #334155;
    padding: 0.45rem 0.65rem;
    font-size: 0.8rem;
    font-weight: 800;
  }

  .deck-card a {
    display: inline-flex;
    border-radius: 999px;
    background: var(--accent);
    color: #ffffff;
    padding: 0.75rem 1rem;
    font-size: 0.88rem;
    font-weight: 900;
    line-height: 1.2;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    .deck-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .index-hero,
    .deck-grid {
      width: min(100% - 1rem, 1120px);
    }

    h1 {
      font-size: clamp(2.6rem, 15vw, 4.3rem);
    }

    .deck-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
