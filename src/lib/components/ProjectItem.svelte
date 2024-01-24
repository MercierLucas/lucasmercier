<script lang="ts">
    import github from "$lib/assets/images/github.svg"
    import t from "$lib/trad/translations";

    export let title: string;
    export let imageURI: string;
    export let description: string;
    export let link: string = "";

</script>


<div class="project">
    <img src={imageURI} alt={title}>
    <span class="title">
        <h3>{$t(title)}</h3>
        {#if link != ""}

            {#if link.includes("github")}
                <a href={link} target="_blank"> <img src={github} alt="github" class="icon"></a>
            {:else}
                <a href={link} target="_blank" class="highlight">More</a>
            {/if}
            
        {/if}
    </span> 
    <div class="project-details">
        {#each $t(description).split("\n") as desc}
            <p>{desc}</p>
        {/each}
    </div>
</div>

<style>
    img
    {
        width: 100%;
    }

    .icon
    {
        width: 1.2rem !important;
    }

    .title
    {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    p
    {
        text-align: justify;
    }

    
</style>