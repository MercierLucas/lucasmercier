
<script lang="ts">
    import { onMount } from "svelte";
    import { Themes } from "$lib/types";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import PageTransition from "$lib/components/PageTransition.svelte";
    import '@fontsource/roboto-serif/300.css';
    import '@fontsource/source-sans-pro';

    import '$lib/styles/style.scss'
    import '$lib/styles/prism-material-dark.css'

    import { page } from '$app/stores'


    let selectedTheme = "🌙";
    export let data;

    function langChange(lang:string)
    {
        console.log("LANG" +lang)
    }

    
    function themeChange(icon:string)
    {
        selectedTheme = Themes[icon];

        if (window.document.body.classList.contains(selectedTheme))
        {
            return;
        }

        Object.entries(Themes).forEach(([key, value]) =>{
            window.document.body.classList.remove(value);
        });

        window.document.body.classList.add(selectedTheme);
        // console.log(icon)
    }

    onMount(async () => {
        themeChange("🌙");
    })



</script>

<Header
    on:lang_change={(e)=> langChange(e.detail?.buttonID)}
    on:button_click={(e) => themeChange(e.detail?.buttonID)}
    uri={data.url}
/>

<main>
    <PageTransition url={data.url}>
        <div id="page">
            <slot />
            <Footer />
        </div>
    </PageTransition>
</main>



<style>
    :global(body)
    {
        font-family: 'Source Sans Pro';
        font-size: 13pt;
        margin: 0;
        padding: 0;
    }

    #page {
        --accent: #2D6A4F;
        font-family: 'DM Sans', sans-serif;
        max-width: 780px;
        margin: 0 auto;
        padding: 2rem 1.5rem 4rem;
    }


</style>