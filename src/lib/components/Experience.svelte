<script lang="ts">
    import t from '$lib/trad/translations';
    import '$lib/styles/style.scss'

    export let imageURI:string;
    export let title:string;
    export let where:string;
    export let organizationURI:string;
    export let fromDate:string;
    export let toDate:string;
    export let flag:string;

    //const localImageURI = new URL("../assets/images/"+imageURI, import.meta.url).href;

    export let description:string;

</script>


<div id="main_container">
    <img src={imageURI} alt="">
    <div>
        <p>{$t(title)}</p>
        <span id="date">{$t(fromDate)} {$t("experience.to")} {$t(toDate)},</span>
        <span id="where"><a href={organizationURI} target="_blank" class="highlight">{where}</a> {flag}</span>
        
        <ul>
            {#each $t(description).split("\n") as desc}
            <li>
                {desc}
            </li>
            {/each}
        </ul>

    </div>
    

</div>


<style>
    #main_container
    {
        display: flex;
        gap: 1rem;
    }

    #date
    {
        color: var(--color-text-secondary);
    }

    img
    {
        height: 3rem;
        width: 3rem;
    }
</style>