<script lang="ts">
  import { page } from '$app/stores';
  import { projects } from '$lib/projects';
  import { onMount } from 'svelte';

  $: project = projects.find(p => p.slug === $page.params.slug);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'motivation', label: 'Motivation' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'impact', label: 'Impact' },
  ];

  let activeSection = 'overview';

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>{project?.name ?? 'Project'} · Lucas Mercier</title>
</svelte:head>

{#if project}
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-inner">
        <div class="sidebar-section">
          <p class="sidebar-heading">Projects</p>
          {#each projects as p}
            <a
              class="sidebar-project"
              class:active={p.slug === project.slug}
              href="/projects/{p.slug}"
            >
              {p.name}
            </a>
          {/each}
        </div>

        <div class="sidebar-divider"></div>

        <div class="sidebar-section">
          <p class="sidebar-heading">On this page</p>
          {#each sections as section}
            <a
              class="sidebar-link"
              class:active={activeSection === section.id}
              href="#{section.id}"
            >
              {section.label}
            </a>
          {/each}
        </div>
      </div>
    </aside>

    <main class="content">
      <div class="project-header">
        <a class="back-link" href="/projects">← Projects</a>
        <h1 class="project-name" id="overview">{project.name}</h1>
        <p class="project-status">{project.status}</p>
        <div class="stack-tags">
          {#each project.stack as tech}
            <span class="stack-tag">{tech}</span>
          {/each}
        </div>
      </div>

      <p class="project-summary">{project.summary}</p>

      <div class="diagram-slot">
        <p class="diagram-placeholder">Architecture diagram will be here (at some point)</p>
      </div>

      <section id="motivation">
        <h2 class="section-label">Motivation</h2>
        <p class="section-text">{project.motivation}</p>
      </section>

      <section id="highlights">
        <h2 class="section-label">Highlights</h2>
        <div class="highlights">
          {#each project.highlights as h}
            <div class="highlight-item">
              <p class="highlight-title">{h.title}</p>
              <p class="highlight-desc">{h.desc}</p>
            </div>
          {/each}
        </div>
      </section>

      <section id="impact">
        <h2 class="section-label">Impact</h2>
        <div class="impact-block">
          <p class="impact-text">{project.impact}</p>
        </div>
      </section>
    </main>
  </div>
{:else}
  <div class="not-found">
    <p>Project not found.</p>
    <a href="/projects">← Back to projects</a>
  </div>
{/if}

<style>
  .layout {
    --accent: #2D6A4F;
    font-family: 'DM Sans', sans-serif;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 3rem;
    max-width: 1020px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    align-items: start;
  }

  .sidebar {
    position: sticky;
    top: 2rem;
  }

  .sidebar-inner {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .sidebar-section {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0.75rem 0;
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

  .sidebar-divider {
    height: 0.5px;
    background: var(--color-border, #e5e5e5);
  }

  .sidebar-project {
    font-size: 13px;
    color: var(--color-muted, #666);
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 6px;
    border-left: 2px solid transparent;
    line-height: 1.4;
    transition: color 0.15s, background 0.15s;
  }

  .sidebar-project:hover {
    color: var(--color-text-primary);
    background: var(--color-surface, #f5f5f5);
  }

  .sidebar-project.active {
    color: var(--accent);
    border-left-color: var(--accent);
    background: var(--color-surface, #f5f5f5);
  }

  .sidebar-link {
    font-size: 12px;
    color: var(--color-muted, #999);
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 6px;
    border-left: 2px solid transparent;
    transition: color 0.15s, background 0.15s;
  }

  .sidebar-link:hover {
    color: var(--color-text-primary);
  }

  .sidebar-link.active {
    color: var(--accent);
    border-left-color: var(--accent);
  }

  .content {
    min-width: 0;
  }

  .back-link {
    display: inline-block;
    font-size: 13px;
    color: var(--color-muted, #999);
    text-decoration: none;
    margin-bottom: 1.25rem;
    transition: color 0.15s;
  }

  .back-link:hover {
    color: var(--color-text-primary);
  }

  .project-name {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 6px;
  }

  .project-status {
    font-size: 13px;
    color: var(--color-muted, #999);
    margin-bottom: 1rem;
  }

  .stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 1.75rem;
  }

  .stack-tag {
    font-size: 11px;
    color: var(--accent);
    border: 0.5px solid var(--accent);
    padding: 3px 9px;
    border-radius: 20px;
    opacity: 0.8;
  }

  .project-summary {
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
  }

  .diagram-slot {
    margin-bottom: 2rem;
    padding: 2rem;
    border: 0.5px dashed var(--color-border, #ddd);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }

  .diagram-placeholder {
    font-size: 13px;
    color: var(--color-muted, #bbb);
    font-style: italic;
  }

  section {
    margin-bottom: 2.5rem;
    scroll-margin-top: 2rem;
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1rem;
    padding-bottom: 8px;
    padding-left: 10px;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
    border-left: 2px solid var(--accent);
  }

  .section-text {
    font-size: 15px;
    line-height: 1.75;
    color: var(--color-text-primary);
  }

  .highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--color-border, #e5e5e5);
    border: 0.5px solid var(--color-border, #e5e5e5);
    border-radius: 12px;
    overflow: hidden;
  }

  .highlight-item {
    background: var(--color-background, #fff);
    padding: 1rem 1.25rem;
  }

  .highlight-title {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .highlight-desc {
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-muted, #666);
  }

  .impact-block {
    border-left: 2px solid var(--accent);
    padding: 0.75rem 1rem;
    background: var(--color-surface, #f9f9f9);
    border-radius: 0 8px 8px 0;
  }

  .impact-text {
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-muted, #666);
    font-style: italic;
  }

  .not-found {
    padding: 4rem 1.5rem;
    text-align: center;
    font-size: 14px;
    color: var(--color-muted, #999);
  }

  .not-found a {
    color: var(--accent);
    text-decoration: none;
  }

  @media (max-width: 700px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
      border-bottom: 0.5px solid var(--color-border, #e5e5e5);
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .highlights {
      grid-template-columns: 1fr;
    }
  }
</style>