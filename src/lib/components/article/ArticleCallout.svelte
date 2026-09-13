<script>
  export let label = "Field note";
  export let title;
  export let tone = "light";
</script>

<aside class:dark={tone === "dark"}>
  <div class="callout-label"><span></span>{label}</div>
  <div class="callout-content">
    <h3>{title}</h3>
    <div class="callout-copy"><slot /></div>
  </div>
</aside>

<style>
  aside { display: grid; grid-template-columns: 130px 1fr; gap: 2rem; margin: 3.5rem 0; padding: 1.5rem; border: 1px solid var(--ink); background: var(--soft); box-shadow: 8px 8px 0 #d4d4cf; }
  aside.dark { color: white; background: var(--ink); box-shadow: 8px 8px 0 #d4d4cf; }
  .callout-label { display: flex; align-items: flex-start; gap: .55rem; padding-top: .25rem; color: var(--signal-dark); font-size: .62rem; font-weight: 800; letter-spacing: .12em; line-height: 1.4; text-transform: uppercase; }
  .dark .callout-label { color: #9fa2ff; }
  .callout-label span { flex: 0 0 20px; height: 2px; margin-top: .38rem; background: currentColor; }
  h3 { margin: 0 0 .8rem !important; color: inherit !important; font-size: 1.5rem !important; line-height: 1.05; letter-spacing: -.035em; }
  .callout-copy { color: var(--muted); font-size: .96rem; line-height: 1.65; }
  .dark .callout-copy { color: #b6b6b0; }
  .callout-copy :global(p) { margin: 0 !important; }
  .callout-copy :global(strong) { color: inherit; }
  @media (max-width: 600px) { aside { grid-template-columns: 1fr; gap: 1.2rem; margin-block: 2.8rem; padding: 1.2rem; } }
</style>
