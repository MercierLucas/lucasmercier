<script lang="ts">
    import BlogCategories from '$lib/components/BlogCategories.svelte';
    import BlogPostsList from '$lib/components/BlogPostsList.svelte';

    export let data;

    let selectedCategorie = data?.slug ?? "";

</script>


<p><a href="/blog" class="highlight">← Back</a> </p>

<BlogCategories selectedCategorie={selectedCategorie}/>


<BlogPostsList posts={data.posts}/>

