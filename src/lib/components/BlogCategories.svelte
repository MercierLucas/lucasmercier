<script lang="ts">
    import { Categories } from '$lib/types';

    export let selectedCategorie: string = "";

    let categories = Object.keys(Categories);
</script>


<div id="tag-list">
    {#each categories as categorie}

        {#if categorie == selectedCategorie}
            <span><a class="tag highlight" href={"/blog/categories/"+categorie}>#{categorie}</a></span>
        {:else}
            <span><a class="tag secondary" href={"/blog/categories/"+categorie}>#{categorie}</a></span>
        {/if}

        
    {/each}
</div>

<style>
    #tag-list
    {
        display: flex;
        gap: 1rem;
        padding-bottom: 2rem;
    }
</style>
