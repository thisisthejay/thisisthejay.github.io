<script>
  export let quote;
  export let context = "A note from the field";
</script>

<figure>
  <span class="quote-mark" aria-hidden="true">“</span>
  <blockquote>{quote}</blockquote>
  <figcaption>{context}</figcaption>
</figure>

<style>
  figure { position: relative; margin: 4rem 0; padding: 2rem 0 2rem clamp(2rem, 6vw, 4.5rem); border-block: 1px solid var(--ink); }
  .quote-mark { position: absolute; top: 1.1rem; left: 0; color: var(--signal); font-family: Georgia, serif; font-size: 4rem; line-height: 1; }
  blockquote { margin: 0 !important; padding: 0 !important; border: 0 !important; color: var(--ink) !important; font-size: clamp(1.8rem, 5vw, 3.4rem) !important; font-style: normal !important; font-weight: 720; line-height: 1.02 !important; letter-spacing: -.05em; }
  figcaption { margin-top: 1rem; color: var(--muted); font-size: .62rem; font-weight: 760; letter-spacing: .12em; text-transform: uppercase; }
</style>
