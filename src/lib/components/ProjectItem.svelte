<script lang="ts">
    import github from "$lib/assets/images/github.svg"

    export let title: string;
    export let imageURI: string;
    export let description: string;
    export let link: string = "";

    const localImageURI = new URL("../assets/images/"+imageURI, import.meta.url).href;

</script>


<div class="project">
    <img src={localImageURI} alt={title}>
    <span class="title">
        <h3>{title}</h3>
        {#if link != ""}

            {#if link.includes("github")}
                <a href={link} target="_blank"> <img src={github} alt="github" class="icon"></a>
            {:else}
                <a href={link} target="_blank" class="highlight">More</a>
            {/if}
            
        {/if}
    </span> 
    <div class="project-details">
        {#each description.split("\n") as desc}
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