<script lang="ts">
  const researchInterests = [
    'Computer vision',
    'Human pose estimation',
    'Biomechanics',
    'Markerless motion analysis',
    'Deep learning',
  ];

  const personalInterests = [
    'Muay thai',
    'Swimming',
    'Game development',
    'Sci-fi',
  ];

  const publications = [
    {
      title: 'Effect of markers in training dataset for markerless applications in biomechanics',
      authors: 'Mercier, L., Cresson, T., Gervais, S., Mezghani, N., & Vázquez, C.',
      venue: 'Preprint · 2025',
      badge: { label: 'Preprint', type: 'preprint' },
      links: [
        { label: 'SSRN', href: 'https://ssrn.com/abstract=6017118' },
        { label: 'DOI', href: 'https://dx.doi.org/10.2139/ssrn.6017118' },
      ],
    },
  ];

  const abstracts = [
    {
      title: 'Framework for the application of markerless motion capture to biomechanics',
      authors: 'Mercier, L., Cresson, T., Mezghani, N., & Vázquez, C.',
      venue: 'Multidisciplinary Biomechanics Journal · 2025',
      links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16163' }],
    },
    {
      title: 'Marker-less motion capture accuracy in children with cerebral palsy and typically developing children',
      authors: 'Naaïm, A., Rozaire, J., Mercier, L., Begon, M., & Cherni, Y.',
      venue: 'Multidisciplinary Biomechanics Journal · 2025',
      links: [{ label: 'DOI', href: 'https://doi.org/10.46298/mbj.16215' }],
    },
  ];

  const presentations = [
    {
      title: 'Using knee kinesiography to train markerless pose estimation models for first-line kinematic assessment in knee osteoarthritis',
      authors: 'Mercier, L., Marois, B., Fuentes, A., Cagnin, A., Cresson, T., & Vazquez, C.',
      venue: 'OARSI World Congress on Osteoarthritis · April 2026',
      badges: [{ label: 'Accepted', type: 'accepted' }, { label: 'Poster', type: 'poster' }],
    },
    {
      title: 'Evaluation of 3D marker-less motion capture precision in upper limb children movement',
      authors: 'Naaim, A., Rozaire, J., Mercier, L., Duprey, S., & Begon, M.',
      venue: 'International Society of Biomechanics · Stockholm, Sweden · 2025',
      badges: [{ label: 'Oral', type: 'oral' }],
    },
    {
      title: 'Étude de l\'impact de la présence des marqueurs pour l\'estimation de la pose humaine',
      authors: 'Mercier, L., Cresson, T., Mezghani, N., & Vázquez, C.',
      venue: '92e Congrès de l\'Acfas · Montréal, Canada · 2025',
      badges: [{ label: 'Oral', type: 'oral' }],
    },
  ];

  const awards = [
    {
      year: '2025',
      title: 'Bourse de collaboration de recherche — Société de Biomécanique',
      sub: 'Visiting PhD student · IBHGC',
    },
    {
      year: '2024',
      title: 'Excellence grant for scientific communication activities',
      sub: 'ÉTS Library',
    },
  ];

  const teaching = [
    {
      course: 'GT411 — Digital Imaging',
      role: 'Lab instructor · designed labs & evaluations',
      semesters: 'Fall 2024 · Winter 2025 · Fall 2025 · ÉTS Montréal',
      labs: [
        'Mini Lightroom — contrast, curves, color space',
        'Road sign detection — classical CV, no deep learning',
        'Real-time background removal — non-DL segmentation',
      ],
    },
  ];

  const news = [
    {
      date: 'Winter 2026',
      text: 'Visiting PhD Student at Institut de Biomécanique Humaine Georges Charpak',
    },
    {
      date: 'Sep 2024',
      text: 'Lab instructor for GT411 — Digital Imaging, ÉTS Montréal.',
    },
    {
      date: 'May 2024',
      text: 'Recipient of the excellence grant for scientific communication activities — ÉTS Library.',
    },
  ];
</script>

