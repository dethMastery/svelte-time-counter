<script lang="ts">
	import { page } from '$app/stores'
	import TimeCounter from "../../modules/timeCount";
	import TW_CLASS from "../../constants/tailwind_class";
	import type Counter from '../../interfaces/counter';

	let dateParams: string | null
	let timeParams: string | null
	let remaining: string | undefined = undefined
	let stamp: number | undefined = 0
	let percent: number = 0

	setInterval(() => {
		dateParams = $page.url.searchParams.get('date')
		timeParams = $page.url.searchParams.get('time')

		const input: Counter = {
			date: dateParams,
			time: timeParams
		}

		if (dateParams !== null || timeParams !== null) {
			const Counter = TimeCounter(input)

			remaining = Counter?.remaining
			stamp = Counter?.diff
			
			percent = (Counter?.percent !== undefined) ? Counter.percent : 0
		}
	}, 1000)
	
</script>

<svelte:head>
	<title>timeCount</title>
	<meta name="description" content="timeCounter for counting down.." />
</svelte:head>

<section>
	<div class="w-[80%] h-screen mx-auto flex flex-col items-center text-center justify-center">
		{#if dateParams === null || timeParams === null}
			<div class="container">
				<h1 class={`${TW_CLASS.heading.xxl} !text-3xl`}>
					Counter!
				</h1>
				<form action="/counts" method="get">
					<input type="date" name="date" class="w-[18rem] my-2 px-4 py-2 text-lg outline-none text-center text-pastel-black rounded" />
					<br />
					<input type="time" name="time" class="w-[18rem] my-2 px-4 py-2 text-lg outline-none text-center text-pastel-black rounded" />
					<br />
					<button type="submit" class="w-[18rem] my-2 p-4 bg-living-coral rounded text-lg hover:scale-85">
						Start!
					</button>
				</form>
			</div>
		{:else if dateParams !== null || timeParams !== null}
			{#if remaining === undefined && stamp === undefined}
				<h1 class={`${TW_CLASS.heading.xl} !text-3xl`}>
					Loading...
				</h1>
			{:else}
				{#if stamp !== undefined && stamp > 0}
					<div id="counterBox" class="fixed top-0 w-full flex flex-row justify-start text-left ">
						<div class="bg-living-coral h-[5px] duration-1000 " style={`width: ${percent}%`}></div>
					</div>
					<h3 class={`${TW_CLASS.heading.xl} !text-xl`}>
						Time Remaining
					</h3>
					<h1 class={`${TW_CLASS.heading.xl} !text-5xl`}>
						{remaining}
					</h1>
				{:else}
					<h1 class={`${TW_CLASS.heading.xl} !text-5xl`}>
						Time Counting End :)
					</h1>
				{/if}
			{/if}
		{/if}
	</div>
</section>

<style>

</style>
