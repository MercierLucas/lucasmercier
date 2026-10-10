<script lang="ts">
    import type { Publication } from "$lib/publications";

    export let pub: Publication;
</script>

<div class="ref-item" class:has-image={pub.image}>
    {#if pub.image}
        <div>
          <img src={pub.image} alt="">
          <!-- {#if pub.badges}
            <div class="overlay-badge">
              <div class="overlay-badge-item">{pub?.badges[0].type}</div>  
            </div>
          {/if} -->
        </div>
    {/if}
    <!-- <div>
        <p>Test</p>
    </div> -->
    <div>
        <p class="ref-title">{pub.title}</p>
        <p class="ref-authors">
            {#each  pub.authors as auth}
                {#if auth.includes('Mercier')}
                    <span class="authorship">{auth}, </span>
                {:else}
                    <span>{auth} ,</span>
                {/if}
            {/each}
        </p>
        <div><span class="ref-loc">{pub.loc}</span></div>
        <div class="ref-meta">
            {#if pub.badges}
                {#each pub.badges as badge}
                    <span class="badge badge-{badge.type}">{badge.label}</span>
                {/each}
            {/if}
            {#each pub.links as link}
                {#if link.label.includes('DOI')}
                    <a class="social-link" href={link.href} target="_blank" rel="noopener noreferrer">
                        PAPER
                    </a>
                {:else}
                    <a class="ref-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} →</a>
                {/if}
            {/each}
        </div>
        {#if pub.description}
          <div class="description">{pub.description}</div>
        {/if}
    </div>
</div>

<style>
/* .ref-item {
    padding: 8px 0;
    border-bottom: 0.5px solid var(--color-border, #e5e5e5);
  } */

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


.ref-item {
  display: grid;
  grid-template-columns: 1fr; /* default: no image */
  gap: 1rem;
  padding: 9px 0;
  border-bottom: 0.5px solid var(--color-border, #e5e5e5);
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

}


.ref-item.has-image {
  grid-template-columns: auto 1fr; /* only when image exists */
}


.overlay-badge-item
{
  background: red;
  width: 100%;
  /* position: absolute; */
}

.description{
  margin-top: 1rem;
  font-size: .9rem;
}



img {
  max-width: 300px;
  width: 100%;
  height: auto;
  display: block;
  margin-top: 2px; /* fine-tune vertical alignment with title */
}

  .ref-item:last-of-type { border-bottom: none; }

  .ref-title {
    margin-top: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 3px;
  }

    .authorship
    {
        font-weight: bold;
    }

  .ref-authors {
    font-size: 1rem;
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
    font-size: .8rem;
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
  .badge-journal { background: var(--color-background-success, #d1fae5); color: var(--color-text-success, #065f46); }
  .badge-poster   { background: var(--color-background-secondary, #f5f5f5); color: var(--color-text-secondary, #666); }
  .badge-oral     { background: var(--color-background-info, #dbeafe); color: var(--color-text-info, #1e40af); }

</style>