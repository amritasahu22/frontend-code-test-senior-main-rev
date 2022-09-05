import Link from 'next/link';
import CartContext from '../context/cartContext';
import { useContext } from 'react';

export default function Navbar() {
	const cartContext = useContext(CartContext);

	return (
		<header className='container-lg pt-3 d-flex justify-content-between align-items-center'>
			<Link href='/'>
				<a className='navbar-brand'>
					<img
						src='/octopus-logo.svg'
						alt='Octopus Energy Logo'
						width='200'
						height='40'
						title='Go to home page'
					/>
				</a>
			</Link>
			<nav className='navbar'>
				<Link href='/cart'>
					<a className='position-relative'>
						<img src='/basket.svg' alt='Basket Icon' width='35' height='40' />
						<span
							className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'
							title='Basket items'
						>
							{cartContext?.totalQuantity}
						</span>
					</a>
				</Link>
			</nav>
		</header>
	);
}
