<script lang="ts">
	import TW_CLASS from "../../constants/tailwind_class";


</script>

<svelte:head>
	<title>About | timeCount</title>
	<meta name="description" content="timeCounter for counting down.." />
</svelte:head>

<section>
	<div class="w-full h-screen mx-auto flex flex-col items-center text-center justify-center md:w-[60%] ">
		<h1 class={`${TW_CLASS.heading.xxxl} underline`}>
			About
		</h1>
		<p class="mb-2">
			This website is fully made by <a href="https://suphakit.net">Suphakit P.</a> and all I do in this website is just refactoring coding from <a href="https://github.com/dethMastery/countingDown">dethMastery/countingDown</a> which is fully made of `HTML`, `CSS` and `JS` to `SvelteKit`
		</p>
		<p class="mt-2">
			I just hope fully that this can help me count down the time that i going to meet my gf ;)
		</p>
	</div>
</section>

<style>

</style>
