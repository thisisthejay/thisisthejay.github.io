<script>
  import "../app.css";
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { page } from "$app/stores";

  $: isSuppressedPresentation = $page.url.pathname.startsWith("/presentation");
</script>

{#if !isSuppressedPresentation}
  <Nav />
{/if}
<main>
  <slot />
</main>

{#if !isSuppressedPresentation}
  <Footer />
{/if}
