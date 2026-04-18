<script lang="ts">
    import type { Publication } from "$lib/publications";

    export let pub: Publication;
</script>

<div class="ref-item" class:has-image={pub.image}>
    {#if pub.image}
        <div><img src={pub.image} alt=""></div>
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
        <div class="ref-meta">
            <span class="ref-loc">{pub.loc}</span>
            {#if pub.badges}
                {#each pub.badges as badge}
                    <span class="badge badge-{badge.type}">{badge.label}</span>
                {/each}
            {/if}
            {#each pub.links as link}
                {#if link.label.includes('DOI')}
                    <a class="social-link" href={link.href} target="_blank" rel="noopener noreferrer">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DOI</title><path d="M24 12c0 6.633-5.367 12-12 12S0 18.633 0 12 5.367 0 12 0s12 5.367 12 12ZM7.588 6.097v4.471c-.663-.925-1.403-1.373-2.406-1.373-2.046 0-3.244 1.441-3.244 3.847 0 2.357 1.325 3.848 3.166 3.848 1.12 0 1.88-.4 2.445-1.325l-.039 1.042h2.045V6.097Zm-1.763 8.942c-1.12 0-1.802-.76-1.802-2.045 0-1.325.682-2.085 1.802-2.085 1.081 0 1.802.76 1.802 2.085 0 1.285-.672 2.045-1.802 2.045Zm12.253-1.948c0-2.172-1.578-3.789-3.906-3.789-2.328 0-3.945 1.695-3.945 3.789 0 2.133 1.578 3.789 3.945 3.789 2.289 0 3.906-1.656 3.906-3.789Zm-2.094-.01c0 1.14-.711 1.89-1.851 1.89-1.139 0-1.851-.75-1.851-1.89 0-1.139.712-1.89 1.851-1.89 1.149 0 1.861.751 1.851 1.89Zm2.6-5.795c0 .633.517 1.227 1.189 1.227.633 0 1.188-.555 1.188-1.227a1.17 1.17 0 0 0-1.188-1.189c-.672 0-1.179.556-1.189 1.189Zm.166 9.341h2.055V9.604H18.75Z"/></svg>
                        DOI
                    </a>
                {:else}
                    <a class="ref-link" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} →</a>
                {/if}
            {/each}
        </div>
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
  align-items: start;
}


.ref-item.has-image {
  grid-template-columns: auto 1fr; /* only when image exists */
}



img {
  max-width: 150px;
  width: 100%;
  height: auto;
  display: block;
  margin-top: 2px; /* fine-tune vertical alignment with title */
}

  .ref-item:last-of-type { border-bottom: none; }

  .ref-title {
    margin-top: 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 3px;
  }

    .authorship
    {
        font-weight: bold;
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

</style>