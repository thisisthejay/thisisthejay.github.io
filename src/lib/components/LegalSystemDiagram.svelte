<script>
  export let compact = false;
</script>

<figure class:compact aria-labelledby="diagram-title">
  <div class="figure-top">
    <span>Concept model / 001</span>
    <span>From words to work</span>
  </div>
  <svg viewBox="0 0 760 430" role="img" aria-labelledby="diagram-title diagram-desc">
    <title id="diagram-title">How legal engineering translates policy into working systems</title>
    <desc id="diagram-desc">An animated flow from policy, through process, to systems, with a feedback loop returning operational learning to policy.</desc>
    <defs>
      <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="currentColor" opacity=".22" />
      </pattern>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
      </marker>
    </defs>

    <path class="track" d="M178 186H295 M465 186H582" marker-end="url(#arrow)" />
    <path class="feedback" d="M665 260 C665 370 95 370 95 260" marker-end="url(#arrow)" />
    <path class="flow-line flow-forward" d="M178 186H295 M465 186H582" />
    <path class="flow-line flow-return" d="M665 260 C665 370 95 370 95 260" />

    <g class="node node-one">
      <rect x="26" y="108" width="160" height="152" rx="4" />
      <rect class="texture" x="38" y="120" width="136" height="128" rx="2" />
      <text class="index" x="46" y="148">01</text>
      <text class="label" x="46" y="197">POLICY</text>
      <text class="detail" x="46" y="221">intent · duties · risk</text>
    </g>
    <g class="node node-two">
      <rect x="300" y="108" width="160" height="152" rx="4" />
      <path class="offset" d="M310 118H470V270H310Z" />
      <text class="index" x="320" y="148">02</text>
      <text class="label" x="320" y="197">PROCESS</text>
      <text class="detail" x="320" y="221">steps · roles · decisions</text>
    </g>
    <g class="node node-three">
      <rect x="574" y="108" width="160" height="152" rx="4" />
      <rect class="texture" x="586" y="120" width="136" height="128" rx="2" />
      <text class="index" x="594" y="148">03</text>
      <text class="label" x="594" y="197">SYSTEM</text>
      <text class="detail" x="594" y="221">tools · data · controls</text>
    </g>
    <text class="feedback-label" x="380" y="397" text-anchor="middle">OPERATIONAL LEARNING / FEEDBACK</text>
  </svg>
  <figcaption>Legal engineering makes the route from intention to execution visible—and keeps the loop open.</figcaption>
</figure>

<style>
  figure { margin: 0; padding: 1rem; border: 1px solid #333; color: white; background: var(--ink); box-shadow: 12px 12px 0 rgba(23,23,23,.1); }
  .figure-top { display: flex; justify-content: space-between; padding: .2rem .2rem .8rem; border-bottom: 1px solid #3d3d3d; color: #aaa; font-size: .58rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  .node > rect:first-child { fill: #202020; stroke: #777; stroke-width: 1; }
  .node-two > rect:first-child { fill: #f0f0eb; stroke: #f0f0eb; }
  .texture { fill: url(#dots); color: white; }
  .offset { fill: none; stroke: #4b4fc5; stroke-width: 3; transform: translate(6px, 6px); }
  .index { fill: #8d8d87; font-size: 12px; font-weight: 700; letter-spacing: .08em; }
  .node-two .index { fill: #666; }
  .label { fill: white; font-size: 24px; font-weight: 800; letter-spacing: -.04em; }
  .node-two .label { fill: #171717; }
  .detail { fill: #a8a8a3; font-size: 10px; letter-spacing: .04em; }
  .node-two .detail { fill: #666; }
  .track, .feedback { fill: none; stroke: #8d8d87; stroke-width: 1.5; }
  .feedback { stroke-dasharray: 5 7; }
  .flow-line { fill: none; stroke: #8589ff; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 22 210; filter: drop-shadow(0 0 4px rgba(117,121,239,.7)); }
  .flow-forward { animation: flow-forward 2.2s linear infinite; }
  .flow-return { stroke-dasharray: 34 760; animation: flow-return 4.8s linear infinite; }
  .feedback-label { fill: #85857f; font-size: 9px; font-weight: 700; letter-spacing: .14em; }
  figcaption { max-width: 560px; padding: 0 .2rem .5rem; color: #aaa; font-size: .7rem; line-height: 1.5; }
  figure.compact figcaption { display: none; }
  @keyframes flow-forward { from { stroke-dashoffset: 232; } to { stroke-dashoffset: 0; } }
  @keyframes flow-return { from { stroke-dashoffset: 794; } to { stroke-dashoffset: 0; } }
  @media (max-width: 600px) { figure { padding: .65rem; box-shadow: 7px 7px 0 rgba(23,23,23,.1); } .figure-top { font-size: .48rem; } }
</style>
