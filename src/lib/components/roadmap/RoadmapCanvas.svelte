<script>
  import { onMount } from "svelte";
  import { ROADMAP_HEIGHT, ROADMAP_WIDTH, roadmapEdges, roadmapNodeMap, roadmapNodes } from "$lib/roadmap";

  /** @type {HTMLElement | null} */
  let viewport = null;
  /** @type {any} */
  let selected = null;
  let zoom = 0.55;
  let panX = 0;
  let panY = 0;
  let dragging = false;
  let animating = false;
  let viewportWidth = 0;
  let viewportHeight = 0;
  let dragStart = { x: 0, y: 0, panX: 0, panY: 0 };
  /** @type {ReturnType<typeof setTimeout> | null} */
  let animationTimer = null;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let saveTimer = null;
  /** @type {HTMLElement | null} */
  let lastTrigger = null;

  const groups = ["Knowledge", "Demand", "Data", "Contracts", "People", "Infrastructure"];
  const viewStorageKey = "legal-ops-roadmap-view";

  function scheduleViewSave() {
    if (typeof window === "undefined") return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      sessionStorage.setItem(viewStorageKey, JSON.stringify({ zoom, panX, panY }));
    }, 120);
  }

  /** @param {() => void} update */
  function animateCanvas(update) {
    animating = true;
    update();
    if (animationTimer) clearTimeout(animationTimer);
    animationTimer = setTimeout(() => (animating = false), 280);
    scheduleViewSave();
  }

  /** @param {boolean} [shouldAnimate] */
  function fitCanvas(shouldAnimate = false) {
    if (!viewport) return;
    const { clientWidth, clientHeight } = viewport;
    viewportWidth = clientWidth;
    viewportHeight = clientHeight;
    const update = () => {
      const fittedZoom = Math.min((clientWidth - 56) / ROADMAP_WIDTH, (clientHeight - 56) / ROADMAP_HEIGHT, 0.7);
      zoom = clientWidth > 760 ? Math.max(fittedZoom, 0.48) : fittedZoom;
      panX = (clientWidth - ROADMAP_WIDTH * zoom) / 2;
      panY = Math.max(24, (clientHeight - ROADMAP_HEIGHT * zoom) / 2);
    };
    if (shouldAnimate) animateCanvas(update);
    else update();
  }

  /** @param {any} node @param {MouseEvent} event */
  function selectNode(node, event) {
    lastTrigger = /** @type {HTMLElement | null} */ (event?.currentTarget);
    const currentViewport = viewport;
    if (currentViewport) {
      const panelWidth = currentViewport.clientWidth > 760 ? Math.min(470, currentViewport.clientWidth * 0.92) : 0;
      const availableWidth = currentViewport.clientWidth - panelWidth;
      animateCanvas(() => {
        panX = availableWidth / 2 - (node.x + node.width / 2) * zoom;
        panY = currentViewport.clientHeight / 2 - (node.y + 48) * zoom;
      });
    }
    selected = node;
  }

  function closePanel() {
    selected = null;
    requestAnimationFrame(() => lastTrigger?.focus());
  }

  /** @param {number} amount */
  function zoomBy(amount) {
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    animateCanvas(() => zoomAt(amount, rect.width / 2, rect.height / 2));
  }

  /** @param {number} amount @param {number} clientX @param {number} clientY */
  function zoomAt(amount, clientX, clientY) {
    const nextZoom = Math.min(1.35, Math.max(0.28, zoom * amount));
    const worldX = (clientX - panX) / zoom;
    const worldY = (clientY - panY) / zoom;
    panX = clientX - worldX * nextZoom;
    panY = clientY - worldY * nextZoom;
    zoom = nextZoom;
    scheduleViewSave();
  }

  /** @param {WheelEvent} event */
  function handleWheel(event) {
    if (!viewport) return;
    event.preventDefault();
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientHeight : 1;
    const deltaX = Math.max(-100, Math.min(100, event.deltaX * unit));
    const deltaY = Math.max(-100, Math.min(100, event.deltaY * unit));

    if (event.ctrlKey) {
      const rect = viewport.getBoundingClientRect();
      zoomAt(Math.exp(-deltaY * 0.008), event.clientX - rect.left, event.clientY - rect.top);
      return;
    }

    panX -= event.shiftKey && Math.abs(deltaX) < 1 ? deltaY * 0.85 : deltaX * 0.85;
    if (!event.shiftKey) panY -= deltaY * 0.85;
    scheduleViewSave();
  }

  /** @param {PointerEvent} event */
  function startDrag(event) {
    if (!viewport) return;
    if (event.target instanceof Element && event.target.closest("button, a")) return;
    dragging = true;
    dragStart = { x: event.clientX, y: event.clientY, panX, panY };
    viewport.setPointerCapture(event.pointerId);
  }

  /** @param {PointerEvent} event */
  function moveDrag(event) {
    if (!dragging) return;
    panX = dragStart.panX + event.clientX - dragStart.x;
    panY = dragStart.panY + event.clientY - dragStart.y;
  }

  /** @param {PointerEvent} event */
  function endDrag(event) {
    dragging = false;
    if (viewport?.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    scheduleViewSave();
  }

  /** @param {MouseEvent} event */
  function handleDoubleClick(event) {
    if (event.target instanceof Element && event.target.closest("button, a")) return;
    fitCanvas(true);
  }

  /** @param {MouseEvent} event */
  function handleMinimapClick(event) {
    const currentViewport = viewport;
    if (!currentViewport) return;
    const target = /** @type {HTMLElement} */ (event.currentTarget);
    const rect = target.getBoundingClientRect();
    const worldX = ((event.clientX - rect.left) / rect.width) * ROADMAP_WIDTH;
    const worldY = ((event.clientY - rect.top) / rect.height) * ROADMAP_HEIGHT;
    animateCanvas(() => {
      panX = currentViewport.clientWidth / 2 - worldX * zoom;
      panY = currentViewport.clientHeight / 2 - worldY * zoom;
    });
  }

  /** @param {KeyboardEvent} event */
  function handleKeydown(event) {
    if (event.key === "Escape" && selected) closePanel();
  }

  /** @param {string[]} edge */
  function edgeCoordinates([fromId, toId]) {
    const from = roadmapNodeMap.get(fromId);
    const to = roadmapNodeMap.get(toId);
    if (!from || !to) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    return { x1: from.x + from.width / 2, y1: from.y + 48, x2: to.x + to.width / 2, y2: to.y + 48 };
  }

  onMount(() => {
    if (!viewport) return;
    viewportWidth = viewport.clientWidth;
    viewportHeight = viewport.clientHeight;
    const storedView = sessionStorage.getItem(viewStorageKey);
    if (storedView) {
      try {
        const saved = JSON.parse(storedView);
        if ([saved.zoom, saved.panX, saved.panY].every(Number.isFinite) && saved.zoom >= 0.28 && saved.zoom <= 1.35) {
          zoom = saved.zoom;
          panX = saved.panX;
          panY = saved.panY;
        } else fitCanvas();
      } catch {
        fitCanvas();
      }
    } else fitCanvas();

    const handleResize = () => fitCanvas();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationTimer) clearTimeout(animationTimer);
      if (saveTimer) clearTimeout(saveTimer);
    };
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="roadmap" aria-label="Interactive legal operations roadmap">
  <div class="roadmap-bar">
    <div class="legend" aria-label="Roadmap legend">
      {#each groups as group}<span><i data-group={group}></i>{group}</span>{/each}
      <span><i class="advanced"></i>Advanced / exploring</span>
    </div>
    <div class="instructions"><span>Two-finger scroll to move</span><span>Pinch to zoom</span><span>Choose a node to explore</span></div>
  </div>

  <div
    class:dragging
    class="viewport paper-grid"
    role="group"
    aria-label="Roadmap canvas"
    bind:this={viewport}
    onwheel={handleWheel}
    onpointerdown={startDrag}
    onpointermove={moveDrag}
    onpointerup={endDrag}
    onpointercancel={endDrag}
    ondblclick={handleDoubleClick}
  >
    <div
      class="world"
      class:animating
      style={`width:${ROADMAP_WIDTH}px;height:${ROADMAP_HEIGHT}px;transform:translate(${panX}px, ${panY}px) scale(${zoom});`}
    >
      <svg class="connections" viewBox={`0 0 ${ROADMAP_WIDTH} ${ROADMAP_HEIGHT}`} aria-hidden="true">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        {#each roadmapEdges as edge}
          {@const line = edgeCoordinates(edge)}
          <path d={`M ${line.x1} ${line.y1} C ${line.x1} ${(line.y1 + line.y2) / 2}, ${line.x2} ${(line.y1 + line.y2) / 2}, ${line.x2} ${line.y2}`} marker-end="url(#arrow)" />
        {/each}
      </svg>

      {#each roadmapNodes as node}
        <button
          type="button"
          class="node"
          class:selected={selected?.id === node.id}
          data-kind={node.kind}
          data-group={node.group}
          style={`left:${node.x}px;top:${node.y}px;width:${node.width}px;`}
          aria-label={`Explore ${node.title}`}
          aria-pressed={selected?.id === node.id}
          onclick={(event) => selectNode(node, event)}
        >
          <span class="node-kicker">{node.kicker}</span>
          <strong>{node.title}</strong>
          <span class="node-action">Open <i aria-hidden="true">↗</i></span>
        </button>
      {/each}
    </div>

    <button class="minimap" type="button" aria-label="Move to another area of the roadmap" onclick={handleMinimapClick}>
      <svg viewBox={`0 0 ${ROADMAP_WIDTH} ${ROADMAP_HEIGHT}`} aria-hidden="true">
        {#each roadmapEdges as edge}
          {@const line = edgeCoordinates(edge)}
          <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
        {/each}
        {#each roadmapNodes as node}
          <rect class:centre={node.id === "modern-team"} x={node.x} y={node.y} width={node.width} height="96" rx="8" />
        {/each}
        <rect
          class="current-view"
          x={Math.max(0, -panX / zoom)}
          y={Math.max(0, -panY / zoom)}
          width={Math.min(ROADMAP_WIDTH, viewportWidth / zoom)}
          height={Math.min(ROADMAP_HEIGHT, viewportHeight / zoom)}
        />
      </svg>
      <span>Map</span>
    </button>

    <div class="zoom-controls" aria-label="Canvas controls">
      <button type="button" onclick={() => zoomBy(1.18)} aria-label="Zoom in">+</button>
      <button type="button" onclick={() => zoomBy(0.84)} aria-label="Zoom out">−</button>
      <button type="button" class="fit" onclick={() => fitCanvas(true)}>Fit</button>
    </div>
  </div>

  {#if selected}
    <button class="scrim" type="button" aria-label="Close details" onclick={closePanel}></button>
    <aside class="detail-panel" aria-label={`${selected.title} details`} aria-live="polite">
      <div class="panel-head">
        <div><span>{selected.group}</span><span>{selected.kicker}</span></div>
        <button type="button" class="close" onclick={closePanel} aria-label="Close details">×</button>
      </div>
      <div class="panel-scroll">
        <p class="panel-index">{String(roadmapNodes.indexOf(selected) + 1).padStart(2, "0")} / {roadmapNodes.length}</p>
        <h2>{selected.title}</h2>
        <p class="summary">{selected.summary}</p>

        <section>
          <h3>What it means</h3>
          <p>{selected.meaning}</p>
        </section>

        <section>
          <h3>How to set it up</h3>
          <ol>
            {#each selected.setup as item}<li>{item}</li>{/each}
          </ol>
        </section>

        <section>
          <h3>{selected.id === "stack" ? "A useful starting stack" : "Signals to watch"}</h3>
          <ul class="signals">
            {#each selected.signals as signal}<li>{signal}</li>{/each}
          </ul>
        </section>

        {#if selected.tracks?.length}
          <section>
            <h3>Three progression paths</h3>
            <div class="career-tracks">
              {#each selected.tracks as track}
                <article>
                  <strong>{track.name}</strong>
                  <small>{track.skills}</small>
                  <ol>
                    {#each track.levels as level}<li>{level}</li>{/each}
                  </ol>
                </article>
              {/each}
            </div>
            <p class="track-note">In smaller organisations the General Counsel may also lead Legal Operations. The responsibility still benefits from being named.</p>
          </section>
        {/if}

        {#if selected.links?.length}
          <section>
            <h3>Go deeper</h3>
            <div class="resources">
              {#each selected.links as link}
                <a href={link.href} target={link.internal ? undefined : "_blank"} rel={link.internal ? undefined : "noreferrer"}>
                  <span>{link.label}</span><span aria-hidden="true">↗</span>
                </a>
              {/each}
            </div>
          </section>
        {/if}
      </div>
    </aside>
  {/if}

  <div class="mobile-list">
    <p>Explore the roadmap</p>
    {#each groups as group}
      <section>
        <h2>{group}</h2>
        <div>
          {#each roadmapNodes.filter((node) => node.group === group && node.id !== "modern-team") as node}
            <button type="button" onclick={(event) => selectNode(node, event)}><span>{node.title}</span><span aria-hidden="true">↗</span></button>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</section>

<style>
  .roadmap { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #e8e8e4; }
  .roadmap-bar { display: flex; min-height: 58px; align-items: center; justify-content: space-between; gap: 2rem; padding: .7rem max(20px, calc((100vw - 1180px) / 2)); border-bottom: 1px solid var(--line); background: var(--paper); }
  .legend, .instructions { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem 1.15rem; color: var(--muted); font-size: .62rem; font-weight: 720; letter-spacing: .06em; text-transform: uppercase; }
  .legend span { display: flex; align-items: center; gap: .35rem; }
  .legend i { width: 8px; height: 8px; border: 1px solid #777; border-radius: 50%; background: white; }
  .legend i[data-group="Knowledge"] { background: #373aa4; border-color: #373aa4; }
  .legend i.advanced { border-style: dashed; background: transparent; }
  .instructions span + span::before { margin-right: .75rem; content: "/"; color: #aaa; }
  .viewport { position: relative; overflow: hidden; height: min(74vh, 780px); min-height: 590px; cursor: grab; touch-action: none; user-select: none; background-color: #ecece8; }
  .viewport.dragging { cursor: grabbing; }
  .world { position: absolute; top: 0; left: 0; transform-origin: 0 0; will-change: transform; }
  .world.animating { transition: transform .26s cubic-bezier(.22, .8, .3, 1); }
  .connections { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
  .connections path { fill: none; stroke: #8e8e89; stroke-width: 2.5; stroke-dasharray: 3 10; opacity: .72; vector-effect: non-scaling-stroke; }
  .connections marker path { fill: #8e8e89; stroke: none; }
  .node { position: absolute; display: grid; min-height: 96px; padding: 17px 18px 15px; border: 1.5px solid var(--ink); border-radius: 2px; text-align: left; background: rgba(248,248,245,.97); box-shadow: 7px 7px 0 rgba(23,23,23,.11); cursor: pointer; transition: transform .18s ease, box-shadow .18s ease, color .18s ease, background .18s ease; }
  .node:hover, .node:focus-visible, .node.selected { z-index: 3; color: white; background: var(--ink); box-shadow: 10px 10px 0 rgba(75,79,197,.28); transform: translate(-3px, -3px); outline: none; }
  .node[data-kind="centre"] { min-height: 132px; border: 3px solid var(--ink); color: white; background: var(--ink); box-shadow: 12px 12px 0 var(--signal); }
  .node[data-kind="pillar"] { border-width: 3px; }
  .node[data-kind="agent"] { border-color: var(--signal-dark); }
  .node[data-kind="advanced"] { border-style: dashed; background: #deded8; }
  .node-kicker { color: #777; font-size: 10px; font-weight: 780; letter-spacing: .1em; text-transform: uppercase; }
  .node:hover .node-kicker, .node:focus-visible .node-kicker, .node.selected .node-kicker, .node[data-kind="centre"] .node-kicker { color: #b8baff; }
  .node strong { align-self: center; padding-block: 9px; font-size: 20px; line-height: 1.04; letter-spacing: -.035em; }
  .node-action { display: flex; justify-content: space-between; color: #777; font-size: 10px; font-weight: 720; letter-spacing: .08em; text-transform: uppercase; }
  .node:hover .node-action, .node:focus-visible .node-action, .node.selected .node-action, .node[data-kind="centre"] .node-action { color: #ccc; }
  .minimap { position: absolute; z-index: 8; bottom: 18px; left: 18px; width: 174px; height: 116px; padding: 0; overflow: hidden; border: 1px solid var(--ink); border-radius: 2px; background: rgba(244,244,241,.94); box-shadow: 4px 4px 0 rgba(23,23,23,.12); cursor: crosshair; }
  .minimap svg { display: block; width: 100%; height: 100%; }
  .minimap line { stroke: #b5b5af; stroke-width: 7; }
  .minimap rect { fill: #8e8e88; }
  .minimap rect.centre { fill: var(--signal); }
  .minimap .current-view { fill: rgba(75,79,197,.1); stroke: var(--signal-dark); stroke-width: 14; }
  .minimap span { position: absolute; right: 6px; bottom: 5px; padding: .2rem .35rem; color: white; background: var(--ink); font-size: .52rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .minimap:hover, .minimap:focus-visible { outline: 2px solid var(--signal); outline-offset: 2px; }
  .zoom-controls { position: absolute; z-index: 8; right: 18px; bottom: 18px; display: flex; overflow: hidden; border: 1px solid var(--ink); background: var(--paper); box-shadow: 4px 4px 0 rgba(23,23,23,.12); }
  .zoom-controls button { display: grid; width: 42px; height: 42px; place-items: center; border: 0; border-right: 1px solid var(--ink); background: transparent; cursor: pointer; font-size: 1.15rem; }
  .zoom-controls button:hover { color: white; background: var(--ink); }
  .zoom-controls .fit { width: 48px; border-right: 0; font-size: .68rem; font-weight: 800; text-transform: uppercase; }
  .scrim { position: fixed; z-index: 59; inset: 76px 0 0; border: 0; background: rgba(23,23,23,.2); cursor: default; }
  .detail-panel { position: fixed; z-index: 60; top: 76px; right: 0; bottom: 0; display: flex; width: min(470px, 92vw); flex-direction: column; overflow: hidden; border-left: 1px solid var(--ink); background: var(--paper); box-shadow: -18px 0 45px rgba(23,23,23,.16); animation: panel-in .28s ease both; }
  .panel-head { display: flex; flex: 0 0 66px; align-items: center; justify-content: space-between; padding-left: 28px; border-bottom: 1px solid var(--line); }
  .panel-head > div { display: flex; gap: .7rem; color: var(--muted); font-size: .62rem; font-weight: 780; letter-spacing: .1em; text-transform: uppercase; }
  .panel-head > div span + span::before { margin-right: .7rem; content: "/"; }
  .close { align-self: stretch; width: 66px; border: 0; border-left: 1px solid var(--line); background: transparent; cursor: pointer; font-size: 1.7rem; }
  .close:hover { color: white; background: var(--ink); }
  .panel-scroll { min-height: 0; flex: 1 1 auto; overflow-y: auto; overscroll-behavior: contain; padding: 30px 34px 60px; touch-action: pan-y; user-select: text; -webkit-overflow-scrolling: touch; }
  .panel-index { margin: 0 0 1.1rem; color: var(--signal-dark); font-size: .7rem; font-weight: 800; letter-spacing: .12em; }
  .panel-scroll h2 { margin: 0; font-size: clamp(2.3rem, 5vw, 4rem); line-height: .9; letter-spacing: -.065em; }
  .summary { margin: 1.5rem 0 2.6rem; color: var(--muted); font-size: 1.08rem; line-height: 1.55; }
  .panel-scroll section { margin-top: 2.3rem; padding-top: 1.25rem; border-top: 1px solid var(--line); }
  .panel-scroll h3 { margin: 0 0 .9rem; font-size: .69rem; font-weight: 820; letter-spacing: .12em; text-transform: uppercase; }
  .panel-scroll section p { margin: 0; color: #444; font-size: .92rem; line-height: 1.68; }
  ol { margin: 0; padding: 0; list-style: none; counter-reset: setup; }
  ol li { display: grid; grid-template-columns: 27px 1fr; gap: .7rem; margin: .8rem 0; color: #444; font-size: .87rem; line-height: 1.5; counter-increment: setup; }
  ol li::before { display: grid; width: 22px; height: 22px; place-items: center; border: 1px solid var(--line); border-radius: 50%; content: counter(setup); color: var(--signal-dark); font-size: .65rem; font-weight: 800; }
  .signals { display: flex; flex-wrap: wrap; gap: .5rem; margin: 0; padding: 0; list-style: none; }
  .signals li { padding: .45rem .65rem; border: 1px solid var(--line); border-radius: 999px; color: #4e4e4b; background: white; font-size: .72rem; }
  .resources { display: grid; border-top: 1px solid var(--ink); }
  .resources a { display: flex; justify-content: space-between; gap: 1rem; padding: .85rem 0; border-bottom: 1px solid var(--line); font-size: .82rem; font-weight: 720; }
  .resources a:hover { color: var(--signal-dark); }
  .career-tracks { display: grid; gap: 1rem; }
  .career-tracks article { padding: 1rem; border: 1px solid var(--line); background: white; }
  .career-tracks strong { display: block; font-size: 1rem; letter-spacing: -.025em; }
  .career-tracks small { display: block; margin: .35rem 0 1rem; color: var(--muted); font-size: .68rem; line-height: 1.45; }
  .career-tracks ol { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; counter-reset: none; }
  .career-tracks ol li { display: block; margin: 0; padding: .5rem .25rem; border-top: 2px solid var(--signal); color: #555; font-size: .58rem; line-height: 1.25; }
  .career-tracks ol li::before { display: none; }
  .track-note { margin-top: 1rem !important; font-size: .72rem !important; }
  .mobile-list { display: none; }
  @keyframes panel-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
  @media (max-width: 760px) {
    .roadmap-bar { display: none; }
    .viewport { height: 68vh; min-height: 520px; }
    .zoom-controls { bottom: 12px; left: 12px; right: auto; }
    .minimap { display: none; }
    .detail-panel { z-index: 70; top: 0; bottom: 0; width: 100vw; max-width: none; border-left: 0; }
    .scrim { z-index: 69; inset: 0; }
    .panel-head { flex-basis: calc(66px + env(safe-area-inset-top)); padding-top: env(safe-area-inset-top); padding-left: 22px; }
    .panel-scroll { padding: 24px 22px calc(44px + env(safe-area-inset-bottom)); }
    .mobile-list { display: grid; gap: 2.5rem; padding: 4rem 14px; border-top: 1px solid var(--line); background: var(--paper); }
    .mobile-list > p { margin: 0; color: var(--muted); font-size: .68rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
    .mobile-list h2 { margin: 0 0 .8rem; font-size: 1.65rem; letter-spacing: -.04em; }
    .mobile-list section > div { border-top: 1px solid var(--ink); }
    .mobile-list section button { display: flex; width: 100%; justify-content: space-between; padding: 1rem .25rem; border: 0; border-bottom: 1px solid var(--line); text-align: left; background: transparent; font-weight: 680; }
  }
</style>
