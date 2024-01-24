<script>
    import ProjectItem from "$lib/components/ProjectItem.svelte";
    import t from '$lib/trad/translations';

    import garage_isep from "$lib/assets/images/garage_isep.jpg"
    import myelin_segmentation from "$lib/assets/images/myelin_segmentation.png"
    import ecomatique from "$lib/assets/images/ecomatique.png"

    let projects = 
    [
        {
            title: "projects.garage_title",
            imageURI: garage_isep,
            link: "https://www.linkedin.com/pulse/hackathon-ia-marketing-et-environnement-raja-chiky/?trackingId=g1G%2FwMkQE%2FuFDM4tSjaqmQ%3D%3D",
            description: "projects.garage_description"
        },
        {
            title: "projects.myelin_title",
            imageURI: myelin_segmentation,
            link: "https://github.com/MercierLucas/MyelinDeepContourSegmentation",
            description: "projects.myelin_description"
        }
        ,
        {
            title: "projects.domotic_title",
            imageURI: ecomatique,
            description: "projects.domotic_description"
        }
    ]
</script>


<h2>{$t("projects.title")}</h2>

<div class="grid">
    {#each projects as proj}
        <ProjectItem {...proj}/>
    {/each}
</div>


<style>
    .grid
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
    }
</style>