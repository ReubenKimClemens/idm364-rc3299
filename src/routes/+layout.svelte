<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
	<Header />

	<div class="wrapper">
		{@render children()}
	</div>

	<Footer />
</div>


<style>
	:global(body) {
	  margin: 0;
	  padding: 0;
	  font-family: "Josefin Sans", sans-serif;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.container {
	  min-height: 100vh;
	  display: flex;
	  flex-direction: column;
	}
	
	.wrapper {
	  flex: 1;
	  max-width: 80%;
	  align-self: center;
	}
	@media (max-width: 900px) {
    .wrapper {
      max-width: 100%;
    }
  }
  </style>