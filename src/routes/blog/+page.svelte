<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Notes — Jay Smith</title>
  <meta name="description" content="Field notes on legal engineering, legal operations, technology and building better systems." />
</svelte:head>

<section class="notes-hero paper-grid">
  <div class="shell">
    <p class="eyebrow">Writing / Field notes</p>
    <h1 class="display">Ideas for<br /><span class="outline">better systems.</span></h1>
    <p class="lede">Practical thinking on legal engineering, operations, AI and what it takes to move from a good idea to changed behaviour.</p>
  </div>
</section>

<section class="notes-list">
  <div class="shell">
    <div class="list-head"><span>{data.posts.length} notes</span><span>Newest first</span></div>
    {#each data.posts as post, index}
      <article>
        <span class="index">{String(index + 1).padStart(2, '0')}</span>
        <div class="post-main">
          <div class="meta"><time datetime={post.date}>{post.formattedDate}</time><span>{post.tags.join(' / ')}</span></div>
          <h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2>
          <p>{post.excerpt}</p>
        </div>
        <a class="open" href={`/blog/${post.slug}/`} aria-label={`Read ${post.title}`}>↗</a>
      </article>
    {/each}
  </div>
</section>

<section class="markdown-note">
  <div class="shell note-grid">
    <p class="eyebrow">Publishing principles</p>
    <p>This site stays intentionally simple: each note is a Markdown file, versioned in Git, and built into a fast static page. The technology gets out of the way of the thinking.</p>
  </div>
</section>

<style>
  .notes-hero { padding-block: clamp(5rem, 11vw, 10rem); border-bottom: 1px solid var(--line); }
  .notes-hero .lede { margin: 2rem 0 0; }
  .notes-list { padding-block: clamp(3rem, 7vw, 6rem); }
  .list-head { display: flex; justify-content: space-between; padding-bottom: .8rem; border-bottom: 1px solid var(--ink); color: var(--muted); font-size: .65rem; font-weight: 740; letter-spacing: .1em; text-transform: uppercase; }
  article { display: grid; grid-template-columns: 60px 1fr 42px; gap: 1rem; padding-block: 2.5rem; border-bottom: 1px solid var(--line); }
  .index { padding-top: .2rem; color: var(--signal); font-size: .68rem; font-weight: 800; }
  .meta { display: flex; flex-wrap: wrap; gap: .8rem 1.5rem; color: var(--muted); font-size: .65rem; font-weight: 680; letter-spacing: .07em; text-transform: uppercase; }
  h2 { margin: 1.1rem 0 .75rem; max-width: 850px; font-size: clamp(2rem, 4.5vw, 4rem); line-height: .98; letter-spacing: -.055em; }
  h2 a { transition: color .2s ease; }
  h2 a:hover { color: var(--signal-dark); }
  article p { max-width: 630px; margin: 0; color: var(--muted); line-height: 1.6; }
  .open { align-self: center; display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid var(--ink); border-radius: 50%; transition: all .2s ease; }
  .open:hover { color: white; background: var(--ink); transform: rotate(45deg); }
  .markdown-note { padding-block: 4rem; background: var(--soft); }
  .note-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; }
  .note-grid > p:last-child { max-width: 700px; margin: 0; font-size: 1.25rem; line-height: 1.6; }
  @media (max-width: 600px) { article { grid-template-columns: 28px 1fr; } .open { display: none; } .note-grid { grid-template-columns: 1fr; } }
</style>
