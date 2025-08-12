import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { IProduct } from '../types/product';
import { getAllProducts } from '../services/productService';
import Price from '../components/price';
import Footer from '../components/footer';
import styles from '../styles/Catalog.module.scss';
import { useRouter } from 'next/router';

interface CatalogueProps {
	products: IProduct[];
}

// Static props for SSG
export const getStaticProps: GetStaticProps = async () => {
	try {
		const allProducts = await getAllProducts();
		// Take only first 3 products for simple grid
		const products = allProducts.slice(0, 3);

		return {
			props: {
				products,
			},
			revalidate: 60,
		};
	} catch (error) {
		console.error('Error fetching products:', error);
		return {
			props: {
				products: [],
			},
		};
	}
};

export default function Catalogue({ products }: CatalogueProps) {
	return (
		<>
			<Head>
				<title>Product Catalogue</title>
				<meta
					name="description"
					content="Browse our electrical products including LED bulbs, ceiling fans, and more."
				/>
			</Head>

			<main className="home">
				{/* Header */}
				<section className="text-white py-12 mt-4">
					<div className="max-w-7xl mx-auto text-center">
						<p className="h2 text-sm mb-4">Product Catalogue</p>
						<p className="text-sm">
							Discover our electrical products from trusted brands
						</p>
						<div className="mt-4">
							<span className="bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">
								{products.length} Products
							</span>
						</div>
					</div>
				</section>

				{/* Products Grid */}
				<section className="container-lg p-4">
					<div className="row">
						{products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</section>
			</main>
		</>
	);
}

// Product Card Component
interface ProductCardProps {
	product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
	const router = useRouter();

	return (
		<div className="col-sm-6 col-lg-4 my-2">
			<div className="card h-100 d-flex flex-column p-3">
				<Link
					href={`/products/${product.id}`}
					className="hover:cursor-pointer block w-100"
				>
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: '300px',
							marginBottom: '1rem',
						}}
					>
						<Image
							src={product.img_url}
							alt={product.name}
							fill
							className="rounded-1"
							title={product.name}
							sizes="(max-width: 400px) 100vw, 400px"
							style={{ objectFit: 'fill' }}
						/>
					</div>
				</Link>

				<h2 className={styles.heading} title="name">
					{product.name}
				</h2>
				<p title="brand">
					{product.brand} <span title="power">{product.power}</span>
				</p>
				<Price className={styles.price} price={product.price} />
				<div className="d-grid mt-2">
					<button
						className="btn btn-primary text-siphon btn-lg rounded my-2"
						onClick={() => router.push(`/products/${product.id}`)}
					>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
}
