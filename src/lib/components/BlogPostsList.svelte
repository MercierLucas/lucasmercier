<script lang="ts">
    import type { Post } from "$lib/types";

    export let posts: Post[];
</script>


<div id="post_container">
    {#each posts as post}
        <div class="card">
            <h2>
                <a href={"/blog/"+post.slug}>{post.title}</a>
            </h2>
            <p>{post.date}</p>
            <p>{post.tldr}</p>
            <div class="tag-list">
                {#each post.categories as categorie}
                    <span class="tag secondary"><a href={"/blog/categories/"+categorie}>#{categorie}</a></span>
                {/each}
            </div>

        </div>
    {/each}
</div>

<style>
    .tag-list
    {
        display: flex;
        gap: 1rem;
    }
    #post_container
    {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }

    a
    {
        text-decoration: none;
        color: inherit;
    }
</style>
