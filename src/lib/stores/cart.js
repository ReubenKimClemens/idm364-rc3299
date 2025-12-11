import { writable } from 'svelte/store';

const stored = typeof localStorage !== 'undefined'
	? JSON.parse(localStorage.getItem('cart') || '[]')
	: [];

export const cart = writable(stored);

cart.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('cart', JSON.stringify(value));
	}
});


/**
 * @param {{ id: any; name: any; price: any; image_url: any; }} product
 * @param {any} size
 */
export function addToCart(product, size) {
	cart.update((items) => {
		const existing = items.find(
			(/** @type {{ id: any; size: any; }} */ item) => item.id === product.id && item.size === size
		);

		if (existing) {
			existing.quantity += 1;
		} else {
			items.push({
				id: product.id,
				name: product.name,
				price: product.price,
				image_url: product.image_url,
				size,
				quantity: 1
			});
		}

		return items;
	});
}

/**
 * @param {any} id
 * @param {any} size
 */
export function removeFromCart(id, size) {
	cart.update((items) =>
		items.filter((/** @type {{ id: any; size: any; }} */ item) => !(item.id === id && item.size === size))
	);
}

export function clearCart() {
	cart.set([]);
}
