import { render } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
	test('should render', () => {
		const { getByText } = render(<Footer />);
		expect(getByText(/Octopus Energy Ltd is/)).toBeInTheDocument();
	});
});
