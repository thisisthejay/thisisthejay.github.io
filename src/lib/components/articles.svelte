<script>
	import ArticleCard from "$lib/components/articleCard.svelte";

	const articles = [
		{
			title: "What Can LegalOps Learn from Implementation Science?",
			link: "https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science",
			blurb: "I wrote something with Colin",
			date: "14 October 2024",
		},
		{
			title: "Why Lawyers (Should) Make Great Developers",
			link: "https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0",
			blurb: "This article divided opinion.",
			date: "16 November 2018",
		},
	];
</script>

<div class="max-w-2xl my-4 pb-24" id="articles">
	<h2 class="text-base/7 font-semibold text-secondary">Articles</h2>
	<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
		here are some things I wrote
	</h1>
	<p class="my-6 text-base text-zinc-600 dark:text-zinc-400"></p>

	<div class="z-10 grid grid-cols-4 gap-10 lg:gap-36">
		{#each articles as article}
			<ArticleCard title={article.title} link={article.link} blurb={article.blurb} date={article.date} />
		{/each}
	</div>
</div>
