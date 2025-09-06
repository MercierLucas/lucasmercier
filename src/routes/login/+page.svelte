<script lang="ts">
    // import type { ActionData } from './$types'

    export let form;
</script>

<main>
    <div id="wrapper">
        <div id="sub-wrapper">

            <div class="align-center" id="login-form">
                <div id="title">
                    <h1>Login</h1>
                </div>
                <form id="login-inputs" action="?/login" method="POST">
        
                    <div>
                        <input type="text" name="username" placeholder="username" required>
                    </div>
                    
                    <div>
                        <input type="password" name="password" id="form-password" placeholder="password" required>
                    </div>
    
                    {#if form?.invalid}
                        <p class="error">Username and password is required.</p>
                    {/if}
                    
                    {#if form?.credentials}
                        <p class="error">You have entered the wrong credentials.</p>
                    {/if}
        
                    <div>
                        <input type="submit" value="Login">
                    </div>
        
                </form>

            </div>
        </div>


    </div>

</main>


<style>

    #wrapper
    {
        display: grid;
        place-content: center;
        /* border: 1px solid blue; */
        /* grid-auto-flow: column; */
        /* grid-template-columns: 1fr, 10fr; */
    }



    #title
    {
        text-align: left;
    }

    #splash-art
    {
        /* border: 1px solid red; */
        max-width: 800px;
        /* width: 50%; */
    }

    img
    {
        display: block;
        object-fit: fill;
        width: 100%;
        /* height: 100%; */
    }


</style>