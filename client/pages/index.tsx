import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div className="home">
				<h1>Welcome to the Octopus Energy</h1>
				<p>
					Get started by visiting the{' '}
					<Link href="/products">PRODUCT CATALOG PAGE</Link>
				</p>
			</div>
		</main>
	);
}
