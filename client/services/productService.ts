import { gql } from '@apollo/client';
import client from '../lib/apollo-client';
import {
	IProduct,
	IProductsResponse,
	IProductResponse,
} from '../types/product';

interface ProductsData {
	productsCollection: {
		edges: Array<{
			node: IProduct;
		}>;
	};
}

interface ProductVars {
	id: number;
}

interface ProductsIdsData {
	productsCollection: {
		edges: Array<{
			node: {
				id: number;
			};
		}>;
	};
}

/**
 * Get all products with full details
 */
export const GET_ALL_PRODUCTS_QUERY = gql`
	query getAllProducts {
		productsCollection {
			edges {
				node {
					id
					name
					power
					description
					price
					quantity
					brand
					weight
					height
					width
					length
					model_code
					colour
					img_url
				}
			}
		}
	}
`;

/**
 * Get single product by ID
 */
export const GET_PRODUCT_QUERY = gql`
	query getProduct($id: Int!) {
		productsCollection(filter: { id: { eq: $id } }) {
			edges {
				node {
					id
					name
					power
					description
					price
					quantity
					brand
					weight
					height
					width
					length
					model_code
					colour
					img_url
				}
			}
		}
	}
`;

/**
 * Get all product IDs only (for static generation)
 */
export const GET_ALL_PRODUCT_IDS_QUERY = gql`
	query GetAllProductIds {
		productsCollection {
			edges {
				node {
					id
				}
			}
		}
	}
`;

/**
 * Get product data by ID
 */
export async function getProductData(id: string) {
	const productId: number = Number(id);
	try {
		const result = await client.query<ProductsData, ProductVars>({
			query: GET_PRODUCT_QUERY,
			variables: { id: productId },
			fetchPolicy: 'cache-first',
		});

		const product = result.data?.productsCollection?.edges?.[0]?.node;
		return product || null;
	} catch (error) {
		console.error('Error fetching product:', error);
		throw new Error(`Failed to fetch product with ID ${id}`);
	}
}

/**
 * Get all products data
 */
export async function getAllProducts() {
	try {
		const result = await client.query<ProductsData>({
			query: GET_ALL_PRODUCTS_QUERY,
			fetchPolicy: 'cache-first',
		});

		const products =
			result.data?.productsCollection?.edges?.map(edge => edge.node) || [];
		return products;
	} catch (error) {
		console.error('Error fetching all products:', error);
		throw new Error('Failed to fetch products');
	}
}

/**
 * Get all product IDs
 */
export async function getAllProductIds(): Promise<number[]> {
	try {
		const result = await client.query<ProductsIdsData>({
			query: GET_ALL_PRODUCT_IDS_QUERY,
			fetchPolicy: 'cache-first',
		});

		const ids =
			result.data?.productsCollection?.edges?.map(edge => edge.node.id) || [];
		return ids;
	} catch (error) {
		console.error('Error fetching product IDs:', error);
		throw new Error('Failed to fetch product IDs');
	}
}
