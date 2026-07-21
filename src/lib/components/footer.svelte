<footer id="contact">
  <div class="shell footer-main">
    <div>
      <p class="eyebrow">Continue the conversation</p>
      <h2>Good systems start<br />with better questions.</h2>
    </div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/jermainepaulsmith/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
      <a href="https://github.com/thisisthejay" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    </div>
  </div>
  <div class="shell footer-base">
    <p>© {new Date().getFullYear()} Jay Smith</p>
    <p>Law × systems × people</p>
  </div>
</footer>

<style>
  footer { color: white; background: var(--ink); }
  .footer-main { display: grid; grid-template-columns: 1fr auto; gap: 3rem; padding-block: clamp(4.5rem, 9vw, 8rem); }
  .eyebrow { color: #a6a6a0; }
  h2 { margin: 0; max-width: 780px; font-size: clamp(2.5rem, 6vw, 5.8rem); line-height: .95; letter-spacing: -.06em; }
  .footer-links { display: grid; align-content: end; gap: 1rem; min-width: 180px; }
  .footer-links a { display: flex; justify-content: space-between; padding-block: .85rem; border-bottom: 1px solid #444; font-weight: 700; }
  .footer-links span { color: #9d9ff0; }
  .footer-base { display: flex; justify-content: space-between; padding-block: 1.3rem; border-top: 1px solid #333; color: #92928d; font-size: .72rem; text-transform: uppercase; letter-spacing: .12em; }
  @media (max-width: 700px) { .footer-main { grid-template-columns: 1fr; } .footer-base { display: grid; gap: .3rem; } }
</style>
