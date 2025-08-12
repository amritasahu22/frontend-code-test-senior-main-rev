import Link from 'next/link';
import Image from 'next/image';
import CartContext from '../context/cartContext';
import { useContext } from 'react';

export default function Navbar() {
	const cartContext = useContext(CartContext);

	return (
		<header className="container-lg pt-3 d-flex justify-content-between align-items-center">
			<Link href="/" className="navbar-brand">
				<Image
					src="/octopus-logo.svg"
					alt="Octopus Energy Logo"
					width="200"
					height="40"
					title="Go to home page"
					style={{
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
			</Link>
			<nav className="navbar">
				<Link href="/cart" className="position-relative me-2">
					<Image
						src="/basket.svg"
						alt="Basket Icon"
						width="30"
						height="40"
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
					<span
						className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
						title="Basket items"
					>
						{cartContext?.totalQuantity}
					</span>
				</Link>
			</nav>
		</header>
	);
}
