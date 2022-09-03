import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
