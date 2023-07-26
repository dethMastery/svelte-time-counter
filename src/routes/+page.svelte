<script lang="ts">
	import TW_CLASS from "../constants/tailwind_class";
	import Time from "../modules/clock";

	let date: string | undefined = undefined
	let time: string | undefined = undefined
	let percent: number = 0

	setInterval(() => {
		date = Time().date
		time = Time().time
		
		const ts = new Date(Time().timeStamp)
		const tempStamp = new Date(`${ts.getMonth() + 1} ${ts.getDate()} ${ts.getFullYear()}`)
		const baseTime: number = tempStamp.getTime()
		
		percent = Math.floor((ts.getTime() - baseTime) / (24 * 60 * 60 * 1000) * 100 * 100) / 100
	}, 1000)
</script>

<svelte:head>
	<title>timeCount</title>
	<meta name="description" content="timeCounter for counting down.." />
</svelte:head>

<section>
	<div class="w-[80%] h-screen mx-auto flex flex-col items-center text-center justify-center">
		<div id="counterBox" class="fixed top-0 w-full flex flex-row justify-start text-left ">
			<div class="bg-living-coral h-[5px] duration-1000 " style={`width: ${percent}%`}></div>
		</div>
		{#if time === undefined || date === undefined}
			<h1 class={`${TW_CLASS.heading.xxxl} !text-5xl`}>
				Loading...
			</h1>
		{:else}
			<h1 class={`${TW_CLASS.heading.xxxl} !text-7xl !py-2`}>
				{time}
			</h1>
			<h3 class={`${TW_CLASS.heading.xxl} !py-2`}>
				{date}
			</h3>
		{/if}
	</div>
</section>

<style>

</style>
