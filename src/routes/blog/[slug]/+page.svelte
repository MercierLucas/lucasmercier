<script>
    import { Categories } from "$lib/types";

    export let data;

    let date = new Date(data.date);

</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
</svelte:head>


<article>
    <p><a href="/blog" class="highlight">← Back</a> </p>

    <div id="title-header">
        <h1 id="main-title">{data.title}</h1>
        <div id="post-meta">
            <span class="secondary">{date.toDateString()}</span>
            {#each data.categories as categorie}
                <span class="secondary"><a href={"/blog/categories/"+categorie} class="tag secondary">#{categorie}</a></span>
            {/each}
        </div>
    </div>

    <h2>Table of content</h2>

    <svelte:component this={data.content} />
    
</article>

<style>
    #title-header
    {
        border-bottom: 1px solid grey;
        padding-bottom: 1rem;
    }

    #post-meta
    {
        display: flex;
        gap: 1rem;
    }
    
    #main-title
    {
        font-size: 1.875rem;
        line-height: 2.25rem;
        text-transform: uppercase;
    }

</style>