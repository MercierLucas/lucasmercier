<script>
    import { RecipesTags } from "$lib/recipes/recipes";
    // import { onMount } from "$modules/svelte/internal";
    
    export let tag;

    let icon = "";
    let color = "white";

    let style = RecipesTags[tag];
    if (style)
    {
        icon = style.icon;
        color = style.color;
    }


</script>



<div style="background-color: {color}; color: white">
    <i class={icon}></i>
    <span>{tag}</span>
</div>

<style>

    div
    {
        /* border: 1px solid red; */
        display: flex;
        border-radius: 1rem;
        /* padding: 5px; */
        padding: 5px;
        margin: 5px;
    }
    i
    {
        padding-left: 1rem;
    }

    span
    {
        padding-left: 1rem;
        width: 100;
    }

</style>