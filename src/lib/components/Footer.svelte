
<script>
  // import { onMount } from 'svelte';
  import { page } from '$app/state';

</script>

<footer>
    <p>©2026 Lucas Mercier</p>
    <p>Made with <a href="https://kit.svelte.dev" class="highlight" target="_blank">Svelte kit</a></p>

    {#if !page.url.host.includes("localhost")}
      <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fwww.lucasmercier.me%2F" target="_blank">
        <img 
          src="/api/badge" 
          alt="visitor badge"
        />
      </a>
    {/if}

  </footer>

<style>
  footer {
    font-size: 12px;
    color: var(--color-muted, #999);
    padding-top: 2rem;
    border-top: 0.5px solid var(--color-border, #e5e5e5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  footer p {
    margin: 0;
  }
</style>