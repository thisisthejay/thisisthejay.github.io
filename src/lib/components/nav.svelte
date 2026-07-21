<script>
  import { page } from "$app/stores";
  let open = false;
  const close = () => (open = false);
</script>

<header class="site-header">
  <div class="shell nav-wrap">
    <a class="brand" href="/" aria-label="Jay Smith, home" onclick={close}>
      <span class="brand-mark">JS</span>
      <span class="brand-name">Jay Smith <small>Legal engineer</small></span>
    </a>

    <button class="menu-toggle" aria-expanded={open} aria-controls="site-nav" onclick={() => (open = !open)}>
      <span>{open ? "Close" : "Menu"}</span>
    </button>

    <nav id="site-nav" class:open aria-label="Main navigation">
      <a class:active={$page.url.pathname.startsWith('/blog')} href="/blog/" onclick={close}>Notes</a>
      <a class:active={$page.url.pathname.startsWith('/projects')} href="/projects/" onclick={close}>Work</a>
      <a href="/#about" onclick={close}>About</a>
      <a href="/#contact" onclick={close}>Connect <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
</header>

<style>
  .site-header { position: sticky; z-index: 50; top: 0; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--paper) 92%, transparent); backdrop-filter: blur(16px); }
  .nav-wrap { display: flex; min-height: 76px; align-items: center; justify-content: space-between; }
  .brand { display: flex; align-items: center; gap: .8rem; }
  .brand-mark { display: grid; width: 38px; height: 38px; place-items: center; border: 1px solid var(--ink); font-size: .7rem; font-weight: 850; letter-spacing: -.03em; transform: rotate(-3deg); }
  .brand-name { display: grid; font-size: .82rem; font-weight: 780; line-height: 1.15; }
  .brand-name small { color: var(--muted); font-size: .67rem; font-weight: 580; }
  nav { display: flex; align-items: center; gap: 2rem; font-size: .8rem; font-weight: 720; }
  nav a { position: relative; }
  nav a::after { position: absolute; right: 0; bottom: -.45rem; left: 0; height: 2px; content: ""; background: var(--signal); transform: scaleX(0); transition: transform .2s ease; }
  nav a:hover::after, nav a.active::after { transform: scaleX(1); }
  .menu-toggle { display: none; border: 0; background: transparent; font-size: .78rem; font-weight: 750; }
  @media (max-width: 680px) {
    .menu-toggle { display: block; }
    nav { position: absolute; top: 76px; right: 0; left: 0; display: none; flex-direction: column; align-items: flex-start; gap: 1.4rem; padding: 1.4rem 20px 1.8rem; border-bottom: 1px solid var(--line); background: var(--paper); font-size: 1.05rem; }
    nav.open { display: flex; }
  }
</style>
