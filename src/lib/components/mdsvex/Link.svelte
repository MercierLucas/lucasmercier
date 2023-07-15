<script lang="ts">
	export let href: string

</script>


<a href={href} target="_blank" class="highlight"><slot /></a>


<style>
    a
    {
        text-decoration: none;
    }
</style>