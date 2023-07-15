<script>
    import ProjectItem from "$lib/components/ProjectItem.svelte";

    import garage_isep from "$lib/assets/images/garage_isep.jpg"
    import myelin_segmentation from "$lib/assets/images/myelin_segmentation.png"
    import ecomatique from "$lib/assets/images/ecomatique.png"

    let projects = 
    [
        {
            title: "Organizing AI related event for engineering students",
            imageURI: garage_isep,
            link: "https://www.linkedin.com/pulse/hackathon-ia-marketing-et-environnement-raja-chiky/?trackingId=g1G%2FwMkQE%2FuFDM4tSjaqmQ%3D%3D",
            description: "As the president of the AI lab in GarageISEP, a student innovation association we organized many activities to help student discover some AI application. Among those we has a hackathon with nearly 200 participants, some workshops and talks at our school.",

        },
        {
            title: "Myelin sheath segmentation",
            imageURI: myelin_segmentation,
            link: "https://github.com/MercierLucas/MyelinDeepContourSegmentation",
            description: "Project realized as part of my end of study research classes. The aim was to segment myelin sheats in CT scan images. This can then be used to compute the R-ratio, a clinical parameter that can help detect diseases like sclerosis. Tech used: Python with Tensorflow"
        }
        ,
        {
            title: "Domotic project",
            imageURI: ecomatique,
            description: "During my 3rd year of engineering school we worked on a domotic project where we set up some sensors (heat, luminosity etc.) on an arduino board. The results were then send to a local server and data could be access through a web application. With his account the user could also trigger elements such as fans or shutters. The board logic was controlled in C and the web app in HTML, CSS, JS for the front and JS, PHP for the backend."
        }
    ]
</script>


<h2>Some projects I enjoyed taking part in</h2>

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