<svelte:head>
  <title>Lucas Mercier</title>
  <meta name="description" content="PhD student at LIO, ÉTS Montréal. Research in computer vision, human pose estimation and biomechanics." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="page">
  <nav>
    <span class="nav-name">Lucas Mercier</span>
    <div class="nav-links">
      <a href="#research">Research</a>
      <a href="#publications">Publications</a>
      <a href="#teaching">Teaching</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-name">Lucas Mercier</h1>
      <p class="hero-role">
        PhD student ·
        <a href="https://www.etsmtl.ca/laboratoires/lio" target="_blank" rel="noopener noreferrer">LIO</a>,
        École de technologie supérieure
      </p>
      <p class="hero-loc">Montreal, Canada</p>
      <p class="hero-bio">
        I am a PhD student at the LIO laboratory (Laboratoire d'imagerie orthopédique) at ÉTS Montréal,
        working at the intersection of computer vision and biomechanics. My research focuses on human pose
        estimation and its application to markerless motion analysis — developing methods that bring
        clinical-grade movement analysis outside the lab.
      </p>
      <div class="socials">
        <a class="social-link" href="https://github.com/MercierLucas" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 496 512" aria-hidden="true"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
          GitHub
        </a>
        <a class="social-link" href="https://www.linkedin.com/in/lucas-mercier-899470171/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          LinkedIn
        </a>
        <a class="social-link" href="https://ssrn.com/abstract=6017118" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 512 512" aria-hidden="true"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
          SSRN
        </a>
      </div>
    </div>
    <div class="hero-avatar" aria-hidden="true">
      <span class="avatar-initials">LM</span>
    </div>
  </div>

  <section id="research">
    <h2 class="section-label">Research interests</h2>
    <div class="interests">
      <div class="interest-group">
        {#each researchInterests as interest}
          <span class="interest-tag">{interest}</span>
        {/each}
      </div>
      <div class="interests-divider"></div>
      <div class="interest-group">
        {#each personalInterests as interest}
          <span class="interest-tag personal">{interest}</span>
        {/each}
      </div>
    </div>
  </section>

  <section id="publications">
    <h2 class="section-label">Publications</h2>
    {#each publications as pub}
      <div class="ref-item">
        <div>
          <p class="ref-title">{pub.title}</p>
          <p class="ref-authors">{pub.authors}</p>
          <div class="ref-meta">
            <span class="ref-venue">{pub.venue}</span>
            {#if pub.badge}
              <span class="badge badge-{pub.badge.type}">{pub.badge.label}</span>
            {/if}
            {#each pub.links as link}
              <a class="ref-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} →</a>
            {/each}
          </div>
        </div>
      </div>
    {/each}

    <h3 class="subsection-label">Published abstracts</h3>
    {#each abstracts as ab}
      <div class="ref-item">
        <div>
          <p class="ref-title">{ab.title}</p>
          <p class="ref-authors">{ab.authors}</p>
          <div class="ref-meta">
            <span class="ref-venue">{ab.venue}</span>
            {#each ab.links as link}
              <a class="ref-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} →</a>
            {/each}
          </div>
        </div>
      </div>
    {/each}

    <h3 class="subsection-label">Conference presentations</h3>
    {#each presentations as pres}
      <div class="conf-item">
        <div>
          <p class="ref-title">{pres.title}</p>
          <p class="ref-authors">{pres.authors}</p>
          <p class="ref-venue">{pres.venue}</p>
        </div>
        <div class="conf-badges">
          {#each pres.badges as badge}
            <span class="badge badge-{badge.type}">{badge.label}</span>
          {/each}
        </div>
      </div>
    {/each}

    <h3 class="subsection-label">Awards & grants</h3>
    {#each awards as award}
      <div class="award-item">
        <span class="award-year">{award.year}</span>
        <div>
          <p class="ref-title">{award.title}</p>
          <p class="ref-authors">{award.sub}</p>
        </div>
      </div>
    {/each}
  </section>

  <section id="teaching">
    <h2 class="section-label">Teaching</h2>
    {#each teaching as t}
      <div class="teaching-item">
        <div class="teaching-header">
          <span class="teaching-course">{t.course}</span>
          <span class="teaching-role">{t.role}</span>
        </div>
        <div class="teaching-semesters">{t.semesters}</div>
        <div class="teaching-labs">
          {#each t.labs as lab}
            <span class="lab-tag">{lab}</span>
          {/each}
        </div>
      </div>
    {/each}
  </section>

  <section id="news">
    <h2 class="section-label">News</h2>
    <div class="news-list">
      {#each news as item}
        <div class="news-item">
          <span class="news-date">{item.date}</span>
          <span class="news-text">{item.text}</span>
        </div>
      {/each}
    </div>
  </section>

  <section id="contact">
    <h2 class="section-label">Contact</h2>
    <div class="contact-row">
      <a class="contact-btn" href="/contact">
        <svg viewBox="0 0 512 512" aria-hidden="true"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
        Send a message
      </a>
      <a class="contact-btn" href="https://github.com/MercierLucas" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 496 512" aria-hidden="true"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
        GitHub
      </a>
      <a class="contact-btn" href="https://www.linkedin.com/in/lucas-mercier-899470171/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
        LinkedIn
      </a>
    </div>
  </section>

  <footer>
    <span>© 2025 Lucas Mercier · Montreal, Canada</span>
  </footer>
</div>

<style>
  .page {
    --accent: #2D6A4F;
    font-family: 'DM Sans', sans-serif;
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    margin-bottom: 3rem;
  }

  .nav-name {
    font-family: 'DM Serif Display', serif;
    font-size: 17px;
    letter-spacing: 0.01em;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    font-size: 13px;
    color: var(--color-muted, #666);
    text-decoration: none;
    transition: color 0.15s;
  }

  .nav-links a:hover { color: inherit; }

  .hero {
    display: grid;
    grid-template-columns: 1fr 120px;
    gap: 2rem;
    align-items: start;
    margin-bottom: 3.5rem;
  }

  .hero-avatar {
    width: 120px;
    height: 120px;
    border-radius: 12px;
    background: var(--color-surface, #f5f5f5);
    border: 0.5px solid var(--color-border, #e5e5e5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .avatar-initials {
    font-family: 'DM Serif Display', serif;
    font-size: 36px;
    color: var(--color-muted, #999);
  }

  .hero-name {
    font-family: 'DM Serif Display', serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 8px;
  }

  .hero-role {
    font-size: 14px;
    color: var(--color-muted, #666);
    margin-bottom: 4px;
  }

  .hero-role a {
    color: var(--accent);
    text-decoration: none;
  }

  .hero-role a:hover { text-decoration: underline; }

  .hero-loc {
    font-size: 13px;
    color: var(--color-muted, #999);
    margin-bottom: 1.25rem;
  }

  .hero-bio {
    font-size: 15px;
    line-height: 1.75;
    margin-bottom: 1.25rem;
  }

  .socials {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--color-muted, #666);
    text-decoration: none;
    padding: 4px 10px;
    border: 0.5px solid var(--color-border, #ddd);
    border-radius: 8px;
    transition: background 0.15s, color 0.15s;
  }

  .social-link:hover {
    background: var(--color-surface, #f5f5f5);
    color: inherit;
  }

  .social-link svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
    flex-shrink: 0;
  }

  section { margin-bottom: 3rem; }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.25rem;
    padding-bottom: 8px;
    padding-left: 10px;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    border-left: 2px solid var(--accent);
  }

  .subsection-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-muted, #999);
    margin: 1.75rem 0 0.875rem;
  }

  /* shared ref row */
  .ref-item {
    padding: 8px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
  }

  .ref-item:last-of-type { border-bottom: none; }

  .ref-title {
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 3px;
  }

  .ref-authors {
    font-size: 12px;
    color: var(--color-muted, #666);
    margin-bottom: 4px;
    line-height: 1.4;
  }

  .ref-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .ref-venue {
    font-size: 11px;
    color: var(--color-muted, #999);
  }

  .ref-link {
    font-size: 12px;
    color: var(--accent);
    text-decoration: none;
  }

  .ref-link:hover { text-decoration: underline; }

  /* badges */
  .badge {
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 20px;
  }

  .badge-preprint { background: var(--color-background-warning, #fef3c7); color: var(--color-text-warning, #92400e); }
  .badge-accepted { background: var(--color-background-success, #d1fae5); color: var(--color-text-success, #065f46); }
  .badge-poster   { background: var(--color-background-secondary, #f5f5f5); color: var(--color-text-secondary, #666); }
  .badge-oral     { background: var(--color-background-info, #dbeafe); color: var(--color-text-info, #1e40af); }

  /* conference items */
  .conf-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    padding: 9px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    align-items: start;
  }

  .conf-item:last-child { border-bottom: none; }

  .conf-badges {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    padding-top: 2px;
    flex-shrink: 0;
  }

  /* awards */
  .award-item {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1rem;
    padding: 8px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    align-items: start;
  }

  .award-item:last-child { border-bottom: none; }

  .award-year {
    font-size: 12px;
    color: var(--color-muted, #999);
    padding-top: 2px;
  }

  /* interests */
  .interests { display: flex; flex-direction: column; gap: 10px; }

  .interest-group { display: flex; flex-wrap: wrap; gap: 8px; }

  .interests-divider {
    height: 0.5px;
    background: var(--color-border, #e5e5e5);
    margin: 2px 0;
  }

  .interest-tag {
    font-size: 13px;
    color: var(--color-muted, #555);
    background: var(--color-surface, #f5f5f5);
    padding: 5px 12px;
    border-radius: 20px;
    border: 0.5px solid var(--color-border, #e5e5e5);
  }

  .interest-tag.personal {
    font-size: 12px;
    font-style: italic;
    color: var(--color-muted, #999);
    background: transparent;
  }

  /* teaching */
  .teaching-item {
    padding: 10px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
  }

  .teaching-item:last-child { border-bottom: none; }

  .teaching-header {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }

  .teaching-course { font-size: 14px; font-weight: 500; }

  .teaching-role { font-size: 12px; color: var(--color-muted, #666); }

  .teaching-semesters {
    font-size: 12px;
    color: var(--color-muted, #999);
    margin-bottom: 8px;
  }

  .teaching-labs { display: flex; flex-wrap: wrap; gap: 6px; }

  .lab-tag {
    font-size: 11px;
    color: var(--color-muted, #666);
    background: var(--color-surface, #f5f5f5);
    border: 0.5px solid var(--color-border, #e5e5e5);
    padding: 3px 9px;
    border-radius: 20px;
  }

  /* news */
  .news-list { display: flex; flex-direction: column; }

  .news-item {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    padding: 10px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    align-items: start;
  }

  .news-item:last-child { border-bottom: none; }

  .news-date {
    font-size: 12px;
    color: var(--color-muted, #999);
    padding-top: 2px;
    font-variant-numeric: tabular-nums;
  }

  .news-text { font-size: 14px; line-height: 1.6; }

  /* contact */
  .contact-row { display: flex; flex-wrap: wrap; gap: 10px; }

  .contact-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: inherit;
    text-decoration: none;
    padding: 8px 14px;
    border: 0.5px solid var(--color-border, #ddd);
    border-radius: 8px;
    transition: background 0.15s;
  }

  .contact-btn:hover { background: var(--color-surface, #f5f5f5); }

  .contact-btn svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    flex-shrink: 0;
  }

  footer {
    font-size: 12px;
    color: var(--color-muted, #999);
    padding-top: 2rem;
    border-top: 0.5px solid var(--color-border, #e5e5e5);
  }

  @media (max-width: 540px) {
    .hero { grid-template-columns: 1fr; }
    .hero-avatar { display: none; }
    nav { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .nav-links { flex-wrap: wrap; gap: 1rem; }
    .conf-item { grid-template-columns: 1fr; }
    .conf-badges { flex-direction: row; align-items: flex-start; }
  }
</style>