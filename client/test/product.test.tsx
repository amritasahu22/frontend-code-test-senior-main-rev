import { render, fireEvent } from '@testing-library/react';
import Product from '../pages/products/[id]';

const mockProduct = {
	id: 1,
	name: 'Energy saving light bulb',
	power: '25W',
	description: 'Test description',
	price: 100,
	quantity: 4,
	brand: 'Philips',
	weight: 77,
	height: 12.6,
	width: 6.2,
	length: 6.2,
	model_code: 'E27 ES',
	colour: 'Cool daylight',
	img_url: 'https://test.png',
};

test('should render product', async () => {
	const { getByTitle } = render(<Product productData={mockProduct} />);
	expect(getByTitle('image')).toBeInTheDocument();
	expect(getByTitle('name')).toHaveTextContent('Energy saving light bulb');
	expect(getByTitle('subTitle')).toHaveTextContent('25W // Packet of 4');
	expect(getByTitle('description')).toHaveTextContent('Test description');
	expect(getByTitle('brand')).toHaveTextContent('Philips');
	expect(getByTitle('weight')).toHaveTextContent('77');
	expect(getByTitle('dimensions')).toHaveTextContent(`12.6 x 6.2 x 6.2`);
	expect(getByTitle('model')).toHaveTextContent('E27 ES');
	expect(getByTitle('colour')).toHaveTextContent('Cool daylight');
});

test('should be able to increase and decrease product quantity', async () => {
	const { getByText, getByTitle, getByTestId } = render(
		<Product productData={mockProduct} />
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

test('should be able to add items to the basket', async () => {
	const { getByText, getByTitle } = render(
		<Product productData={mockProduct} />
	);

	const increaseQuantity = getByText('+');

	const currentQuantity = getByTitle('Current quantity');

	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);
	fireEvent.click(increaseQuantity);

	expect(currentQuantity).toHaveTextContent('4');

	const addToBasketElement = getByText('Add to cart');
	fireEvent.click(addToBasketElement);

	const basketItems = getByTitle('Basket items');
	expect(basketItems).toHaveTextContent('4');
});
