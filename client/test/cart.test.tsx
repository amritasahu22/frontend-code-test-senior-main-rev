import {
	render,
	fireEvent,
	within,
	getByAltText,
	getAllByRole,
} from '@testing-library/react';
import Cart from '../pages/cart';
import CartContext from '../context/cartContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../hooks/useCart';
import { mockProducts, mockProd } from './_mocks_/mock';

test('should render product', async () => {
	const { getByText } = render(<Cart />);
	expect(getByText(/Review Cart/i)).toBeInTheDocument();
	expect(getByText(/Order Summary/i)).toBeInTheDocument();
});

test('should render a message when cart is empty and show correct subTotal', async () => {
	const { result } = renderHook(() => useCart());

	expect(result.current.cartItems.length).toBe(0);

	const { queryByText, getByTitle } = render(
		<CartContext.Provider value={result.current}>
			<Cart />
		</CartContext.Provider>
	);

	const message = queryByText('Your shopping bag is empty');
	expect(message).toBeInTheDocument();
	const shopButton = queryByText('Shop now');
	expect(shopButton).toBeInTheDocument();
	const subTotal = getByTitle('subtotal');
	expect(subTotal).toHaveTextContent('0');
});

test('should not render a message when cart has items and show correct subTotal', async () => {
	const { result } = renderHook(() => useCart());

	act(() => {
		result.current.addToCart(mockProducts[0], 1);
	});

	expect(result.current.cartItems.length).toBe(1);

	const { queryByText, getByTitle } = render(
		<CartContext.Provider value={result.current}>
			<Cart />
		</CartContext.Provider>
	);

	const message = queryByText('Your shopping bag is empty');
	expect(message).not.toBeInTheDocument();
	const shopButton = queryByText('Shop now');
	expect(shopButton).not.toBeInTheDocument();
	const subTotal = getByTitle('subtotal');
	expect(subTotal).toHaveTextContent('£10.99');
});

test('should have link to product details page', () => {
	const { result } = renderHook(() => useCart());

	act(() => {
		result.current.addToCart(mockProducts[0], 1);
	});

	expect(result.current.cartItems.length).toBe(1);

	const { getByTestId } = render(
		<CartContext.Provider value={result.current}>
			<Cart />
		</CartContext.Provider>
	);

	const productDetailsUrl = getByTestId('item-link');
	expect(productDetailsUrl).toHaveAttribute('href', '/products/100');
});

test('should remove item from cart', async () => {
	const { result } = renderHook(() => useCart());

	act(() => {
		result.current.addToCart(mockProducts[0], 1);
		result.current.addToCart(mockProducts[1], 2);
	});

	expect(result.current.cartItems.length).toBe(2);

	const { getAllByTestId } = render(
		<CartContext.Provider value={result.current}>
			<Cart />
		</CartContext.Provider>
	);

	const getItems = () =>
		getAllByTestId('items').map(item => ({
			name: within(item).getByTestId('name').textContent,
			removeButton: within(item).getByText('remove'),
		}));

	const name = 'Test name 1';

	expect(getItems().find(item => item.name === name)).toBeTruthy();

	const removeButton = getItems().find(item => item.name === name).removeButton;
	fireEvent.click(removeButton);

	expect(result.current.cartItems.length).toBe(1);
});
