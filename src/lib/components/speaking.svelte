<script>
	import SpeakingCard from "$lib/components/speakingCard.svelte";

	const speakings = [
		{
			title: "Re-Engineering Legal",
			image: "/images/wired_wig.jpeg",
			imageAlt: "The Wired Wig Podcast",
			blurb: "I joined Annabel Pemberton on her podcast The Wired Wig to talk about Legal Engineering",
			spotify: "https://open.spotify.com/episode/0ZPRzMjBhZEN0ZyuZIFGHa?si=t7b_1LgzQUKrnBUciTTffg",
		},
		{
			title: "You Want To Do What? Legal Engineer",
			image: "/images/you_want_to_do_what.jpeg",
			imageAlt: "You Want to Do What Podcast",
			blurb: "Ever wondered what it's like to be a legal Engineer? I joined Dan to talk about what it involves",
			spotify: "https://open.spotify.com/show/27xjpoJbHysKhR93yMF0sU?si=2b2340e0de4f4431",
		},
	];
</script>

<div class="max-w-2xl my-4 pb-24" id="speaking">
	<h2 class="text-base/7 font-semibold text-secondary">Listen up</h2>
	<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
		sharing my voice online and in person
	</h1>

	<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-36 gap-12 pt-8">
		{#each speakings as speaking}
			<SpeakingCard
				title={speaking.title}
				image={speaking.image}
				imageAlt={speaking.imageAlt}
				blurb={speaking.blurb}
				spotify={speaking.spotify}
			/>
		{/each}
	</div>
</div>
