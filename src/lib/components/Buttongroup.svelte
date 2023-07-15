<script lang="ts">
    import { onMount } from "svelte";
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();

    export let buttonsNames:string[];

    function selectButton(buttonID:string)
    {
        // Update css for selected button
        let buttons:HTMLCollection = document.getElementsByClassName("btn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("id") ?? "";
            let classes:string = btn.getAttribute("class") ?? "";
            classes = classes.replace(" selected-btn", "");
            
            if(id == buttonID)
            {
                classes += " selected-btn";
                dispatch("button_click", {"buttonID":id});
            }
            btn.setAttribute("class", classes);
            //tab.setAttribute("style", "")
        }
    }

    onMount(async ()=>
    {
        
        selectButton(buttonsNames[0]);

        // Define click handler
        let buttons:HTMLCollection = document.getElementsByClassName("btn");
        for (let index = 0; index < buttons.length; index++)
        {
            let btn:HTMLButtonElement = buttons[index] as HTMLButtonElement;
            let id:string  = btn.getAttribute("id") ?? "";
            btn.onclick = () => selectButton(id);
            //tab.setAttribute("style", "")
        }

    })
</script>

<div class="btn-container">
    {#each buttonsNames as btnName}
        <button id={btnName} class="btn selected-btn">{btnName}</button>
    {/each}
</div>


<style>
    .btn-container
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

    .selected-btn
    {
        background-color: var(--color-background);
        color: var(--color-constrast-low);
        transition: background-color .3s;

    }

</style>