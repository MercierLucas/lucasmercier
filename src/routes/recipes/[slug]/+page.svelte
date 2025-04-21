<script lang="ts">
    import RecipeTag from '$lib/components/RecipeTag.svelte';

    export let data;

    
    let scalingFactor = 1/data.recipe.portions;
    let portions = data.recipe.portions;
    
    const images = import.meta.glob('/src/lib/assets/images/recipes/*', {
        eager: true,
        as: 'url'
    });

    const getImage = (filename:string) => Object.entries(images).find(([path]) => path.endsWith(filename))?.[1];

    function updateQuantities()
    {
        console.log(scalingFactor)
    }

</script>



<main>
    <div>
        <p><a href="/recipes" class="highlight">← Back</a></p>
        <div class="title">
            <h1>{data.recipe.name}</h1>
            <div class="portions">
                <input type="number" bind:value={portions} on:input={updateQuantities}>
                <i class="fa-regular fa-user"></i>
            </div>
        </div>
        <div class="banner">
            <span><i class="fa-solid fa-utensils"></i> {data.recipe.preptime} min</span>
            <span><i class="fa-solid fa-fire-burner"></i> {data.recipe.preptime} min</span>
        </div>
    </div>
    <div id="container">
        <div>
            <div class="img-holder"><img src={getImage(data.recipe.image)} alt="pizza" class="logo"></div>
            
            <div id="ingredients">
                <h3>Ingrédients</h3>
                <div id="ingredients-content">
                    {#each data.recipe.ingredients as ing}
                        <div>
                            <p>{ing.name}</p>
                            <p class="secondary">{(ing.quantity * scalingFactor * portions).toFixed(1)} {ing.unit}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    
        <div id="content">
        
            <div id="steps">
                {#if data.recipe.source}
                    <p><i><a href={data.recipe.source} target="_blank" class="highlight">Inspiré de cette recette</a></i></p>
                {/if}
                <h3>Etapes</h3>
                <div id="steps-content">
                    {#each data.recipe.steps as step, index}
                        <div>
                            <p class="secondary">Etape {index+1}</p>
                            <p>{step}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="banner">
        <span>Macros par portion</span>
        <span><i class="fa-solid fa-fire"></i> {data.recipe.calories} kcals</span>
        <span>{data.recipe.proteins}g protéines</span>
        <span>{data.recipe.carbs}g glucides</span>
        <span>{data.recipe.fats}g lipides</span>
    </div>

</main>


<style>

    #container
    {
        width: 100%;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;
    }

    .title h1 {
        margin: 0;
        font-size: 1.5rem;
        flex: 1;
    }

    .portions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .portions input[type="number"] {
        width: 4rem;
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .title h1
    {
        margin: 0;
    }

    .img-holder
    {
        text-align: center;
    }

    .logo
    {
        width: 50%;
        /* border-radius: 50%; */
    }

    #content
    {
        text-align: center;
    }

    .secondary
    {
        color: var(--color-text-secondary);
    }

    #steps-content
    {
        text-align: left;
    }

    .banner
    {
        background-color: #075526;
        color:white;
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        place-items: center;
    }

    #ingredients
    {
        background-color: var(--color-card);
    }

    #ingredients-content
    {
        text-align: center;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

</style>