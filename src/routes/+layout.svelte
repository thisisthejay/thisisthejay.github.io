<script>
	import "../app.css";
	import Nav from "$lib/components/nav.svelte";
	import Footer from "$lib/components/footer.svelte";
	export const prerender = true;
	export const trailingSlash = "always";
</script>

<Nav />
<main class="mx-6 lg:mx-20">
	<slot />
</main>

<Footer />
