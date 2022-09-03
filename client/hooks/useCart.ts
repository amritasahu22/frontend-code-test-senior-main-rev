import { createContext, useContext, useEffect, useState } from 'react';
import { IProductField } from '../types/product';

const CART_STATE_KEY = 'cart';

const defaultCart = {
	basketItems: {},
};

interface CartContextInterface {
	cart: { basketItems: {} };
	addToCart: (product: IProductField, quantity: number) => void;
	totalPrice: () => number;
	totalQuantity: () => number;
}

export const CartContext = createContext<CartContextInterface | null>(null);

export function useCartState() {
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
		console.log('PricePErUnit', pricePerUnit);

		let newCart = { ...cart };

		if (newCart.basketItems[id]) {
			newCart.basketItems[id].quantity =
				cart.basketItems[id].quantity + quantity;
		} else {
			newCart.basketItems[id] = {
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

	const cartItems = Object.keys(cart.basketItems).map(key => {
		return {
			...cart.basketItems[key],
		};
	});

	const totalPrice = cartItems.reduce(
		(accumulator, { pricePerUnit, quantity }) => {
			return accumulator + pricePerUnit * quantity;
		},
		0
	);

	const totalQuantity = cartItems.reduce((accumulator, { quantity }) => {
		return accumulator + quantity;
	}, 0);

	return {
		cart,
		addToCart,
		totalQuantity,
		totalPrice,
	};
}

export function useCart() {
	const cart = useContext(CartContext);
	return cart;
}
