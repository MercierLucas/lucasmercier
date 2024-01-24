<script lang="ts">
    import { onMount } from 'svelte';
    import {t, lang} from '$lib/trad/translations';

    import ets from "$lib/assets/images/ets.png"
    import isep from "$lib/assets/images/isep.png"
    import glyndwr from "$lib/assets/images/glyndwr.png"
    import lio from "$lib/assets/images/lio.png"
    import boxy from "$lib/assets/images/boxy.png"
    import pinewood from "$lib/assets/images/pinewood.png"

    import Experience from "$lib/components/Experience.svelte";

    import '$lib/styles/style.scss';


    let educationExperiences = [
        {
            title: "experience.phd_title",
            flag: "🇨🇦",
            where: "ETS - Ecole de technologie supérieure, Montreal, Canada",
            organizationURI: "https://www.etsmtl.ca/laboratoires/lio",
            imageURI: ets,
            fromDate: "experience.phd_from", toDate: "experience.phd_to",
            description: "experience.phd_description"
        },
        {
            title: "experience.isep_title",
            where: "ISEP, Paris, France",
            flag: "🇫🇷",
            organizationURI: "https://www.isep.fr/",
            imageURI: isep,
            fromDate: "experience.isep_from", toDate: "experience.isep_to",
            description: "experience.isep_description"
        },
        {
            title: "experience.wales_title",
            flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
            where: "Wrexham Glyndŵr University, Wales, UK",
            organizationURI: "https://glyndwr.ac.uk/",
            imageURI: glyndwr,
            fromDate: "experience.wales_from", toDate: "experience.wales_to",
            description: "experience.wales_description"
        },
    ]

    let workExperiences = [
        {
            title: "experience.lio_assist_title",
            flag: "🇨🇦",
            where: "Laboratoire en imagerie et orthopédie, Montreal, Canada",
            organizationURI: "https://www.etsmtl.ca/laboratoires/lio",
            imageURI: lio,
            fromDate: "experience.lio_assist_from", toDate: "experience.lio_assist_to",
            description: "experience.lio_assist_description"
        },
        {
            title: "experience.boxy_title",
            flag: "🇫🇷", 
            where: "Boxy, France",
            organizationURI: "https://www.getboxy.co/",
            imageURI: boxy,
            fromDate: "experience.boxy_from", toDate: "experience.boxy_to",
            description: "experience.boxy_description"
        },
        {
            title: "experience.pinewood_title",
            flag: "🇬🇧",
            where: "Pinewood Technologies, Birmingham UK",
            organizationURI: "https://www.pinewood.co.uk/",
            imageURI: pinewood,
            fromDate: "experience.pinewood_from", toDate: "experience.pinewood_to",
            description: "experience.pinewood_description"
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
        <button data-tab="work" class="tabbtn">{$t("experience.work")}</button>
        <button data-tab="education" class="tabbtn selected-tab">{$t("experience.education")}</button>
    </div>
</div>

<div class="container">
    <div id="education" class="tab">
        {#each educationExperiences as exp}
            <Experience {...exp}/>
        {/each}
    </div>
    <div id="work" class="tab">
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