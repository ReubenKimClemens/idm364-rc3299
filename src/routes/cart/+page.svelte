<script>
	// @ts-nocheck
	import { cart, removeFromCart } from '$lib/stores/cart';
	import Button from '$lib/components/Button.svelte';

	$: items = $cart;
	
	const taxRate = 0.07;
	const shipping = 6.99;

	$: subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	$: tax = subtotal * taxRate;
	$: total = subtotal + tax + shipping;
</script>

<h1>Your Cart</h1>

{#if items.length === 0}
	<p>Your cart is empty.</p>
{:else}
	{#each items as item}
		<div class="cart-item">
			<div>
				<h3>{item.name}</h3>
				<p>Size: {item.size}</p>
				<p>${item.price}</p>
				<p>Qty: {item.quantity}</p>

				<Button class="btn" on:click={() => removeFromCart(item.id, item.size)}>
					Remove
				</Button>
			</div>
		</div>
	{/each}

	<hr />

	<h3>Subtotal: ${subtotal.toFixed(2)}</h3>
	<h3>Tax: ${tax.toFixed(2)}</h3>
	<h3>Shipping: ${shipping.toFixed(2)}</h3>
	<h2>Total: ${total.toFixed(2)}</h2>

	<a href="/order">
		<Button class="addCart-btn">Proceed to Checkout</Button>
	</a>
{/if}