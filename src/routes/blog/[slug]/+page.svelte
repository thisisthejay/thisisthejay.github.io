<script>
  let { data } = $props();
  const PostComponent = data.post.component;
</script>

<article class="mx-auto max-w-3xl px-5 py-24 md:px-0">
  <a href="/blog/" class="text-sm text-secondary hover:underline"
    >← Back to all posts</a
  >
  <h1 class="mt-4 text-4xl font-bold text-base-content">{data.post.title}</h1>
  <div class="mt-3 text-sm text-base-content/60">
    <span>{data.post.formattedDate}</span>
    {#if data.post.tags.length}
      <span class="mx-2">•</span>
      <span>{data.post.tags.join(" · ")}</span>
    {/if}
  </div>

  <div
    class="prose prose-lg prose-neutral mt-10 max-w-none text-base-content/90
      prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-base-content
      prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-3xl
      prose-h3:mt-10 prose-h3:mb-4
      prose-p:my-7 prose-p:leading-8
      prose-a:text-primary prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4
      prose-blockquote:my-8 prose-blockquote:border-l-4 prose-blockquote:border-base-300 prose-blockquote:pl-5 prose-blockquote:italic
      prose-ol:my-7 prose-ol:list-decimal prose-ol:pl-7
      prose-ul:my-7 prose-ul:list-disc prose-ul:pl-7
      prose-li:my-2 prose-li:leading-8
      prose-strong:text-base-content
      prose-code:rounded prose-code:bg-base-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-base-content
      prose-pre:rounded-2xl prose-pre:bg-neutral prose-pre:text-neutral-content prose-pre:p-5"
  >
    <PostComponent />
  </div>

  {#if data.nextPost}
    <div class="mt-12 rounded-2xl border border-base-300 bg-base-200 p-6">
      <p class="text-base/7 font-semibold text-accent">Next post &rarr;</p>
      <a
        class="mt-2 block text-lg font-medium hover:underline"
        href={`/blog/${data.nextPost.slug}/`}
      >
        {data.nextPost.title}
      </a>
    </div>
  {/if}
</article>
