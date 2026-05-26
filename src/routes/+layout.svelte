<script>
  import "../app.css";
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<Nav />
<main
  class="mx-6 min-h-screen lg:mx-20 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"
>
  <slot />
</main>

<Footer />
