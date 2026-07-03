<script>
  let { deck } = $props();
</script>

<svelte:head>
  <title>{deck.title} | Legal Tech Workshop Draft</title>
  <meta name="description" content={deck.summary} />
</svelte:head>

<article class={`draft-deck ${deck.tone}`}>
  <header class="deck-hero">
    <nav class="deck-nav" aria-label="Workshop presentation navigation">
      <a href="/legal-tech-workshop/">Workshop timetable</a>
      <a href="/legal-tech-workshop/presentations/">Draft decks</a>
      {#if deck.previous}
        <a class="flow-link" href={deck.previous.href}>Previous in talk</a>
      {/if}
      {#if deck.next}
        <a class="flow-link primary" href={deck.next.href}>Next in talk</a>
      {:else}
        <a class="flow-link primary" href="/legal-tech-workshop/">Finish talk</a>
      {/if}
    </nav>

    <div class="hero-layout">
      <div>
        <p class="eyebrow">{deck.label}</p>
        <h1>{deck.title}</h1>
        <p class="lead">{deck.summary}</p>
        <div class="meta-row">
          <span>{deck.time}</span>
          <span>{deck.duration}</span>
          <span>{deck.audience}</span>
        </div>
      </div>

      <aside class="draft-card" aria-label="Draft status">
        <span>Draft</span>
        <strong>{deck.status}</strong>
        <p>{deck.draftNote}</p>
        {#if deck.flowPosition && deck.flowTotal}
          <p class="flow-status">Deck {deck.flowPosition} of {deck.flowTotal}</p>
        {/if}
      </aside>
    </div>
  </header>

  <div class="deck-shell">
    <aside class="agenda-card" aria-label="Deck agenda">
      <p class="agenda-kicker">Slides</p>
      <ol>
        {#each deck.slides as slide, index}
          <li>
            <a href={`#slide-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {slide.title}
            </a>
          </li>
        {/each}
      </ol>
    </aside>

    <div class="slides">
      {#each deck.slides as slide, index}
        <section class="slide-card" id={`slide-${index + 1}`}>
          <div class="slide-number">{String(index + 1).padStart(2, "0")}</div>
          <div class="slide-copy">
            <p class="slide-kicker">{slide.kicker}</p>
            <h2>{slide.title}</h2>
            {#if slide.body}
              <p class="slide-body">{slide.body}</p>
            {/if}

            {#if slide.bullets}
              <ul class="bullet-list">
                {#each slide.bullets as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            {/if}

            {#if slide.activity}
              <div class="callout activity">
                <span>Activity</span>
                <p>{slide.activity}</p>
              </div>
            {/if}

            {#if slide.visual}
              <div class="callout visual">
                <span>Visual idea</span>
                <p>{slide.visual}</p>
              </div>
            {/if}

            {#if slide.speakerNote}
              <div class="speaker-note">
                <span>Facilitator note</span>
                <p>{slide.speakerNote}</p>
              </div>
            {/if}
          </div>
        </section>
      {/each}
    </div>
  </div>

  <nav class="flow-footer" aria-label="Move through the workshop talk">
    {#if deck.previous}
      <a class="flow-card previous" href={deck.previous.href}>
        <span>Previous</span>
        <strong>{deck.previous.title}</strong>
        <small>{deck.previous.time}</small>
      </a>
    {:else}
      <a class="flow-card previous" href="/legal-tech-workshop/">
        <span>Start point</span>
        <strong>Workshop timetable</strong>
        <small>Full running order</small>
      </a>
    {/if}

    {#if deck.next}
      <a class="flow-card next" href={deck.next.href}>
        <span>Next in talk</span>
        <strong>{deck.next.title}</strong>
        <small>{deck.next.time}</small>
      </a>
    {:else}
      <a class="flow-card next" href="/legal-tech-workshop/">
        <span>Finish</span>
        <strong>Back to workshop timetable</strong>
        <small>Return to the hub</small>
      </a>
    {/if}
  </nav>
</article>

<style>
  :global(main) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    background-color: #f8fafc;
    background-image: none;
  }

  .draft-deck {
    --accent: #0f766e;
    --accent-dark: #10231d;
    --accent-soft: #ccfbf1;
    color: #10231d;
    background:
      linear-gradient(180deg, rgba(248, 250, 252, 0.96), #f8fafc 34rem),
      radial-gradient(circle at 14% 10%, rgba(15, 118, 110, 0.16), transparent 26rem),
      radial-gradient(circle at 84% 14%, rgba(37, 99, 235, 0.12), transparent 24rem);
    min-height: 100vh;
  }

  .draft-deck.ops {
    --accent: #be185d;
    --accent-dark: #3f1027;
    --accent-soft: #fce7f3;
  }

  .draft-deck.engineering {
    --accent: #2563eb;
    --accent-dark: #10264f;
    --accent-soft: #dbeafe;
  }

  .draft-deck.wrap {
    --accent: #16a34a;
    --accent-dark: #11381f;
    --accent-soft: #dcfce7;
  }

  .deck-hero {
    width: min(1400px, calc(100vw - 2rem));
    margin: 0 auto;
    padding: 0.75rem 0 0.85rem;
  }

  .deck-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.65rem;
  }

  .deck-nav a,
  .meta-row span {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 999px;
    background: #ffffff;
    color: #0f172a;
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.2;
    text-decoration: none;
  }

  .deck-nav a {
    padding: 0.55rem 0.8rem;
  }

  .deck-nav a:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .deck-nav .primary {
    border-color: var(--accent);
    background: var(--accent);
    color: #ffffff;
  }

  .deck-nav .primary:hover {
    color: #ffffff;
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.36fr);
    gap: 1rem;
    align-items: stretch;
  }

  .eyebrow,
  .agenda-kicker,
  .slide-kicker {
    margin: 0 0 0.55rem;
    color: var(--accent);
    font-size: 0.72rem;
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
    max-width: 900px;
    margin-bottom: 0.45rem;
    color: #0f172a;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 950;
    line-height: 0.96;
    letter-spacing: 0;
  }

  .lead {
    display: none;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }

  .meta-row span {
    padding: 0.5rem 0.75rem;
  }

  .draft-card,
  .agenda-card,
  .slide-card {
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.08);
  }

  .draft-card {
    display: grid;
    align-content: center;
    padding: 0.9rem;
  }

  .draft-card span {
    display: inline-block;
    width: fit-content;
    margin-bottom: 0.55rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent-dark);
    padding: 0.3rem 0.55rem;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .draft-card strong {
    display: block;
    margin-bottom: 0.35rem;
    color: #0f172a;
    font-size: 1rem;
  }

  .draft-card p {
    margin-bottom: 0;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .draft-card p:not(.flow-status) {
    display: none;
  }

  .draft-card .flow-status {
    margin-top: 0.25rem;
    border-top: 0;
    padding-top: 0;
    color: var(--accent-dark);
    font-weight: 900;
  }

  .deck-shell {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 1rem;
    width: min(1400px, calc(100vw - 2rem));
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 1.5rem;
  }

  .agenda-card {
    position: sticky;
    top: 5.25rem;
    align-self: start;
    max-height: calc(100vh - 6.25rem);
    overflow: auto;
    padding: 0.85rem;
  }

  .agenda-card ol {
    display: grid;
    gap: 0.3rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .agenda-card a {
    display: grid;
    grid-template-columns: 1.75rem 1fr;
    gap: 0.45rem;
    align-items: baseline;
    border-radius: 8px;
    color: #334155;
    padding: 0.45rem;
    font-size: 0.9rem;
    line-height: 1.25;
    text-decoration: none;
  }

  .agenda-card a:hover {
    background: var(--accent-soft);
    color: var(--accent-dark);
  }

  .agenda-card span {
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 900;
  }

  .slides {
    display: flex;
    gap: 1rem;
    min-width: 0;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 0.8rem;
    scroll-padding-inline: 0.25rem;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
  }

  .slide-card {
    position: relative;
    display: grid;
    flex: 0 0 min(100%, calc((100vh - 12.25rem) * 16 / 9));
    grid-template-columns: 3.5rem minmax(0, 1fr);
    gap: 0.85rem;
    align-items: center;
    aspect-ratio: 16 / 9;
    min-height: 0;
    max-height: calc(100vh - 12.25rem);
    overflow: hidden;
    padding: clamp(1.1rem, 3vw, 2.4rem);
    scroll-margin-top: 1rem;
    scroll-snap-align: start;
  }

  .slide-card::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 0.42rem;
    background: var(--accent);
  }

  .slide-number {
    color: var(--accent);
    align-self: start;
    font-size: 1rem;
    font-weight: 950;
  }

  .slide-copy {
    max-height: 100%;
    max-width: none;
    overflow: auto;
    padding-right: 0.2rem;
  }

  .slide-card h2 {
    max-width: 900px;
    margin-bottom: 0.75rem;
    color: #0f172a;
    font-size: clamp(2rem, 4.2vw, 3.7rem);
    font-weight: 950;
    line-height: 0.96;
    letter-spacing: 0;
  }

  .slide-body {
    color: #334155;
    font-size: clamp(0.98rem, 1.45vw, 1.18rem);
    line-height: 1.45;
  }

  .bullet-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
    margin: 1rem 0 0;
    padding: 0;
    list-style: none;
  }

  .bullet-list li {
    position: relative;
    border-left: 0.35rem solid var(--accent);
    border-radius: 8px;
    background: #f8fafc;
    color: #1e293b;
    padding: 0.65rem 0.8rem;
    font-size: clamp(0.92rem, 1.25vw, 1.02rem);
    line-height: 1.35;
  }

  .callout,
  .speaker-note {
    margin-top: 0.75rem;
    border-radius: 8px;
    padding: 0.75rem;
  }

  .callout {
    border: 1px solid rgba(15, 23, 42, 0.1);
    background: var(--accent-soft);
  }

  .callout span,
  .speaker-note span {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .callout span {
    color: var(--accent-dark);
  }

  .callout p,
  .speaker-note p {
    margin-bottom: 0;
    color: #334155;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .speaker-note {
    background: #0f172a;
  }

  .speaker-note span {
    color: #99f6e4;
  }

  .speaker-note p {
    color: #e2e8f0;
  }

  .flow-footer {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    width: min(1400px, calc(100vw - 2rem));
    margin: 0 auto;
    padding: 0 0 2rem;
  }

  .flow-card {
    display: grid;
    gap: 0.35rem;
    border: 1px solid rgba(15, 23, 42, 0.1);
    border-radius: 8px;
    background: #ffffff;
    color: #0f172a;
    padding: 1rem;
    text-decoration: none;
  }

  .flow-card:hover {
    border-color: var(--accent);
  }

  .flow-card span {
    color: var(--accent);
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .flow-card strong {
    font-size: clamp(1.15rem, 2vw, 1.55rem);
    font-weight: 950;
    line-height: 1.1;
  }

  .flow-card small {
    color: #64748b;
    font-weight: 800;
  }

  .flow-card.next {
    border-color: var(--accent);
    background: var(--accent-dark);
    color: #ffffff;
  }

  .flow-card.next span {
    color: #99f6e4;
  }

  .flow-card.next small {
    color: #cbd5e1;
  }

  @media (max-width: 960px) {
    .hero-layout,
    .deck-shell {
      grid-template-columns: 1fr;
    }

    .agenda-card {
      position: static;
      max-height: none;
    }

    .agenda-card ol {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .deck-hero,
    .deck-shell,
    .flow-footer {
      width: min(100% - 1rem, 1180px);
    }

    h1 {
      font-size: clamp(2.7rem, 15vw, 4.4rem);
    }

    .agenda-card ol,
    .slide-card,
    .flow-footer {
      grid-template-columns: 1fr;
    }

    .slide-card {
      min-height: auto;
    }
  }
</style>
