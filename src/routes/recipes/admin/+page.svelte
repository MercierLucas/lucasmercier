<script lang="ts">


	// let name = '';
	// let ingredientsText = '';
	// let stepsText = '';
	// let tagsText = '';
	// let toolsText = '';
	// let rating = 5;
	// let time = 0;
	// let portions = 1;
	// let image = '';

    let numIngredients = 1;

    let recipeID = null;
    let name = '';
	let ingredients = null;
	let stepsText = '';
	let tagsText = '';
	let toolsText = '';
	let rating = 0;
	let preptime = 0;
	let cooktime = 0;
	let portions = 1;
	let image = '';
    let source = '';
    let calories = '';
    let proteins = '';
    let fats = '';
    let carbs = '';


    export let data;

    let mode = "add";
    let actionBtn = "Add recipe"

    console.log(data.recipes.length)

    function switchToEdit(recipe)
    {
        recipeID = recipe.id;
        console.log(recipe)
        mode = "edit"
        name = recipe.name;
        portions = recipe.portion;
        stepsText = recipe.steps;
        rating = recipe.rating;
        preptime = recipe.preptime;
        cooktime = recipe.cooktime;
        tagsText = recipe.tags;
        numIngredients = 0;
        calories = recipe.calories;
        carbs = recipe.carbs;
        fats = recipe.fats;
        proteins = recipe.proteins;
        portions = recipe.portions;
        image = recipe.image;
        source = recipe.source;

        console.log("Calories:", recipe.calories)

        ingredients = JSON.parse(recipe.ingredients);
        console.log(ingredients)

        actionBtn = "Update recipe "+name
    }


</script>

<main>
    <div>
        <div class="recipe-item banner">
            <span>ID</span>
            <span>Name</span>
            <span>Ingrédients</span>
            <span>Tags</span>
            <span>Actions</span>
        </div>
        {#each data.recipes as recipe}
            <div class="recipe-item">
                <div>{recipe.id}</div>
                <div>{recipe.name}</div>
                <div>{recipe.ingredients.length}</div>
                <div>{recipe.tags}</div>
                <div class="actions-btns">
                    <div><button type="button" class="clear-btn" on:click={()=>switchToEdit(recipe)}>✏️ edit</button></div>
                    <div>
                        <form method="POST" action="?/deleteRecipe" on:submit={(e) => {
                            if (!confirm('Are you sure you want to delete this recipe?')) {
                                e.preventDefault();
                            }
                        }}>
                            <input type="hidden" name="id" value="{recipe.id}" />
                            <button type="submit" name="delete" value="1" class="clear-btn">🗑️ Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <h1 class="text-2xl font-bold mb-4">{actionBtn}</h1>

    <form action="?/{mode}" method="POST">
        <div class="form-item">
            <div >Name</div>
            <input bind:value={name} name="name" required />
        </div>

        <div class="form-item">
            <div >Ingredients</div>

            <div>
                <div id="ingredients-form">
                    {#if mode == "add"}
                        {#each { length: numIngredients } as _, idx}
                            <div class="inline-grid">
                                <input placeholder="Name" name={`ingredient[${idx}]_name`}/>
                                <input placeholder="quantity" name={`ingredient[${idx}]_qty`}/>
                                <input placeholder="Unit" name={`ingredient[${idx}]_unit`}/>
                            </div>
                        {/each}
                    {:else}
                        <input type="hidden" name="id" value={recipeID} />
                        {#each ingredients as ing, idx}
                            <div class="inline-grid">
                                <input placeholder="Name" name={`ingredient[${idx}]_name`} value={ing.name}/>
                                <input placeholder="quantity" name={`ingredient[${idx}]_qty`} value={ing.quantity}/>
                                <input placeholder="Unit" name={`ingredient[${idx}]_unit`} value={ing.unit}/>
                            </div>
                        {/each}
                        {#each { length: numIngredients } as _, idx}
                            <div class="inline-grid">
                                <input placeholder="Name" name={`ingredient[${idx+ingredients.length}]_name`}/>
                                <input placeholder="quantity" name={`ingredient[${idx+ingredients.length}]_qty`}/>
                                <input placeholder="Unit" name={`ingredient[${idx+ingredients.length}]_unit`}/>
                            </div>
                        {/each}
                    {/if}
                </div>
                <button type="button" on:click={()=>numIngredients++}>+</button>
            </div>

            <!-- <textarea bind:value={ingredientsText} name="ingredients" /> -->
        </div>

        <div class="form-item">
            <div >Steps (one per line)</div>
            <textarea bind:value={stepsText} name="steps"  />
        </div>

        <div class="form-item">
            <div >Tags (comma-separated)</div>
            <input bind:value={tagsText} name="tags"  />
        </div>

        <div class="form-item">
            <div >Tools (comma-separated)</div>
            <input bind:value={toolsText} name="tools" />
        </div>

        <div class="form-item">
            <div >Rating</div>
            <input type="number" bind:value={rating} min="1" max="5" name="rating" />
        </div>

        <div class="form-item">
            <div >Prep time (minutes)</div>
            <input type="number" bind:value={preptime} min="0" name="preptime"/>
        </div>

        <div class="form-item">
            <div >Cooking time (minutes)</div>
            <input type="number" bind:value={cooktime} min="0" name="cookingTime"  />
        </div>

        <div class="form-item">
            <div >Portions</div>
            <input type="number" bind:value={portions} min="1" name="portions"/>
        </div>

        <div class="form-item">
            <div >Image (filename or URL)</div>
            <input bind:value={image} name="image"/>
        </div>

        <div class="form-item">
            <div >Source</div>
            <input bind:value={source} name="source"/>
        </div>

        <div class="form-item">
            <div >Macros</div>
            <div class="inline-grid">
                <input bind:value={calories} name="calories" placeholder="Calories"/>
                <input bind:value={proteins} name="proteins" placeholder="Proteins"/>
                <input bind:value={carbs} name="carbs" placeholder="Carbs"/>
                <input bind:value={fats} name="fats" placeholder="Fat"/>
            </div>
        </div>

        <button type="submit">{actionBtn}</button>
    </form>
</main>



<style>

    .actions-btns
    {
        display: flex;
    }
    .banner
    {
        background-color: #075526;
        border-radius: 2px;
        margin-bottom: 1rem;
        color:white;
        padding: 5px;
        display: grid;
        /* place-items: center; */
    }

    .recipe-item
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }

    .inline-grid
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        gap:5px;
        margin-bottom: 5px;
    }

    .clear-btn
    {
        background: none;
        border: none;
    }

    .clear-btn:hover
    {
        cursor: pointer;
    }


    form
    {
        display: grid;
        gap: 1rem;
    }

    .form-item
    {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

</style>