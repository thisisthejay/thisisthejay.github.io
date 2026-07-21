<script>
  let { data } = $props();
  const PostComponent = data.post.component;
</script>

<svelte:head>
  <title>{data.post.title} — Jay Smith</title>
  <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article>
  <header class="article-header paper-grid">
    <div class="article-shell">
      <a class="back" href="/blog/">← All notes</a>
      <div class="meta">
        <time datetime={data.post.date}>{data.post.formattedDate}</time>
        <span>{data.post.tags.join(' / ')}</span>
      </div>
      <h1>{data.post.title}</h1>
      <p class="dek">{data.post.excerpt}</p>
    </div>
  </header>

  <div class="article-shell article-body">
    <PostComponent />
  </div>

  <footer class="article-footer article-shell">
    <div><span>Written by</span><strong>Jay Smith</strong><p>Legal engineer, builder and writer.</p></div>
    {#if data.nextPost}
      <a href={`/blog/${data.nextPost.slug}/`}><span>Read next</span><strong>{data.nextPost.title}</strong><b>→</b></a>
    {:else}
      <a href="/blog/"><span>Keep exploring</span><strong>All field notes</strong><b>→</b></a>
    {/if}
  </footer>
</article>

<style>
  .article-header { padding-block: clamp(4rem, 9vw, 8rem); border-bottom: 1px solid var(--line); }
  .back { display: inline-block; margin-bottom: 4rem; color: var(--muted); font-size: .75rem; font-weight: 720; }
  .meta { display: flex; flex-wrap: wrap; gap: .7rem 1.5rem; margin-bottom: 1.2rem; color: var(--signal-dark); font-size: .68rem; font-weight: 780; letter-spacing: .08em; text-transform: uppercase; }
  h1 { margin: 0; max-width: 900px; font-size: clamp(3rem, 7.5vw, 6.6rem); line-height: .92; letter-spacing: -.065em; }
  .dek { max-width: 680px; margin: 2rem 0 0; color: var(--muted); font-size: 1.2rem; line-height: 1.6; }
  .article-body { padding-block: clamp(4rem, 8vw, 7rem); }
  .article-footer { display: grid; grid-template-columns: 1fr 1.4fr; gap: 2rem; padding-block: 2rem 5rem; border-top: 1px solid var(--line); }
  .article-footer > div, .article-footer > a { display: grid; align-content: start; }
  .article-footer a { position: relative; padding-left: 2rem; border-left: 1px solid var(--line); }
  .article-footer span { margin-bottom: .5rem; color: var(--muted); font-size: .63rem; font-weight: 760; letter-spacing: .1em; text-transform: uppercase; }
  .article-footer strong { font-size: 1.15rem; }
  .article-footer p { margin: .4rem 0 0; color: var(--muted); font-size: .82rem; }
  .article-footer b { position: absolute; right: 0; font-size: 1.4rem; }
  @media (max-width: 600px) { .back { margin-bottom: 3rem; } .article-footer { grid-template-columns: 1fr; } .article-footer a { padding: 1.5rem 0 0; border-top: 1px solid var(--line); border-left: 0; } }
</style>
