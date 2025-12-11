<script>
// @ts-nocheck

	import { cart, clearCart } from '$lib/stores/cart.js';
	import { onMount } from 'svelte';

	/**
     * @type {any[] | null | undefined}
     */
	let items = [];
	let orderInfo = {};

	const taxRate = 0.07;
	const shipping = 6.99;

	$: subtotal = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	$: tax = subtotal * taxRate;
	$: total = subtotal + tax + shipping;

	onMount(() => {
		items = JSON.parse(localStorage.getItem('cart') || '[]');
		orderInfo = JSON.parse(localStorage.getItem('order-info') || '{}');
		clearCart();
	});
</script>

<h1>Order Summary</h1>

{#if items.length === 0}
	<p>No order found.</p>
{:else}

	{#each items as item}
		<div>
			<h3>{item.name}</h3>
			<p>Size: {item.size}</p>
			<p>Qty: {item.quantity}</p>
			<p>${item.price}</p>
		</div>
	{/each}

	<hr />

	<h3>Subtotal: ${subtotal.toFixed(2)}</h3>
	<h3>Tax: ${tax.toFixed(2)}</h3>
	<h3>Shipping: ${shipping.toFixed(2)}</h3>
	<h2>Total: ${total.toFixed(2)}</h2>
{/if}