<script>
  import { absoluteUrl, SITE_NAME, SOCIAL_IMAGE } from "$lib/site";

  export let title;
  export let description;
  export let path = "/";
  export let type = "website";
  export let image = SOCIAL_IMAGE;
  export let publishedTime = "";
  /** @type {string[]} */
  export let tags = [];
  export let noindex = false;
  /** @type {Record<string, unknown> | null} */
  export let structuredData = null;

  $: canonical = absoluteUrl(path);
  $: imageUrl = absoluteUrl(image);
  $: jsonLd = structuredData
    ? JSON.stringify(structuredData).replace(/</g, "\\u003c")
    : "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <link rel="alternate" type="application/rss+xml" title="{SITE_NAME} notes" href={absoluteUrl('/feed.xml')} />

  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  {/if}

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content="en_GB" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Jay Smith — law, systems and technology" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content="Jay Smith — law, systems and technology" />

  {#if type === 'article'}
    <meta property="article:author" content="Jay Smith" />
    {#if publishedTime}<meta property="article:published_time" content={publishedTime} />{/if}
    {#each tags as tag}<meta property="article:tag" content={tag} />{/each}
  {/if}

  {#if jsonLd}
    {@html `<script type="application/ld+json">${jsonLd}</script>`}
  {/if}
</svelte:head>
