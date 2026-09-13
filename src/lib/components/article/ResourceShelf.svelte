<script>
  /** @type {{ label: string, description?: string, items: { title: string, source: string, href: string }[] }[]} */
  export let groups = [];
</script>

<section class="resource-shelf" aria-label="Learning resources">
  {#each groups as group, groupIndex}
    <div class="resource-group">
      <div class="group-heading"><span>{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.label}</h3>{#if group.description}<p>{group.description}</p>{/if}</div>
      <div class="resource-links">
        {#each group.items as item}
          <a href={item.href} target="_blank" rel="noreferrer">
            <span><strong>{item.title}</strong><small>{item.source}</small></span><b aria-hidden="true">↗</b>
          </a>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
  .resource-shelf { margin: 3.5rem 0; border-top: 1px solid var(--ink); }
  .resource-group { display: grid; grid-template-columns: .72fr 1.28fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid var(--line); }
  .group-heading > span { color: var(--signal); font-size: .62rem; font-weight: 820; }
  .group-heading h3 { margin: .9rem 0 .5rem !important; color: var(--ink) !important; font-size: 1.35rem !important; line-height: 1.05; letter-spacing: -.035em; }
  .group-heading p { margin: 0 !important; color: var(--muted); font-size: .78rem; line-height: 1.5; }
  .resource-links { border-top: 1px solid var(--ink); }
  .resource-links a { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 1rem; padding: .9rem 0; border-bottom: 1px solid var(--line); text-decoration: none !important; transition: padding .2s ease; }
  .resource-links a:hover { padding-left: .5rem; }
  .resource-links strong { display: block; color: var(--ink); font-size: .86rem; }
  .resource-links small { display: block; margin-top: .2rem; color: var(--muted); font-size: .66rem; }
  .resource-links b { color: var(--signal-dark); font-weight: 500; }
  @media (max-width: 650px) { .resource-group { grid-template-columns: 1fr; gap: 1.3rem; } }
</style>
