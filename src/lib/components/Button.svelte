<script>
	let buttonProps = {
		class:[$$restProps.class]
	}
</script>
	<button on:click
			on:mouseover
			on:mouseenter
			on:mouseleave
		{...buttonProps}>
			<slot/>
	</button>

<style>
	.addCart-btn {
		position: relative;
		background: #181313;
		padding: 18px 40px;
		display: inline-flex;
		align-items: center;
		gap: 12px;
		border: none;
		color: white;
	}

	.addCart-btn::before {
		content: "";
		position: absolute;
		inset: 6px;
		border: 3px solid white;
		pointer-events: none;
		opacity: 0;
		transition: 
			opacity .4s;
	}
	.addCart-btn:hover::before {
    	opacity: 1;

  	}
	.btn {
		display: flex;
		border: 2px solid #191313;
		position: relative;
		justify-content: center;
		padding: 10px 10px;
		transition: 
			 .5s;
	}
	.btn::before {
		content: "";
		position: absolute;
		inset: 3px;
		border: 3px solid white;
		pointer-events: none;
		opacity: 0;
	}
	.btn:hover {
		color: white;
		background: #181313;
  	}
	button {
		font-size: 1.2rem;
		font-weight: 500;
	}
	button:hover::before {
    	opacity: 1;
  	}
</style>