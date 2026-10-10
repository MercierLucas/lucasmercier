<script lang="ts">
  import { onMount } from 'svelte';

  import { publications, abstracts, presentations } from '$lib/publications';
  import Publication from '$lib/components/Publication.svelte';
  import { news } from '$lib/news';
  import { teaching, awards } from '$lib/resume';

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


</script>

<svelte:head>
  <title>Lucas Mercier</title>
  <meta name="description" content="PhD student at LIO, ÉTS Montréal. Research in computer vision, human pose estimation and biomechanics." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>


<div class="layout">
    <aside class="sidebar">
      <div class="sidebar-inner">
        <div class="hero-avatar" aria-hidden="true">
          <img src="/images/profile.jpg" alt="Lucas Mercier" />
          <!-- <span class="avatar-initials">LM</span> -->
        </div>
        <div>Lucas Mercier</div>
        <div>Montreal / Paris</div>
        <p>PhD student at  ÉTS Montréal </p>
        <div>Research topics includes: Computer vision, 3D pose estimation, Markerless Gait analysis</div>

        <div class="socials">
          <a class="social-link" href="https://scholar.google.com/citations?user=vIxSajkAAAAJ&hl=fr" target="_blank" rel="noopener noreferrer">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
              Google scholar
            </a>
          <a class="social-link" href="https://www.linkedin.com/in/lucas-mercier-899470171/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              LinkedIn
          </a>
          <a class="social-link" href="/contact">
            <svg viewBox="0 0 512 512" aria-hidden="true"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
            Send a message
        </a>
        </div>

      </div>
  </aside>

  <div class="page">

    <div class="bio">
          I am a PhD student at the LIO laboratory (Laboratoire d'innovation ouverte en technologies de la santé) at ÉTS Montréal,
          working at the intersection of computer vision and biomechanics. My research focuses on human pose
          estimation and its application to markerless motion analysis.
          I also developed some tools, like a <a href="projects/pose-estimation-framework" class="highlight">pose estimation framework</a> to address the reproducibility problem deep-learning tasks.

    </div>

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

  </div>

</div>


<style>
  .layout {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 3rem;
    max-width: 1400px;
    margin: 0 auto;
    align-items: start;
    /* height: 100vh; */
  }

  .sidebar {
    position: sticky;
    /* border: 1px solid red; */
    /* top: 5rem; */
    /* padding-top: 2rem; */
  }

  .sidebar-inner {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
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
    max-width: 175px; /* adjust to your liking */
    min-width: 75px;
    height: auto;
    border-radius: 50%; /* optional: makes it a circle */
    display: block;
  }

  .socials {
    display: flex;
    font-size: 1rem;
    gap: 8px;
    flex-wrap: wrap;
    align-items: left;
  }

  .social-link svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
    flex-shrink: 0;
  }
  .social-link {
    display: flex;
    align-items: center;
    gap: 5px;
    /* font-size: 12px; */
    color: var(--color-muted, #666);
    text-decoration: none;
    padding: 4px 10px;
    /* border: 0.5px solid var(--color-border, #ddd); */
    border-radius: 8px;
    transition: background 0.15s, color 0.15s;
  }

  .social-link:hover {
    background: var(--color-surface, #f5f5f5);
    color: inherit;
  }


  section {
    margin-bottom: 3rem;
    margin-top: 2rem;
    scroll-margin-top: 2rem;
  }

  .section-label {
    font-size: 1.2rem;
    /* font-weight: 500; */
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.25rem;
    padding-bottom: 8px;
    /* padding-left: 10px; */
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    font-family: "Montserrat", sans-serif;

    /* border-left: 2px solid var(--accent); */
  }

  .subsection-label {
    font-size: 1rem;
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

  @media (max-width: 700px) {
    .layout { grid-template-columns: 1fr; }
    /* .sidebar { display: none; } */
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