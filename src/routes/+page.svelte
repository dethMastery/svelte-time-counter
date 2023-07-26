<script lang="ts">
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
		<p>
			{date}
		</p>
		<p>
			{time}
		</p>
		<p>
			{percent}
		</p>
	</div>
</section>

<style>

</style>
