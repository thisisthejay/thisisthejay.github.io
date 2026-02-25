<script>
  let { data } = $props();
</script>

<section class="mx-auto max-w-4xl py-12">
  <p class="text-base/7 font-semibold text-secondary">Blog</p>
  <h1 class="mt-2 text-4xl font-bold text-base-content">
    Writing on the intersection of law and technology
  </h1>
  <p class="mt-4 text-base-content/70">
    Every post is written in markdown and published as a static page.
  </p>

  <div class="mt-10 space-y-4">
    {#each data.posts as post}
      <article
        class="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:shadow-md"
      >
        <div
          class="flex flex-wrap items-center gap-3 text-sm text-base-content/60"
        >
          <span>{post.formattedDate}</span>
          {#if post.tags.length}
            <span>•</span>
            <span>{post.tags.join(" · ")}</span>
          {/if}
        </div>
        <h2 class="mt-2 text-2xl font-semibold">
          <a class="link-hover" href={`/blog/${post.slug}/`}>{post.title}</a>
        </h2>
        <p class="mt-2 text-base-content/75">{post.excerpt}</p>
        <a
          class="btn btn-sm text-white btn-accent mt-5"
          href={`/blog/${post.slug}/`}>Read post</a
        >
      </article>
    {/each}
  </div>
</section>
