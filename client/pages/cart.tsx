import Head from 'next/head';
import { useCart } from '../hooks/useCart';

export default function Cart() {
	const { totalPrice, totalQuantity } = useCart();

	return (
		<div>
			<Head>
				<title>Cart</title>
			</Head>
			<main>
				<h1>Cart Page</h1>
				<p>Total items:: {totalQuantity}</p>
				<p>Total Price:: {totalPrice}</p>
			</main>
		</div>
	);
}
