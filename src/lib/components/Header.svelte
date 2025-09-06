<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import { Themes, Langs } from '$lib/types';
    import Buttongroup from './Buttongroup.svelte';
    import LanguageSelector from "./LanguageSelector.svelte";
    import '$lib/styles/style.scss';
    import { page } from "$app/stores";

    let themeIcons = Object.keys(Themes);
    let langIcons = Object.keys(Langs);

    const dispatch = createEventDispatcher();

    export let uri:string;

    let navLinks = ["Experience","Research","Blog", "Projects", "Contact"];

    if($page.data.user)
    {
        navLinks.push("Recipes")   
    }


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
        {#if $page.data.user}
            <div class="display-flex">
                <a class="baritem" href="dashboard"><i class="fa-solid fa-user"></a>
                <form action="/logout" method="POST" class="baritem">
                    <button type="submit" id="logout"><i class="fa-solid fa-door-open"></i></button>
                </form>
            </div>
        {/if}
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

    #logout
    {
        border: none;
        background: none;
    }
    #logout:hover
    {
        cursor: pointer;
    }

    .baritem
    {
        // border: 1px solid red;
        padding: 0 !important;
        margin: 0 !important;
    }

    // .baritem i
    // {
    //     padding-top: 1rem;
    // }

    .display-flex
    {
        display: flex;
        text-align: center;
    }


</style>