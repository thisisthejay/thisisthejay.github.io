<script>
	import Avatar from "$lib/components/avatar.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Carousel from "$lib/components/carousel.svelte";
	import About from "$lib/components/about.svelte";
	import Articles from "$lib/components/articles.svelte";
	import Speaking from "$lib/components/speaking.svelte";
	export const prerender = true;
</script>

<div class="flex ml-4 justify-left items-center">
	<Avatar />
</div>
<Hero />
<div class="pb-24">
	<Carousel />
</div>
<About />

<Speaking />
