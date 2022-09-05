import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useCart } from '../../hooks/useCart';
import { mockProducts } from '../_mocks_/mock';

test('should use cart hook', () => {
	const { result } = renderHook(() => useCart());

	expect(result.current.cartItems.length).toBe(0);
	expect(result.current.totalQuantity).toBe(0);
	expect(result.current.totalPrice).toBe(0);
});

test('should be able to add and remove item to the cart', () => {
	const { result } = renderHook(() => useCart());
	act(() => {
		result.current.addToCart(mockProducts[0], 1);
		result.current.addToCart(mockProducts[1], 2);
	});

	expect(result.current.cartItems.length).toBe(2);
	expect(result.current.totalQuantity).toBe(3);
	expect(result.current.totalPrice).toBe(52.09);

	act(() => {
		result.current.removeItem(100);
	});

	expect(result.current.cartItems.length).toBe(1);
	expect(result.current.totalQuantity).toBe(2);
	expect(result.current.totalPrice).toBe(41.1);
});
