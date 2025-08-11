import Link from 'next/link';
import Footer from '../components/footer';

export default function Home() {
	return (
		<main>
			<div className="home">
				<figure>
					<img
						src="https://static.octopuscdn.com/logos/logo.svg"
						alt="Octopus Energy Logo"
					/>
				</figure>
				<h1>Welcome to the Octopus Energy</h1>
				<p>
					Get started by visiting the{' '}
					<Link href="/products">PRODUCT CATALOG PAGE</Link>
				</p>
			</div>
		</main>
	);
}
