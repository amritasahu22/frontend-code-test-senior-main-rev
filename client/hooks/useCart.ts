import { useEffect, useState } from 'react';
import { IProductField } from '../types/product';

const CART_STATE_KEY = 'cart';

const defaultCart = {
	products: {},
};

export function useCart() {
	const [cart, setCart] = useState(defaultCart);

	console.log('Cart', cart);

	useEffect(() => {
		const stateFromStorage = localStorage.getItem(CART_STATE_KEY);
		const data = stateFromStorage && JSON.parse(stateFromStorage);

		if (data) {
			setCart(data);
		}
	}, []);

	useEffect(() => {
		const data = JSON.stringify(cart);
		window.localStorage.setItem(CART_STATE_KEY, data);
	}, [cart]);

	function addToCart(product: IProductField, quantity: number) {
		const { id, name, power, price, brand, img_url } = product;
		const pricePerUnit = Number((price / 100).toFixed(2));

		let newCart = { ...cart };

		if (newCart.products[id]) {
			newCart.products[id].quantity = cart.products[id].quantity + quantity;
		} else {
			newCart.products[id] = {
				id,
				name,
				power,
				pricePerUnit,
				brand,
				img_url,
				quantity,
			};
		}

		setCart(newCart);
	}
	return {
		addToCart,
	};
}
