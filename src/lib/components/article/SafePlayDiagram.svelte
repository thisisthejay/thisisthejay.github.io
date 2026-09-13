<figure aria-labelledby="safe-play-title">
  <div class="figure-top"><span>Capability loop / 001</span><span>Protected space · real momentum</span></div>
  <svg viewBox="0 0 980 470" role="img" aria-labelledby="safe-play-title safe-play-desc">
    <title id="safe-play-title">A safe place to play creates organisational momentum</title>
    <desc id="safe-play-desc">Secure hosting, approved frontier models and clear guardrails form a playground around curiosity. A path leads from play to skills, expertise, alignment and momentum.</desc>
    <defs>
      <pattern id="play-dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="currentColor" opacity=".18" /></pattern>
      <marker id="play-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10Z" fill="currentColor" /></marker>
    </defs>

    <rect class="fence" x="40" y="55" width="900" height="350" rx="10" />
    <text class="fence-label" x="65" y="83">THE PLAYGROUND FENCE · SECURITY · IDENTITY · DATA · DEPLOYMENT</text>

    <g class="permission">
      <rect x="76" y="115" width="210" height="98" rx="5" />
      <text class="permission-index" x="98" y="143">PERMISSION / 01</text>
      <text class="permission-title" x="98" y="174">SECURE HOSTING</text>
      <text class="permission-copy" x="98" y="195">a real route to deployment</text>
    </g>
    <g class="permission">
      <rect x="76" y="232" width="210" height="98" rx="5" />
      <text class="permission-index" x="98" y="260">PERMISSION / 02</text>
      <text class="permission-title" x="98" y="291">CAPABLE MODELS</text>
      <text class="permission-copy" x="98" y="312">approved access · safely held</text>
    </g>

    <g class="curiosity">
      <circle cx="405" cy="222" r="94" />
      <circle class="curiosity-ring" cx="405" cy="222" r="67" />
      <text x="405" y="216" text-anchor="middle">CURIOSITY</text>
      <text class="curiosity-copy" x="405" y="241" text-anchor="middle">permission to try</text>
    </g>

    <path class="route" d="M500 222H885" marker-end="url(#play-arrow)" />
    <path class="route-pulse" d="M500 222H885" />
    {#each [
      { x: 550, number: "01", label: "PLAY" },
      { x: 630, number: "02", label: "SKILLS" },
      { x: 720, number: "03", label: "EXPERTISE" },
      { x: 815, number: "04", label: "ALIGNMENT" }
    ] as step}
      <g class="step">
        <circle cx={step.x} cy="222" r="31" />
        <text class="step-number" x={step.x} y="215" text-anchor="middle">{step.number}</text>
        <text class="step-label" x={step.x} y="238" text-anchor="middle">{step.label}</text>
      </g>
    {/each}
    <g class="momentum">
      <text x="885" y="195" text-anchor="end">MOMENTUM</text>
      <text class="momentum-copy" x="885" y="252" text-anchor="end">useful change</text>
      <text class="momentum-copy" x="885" y="267" text-anchor="end">that compounds</text>
    </g>
  </svg>
  <figcaption>Guardrails do not diminish play. They make it possible for experiments to become useful, durable work.</figcaption>
</figure>

<style>
  figure { margin: 0; padding: 1rem; border: 1px solid #333; color: white; background: var(--ink); box-shadow: 12px 12px 0 rgba(23,23,23,.1); }
  .figure-top { display: flex; justify-content: space-between; padding: .2rem .2rem .8rem; border-bottom: 1px solid #3d3d3d; color: #aaa; font-size: .58rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  svg { display: block; width: 100%; height: auto; }
  .fence { fill: url(#play-dots); stroke: #8589ff; stroke-width: 2; stroke-dasharray: 8 7; }
  .fence-label { fill: #9fa2ff; font-size: 9px; font-weight: 800; letter-spacing: .11em; }
  .permission rect { fill: #242424; stroke: #666; }
  .permission-index { fill: #969690; font-size: 8px; font-weight: 800; letter-spacing: .1em; }
  .permission-title { fill: white; font-size: 16px; font-weight: 850; letter-spacing: -.025em; }
  .permission-copy { fill: #999994; font-size: 9px; }
  .curiosity > circle:first-child { fill: #4b4fc5; }
  .curiosity-ring { fill: #eeeeea; stroke: #9fa2ff; stroke-width: 12; }
  .curiosity text { fill: #171717; font-size: 16px; font-weight: 900; letter-spacing: -.02em; }
  .curiosity .curiosity-copy { fill: #666660; font-size: 9px; font-weight: 650; letter-spacing: .08em; }
  .route { fill: none; stroke: #686863; stroke-width: 2; }
  .route-pulse { fill: none; stroke: #9fa2ff; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 30 385; filter: drop-shadow(0 0 4px rgba(159,162,255,.7)); animation: travel 3.6s linear infinite; }
  .step circle { fill: #202020; stroke: #777771; }
  .step-number { fill: #9fa2ff; font-size: 8px; font-weight: 850; }
  .step-label { fill: #ddd; font-size: 7px; font-weight: 800; letter-spacing: .04em; }
  .momentum > text { fill: white; font-size: 13px; font-weight: 900; letter-spacing: -.01em; }
  .momentum .momentum-copy { fill: #999994; font-size: 9px; line-height: 1.4; }
  figcaption { padding: 0 .2rem .5rem; color: #aaa; font-size: .7rem; line-height: 1.5; }
  @keyframes travel { from { stroke-dashoffset: 415; } to { stroke-dashoffset: 0; } }
  @media (prefers-reduced-motion: reduce) { .route-pulse { animation: none; } }
  @media (max-width: 600px) { figure { padding: .6rem; box-shadow: 7px 7px 0 rgba(23,23,23,.1); } .figure-top { font-size: .45rem; } }
</style>
