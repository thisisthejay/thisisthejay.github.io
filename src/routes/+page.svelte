<script>
	import Avatar from "$lib/components/avatar.svelte";
	import Hero from "$lib/components/hero.svelte";
	import Carousel from "$lib/components/carousel.svelte";
	import About from "$lib/components/about.svelte";
	import Articles from "$lib/components/articles.svelte";
	import Speaking from "$lib/components/speaking.svelte";
	import Projects from "$lib/components/projects.svelte";
	import Sensecheck from "$lib/components/sensecheck.svelte";
	import Beschool from "$lib/components/beschool.svelte";
</script>

<div class="flex items-center ml-4 justify-left">
	<Avatar />
</div>
<Hero />
<div class="pb-24">
	<Carousel />
</div>
<About />

<Speaking />
<Projects />
<Sensecheck />
<Beschool />
