<script>
	import Timeline from "$lib/components/timeline.svelte";
</script>

<div class="bg-base-100 pb-24" id="about">
	<div class="mx-auto max-w-2xl lg:max-w-4xl">
		<h2 class="text-base/7 font-semibold text-secondary">Allow me to introduce myself</h2>
		<p class="text-4xl max-w-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100l">
			this is the work I am here to do
		</p>
		<div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
			<!-- Scroll in from left -->
			<div class="flex p-px lg:col-span-4">
				<div
					class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"
				>
					<div class="p-10">
						<h3 class="text-sm/4 font-semibold text-secondary">Legal Operations and Engineering</h3>
						<p class="mt-2 text-lg font-medium tracking-tight text-white">Transforming Law</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-400">
							Leader in process improvement, integrating LegalTech tools to streamline legal operations and boost firm
							efficiency, with experience overseeing projects at top law firms.
						</p>
						<dl class="grid grid-cols-1 gap-1 mt-2">
							<dt class="text-accent text-xs">Head of Legal Operations</dt>
							<dt class="text-accent text-xs">Senior Legal Operations Manager</dt>
							<dt class="text-accent text-xs">Legal Engineer</dt>
						</dl>
					</div>
				</div>
			</div>
			<!-- Scroll in from Right -->
			<div class="flex p-px lg:col-span-2">
				<div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
					<div class="p-10">
						<h3 class="text-sm/4 font-semibold text-secondary">Software</h3>
						<p class="mt-2 text-lg font-medium tracking-tight text-white">Intergrating Technology</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-400">
							Skilled in multiple programming languages and identifying / procuring market-leading tools to create
							scalable legal tech solutions.
						</p>
						<dl class="grid grid-cols-1 gap-1 mt-2">
							<dt class="text-accent text-xs">BCS Certificate in Requirements Engineering</dt>
						</dl>
					</div>
				</div>
			</div>
			<!-- Scroll in from Left -->
			<div class="flex p-px lg:col-span-2">
				<div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
					<div class="p-10">
						<h3 class="text-sm/4 font-semibold text-secondary">Entrepreneurship</h3>
						<p class="mt-2 text-lg font-medium tracking-tight text-white">Creating Change</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-400">
							Founder of SenseCheck Technologies, taking a disjointed process and creating an AML platform and
							communication tool for Estate Planning lawyers.
						</p>
						<dl class="grid grid-cols-1 gap-1 mt-2">
							<dt class="text-accent text-xs">Series A in 2024</dt>
						</dl>
					</div>
				</div>
			</div>
			<!-- Scroll in from right -->
			<div class="flex p-px lg:col-span-4">
				<div
					class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
				>
					<div class="p-10">
						<h3 class="text-sm/4 font-semibold text-secondary">Intelligence</h3>
						<p class="mt-2 text-lg font-medium tracking-tight text-white">Building for the future</p>
						<p class="mt-2 max-w-lg text-sm/6 text-gray-400">
							Focused on using AI to improve drafting, advice and legal operations. Leveraging AI with the right
							opportunities.
						</p>
						<dl class="grid grid-cols-1 gap-1 mt-2">
							<dt class="text-accent text-xs">Standford Graduate Business School Certificate in AI Essentials</dt>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
