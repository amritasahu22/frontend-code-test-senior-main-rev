import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='container-lg'>
				<Link href='/'>
					<a className='navbar-brand'>
						<img
							src='/octopus-logo.svg'
							alt='Octopus Energy Logo'
							width='200'
							height='50'
							title='Go to home page'
						/>
					</a>
				</Link>
				<Link href='/cart'>
					<a>
						<img src='/basket.svg' alt='Basket Icon' width='40' height='50' />
					</a>
				</Link>
			</div>
		</nav>
	);
}
