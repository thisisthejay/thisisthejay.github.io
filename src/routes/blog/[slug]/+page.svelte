<script>
  import Seo from "$lib/components/Seo.svelte";
  import { absoluteUrl, AUTHOR_SCHEMA, PERSON_ID, SITE_URL, SOCIAL_IMAGE } from "$lib/site";

  let { data } = $props();
  const PostComponent = data.post.component;
  const articlePath = `/blog/${data.post.slug}/`;
  const articleUrl = absoluteUrl(articlePath);
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      AUTHOR_SCHEMA,
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Notes", item: absoluteUrl("/blog/") },
          { "@type": "ListItem", position: 3, name: data.post.title, item: articleUrl }
        ]
      },
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        mainEntityOfPage: articleUrl,
        url: articleUrl,
        headline: data.post.title,
        description: data.post.excerpt,
        datePublished: data.post.date,
        image: absoluteUrl(SOCIAL_IMAGE),
        inLanguage: "en-GB",
        keywords: data.post.tags.join(", "),
        about: data.post.tags,
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": `${SITE_URL}/blog/#blog` },
        breadcrumb: { "@id": `${articleUrl}#breadcrumb` }
      }
    ]
  };
</script>

<Seo
  title={`${data.post.title} | Jay Smith`}
  description={data.post.excerpt}
  path={articlePath}
  type="article"
  publishedTime={data.post.date}
  tags={data.post.tags}
  structuredData={articleSchema}
/>

<article>
  <header class="article-header paper-grid">
    <div class="article-shell">
      <a class="back" href="/blog/">← All notes</a>
      <div class="meta">
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
    <div><span>Written by</span><a class="author" href="/#about" rel="author">Jay Smith</a><p>Legal Engineer</p></div>
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
  .article-footer .author { width: fit-content; color: var(--ink); font-size: 1.15rem; font-weight: 760; }
  .article-footer p { margin: .4rem 0 0; color: var(--muted); font-size: .82rem; }
  .article-footer b { position: absolute; right: 0; font-size: 1.4rem; }
  @media (max-width: 600px) { .back { margin-bottom: 3rem; } .article-footer { grid-template-columns: 1fr; } .article-footer a { padding: 1.5rem 0 0; border-top: 1px solid var(--line); border-left: 0; } }
</style>
