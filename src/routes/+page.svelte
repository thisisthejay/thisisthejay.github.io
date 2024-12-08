<script>
	import Avatar from "$lib/components/avatar.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Carousel from "$lib/components/carousel.svelte";
	import Articles from "$lib/components/articles.svelte";
	import Speaking from "$lib/components/speaking.svelte";
</script>

<div class="flex ml-4 justify-left items-center">
	<Avatar />
</div>
<Hero />
<div class="pb-24">
	<Carousel />
</div>
<Articles />
<Speaking />
