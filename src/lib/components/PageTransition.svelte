<script lang="ts">
	// From https://joyofcode.xyz/sveltekit-page-transitions
	import { fade } from 'svelte/transition'

	export let url: string
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
