<script lang="ts">
    import RecipeTag from '$lib/components/RecipeTag.svelte';
	export let data;

    let query = "";

    const images = import.meta.glob('/src/lib/assets/images/recipes/*', {
        eager: true,
        as: 'url'
    });

    console.log(data.recipes[0].tags.some)

    const getImage = (filename:string) => Object.entries(images).find(([path]) => path.endsWith(filename))?.[1];

    $: filtered = data.recipes.filter(recipe => {
        const q = query.toLowerCase();

        return (
            recipe.name.toLowerCase().includes(q) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q)) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(q))
        );
    });

    // const localImageURI = src;
</script>

<main>
    <div id="searchbar">
        <input
            type="text"
            placeholder="Rechercher par ingrédients ou tags (e.g. tomate, végé...)"
            bind:value={query}
            class="search-input"
        />

    </div>

    
    {#if filtered.length > 0}
        <div id="recipes_container">
            {#each filtered as rec}
                <div class="card recipe-item">
                    <img src={getImage(rec.image)} alt="logo" class="logo">
                    <div class="content">
                        <div>
                            <a href={"/recipes/"+rec.id}>{rec.name}</a>
                        </div>
                        <div class="stars">
                            {#each Array(5) as _, i}
                                <i class={i < rec.rating ? 'fas fa-star' : 'far fa-star'}></i>
                            {/each}
                        </div>
                        <div>
                            <span><i class="fa-solid fa-utensils"></i> {rec.prepTime} min</span>
                            <span><i class="fa-solid fa-fire-burner"></i> {rec.prepTime} min</span>

                        </div>
                        <div class="tags">
                            {#each rec.tags as tag}
                                <div><RecipeTag tag={tag}/></div>
                            {/each}
                        </div>

                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <p>No matching recipes 😢</p>
    {/if}
</main>

<style>
    .logo
    {
        width: 100%;
        border-radius: 50%;
        transform: translateY(-50px);
    }

    #searchbar
    {
        padding-bottom: 3rem;
    }

    #recipes_container
    {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    }

    .content
    {
        transform: translateY(-40px);
    }

    .recipe-item
    {
        text-align: center;
    }

    .stars {
        display: inline-flex;
        gap: 2px;
    }

    .stars i {
        color: #ccc; /* default gray */
    }

    .stars i.fas {
        color: #f5a623; /* yellow for filled stars */
    }

    a
    {
        text-decoration: none;
        color: inherit;
    }

    .search-input {
        padding: 8px;
        font-size: 1rem;
        margin-bottom: 16px;
        width: 100%;
        /* max-width: 300px; */
        border: 1px solid #ccc;
        border-radius: 8px;
    }

</style>