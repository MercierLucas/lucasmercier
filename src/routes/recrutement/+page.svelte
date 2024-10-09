<script>
    import recrutement from "$lib/assets/images/recrutement.png"
</script>


<main>
    <h2>Recrutement</h2>

    <p>Nous recherchons des participants pour notre étude!</p>
    <div class="center pt-2">
        <div>
            <button><a href="mailto:lucas.mercier.1@ens.etsmtl.ca">Participer!</a></button>
        </div>
        <div class="pt-2">
            <img src={recrutement} alt="Recrutement">
        </div>
    </div>

</main>



<style>
    button
    {
        background: none;
        border-radius: 3px;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 2rem;
        border: 1px solid #44546A;
        
    }
    a
    {
        color: #44546A !important;
    }
             

    .center{
        text-align: center;
    }

    .pt-2{
        padding-top: 2rem;
    }

</style>