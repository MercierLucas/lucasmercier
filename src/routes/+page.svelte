<script lang="ts">
  import { onMount } from 'svelte';

  import { publications, abstracts, presentations } from '$lib/publications';
  import Publication from '$lib/components/Publication.svelte';
  import { news } from '$lib/news';
  import { a } from '$lib/mdsvex.svelte';

  const sections = [
    { id: 'research', label: 'Research interests' },
    { id: 'publications', label: 'Publications' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  let activeSection = 'research';

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection = entry.target.id;
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  });

  const researchInterests = [
    'Computer vision',
    'Human pose estimation',
    'Biomechanics',
    'Markerless motion analysis',
    'Deep learning',
  ];

  const personalInterests = [];



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



</script>

<svelte:head>
  <title>Lucas Mercier</title>
  <meta name="description" content="PhD student at LIO, ÉTS Montréal. Research in computer vision, human pose estimation and biomechanics." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-inner">
      <p class="sidebar-heading">On this page</p>
      {#each sections as s}
        <a class="sidebar-link" class:active={activeSection === s.id} href="#{s.id}">{s.label}</a>
      {/each}
    </div>
  </aside>

  <div class="page">

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
          I am a PhD student at the LIO laboratory (Laboratoire d'innovation ouverte en technologies de la santé) at ÉTS Montréal,
          working at the intersection of computer vision and biomechanics. My research focuses on human pose
          estimation and its application to markerless motion analysis.
          I also developed some tools, like a <a href="projects/pose-estimation-framework" class="highlight">pose estimation framework</a> to address the reproducibility problem deep-learning tasks.
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
          <a class="social-link" href="https://scholar.google.com/citations?user=vIxSajkAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
            Google scholar
          </a>
          <a class="social-link" href="https://www.researchgate.net/profile/Lucas-Mercier" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/></svg>
            ResearchGate
          </a>
        </div>
      </div>
      <div class="hero-avatar" aria-hidden="true">
        <img src="/images/profile.jpg" alt="Lucas Mercier" />
        <!-- <span class="avatar-initials">LM</span> -->
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
      </div>
    </section>

    <section id="publications">
      <h2 class="section-label">Publications</h2>
      {#each publications as pub}
        <Publication pub={pub}/>
      {/each}

      <h3 class="subsection-label">Published abstracts</h3>
      {#each abstracts as ab}
        <Publication pub={ab}/>
      {/each}

      <h3 class="subsection-label">Conference presentations</h3>
      {#each presentations as pres}
        <Publication pub={pres}/>
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
            <span class="news-text">{@html item.text}</span>
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

    <!-- <footer>
      <span>© 2025 Lucas Mercier · Montreal, Canada</span>
    </footer> -->

  </div>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 3rem;
    max-width: 1020px;
    margin: 0 auto;
    align-items: start;
  }

  .sidebar {
    position: sticky;
    top: 5rem;
    padding-top: 2rem;
  }

  .sidebar-inner {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sidebar-heading {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted, #999);
    margin-bottom: 6px;
    padding-left: 10px;
  }

  .sidebar-link {
    font-size: 12px;
    color: var(--color-muted, #999);
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 6px;
    border-left: 2px solid transparent;
    transition: color 0.15s;
  }

  .sidebar-link:hover { color: var(--color-text-primary, inherit); }

  .sidebar-link.active {
    color: var(--accent);
    border-left-color: var(--accent);
  }



  /* .page {
    min-width: 0;
    padding: 2rem 1.5rem 4rem 0;
  } */

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
    width: 240px;
    height: 240px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }


  .hero-avatar img {
    width: 100%;
    max-width: 200px; /* adjust to your liking */
    height: auto;
    border-radius: 50%; /* optional: makes it a circle */
    display: block;
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

  section {
    margin-bottom: 3rem;
    scroll-margin-top: 2rem;
  }

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

  .ref-loc {
    font-size: 11px;
    color: var(--color-muted, #999);
  }

  .ref-link {
    font-size: 12px;
    color: var(--accent);
    text-decoration: none;
  }

  .ref-link:hover { text-decoration: underline; }

  .badge {
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 20px;
  }

  .badge-preprint { background: var(--color-background-warning, #fef3c7); color: var(--color-text-warning, #92400e); }
  .badge-accepted { background: var(--color-background-success, #d1fae5); color: var(--color-text-success, #065f46); }
  .badge-poster   { background: var(--color-background-secondary, #f5f5f5); color: var(--color-text-secondary, #666); }
  .badge-oral     { background: var(--color-background-info, #dbeafe); color: var(--color-text-info, #1e40af); }

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

  @media (max-width: 700px) {
    .layout { grid-template-columns: 1fr; }
    .sidebar { display: none; }
    .page { padding: 2rem 1.5rem 4rem; }
  }

  @media (max-width: 540px) {
    .hero { grid-template-columns: 1fr; }
    .hero-avatar { max-width: 150px;}
    nav { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .nav-links { flex-wrap: wrap; gap: 1rem; }
    .conf-item { grid-template-columns: 1fr; }
    .conf-badges { flex-direction: row; align-items: flex-start; }
  }
</style>