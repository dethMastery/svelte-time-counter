<script>
	import { page } from '$app/stores';

	const navButton = `p-4 hover:opacity-60`
	const activeButton = `p-4 opacity-80 hover:opacity-80`

	console.log($page.url.pathname);
</script>

<header>
	<nav class="w-full fixed top-0 flex flex-row my-4">
		<div class="w-full justify-start text-left">
			{#if $page.url.pathname === '/'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class={activeButton}>
					timeCount
				</a>
			{:else}
				<a href="/" class={navButton}>
					timeCount
				</a>
			{/if}
			
		</div>
		<div class="w-full justify-end text-right">
			{#if $page.url.pathname === '/counts'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class={activeButton}>
					CountDown
				</a>
			{:else}
				<a href="/counts" class={navButton}>
					CountDown
				</a>
			{/if}

			{#if $page.url.pathname === '/about'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class={activeButton}>
					About
				</a>
			{:else}
				<a href="/about" class={navButton}>
					About
				</a>
			{/if}
		</div>
	</nav>
</header>

<style>
	
</style>
