<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import { Themes, Langs } from '$lib/types';
    import Buttongroup from './Buttongroup.svelte';
    import LanguageSelector from "./LanguageSelector.svelte";
    import '$lib/styles/style.scss';

    let themeIcons = Object.keys(Themes);
    let langIcons = Object.keys(Langs);

    const dispatch = createEventDispatcher();

    export let uri:string;

    let navLinks = ["Experience","Research","Blog", "Projects", "Contact"];


    function changeLangTrigger(lang:string)
    {
        dispatch("lang_change", {"buttonID":lang});
    }

    function changeThemeTrigger(id:string)
    {
        dispatch("theme_change", {"buttonID":id});
    }
    

    // onMount(async () => {
    //     changeLang("🌙");
    // })

</script>


<header>
    <a href="/" id="logo">LM.</a>

    <div class="horizontal">
        <nav>
            <ul>
                {#each navLinks as nav}
                    <li>
                        {#if "/"+nav.toLowerCase() == uri}
                            <a href={"/"+nav.toLowerCase()} class="selected">{nav}</a>
                        {:else}
                            <a href={"/"+nav.toLowerCase()}>{nav}</a>
                        {/if}
                    </li>
                {/each}
            </ul>
        </nav>
        <LanguageSelector/>
        <Buttongroup buttonsNames={themeIcons} on:button_click/>
    </div>

</header>


<style lang="scss">
    header
    {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    #logo
    {
        border:1px solid var(--color-text);
        padding: 1rem;
    }

    ul
    {
        margin: 0;
        display: flex;
        gap: 1rem;
        list-style-type: none;
    }

    .selected
    {
        border-bottom: 2px solid var(--color-gradient-end);
        padding-bottom: 2px;
    }

    .horizontal
    {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    a
    {
        text-decoration: none;
        color: var(--color-text) !important;
        font-size: 1.2rem;
    }

    a:hover 
    {
        border-bottom: 1px solid var(--color-gradient-end);
    }


</style>