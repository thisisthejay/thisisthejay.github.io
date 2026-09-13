<script>
  /** @type {{ term: string, description: string }[]} */
  export let items = [];
</script>

<div class="definition-grid">
  {#each items as item, index}
    <article>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.term}</h3>
      <p>{item.description}</p>
    </article>
  {/each}
</div>

<style>
  .definition-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin: 3rem 0; border-block: 1px solid var(--ink); }
  article { padding: 1.4rem 1.4rem 1.8rem 0; }
  article + article { padding-left: 1.4rem; border-left: 1px solid var(--line); }
  span { color: var(--signal); font-size: .62rem; font-weight: 820; letter-spacing: .08em; }
  h3 { margin: 2.2rem 0 .7rem !important; color: var(--ink) !important; font-size: 1.25rem !important; letter-spacing: -.03em; }
  p { margin: 0 !important; color: var(--muted); font-size: .82rem; line-height: 1.55; }
  @media (max-width: 650px) {
    .definition-grid { grid-template-columns: 1fr; }
    article, article + article { padding: 1.3rem 0; border-left: 0; border-bottom: 1px solid var(--line); }
    article:last-child { border-bottom: 0; }
    h3 { margin-top: .8rem !important; }
  }
</style>
