import { useContext, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { IProductField } from '../../types/product';
import {
	getProductData,
	getAllProductIds,
} from '../../services/productService';
import styles from '../../styles/Product.module.scss';
import Price from '../../components/price';
import Counter from '../../components/counter';
import Footer from '../../components/footer';
import CartContext from '../../context/cartContext';

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await getAllProductIds();

	const paths = data?.allProducts.map(product => ({
		params: { id: product.pk.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await getProductData(params.id as string);
	return {
		props: {
			productData: data?.allProducts[0].fields,
		},
	};
};

interface ProductProps {
	productData: IProductField;
}

export default function Product({ productData }: ProductProps) {
	const cartContext = useContext(CartContext);
	const [qty, setQty] = useState(1);

	const handleDecrement = (qty: number) => {
		setQty(qty - 1);
	};

	const handleIncrement = (qty: number) => {
		setQty(qty + 1);
	};

	return (
		<>
			<main>
				<Head>
					<title>{productData.name}</title>
				</Head>

				<section className='container-lg p-4' id='product-info'>
					<div className='row'>
						<div className='col-sm-6 col-lg-5 my-2'>
							<Image
								src={productData.img_url}
								height='100%'
								width='100%'
								layout='responsive'
								alt={productData.name}
								priority
								className='rounded-5'
								title={productData.name}
							/>
						</div>
						<div className='col-sm-6 col-lg-7 px-md-5 p-2'>
							<h1 className='display-5' title='name'>
								{productData.name}
							</h1>
							<p
								className={`text-secondary display-8 my-2 text-purpleHaze`}
								title='subTitle'
							>
								{productData.power} // Packet of {productData.quantity}
							</p>

							<div className='d-flex justify-content-between align-items-end'>
								<Price price={productData.price} />
								<Counter
									count={qty}
									label='Current quantity'
									onDecrement={handleDecrement}
									onIncrement={handleIncrement}
								/>
							</div>

							<div className='d-grid mt-4'>
								<button
									className='btn btn-primary text-siphon btn-lg rounded my-2'
									onClick={() => cartContext?.addToCart(productData, qty)}
								>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</section>

				<section className='bg-hemocyanin' id='product-description'>
					<div className='container-lg p-4'>
						<h2 className={styles.heading}>Description</h2>
						<p title='description'>{productData.description}</p>
					</div>
				</section>

				<section className='container-lg p-4' id='product-specification'>
					<h2 className={styles.heading}>Specification</h2>
					<table className={`table table-borderless ${styles.table}`}>
						<tbody>
							<tr>
								<td>Brand</td>
								<td title='brand'>{productData.brand}</td>
							</tr>
							<tr>
								<td>Item weight</td>
								<td title='weight'>{productData.weight}</td>
							</tr>
							<tr>
								<td>Dimensions</td>
								<td title='dimensions'>{`${productData.height} x ${productData.width} x ${productData.length}`}</td>
							</tr>
							<tr>
								<td>Item Model number</td>
								<td title='model'>{productData.model_code}</td>
							</tr>
							<tr>
								<td>Colour</td>
								<td title='colour'>{productData.colour}</td>
							</tr>
						</tbody>
					</table>
				</section>
			</main>
			<Footer />
		</>
	);
}
