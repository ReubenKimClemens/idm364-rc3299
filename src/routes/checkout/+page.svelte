<script>
	import { goto } from '$app/navigation';

	let name = '';
	let address = '';

	function submitForm() {
		localStorage.setItem(
			'order-info',
			JSON.stringify({ name, address, date: new Date().toISOString() })
		);

		goto('/order-summary');
	}
</script>

<h1>Checkout</h1>

<form on:submit|preventDefault={submitForm}>
	<label>
		Name:
		<input bind:value={name} required />
	</label>

	<label>
		Address:
		<textarea bind:value={address} required></textarea>
	</label>

	<button type="submit">Place Order</button>
</form>
