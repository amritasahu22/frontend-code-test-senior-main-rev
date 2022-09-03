import { render } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
	it('should render', () => {
		const { getByText } = render(<Footer />);
		expect(getByText(/Octopus Energy Ltd is/)).toBeInTheDocument();
	});
});
