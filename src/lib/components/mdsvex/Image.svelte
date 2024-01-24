<script lang="ts">
	export let src: string
	export let alt: string

    const localImageURI = new URL("../../assets/images/"+src, import.meta.url).href;
</script>

<div>
    <img src={localImageURI} alt={alt} loading="lazy"/>
    <p>{alt}</p>
</div>


<style>
    div
    {
        display: grid;
        place-items: center;
    }

    img
    {
        max-height: 100%;
        max-width: 100%;
    }

    p
    {
        color: var(--color-text-secondary);
    }
</style>