import { createContext } from 'react';
import { IProductField } from '../types/product';
import { CartItem } from '../types/cart';

export interface ICartContext {
	addToCart: (product: IProductField, quantity: number) => void;
	totalPrice: number;
	totalQuantity: number;
	cartItems: CartItem[];
	removeItem: (itemId: number) => void;
}

const CartContext = createContext<ICartContext | null>(null);
CartContext.displayName = 'CartContext';

export default CartContext;
