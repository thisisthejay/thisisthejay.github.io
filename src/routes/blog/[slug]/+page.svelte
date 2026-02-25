<script>
  let { data } = $props();
  const PostComponent = data.post.component;
</script>

<article class="mx-auto max-w-3xl py-12">
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

  <div class="prose prose-neutral mt-10 max-w-none">
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
