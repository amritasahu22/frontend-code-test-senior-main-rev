import { render } from '@testing-library/react';
import Navbar from '../../components/navbar';
import CartContext from '../../context/cartContext';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '../../hooks/useCart';
import { mockProducts } from '../_mocks_/mock';

test('should render product', async () => {
	const { getByAltText } = render(<Navbar />);
	expect(getByAltText('Octopus Energy Logo')).toBeInTheDocument();
	expect(getByAltText('Basket Icon')).toBeInTheDocument();
});

test('should render badge on navbar with total quantity', async () => {
	const { result } = renderHook(() => useCart());

	act(() => {
		result.current.addToCart(mockProducts[0], 1);
		result.current.addToCart(mockProducts[1], 3);
	});

	expect(result.current.totalQuantity).toBe(4);

	const { getByTitle } = render(
		<CartContext.Provider value={result.current}>
			<Navbar />
		</CartContext.Provider>
	);

	const basketItems = getByTitle('Basket items');
	expect(basketItems).toHaveTextContent('4');
});
