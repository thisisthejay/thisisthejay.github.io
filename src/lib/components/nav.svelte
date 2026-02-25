<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let isScrolled = false;
  let isHomePage = false;

  $: isHomePage = $page.url.pathname === "/";

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  /** @param {MouseEvent} event @param {string} targetId @param {number} [offset=60] */
  function scrollToTarget(event, targetId, offset = 60) {
    if (!isHomePage) return;
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

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
      class={`menu menu-horizontal transition-all duration-300 ${
        isScrolled ? "bg-secondary text-white shadow-xl" : "bg-base-200"
      } rounded-box`}
    >
      <li><a href="/">Home</a></li>
      <li><a href="/blog/">Blog</a></li>
      <li>
        <a href="/#about" on:click={(e) => scrollToTarget(e, "about")}>About</a>
      </li>
      <li>
        <a href="/#speaking" on:click={(e) => scrollToTarget(e, "speaking")}
          >Speaking</a
        >
      </li>
      <li>
        <a href="/#projects" on:click={(e) => scrollToTarget(e, "projects")}
          >Projects</a
        >
      </li>
    </ul>
  </nav>
</div>
