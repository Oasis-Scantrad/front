<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	footer {
		background-color: lightgrey;
	}
	.sizer {
		max-width: 56em;
		margin: auto;
		border-top: 3px solid #000;
	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<div class="sizer">
		<div class="footer-box">
			<div class="title">Les autres equipes</div>
			<div class="teams">
				<a href="."><img src="https://via.placeholder.com/90x60" alt="logo-1"></a>
				<a href="."><img src="https://via.placeholder.com/90x40" alt="logo-2"></a>
			</div>
		</div>
	</div>
</footer>