<figure aria-labelledby="ontology-title">
  <div class="figure-top"><span>Context map / 001</span><span>Meaning · relationships · boundaries</span></div>
  <svg viewBox="0 0 980 500" role="img" aria-labelledby="ontology-title ontology-desc">
    <title id="ontology-title">A legal ontology gives an AI agent a current map of the business</title>
    <desc id="ontology-desc">Broad model pre-training connects through a governed business ontology to current policies, entities, relationships and risk boundaries, allowing an agent to produce grounded answers.</desc>
    <defs>
      <pattern id="ontology-dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor" opacity=".17" /></pattern>
      <marker id="ontology-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10Z" /></marker>
    </defs>

    <g class="model">
      <rect x="40" y="115" width="220" height="260" rx="5" />
      <text class="index" x="65" y="145">FOUNDATION MODEL / 01</text>
      <text class="title" x="65" y="190">BROAD</text><text class="title" x="65" y="218">PRE-TRAINING</text>
      <text class="copy" x="65" y="270">law · language · patterns</text>
      <text class="copy" x="65" y="291">a large view of the world</text>
      <path class="small-path" d="M65 330H218" />
    </g>

    <path class="flow" d="M260 245H365" marker-end="url(#ontology-arrow)" />
    <path class="flow-pulse" d="M260 245H365" />

    <g class="ontology">
      <circle cx="490" cy="245" r="128" />
      <circle class="inner" cx="490" cy="245" r="87" />
      <text class="index" x="490" y="210" text-anchor="middle">BUSINESS ONTOLOGY / 02</text>
      <text class="ontology-title" x="490" y="245" text-anchor="middle">WHAT EXISTS</text>
      <text class="ontology-title" x="490" y="267" text-anchor="middle">AND HOW IT RELATES</text>
      <text class="copy" x="490" y="302" text-anchor="middle">governed · current · specific</text>
    </g>

    {#each [
      { x: 405, y: 75, label: "CUSTOMER" }, { x: 575, y: 75, label: "WORKER" },
      { x: 385, y: 430, label: "CONTRACT" }, { x: 595, y: 430, label: "JURISDICTION" },
      { x: 680, y: 160, label: "RISK APPETITE" }, { x: 675, y: 335, label: "APPROVED POSITION" }
    ] as item}
      <g class="concept">
        <line x1="490" y1="245" x2={item.x} y2={item.y} />
        <rect x={item.x - 57} y={item.y - 17} width="114" height="34" rx="17" />
        <text x={item.x} y={item.y + 3} text-anchor="middle">{item.label}</text>
      </g>
    {/each}

    <path class="flow" d="M710 245H785" marker-end="url(#ontology-arrow)" />
    <path class="flow-pulse delayed" d="M710 245H785" />

    <g class="answer">
      <rect x="790" y="155" width="150" height="180" rx="5" />
      <text class="index" x="810" y="182">AGENT / 03</text>
      <text class="title" x="810" y="224">A CURRENT</text><text class="title" x="810" y="250">ANSWER</text>
      <text class="copy" x="810" y="289">inside the boundary</text>
      <circle cx="915" cy="310" r="8" />
    </g>
  </svg>
  <figcaption>Pre-training supplies breadth. Governed organisational context gives an agent somewhere specific to stand.</figcaption>
</figure>

<style>
  figure { margin: 0; padding: 1rem; border: 1px solid #333; color: white; background: var(--ink); box-shadow: 12px 12px 0 rgba(23,23,23,.1); }
  .figure-top { display: flex; justify-content: space-between; padding: .2rem .2rem .8rem; border-bottom: 1px solid #3d3d3d; color: #aaa; font-size: .58rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  svg { display: block; width: 100%; height: auto; }
  .model rect, .answer rect { fill: #242424; stroke: #666; }
  .model .small-path { stroke: #666; stroke-width: 2; stroke-dasharray: 3 6; }
  .index { fill: #9fa2ff; font-size: 8px; font-weight: 850; letter-spacing: .1em; }
  .title { fill: white; font-size: 19px; font-weight: 900; letter-spacing: -.03em; }
  .copy { fill: #999994; font-size: 9px; }
  .flow { fill: none; stroke: #6f6f69; stroke-width: 2; }
  marker path { fill: #777; }
  .flow-pulse { fill: none; stroke: #9fa2ff; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 24 105; animation: context-flow 2.2s linear infinite; }
  .flow-pulse.delayed { animation-delay: -1.1s; }
  .ontology > circle:first-child { fill: url(#ontology-dots); stroke: #8589ff; stroke-width: 2; stroke-dasharray: 7 7; }
  .ontology .inner { fill: #efefeb; stroke: #4b4fc5; stroke-width: 12; }
  .ontology-title { fill: #171717; font-size: 13px; font-weight: 900; letter-spacing: -.01em; }
  .ontology .copy { fill: #65655f; }
  .concept line { stroke: #777; stroke-width: 1; stroke-dasharray: 3 5; }
  .concept rect { fill: #242424; stroke: #777; }
  .concept text { fill: #ddd; font-size: 7px; font-weight: 800; letter-spacing: .04em; }
  .answer circle { fill: #9fa2ff; filter: drop-shadow(0 0 5px #8589ff); animation: answer-pulse 1.8s ease-in-out infinite; }
  figcaption { padding: 0 .2rem .5rem; color: #aaa; font-size: .7rem; line-height: 1.5; }
  @keyframes context-flow { from { stroke-dashoffset: 129; } to { stroke-dashoffset: 0; } }
  @keyframes answer-pulse { 50% { opacity: .35; transform: scale(.75); transform-origin: 915px 310px; } }
  @media (prefers-reduced-motion: reduce) { .flow-pulse, .answer circle { animation: none; } }
  @media (max-width: 600px) { figure { padding: .6rem; box-shadow: 7px 7px 0 rgba(23,23,23,.1); } .figure-top { font-size: .45rem; } }
</style>
