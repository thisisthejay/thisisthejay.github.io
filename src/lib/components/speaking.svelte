<script>
	const speakings = [
		{
			title: "Wired Wig",
			episode: "Re-Engineering Legal",
			image: "/images/wired_wig.jpeg",
			imageAlt: "The Wired Wig Podcast",
			blurb: "I joined Annabel Pemberton on her podcast The Wired Wig to talk about Legal Engineering",
			platform: "Spotify",
			link: "https://open.spotify.com/episode/0ZPRzMjBhZEN0ZyuZIFGHa?si=t7b_1LgzQUKrnBUciTTffg",
		},
		{
			title: "You Want To Do What?",
			episode: "Legal Engineer",
			image: "/images/you_want_to_do_what.jpeg",
			imageAlt: "You Want to Do What Podcast",
			blurb: "Ever wondered what it's like to be a legal Engineer? I joined Dan to talk about what it involves",
			platform: "Spotify",
			link: "https://open.spotify.com/show/27xjpoJbHysKhR93yMF0sU?si=2b2340e0de4f4431",
		},
		{
			title: "Colin Levy",
			episode: "What Can LegalOps Learn from Implementation Science?",
			image: "/images/colin.png",
			imageAlt: "Colin S Levy",
			blurb: "I wrote something with Colin",
			link: "https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science",
			platform: "Blog",
			date: "14 October 2024",
		},
		{
			title: "Data Driven Investor",
			episode: "Why Lawyers (Should) Make Great Developers",
			image: "/images/ddi.png",
			imageAlt: "Data Driven Investor",
			blurb: "This article divided opinion.",
			link: "https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0",
			platform: "Medium",
			date: "16 November 2018",
		},
		{
			title: "LegalTech in the South West",
			episode: "A Purposeful Journey",
			image: "/images/ltitsw.png",
			imageAlt: "LegalTech in the South West",
			blurb: "Spoke at this event",
			link: "https://ltinsw.com/",
			platform: "Event",
			date: "October 2024",
		},
		{
			title: "Bristol + Bath LegalTech",
			episode: "We R LegalTech",
			image: "/images/bblt.jpg",
			imageAlt: "We R LegalTech",
			blurb: "Spoke at this event",
			link: "https://www.bblegaltech.com/event/we-r-legaltech-festival-2024/",
			platform: "Event",
			date: "October 2024",
		},
	];
</script>

<div class="max-w-4xl my-4 mx-auto pb-24" id="speaking">
	<h2 class="text-base/7 font-semibold text-secondary">Listen up</h2>
	<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
		sharing my voice online and in person
	</h1>

	<div class="overflow-x-auto mt-6">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>Channel</th>
					<th>Title</th>
					<th>Platform</th>
					<th>Link</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#each speakings as item}
					<tr class="hover text-xs lg:text-sm">
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar hidden sm:block">
									<div class="mask mask-squircle h-12 w-12">
										<img src={item.image} alt={item.imageAlt} />
									</div>
								</div>
								<div>
									<div class="font-bold">{item.title}</div>
								</div>
							</div>
						</td>
						<td>
							{item.episode}
						</td>
						<td>{item.platform}</td>
						<th>
							<a href={item.link} target="_blank"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</a>
						</th>
					</tr>
				{/each}
			</tbody>
			<!-- foot -->
		</table>
	</div>
</div>
