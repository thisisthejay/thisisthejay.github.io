<figure aria-labelledby="ops-engineering-title">
  <div class="figure-top"><span>Concept model / 002</span><span>Two disciplines · one outcome</span></div>
  <svg viewBox="0 0 980 590" role="img" aria-labelledby="ops-engineering-title ops-engineering-desc">
    <title id="ops-engineering-title">The relationship between Legal Operations and Legal Engineering</title>
    <desc id="ops-engineering-desc">Legal work made better branches into Legal Operations and Legal Engineering. Legal Operations connects project, knowledge and automation roles. Legal Engineering combines lawyer, business analyst and software engineer skills.</desc>
    <defs>
      <pattern id="map-dots" width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="currentColor" opacity=".2" /></pattern>
      <marker id="map-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10Z" fill="currentColor" /></marker>
    </defs>

    <path class="branch" d="M490 280C420 280 390 220 330 190M490 280C560 280 590 220 650 190" marker-end="url(#map-arrow)" />
    <path class="pulse pulse-left" d="M490 280C420 280 390 220 330 190" />
    <path class="pulse pulse-right" d="M490 280C560 280 590 220 650 190" />

    <g class="centre">
      <circle cx="490" cy="300" r="104" />
      <circle class="centre-ring" cx="490" cy="300" r="74" />
      <text x="490" y="286" text-anchor="middle">LEGAL WORK</text>
      <text x="490" y="316" text-anchor="middle">MADE BETTER</text>
      <text class="centre-note" x="490" y="342" text-anchor="middle">shared outcome</text>
    </g>

    <g class="discipline ops">
      <rect x="160" y="72" width="220" height="118" rx="5" />
      <text class="number" x="184" y="105">01 / OPERATING MODEL</text>
      <text class="name" x="184" y="148">LEGAL OPS</text>
      <text class="detail" x="184" y="171">make the function work</text>
    </g>
    <g class="discipline engineering">
      <rect x="600" y="72" width="220" height="118" rx="5" />
      <text class="number" x="624" y="105">02 / EXECUTABLE LOGIC</text>
      <text class="name" x="624" y="148">LEGAL ENGINEERING</text>
      <text class="detail" x="624" y="171">make the rules work</text>
    </g>

    <g class="role role-1"><circle cx="120" cy="285" r="63" /><text x="120" y="280">PROJECT</text><text x="120" y="300">MANAGEMENT</text></g>
    <g class="role role-2"><circle cx="235" cy="330" r="63" /><text x="235" y="325">KNOWLEDGE</text><text x="235" y="345">MANAGEMENT</text></g>
    <g class="role role-3"><circle cx="120" cy="420" r="63" /><text x="120" y="415">AUTOMATION</text><text x="120" y="435">SPECIALIST</text></g>

    <g class="role role-4"><circle cx="860" cy="285" r="63" /><text x="860" y="290">LAWYER</text></g>
    <g class="role role-5"><circle cx="745" cy="330" r="63" /><text x="745" y="325">BUSINESS</text><text x="745" y="345">ANALYST</text></g>
    <g class="role role-6"><circle cx="860" cy="420" r="63" /><text x="860" y="415">SOFTWARE</text><text x="860" y="435">ENGINEER</text></g>

    <path class="seam" d="M335 480H645" />
    <text class="seam-title" x="490" y="510" text-anchor="middle">THE PRODUCTIVE SEAM</text>
    <text class="seam-copy" x="490" y="536" text-anchor="middle">requirements · workflow · data · adoption · feedback</text>
  </svg>
  <figcaption>The titles overlap. The distinction becomes clearer when you ask what each discipline is trying to change.</figcaption>
</figure>

<style>
  figure { margin: 0; padding: 1rem; border: 1px solid #333; color: white; background: var(--ink); box-shadow: 12px 12px 0 rgba(23,23,23,.1); }
  .figure-top { display: flex; justify-content: space-between; padding: .2rem .2rem .8rem; border-bottom: 1px solid #3d3d3d; color: #aaa; font-size: .58rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  svg { display: block; width: 100%; height: auto; }
  .branch { fill: none; stroke: #898984; stroke-width: 2; }
  .pulse { fill: none; stroke: #8589ff; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 32 360; filter: drop-shadow(0 0 4px rgba(117,121,239,.8)); animation: travel 3.2s linear infinite; }
  .pulse-right { animation-delay: 1.4s; }
  .centre > circle:first-child { fill: #4b4fc5; }
  .centre-ring { fill: #eeeeea; stroke: #9fa2ff; stroke-width: 14; }
  .centre text { fill: #171717; font-size: 18px; font-weight: 850; letter-spacing: -.02em; }
  .centre .centre-note { fill: #65655f; font-size: 10px; font-weight: 650; letter-spacing: .12em; text-transform: uppercase; }
  .discipline rect { stroke-width: 2; }
  .ops rect { fill: #eeeeea; stroke: #eeeeea; }
  .engineering rect { fill: url(#map-dots); color: white; stroke: #777; }
  .discipline .number { fill: #74746f; font-size: 9px; font-weight: 750; letter-spacing: .1em; }
  .engineering .number { fill: #aaa; }
  .discipline .name { fill: #171717; font-size: 22px; font-weight: 850; letter-spacing: -.04em; }
  .engineering .name { fill: white; font-size: 18px; }
  .discipline .detail { fill: #686863; font-size: 10px; }
  .engineering .detail { fill: #aaa; }
  .role circle { fill: #222; stroke: #6f6f6a; stroke-width: 1.5; }
  .role text { fill: #d4d4cf; font-size: 9px; font-weight: 700; letter-spacing: .06em; text-anchor: middle; }
  .seam { stroke: #5e5e59; stroke-dasharray: 4 7; }
  .seam-title { fill: #9fa2ff; font-size: 10px; font-weight: 800; letter-spacing: .15em; }
  .seam-copy { fill: #888883; font-size: 10px; letter-spacing: .07em; }
  figcaption { padding: 0 .2rem .5rem; color: #aaa; font-size: .7rem; line-height: 1.5; }
  @keyframes travel { from { stroke-dashoffset: 392; } to { stroke-dashoffset: 0; } }
  @media (max-width: 600px) { figure { padding: .6rem; box-shadow: 7px 7px 0 rgba(23,23,23,.1); } .figure-top { font-size: .45rem; } }
</style>
