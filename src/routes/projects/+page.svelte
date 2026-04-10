<script lang="ts">
  import { projects } from '$lib/projects';
</script>

<svelte:head>
  <title>Projects · Lucas Mercier</title>
  <meta name="description" content="Technical projects by Lucas Mercier." />
</svelte:head>

<div class="page">
  <h1 class="page-title">Projects</h1>
  <p class="page-sub">Side work, research tools, and technical explorations.</p>

  <div class="project-list">
    {#each projects as project}
      <a class="project-card" href="/projects/{project.slug}">
        <div class="card-main">
          <p class="card-name">{project.name}</p>
          <p class="card-desc">{project.shortDesc}</p>
          <div class="card-stack">
            {#each project.stack as tech}
              <span class="stack-tag">{tech}</span>
            {/each}
          </div>
        </div>
        <div class="card-meta">
          <span class="card-status">{project.status}</span>
          <span class="card-arrow">→</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>


  .page-title {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .page-sub {
    font-size: 14px;
    color: var(--color-muted, #999);
    margin-bottom: 2.5rem;
  }

  .project-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--color-border, #e5e5e5);
    border: 0.5px solid var(--color-border, #e5e5e5);
    border-radius: 12px;
    overflow: hidden;
  }

  .project-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    background: var(--color-background, #fff);
    padding: 1.25rem 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: background 0.15s;
  }

  .project-card:hover {
    background: var(--color-surface, #f9f9f9);
  }

  .project-card:hover .card-arrow {
    transform: translateX(3px);
  }

  .card-main {
    flex: 1;
    min-width: 0;
  }

  .card-name {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--color-text-primary);
  }

  .card-desc {
    font-size: 13px;
    color: var(--color-muted, #666);
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .stack-tag {
    font-size: 11px;
    color: var(--accent);
    border: 0.5px solid var(--accent);
    padding: 2px 8px;
    border-radius: 20px;
    opacity: 0.8;
  }

  .card-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    flex-shrink: 0;
  }

  .card-status {
    font-size: 11px;
    color: var(--color-muted, #999);
    white-space: nowrap;
  }

  .card-arrow {
    font-size: 16px;
    color: var(--color-muted, #ccc);
    transition: transform 0.15s;
  }

  @media (max-width: 540px) {
    .project-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .card-meta {
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
  }
</style>