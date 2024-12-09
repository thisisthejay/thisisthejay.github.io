<script>
	export let title;
	export let blurb;
	export let image;
	export let imageAlt;
	export let spotify;
</script>

<div class="card bg-base-100 w-96 shadow z-1">
	<figure>
		<img src={image} alt={imageAlt} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{blurb}</p>
		<div class="card-actions justify-end">
			<a target="_blank" href={spotify}> <div class="badge badge-outline badge-accent">Listen on Spotify</div></a>
		</div>
	</div>
</div>
