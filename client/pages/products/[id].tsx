import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { IProductField } from '../../types/product';
import {
	getProductData,
	getAllProductIds,
} from '../../services/productService';

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
	console.log('Product::', productData);

	return (
		<main>
			<Head>
				<title>{productData.name}</title>
			</Head>
			<div>PRODUCT DETAIL PAGE</div>
		</main>
	);
}
