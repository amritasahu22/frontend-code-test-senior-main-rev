import { render, fireEvent } from '@testing-library/react';
import Product from '../pages/products/[id]';
import { mockProducts } from './_mocks_/mock';
import CartContext from '../context/cartContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../hooks/useCart';

test('should render product', async () => {
	const { getByTitle } = render(<Product productData={mockProducts[0]} />);
	expect(getByTitle('Test name 1')).toBeInTheDocument();
	expect(getByTitle('name')).toHaveTextContent('Test name 1');
	expect(getByTitle('subTitle')).toHaveTextContent('25W // Packet of 4');
	expect(getByTitle('price')).toHaveTextContent('£10.99');
	expect(getByTitle('description')).toHaveTextContent('Test description');
	expect(getByTitle('brand')).toHaveTextContent('Test brand 1');
	expect(getByTitle('weight')).toHaveTextContent('77');
	expect(getByTitle('dimensions')).toHaveTextContent(`12.6 x 6.2 x 6.2`);
	expect(getByTitle('model')).toHaveTextContent('E27 ES');
	expect(getByTitle('colour')).toHaveTextContent('Cool daylight');
});

test('should be able to increase and decrease product quantity', async () => {
	const { getByText, getByTitle } = render(
		<Product productData={mockProducts[0]} />
	);

	const increaseQuantity = getByText('+');

	const currentQuantity = getByTitle('Current quantity');
	expect(currentQuantity).toHaveTextContent('1');

	fireEvent.click(increaseQuantity);
	expect(currentQuantity).toHaveTextContent('2');

	const decreaseQuantity = getByText('-');

	fireEvent.click(decreaseQuantity);
	expect(currentQuantity).toHaveTextContent('1');
});

test('should be able to add items to the cart context', async () => {
	const { result } = renderHook(() => useCart());

	const { getByText, getByTitle } = render(
		<CartContext.Provider value={result.current}>
			<Product productData={mockProducts[0]} />
		</CartContext.Provider>
	);

	expect(result.current.totalQuantity).toBe(0);

	const increaseQuantity = getByText('+');
	const currentQuantity = getByTitle('Current quantity');

	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);

	expect(currentQuantity).toHaveTextContent('4');

	const addToBasketElement = getByText('Add to cart');
	fireEvent.click(addToBasketElement);

	expect(result.current.totalQuantity).toBe(4);
});
