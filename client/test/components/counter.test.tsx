import { render } from '@testing-library/react';
import Counter from '../../components/counter';

const handleClick = jest.fn();

describe('Counter', () => {
	test('should render', () => {
		const { getByText, getByTitle, getByTestId } = render(
			<Counter
				count={1}
				label='test-label'
				onIncrement={handleClick}
				onDecrement={handleClick}
			/>
		);
		const currentQuantity = getByTitle('test-label');
		expect(currentQuantity).toHaveTextContent('1');
	});
});
