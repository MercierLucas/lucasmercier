
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


    let selectedTheme = "🌙";
    export let data;

    
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
    }

    onMount(async () => {
        themeChange("🌙");
    })



</script>

<Header on:button_click={(e) => themeChange(e.detail?.buttonID)} uri={data.url}/>

<main>
    <PageTransition url={data.url}>
        <slot />
    </PageTransition>
</main>

<Footer />


<style>
    :global(body)
    {
        font-family: 'Source Sans Pro';
        font-size: 13pt;
    }
</style>