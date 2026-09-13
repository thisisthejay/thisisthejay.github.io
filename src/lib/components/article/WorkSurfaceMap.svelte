<figure aria-labelledby="surface-title">
  <div class="figure-top"><span>System view / 001</span><span>Tools are connected by work</span></div>
  <svg viewBox="0 0 920 490" role="img" aria-labelledby="surface-title surface-desc">
    <title id="surface-title">A connected legal operations work surface</title>
    <desc id="surface-desc">Automation connects intake and work across Google, Slack, Wordsmith and Notion rather than treating tools as an operating model.</desc>
    <defs><marker id="surface-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10Z" fill="currentColor" /></marker></defs>
    <text class="row-label" x="38" y="122">WHERE WORK APPEARS</text>
    <text class="row-label" x="38" y="334">HOW WORK MOVES</text>
    <path class="rail" d="M184 330H790" />
    <path class="connector" d="M220 330V230M390 330V230M560 330V230M730 330V230" marker-end="url(#surface-arrow)" />
    <path class="flow" d="M184 330H790" />
    {#each [
      { x: 150, label: "GOOGLE", sub: "documents · mail" },
      { x: 320, label: "SLACK", sub: "requests · decisions" },
      { x: 490, label: "WORDSMITH", sub: "legal AI · drafting" },
      { x: 660, label: "NOTION", sub: "forms · knowledge" }
    ] as node}
      <g class="node">
        <rect x={node.x} y="120" width="140" height="110" rx="4" />
        <text class="node-name" x={node.x + 18} y="166">{node.label}</text>
        <text class="node-sub" x={node.x + 18} y="191">{node.sub}</text>
      </g>
    {/each}
    <g class="automation"><rect x="270" y="294" width="150" height="72" rx="36" /><text x="345" y="334" text-anchor="middle">WORKFLOWS</text></g>
    <g class="automation"><rect x="500" y="294" width="150" height="72" rx="36" /><text x="575" y="334" text-anchor="middle">ZAPS</text></g>
    <g class="outcome"><rect x="340" y="412" width="240" height="48" rx="4" /><text x="460" y="441" text-anchor="middle">ONE OPERATING SYSTEM</text></g>
    <path class="down" d="M460 366V412" marker-end="url(#surface-arrow)" />
  </svg>
  <figcaption>Legal Ops joins the work up. The logo collection is not the operating model; the movement between tools is.</figcaption>
</figure>

<style>
  figure { margin: 0; padding: 1rem; border: 1px solid var(--ink); color: var(--ink); background: var(--paper); box-shadow: 12px 12px 0 #d1d1cc; }
  .figure-top { display: flex; justify-content: space-between; padding: .2rem .2rem .8rem; border-bottom: 1px solid var(--ink); color: var(--muted); font-size: .58rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  svg { display: block; width: 100%; height: auto; }
  .row-label { fill: #777771; font-size: 8px; font-weight: 800; letter-spacing: .12em; }
  .node rect { fill: white; stroke: #70706b; stroke-width: 1.5; }
  .node-name { fill: #171717; font-size: 14px; font-weight: 850; }
  .node-sub { fill: #767670; font-size: 8px; }
  .rail, .connector, .down { fill: none; stroke: #72726d; stroke-width: 1.5; }
  .flow { fill: none; stroke: #5f63d7; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 28 590; animation: surface-flow 4s linear infinite; }
  .automation rect { fill: #171717; }
  .automation text { fill: white; font-size: 11px; font-weight: 800; letter-spacing: .06em; }
  .outcome rect { fill: #eeeeea; stroke: #4b4fc5; stroke-width: 2; }
  .outcome text { fill: #171717; font-size: 10px; font-weight: 850; letter-spacing: .1em; }
  figcaption { padding: 0 .2rem .5rem; color: var(--muted); font-size: .7rem; line-height: 1.5; }
  @keyframes surface-flow { from { stroke-dashoffset: 618; } to { stroke-dashoffset: 0; } }
  @media (max-width: 600px) { figure { padding: .6rem; box-shadow: 7px 7px 0 #d1d1cc; } .figure-top { font-size: .45rem; } }
</style>
