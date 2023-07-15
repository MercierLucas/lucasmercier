<script lang="ts">
    import BlogCategories from '$lib/components/BlogCategories.svelte';
    import BlogPostsList from '$lib/components/BlogPostsList.svelte';

    export let data
</script>

<BlogCategories />


<BlogPostsList posts={data.posts}/>



