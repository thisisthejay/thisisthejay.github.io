<script>
	import { onMount } from "svelte";

	let isScrolled = false;

	// Detect scrolling to adjust navbar appearance
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50; // Adjust the scroll value as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	// Smooth scroll to the target section with a default offset
	function scrollToTarget(event, targetId, offset = 60) {
		event.preventDefault(); // Prevent default anchor behavior
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}
	}
</script>

<div class="sticky top-0 z-50 flex items-center justify-start">
	<nav class="mx-auto my-4">
		<ul
			class={`menu menu-horizontal bg-base-200 transition-all duration-300 ${
				isScrolled ? "bg-secondary text-white shadow-xl" : "bg-base-200"
			} rounded-box`}
		>
			<li>
				<a href="#about" on:click={(e) => scrollToTarget(e, "about")}> About </a>
			</li>
			<li>
				<a href="#speaking" on:click={(e) => scrollToTarget(e, "speaking")}> Speaking </a>
			</li>
			<li>
				<a href="#projects" on:click={(e) => scrollToTarget(e, "projects")}> Projects </a>
			</li>
		</ul>
	</nav>
</div>
