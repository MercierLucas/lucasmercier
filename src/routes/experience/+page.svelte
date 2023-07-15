<script lang="ts">
    import { onMount } from 'svelte';

    import Experience from "$lib/components/Experience.svelte";

    import '$lib/styles/style.scss';


    let educationExperiences = [
        {
            title: "PhD student - Computer vision",
            flag: "🇨🇦",
            where: "ETS - Ecole de technologie supérieure, Montreal, Canada",
            organizationURI: "https://www.etsmtl.ca/laboratoires/lio",
            imageURI: "ets.png",
            fromDate: "January 2022", toDate: "Now",
            description: [
                "Human pose estimation applied to video movement analysis to compute biomecanical parameters",
                "Infrared and RGB-D cameras spatial and temporal synchonization"
            ]
        },
        {
            title: "Engineering diploma - Computer science",
            where: "ISEP, Paris, France",
            flag: "🇫🇷",
            organizationURI: "https://www.isep.fr/",
            imageURI: "isep.png",
            fromDate: "2016", toDate: "2021",
            description: [
                "Specialization - Data science (2 years): Databases technologies (SQL/NoSQL), Computer vision research project (see 'projects') and Deep learning",
                "Core curriculum (1 year): Autonomous home project: Arduino board to gather sensors data and manage them with a web interface (see 'projects' for more)",
                "Preparatory classes (2 years): Mathematics, physics and signal processing"
            ]
        },
        {
            title: "Abroad semester - Ethics and developpement",
            flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
            where: "Wrexham Glyndŵr University, Wales, UK",
            organizationURI: "https://glyndwr.ac.uk/",
            imageURI: "glyndwr.png",
            fromDate: "January 2018", toDate: "June 2018",
            description: [
                "Ethics applied to computer science",
                "Desktop application developpment (C# / .NET)",
                "Mobile application developpment (Java / Android)"
            ]
        },
    ]

    let workExperiences = [
        {
            title: "Research assistant",
            flag: "🇨🇦",
            where: "Laboratoire en imagerie et orthopédie, Montreal, Canada",
            organizationURI: "https://www.etsmtl.ca/laboratoires/lio",
            imageURI: "lio.png",
            fromDate: "February 2021", toDate: "Now",
            description: [
                "Developpement: Internal tool for 3D model reconstruction from CT scans (C++)",
                "Member of quality system board: Reorganization of quality system and creation of 'Good practices in software developpment' training for lab members"

            ]
        },
        {
            title: "R&D computer vision intern",
            flag: "🇫🇷", 
            where: "Boxy, France",
            organizationURI: "https://www.getboxy.co/",
            imageURI: "boxy.png",
            fromDate: "February 2021", toDate: "August 2021",
            description: [
                "Multiple object tracking (MOT) algorithm benchmark for person tracking in autonomous store (Torch / TensorFlow)",
                "Pre and post processing for smoothing tracking detections"
            ]
        },
        {
            title: "Web developper intern",
            flag: "🇬🇧",
            where: "Pinewood Technologies, Birmingham UK",
            organizationURI: "https://www.pinewood.co.uk/",
            imageURI: "pinewood.png",
            fromDate: "February 2020", toDate: "Jun 2020",
            description: [
                "Front end: ASP / JS / HTML / CSS",
                "Backend: API developpement with C# .NET / Postman and database technologies VB.NET / SQL"
            ]
        }
    ]

    function showTab(tabID:string)
    {
        let tabs:HTMLCollection = document.getElementsByClassName("tab");
        for (let index = 0; index < tabs.length; index++)
        {
            let tab:HTMLElement = tabs[index] as HTMLElement;
            tab.setAttribute("style", "display: none;")
            //tab.setAttribute("style", "")
        }
        
        let tab:HTMLDivElement = document.getElementById(tabID) as HTMLDivElement;
        tab.setAttribute("style", "display:block;");

        // Update css for selected button
        let buttons:HTMLCollection = document.getElementsByClassName("tabbtn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("data-tab") ?? "";
            let classes:string = btn.getAttribute("class") ?? "";
            classes = classes.replace(" selected-tab", "");
            
            if(id == tabID)
            {
                classes += " selected-tab";
            }
            btn.setAttribute("class", classes);
            //tab.setAttribute("style", "")
        }
    }

    
    onMount(async ()=>{
        showTab("work");

        let buttons:HTMLCollection = document.getElementsByClassName("tabbtn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("data-tab") ?? "";
            btn.onclick = () => showTab(id);
            //tab.setAttribute("style", "")
        }
    })




</script>


<div class="btn-container">
    <div>
        <button data-tab="work" class="tabbtn">Work</button>
        <button data-tab="education" class="tabbtn selected-tab">Education</button>
    </div>
</div>

<div class="container">
    <div id="education" class="tab">
        <h2>Education</h2>
        {#each educationExperiences as exp}
            <Experience {...exp}/>
        {/each}
    </div>
    <div id="work" class="tab">
        <h2>Work</h2>
        {#each workExperiences as exp}
            <Experience {...exp}/>
        {/each}
    </div>

</div>



<style>
    .container
    {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

    }

    button
    {
        background-color: #F2F2F8;
        border: none;
        border-radius: 5px;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        cursor: pointer;
        font-size: 1.1rem;

        color: var(--color-text-secondary);
    }

    .selected-tab
    {
        background-color: var(--color-background);
        color: var(--color-constrast-low);
        transition: background-color .3s;

    }

    .tab
    {
        transition: display .5s;
    }

    .btn-container
    {
        display: grid;
        place-items: center;
    }

    .btn-container div
    {
        border-radius: 5px;
        background-color: #F2F2F8;
        padding: 5px;
    }

</style>