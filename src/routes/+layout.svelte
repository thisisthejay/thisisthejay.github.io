<script>
	import "../app.css";
	import Nav from "$lib/components/nav.svelte";
	import Footer from "$lib/components/footer.svelte";
</script>

<Nav />
<main class="mx-20">
	<slot />
</main>
<Footer />
