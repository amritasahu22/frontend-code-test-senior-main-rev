import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Navbar from '../components/navbar';
import CartContext from '../context/cartContext';
import { useCart } from '../hooks/useCart';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
	const cart = useCart();
	return (
		<CartContext.Provider value={cart}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</CartContext.Provider>
	);
}

export default MyApp;
