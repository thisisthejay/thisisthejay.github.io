<div class="visual-breakout"><slot /></div>

<style>
  .visual-breakout { width: min(1080px, calc(100vw - 40px)); margin: clamp(3.5rem, 8vw, 6rem) 0; margin-left: 50%; transform: translateX(-50%); }
  @media (max-width: 600px) { .visual-breakout { width: calc(100vw - 28px); } }
</style>
