import { gql } from '@apollo/client';
import client from '../apollo-client';
import { IProduct } from '../types/product';

interface ProductsData {
	allProducts: IProduct[];
}

interface ProductsVars {
	pk: number;
}

/** NOTE:: Data is null when trying to retrieve Product by Id or filter ID due to mock graphql issue **/
// export const GET_PRODUCT_QUERY_BY_ID = gql`
// 	query getProducts($id: ID) {
// 		Product(id: $id) {
// 			fields
// 		}
// 	}
// `;

/** Using Primary key as unique key */
export const GET_ALL_PRODUCTS_QUERY = gql`
	query getAllProducts {
		allProducts {
			pk
		}
	}
`;

export const GET_PRODUCT_QUERY = gql`
	query getProducts($pk: Int) {
		allProducts(filter: { pk: $pk }) {
			fields
		}
	}
`;

export async function getProductData(id: string) {
	const pk: number = Number(id);
	return await client.query<ProductsData, ProductsVars>({
		query: GET_PRODUCT_QUERY,
		variables: { pk },
	});
}

export async function getAllProductIds() {
	return await client.query<ProductsData>({
		query: GET_ALL_PRODUCTS_QUERY,
	});
}
