<script>
    import linkedin from "$lib/assets/images/linkedin.svg"
    import plane from "$lib/assets/images/paper-plane.svg"

    import t from "$lib/trad/translations";

    let publications = [
        {
            title: "Framework for the application of markerless motion capture to biomechanics",
            year: 2025, link: "https://hal.science/hal-05191715",
            authors: "L Mercier, T Cresson, N Mezghani, C Vázquez"
        },
        {
            title: "Marker less motion capture accuracy in children with cerebral palsy and typically developing children",
            year: 2025, link: "https://hal.science/hal-05191769",
            authors: "A Naaïm, J Rozaire, L Mercier, M Begon, Y Cherni"
        },
    ]

</script>


<h1>Publications</h1>
<div >
    {#each publications as pub}
        <div class="three-cols">
            <div>{pub.year}</div>
            <div>
                <div>{pub.title}</div>
                <div>
                    {#each pub.authors.split(", ") as auth}
                        <span class={auth.includes('Mercier') ? 'author-main': 'author'}>{auth}</span>
                    {/each}
                    <!-- {pub.authors} -->
                </div>
            </div>
            <div><a href={pub.link} target="_blank">[PDF]</a></div>
        </div>
    {/each}
</div>

<style>

    .three-cols
    {
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        padding-bottom: 2rem;
    }

    .author
    {
        padding-left: 1rem;
    }

    .author-main
    {
        padding-left: 1rem;
        font-weight: bold;
    }

    .icon
    {
        color: var(--color-text);
        fill: var(--color-text);
        width: 1.5rem;
    }
</style>