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

			<div className="min-h-screen flex flex-col">
				<main className="flex-1">
					{/* Header */}
					<section className="bg-blue-600 text-white py-12">
						<div className="max-w-7xl mx-auto px-4 text-center">
							<h1 className="text-xl mb-4">Product Catalogue</h1>
							<p className="text-xl">
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
				<Footer />
			</div>
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
			<div className="relative bg-gray-50 p-4 h-64 flex items-center justify-center">
				<Link href={`/products/${product.id}`}>
					<a className="hover:cursor-pointer block">
						<Image
							src={product.img_url}
							height={100}
							width={100}
							layout="responsive"
							alt={product.name}
							priority
							className="rounded-5"
							title={product.name}
						/>
					</a>
				</Link>
				<h2 className={styles.heading} title="name">
					{product.name}
				</h2>
				<p title="brand">
					{product.brand} <span title="power">{product.power}</span>
				</p>
				<Price className={styles.price} price={product.price} />
				<div className="d-grid mt-4">
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
