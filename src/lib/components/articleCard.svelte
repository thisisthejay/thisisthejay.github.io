<script>
	export let title;
	export let blurb;
	export let link;
	export let date;
</script>

<div class="card col-span-2 bg-base-200 hover:bg-base-300 w-96 shadow">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{blurb}</p>
		<div class="card-actions justify-end">
			<a href={link} target="_blank" class="badge badge-secondary badge-outline">Read article</a>
		</div>
	</div>
</div>
