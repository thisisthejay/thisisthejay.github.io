<script>
  const roles = [
    { title: "Legal Operations Managing Counsel", mode: "Leadership" },
    { title: "Head of Legal Operations", mode: "Transformation" },
    { title: "Senior Legal Operations Manager", mode: "Operations" },
    { title: "Legal Engineer", mode: "Engineering" },
    { title: "Founder, SenseCheck Technologies", mode: "Product" }
  ];

  const credentials = [
    {
      code: "BCS / RE",
      title: "Practitioner Certificate in Requirements Engineering",
      issuer: "BCS, The Chartered Institute for IT",
      href: "https://www.bcs.org/qualifications-and-certifications/certifications-for-professionals/business-analysis/practitioner-certificate-in-requirements-engineering/"
    },
    {
      code: "GSB / AI",
      title: "AI Essentials",
      issuer: "Stanford Graduate School of Business",
      href: "https://www.gsb.stanford.edu/"
    }
  ];
</script>

<section class="profile" id="about">
  <div class="shell">
    <div class="profile-intro">
      <p class="eyebrow">About / Career profile</p>
      <h2 class="section-title">Lawyerly judgement.<br /><span>Engineering instinct.</span></h2>
      <div class="bio">
        <p>I started in law close to the work: preparing documents, moving matters forward and learning how good advice is actually delivered.</p>
        <p>That operational perspective became a career spanning legal engineering, legal operations leadership, software development and company building. The thread through all of it is translation—between policy and practice, specialists and users, ambition and execution.</p>
      </div>
    </div>

    <div class="career-board">
      <div class="board-label">
        <span>Career arc</span>
        <span>Roles held</span>
      </div>
      <div class="roles" aria-label="Roles held">
        {#each roles as role, index}
          <article>
            <span class="role-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{role.title}</h3>
            <span class="role-mode">{role.mode}</span>
          </article>
        {/each}
      </div>
      <p class="board-note">Across leading law firms, global organisations and a venture of my own.</p>
    </div>

    <div class="credentials">
      <div class="credentials-heading">
        <p class="eyebrow">Continued learning</p>
        <h3>Useful theory,<br />put to work.</h3>
        <p>Qualifications that sharpen how I frame problems, gather requirements and make responsible choices about emerging technology.</p>
      </div>
      <div class="credential-list">
        {#each credentials as item}
          <a href={item.href} target="_blank" rel="noreferrer">
            <span class="credential-code">{item.code}</span>
            <span><strong>{item.title}</strong><small>{item.issuer}</small></span>
            <b aria-hidden="true">↗</b>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .profile { overflow: hidden; padding-block: clamp(5rem, 10vw, 9rem); background: var(--soft); }
  .profile-intro { display: grid; grid-template-columns: .7fr 1.35fr 1fr; gap: clamp(2rem, 5vw, 5rem); align-items: start; }
  .section-title span { color: transparent; -webkit-text-stroke: 1.2px var(--ink); }
  .bio { border-top: 1px solid var(--ink); }
  .bio p { margin: 0; padding-block: 1.2rem; border-bottom: 1px solid #c8c8c3; color: var(--muted); line-height: 1.65; }
  .career-board { position: relative; margin-top: clamp(4rem, 8vw, 7rem); padding: 1rem 1.5rem 0; border: 1px solid var(--ink); background: var(--paper); box-shadow: 14px 14px 0 #d1d1cc; transform: rotate(-.35deg); }
  .career-board::before { position: absolute; z-index: -1; inset: -10px 10px 10px -10px; border: 1px solid var(--signal); content: ""; }
  .board-label { display: flex; justify-content: space-between; padding-bottom: .8rem; border-bottom: 1px solid var(--ink); color: var(--muted); font-size: .6rem; font-weight: 760; letter-spacing: .12em; text-transform: uppercase; }
  .roles article { display: grid; grid-template-columns: 54px 1fr auto; align-items: center; gap: 1rem; padding: 1.45rem 0; border-bottom: 1px solid var(--line); }
  .role-number { color: var(--signal); font-size: .65rem; font-weight: 800; }
  .roles h3 { margin: 0; font-size: clamp(1.2rem, 2.6vw, 2rem); line-height: 1; letter-spacing: -.04em; }
  .role-mode { color: var(--muted); font-size: .62rem; font-weight: 720; letter-spacing: .08em; text-transform: uppercase; }
  .board-note { margin: 0; padding: 1rem 0; color: var(--muted); font-size: .68rem; line-height: 1.5; }
  .credentials { display: grid; grid-template-columns: .7fr 1.3fr; gap: clamp(3rem, 8vw, 8rem); margin-top: clamp(5rem, 9vw, 8rem); }
  .credentials-heading h3 { margin: 0; font-size: clamp(2.1rem, 4vw, 3.6rem); line-height: .96; letter-spacing: -.05em; }
  .credentials-heading > p:last-child { max-width: 430px; margin: 1.4rem 0 0; color: var(--muted); line-height: 1.65; }
  .credential-list { border-top: 1px solid var(--ink); }
  .credential-list a { display: grid; grid-template-columns: 78px 1fr auto; align-items: center; gap: 1rem; padding: 1.6rem 0; border-bottom: 1px solid #c8c8c3; transition: padding .2s ease; }
  .credential-list a:hover { padding-left: .65rem; }
  .credential-code { color: var(--signal-dark); font-size: .62rem; font-weight: 800; letter-spacing: .08em; }
  .credential-list strong { display: block; font-size: 1rem; line-height: 1.3; }
  .credential-list small { display: block; margin-top: .35rem; color: var(--muted); font-size: .72rem; }
  .credential-list b { font-weight: 500; }
  @media (max-width: 900px) { .profile-intro { grid-template-columns: 1fr 2fr; } .bio { grid-column: 2; } }
  @media (max-width: 650px) {
    .profile-intro, .credentials { grid-template-columns: 1fr; }
    .bio { grid-column: auto; }
    .career-board { padding-inline: 1rem; box-shadow: 8px 8px 0 #d1d1cc; }
    .roles article { grid-template-columns: 30px 1fr; }
    .role-mode { grid-column: 2; margin-top: -.5rem; }
    .credential-list a { grid-template-columns: 64px 1fr auto; }
  }
</style>
