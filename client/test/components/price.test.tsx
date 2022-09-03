import { render } from '@testing-library/react';
import Price from '../../components/price';

test('should be able to increase and decrease product quantity', async () => {
	const mockPrice = 1189;

	const { getByTitle } = render(<Price price={mockPrice} />);

	const price = getByTitle('Price');
	expect(price).toHaveTextContent('£11.89');
});
