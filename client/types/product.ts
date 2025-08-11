export interface IProduct {
	id: number;
	name: string;
	power: string;
	description: string;
	price: number;
	quantity: number;
	brand: string;
	weight: number;
	height: number;
	width: number;
	length: number;
	model_code: string;
	colour: string;
	img_url: string;
	created_at?: string;
	updated_at?: string;
}

/**
 * GraphQL Collection Response structure
 */
export interface IProductsCollection {
	edges: Array<{
		node: IProduct;
	}>;
	pageInfo?: {
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor?: string;
		endCursor?: string;
	};
}

/**
 * GraphQL Response wrapper
 */
export interface IProductsResponse {
	productsCollection: IProductsCollection;
}

/**
 * Single Product Response
 */
export interface IProductResponse {
	productsCollection: {
		edges: Array<{
			node: IProduct;
		}>;
	};
}
