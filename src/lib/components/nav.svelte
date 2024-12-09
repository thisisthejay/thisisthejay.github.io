<script>
	import { onMount } from "svelte";

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50; // Adjust the scroll value as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<div class="flex justify-center items-center top-0 sticky z-50">
	<nav class="my-4 mx-auto">
		<ul
			class={`menu menu-horizontal bg-base-200 transition-all duration-300 ${isScrolled ? "bg-secondary text-white shadow-xl" : "bg-base-200"} rounded-box`}
		>
			<li><a href="#about">About</a></li>
			<li><a href="#articles">Articles</a></li>
			<li><a href="#speaking">Speaking</a></li>
			<!-- <li><a>Projects</a></li> -->
		</ul>
	</nav>
</div>
