import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Navbar from '../components/navbar';
import { CartContext, useCartState } from '../hooks/useCart';

function MyApp({ Component, pageProps }: AppProps) {
	const cart = useCartState();

	return (
		<CartContext.Provider value={cart}>
			<Navbar />
			<Component {...pageProps} />
		</CartContext.Provider>
	);
}

export default MyApp;
