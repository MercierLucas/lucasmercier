<script lang="ts">
    import { onMount } from "svelte";
	import { createEventDispatcher } from 'svelte';
    import { Themes, Langs } from '$lib/types';
    import { lang } from "$lib/trad/translations";
	
	const dispatch = createEventDispatcher();

    let langIcons = Object.keys(Langs);


    function selectButton(buttonID:string)
    {
        // Update css for selected button
        let buttons:HTMLCollection = document.getElementsByClassName("lang-btn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("id") ?? "";
            let classes:string = btn.getAttribute("class") ?? "";
            classes = classes.replace(" selected-lang-btn", "");
            
            if(id == buttonID)
            {
                // let lang = Langs[buttonID]
                lang.set(Langs[buttonID]);
                classes += " selected-lang-btn";
                // localStorage.setItem("lang",)
            }
            btn.setAttribute("class", classes);
            //tab.setAttribute("style", "")
        }
    }

    onMount(async ()=>
    {
        
        selectButton(langIcons[1]);

        // Define click handler
        let buttons:HTMLCollection = document.getElementsByClassName("lang-btn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("id") ?? "";
            
            btn.onclick = () => selectButton(id);
            //tab.setAttribute("style", "")
        }
    })
</script>

<div class="lang-btn-container">
    {#each langIcons as btnName}
        <button id={btnName} class="lang-btn selected-lang-btn">{btnName}</button>
    {/each}
</div>


<style>
    .lang-btn-container
    {
        border-radius: 5px;
        background-color: #F2F2F8;
        padding: 5px;
    }
    button
    {
        background-color: #F2F2F8;
        border: none;
        border-radius: 5px;
        padding: .5rem;
        cursor: pointer;
    }

    .selected-lang-btn
    {
        background-color: var(--color-background);
        color: var(--color-constrast-low);
        transition: background-color .3s;

    }

</style>