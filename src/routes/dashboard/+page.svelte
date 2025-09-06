<script lang="ts">
    import type { ActionData } from './$types'
    import { page } from '$app/stores'
    export let form: ActionData
    export let data;

    let successMessage:boolean = $page.data?.sucess;

    $: if($page.data?.success)
    {
        successMessage = true;
        console.log(successMessage)
    }
    // console.log(data);


    let userRole = "USER";

    function click(userID:any) {
        console.log("click", userID)
        let val = (<HTMLInputElement>document.getElementById(userID+"_new_value")).value;
        console.log("value: ", val)
    }

</script>


<main>

    {#if $page.data.user.role == 'ADMIN'}
        <div class="card">
            <h3>Users</h3>
        
            <div class="users">
                <div class="users-row users-header">
                    <div>Username</div>
                    <div>Role</div>
                </div>
                <div >
                    {#each data?.users as user}
                    <div class="users-row">
                        <div>{user.username}</div>
                        <div class="badge-{user.role.toLowerCase()} badge">{user.role}</div>
                        <div></div>
                            <!-- <div>{user.updatedAt}</div> -->
                        </div>
                        {/each}
                    </div>
                    
                </div>
            <h3>Create USER</h3>
            <div>
                <form action="?/admin" method="POST">
            
                    <input type="text" name="username" id="" required placeholder="username">
            
                    <input type="password" name="password" id="" required placeholder="password">
                    <input type="hidden" id="role-input" name="role" value={userRole}>
                    <select name="" id="user-role" bind:value={userRole}>
                        <option value="USER">USER</option>
                        {#if $page.data.user.role == 'ADMIN'}
                            <option value="ADMIN">ADMIN</option>
                        {/if}
                    </select>
                    <button type="submit">Create</button>
                        
                    {#if form?.user}
                        <p class="error">Username is taken.</p>
                    {/if}
                    {#if form?.error}
                        <p class="error">Unauthorized action.</p>
                    {/if}
                </form>
        
            </div>
        </div>
    {/if}

    <div class="card mt2rem">
        <h3>Update my infos</h3>
        {#if successMessage}
            <p class="success">Password updated!</p>
        {/if}
        <form action="?/updatePassword" method="POST">
            <div><input type="password" name="oldPassword" placeholder="Old password"></div>
            <div><input type="password" name="newPassword" placeholder="New password"></div>
            <div><input type="password" name="reNewPassword" placeholder="Confirm new password"></div>
            <button type="submit">Update</button>

            {#if form?.credentials}
                <p class="error">Wrong old password</p>
                {/if}
            {#if form?.invalid}
                <p class="error">You didn't fill inputs correctly</p>
                {/if}
                {#if form?.missmatch}
                <p class="error">New password and confirmation one doesn't match</p>
                {/if}
        </form>
    </div>

</main>


<style>

    .users-row{
        display: grid;
        padding-top: .5rem;
        padding-bottom: .5rem;
        grid-template-columns: repeat(2, 1fr);
        border-bottom: solid gray 1px;
        text-align: center;
    }

    .users-header
    {
        font-weight: bold;
        background-color: var(--bg-darker);
        padding: .5rem;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }

    .users{
        /* border: solid gray 1px; */
        padding: 1rem;
        border-radius: .3rem;
    }

    .mt2rem
    {
        margin-top: 2rem;
    }


</style>