import { useEffect, useState } from 'react';
import { IProductField } from '../types/product';
import { CartItem } from '../types/cart';

const CART_STATE_KEY = 'cart';

const cartItem = {} as CartItem;

const defaultCart = {
	basketItems: cartItem,
};

export function useCart() {
	const [cart, setCart] = useState(defaultCart);

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

	const addToCart = (product: IProductField, qty: number) => {
		const { id, name, power, quantity, price, brand, img_url } = product;
		const pricePerUnit = Number((price / 100).toFixed(2));

		let newCart = { ...cart };

		if (newCart.basketItems[id]) {
			newCart.basketItems[id].qty = cart.basketItems[id].qty + qty;
		} else {
			newCart.basketItems[id] = {
				id,
				name,
				power,
				quantity,
				pricePerUnit,
				brand,
				img_url,
				qty,
			};
		}

		setCart(newCart);
	};

	const cartItems = Object.keys(cart.basketItems).map(key => {
		const cartItem: CartItem = {
			...cart.basketItems[key],
		};
		return cartItem;
	});

	const totalPrice = cartItems.reduce((accumulator, { pricePerUnit, qty }) => {
		return accumulator + pricePerUnit * qty;
	}, 0);

	const totalQuantity = cartItems.reduce((accumulator, { qty }) => {
		return accumulator + qty;
	}, 0);

	const removeItem = (itemId: number) => {
		let newCart = { ...cart };
		delete newCart.basketItems[itemId];
		setCart(newCart);
	};

	return {
		addToCart,
		totalQuantity,
		totalPrice,
		cartItems,
		removeItem,
	};
}
