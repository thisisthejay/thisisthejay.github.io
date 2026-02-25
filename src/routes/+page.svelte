<script>
  import Avatar from "$lib/components/avatar.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Carousel from "$lib/components/carousel.svelte";
  import About from "$lib/components/about.svelte";
  import Speaking from "$lib/components/speaking.svelte";
  import Sensecheck from "$lib/components/sensecheck.svelte";
  import Beschool from "$lib/components/beschool.svelte";

  let { data } = $props();
</script>

<div class="flex items-center ml-4 justify-left">
  <Avatar />
</div>
<Hero />
<div class="pb-24">
  <Carousel />
</div>

<section id="blog" class="mx-auto max-w-4xl pb-24">
  <div class="flex items-end justify-between gap-4">
    <div>
      <p class="text-base/7 font-semibold text-secondary">Latest writing</p>
      <h2 class="mt-2 text-3xl font-bold text-base-content">
        Recent blog posts
      </h2>
    </div>
    <a class="btn btn-outline btn-secondary btn-sm" href="/blog/"
      >View all posts</a
    >
  </div>

  <div class="mt-8 grid gap-4 md:grid-cols-2">
    {#each data.latestPosts as post}
      <article
        class="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md"
      >
        <p class="text-sm text-base-content/60">{post.formattedDate}</p>
        <h3 class="mt-2 text-xl font-semibold">
          <a class="hover:text-secondary" href={`/blog/${post.slug}/`}
            >{post.title}</a
          >
        </h3>
        <p class="mt-2 text-base-content/75">{post.excerpt}</p>
        <a
          class="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          href={`/blog/${post.slug}/`}
        >
          Read post →
        </a>
      </article>
    {/each}
  </div>
</section>

<About />
<Speaking />
