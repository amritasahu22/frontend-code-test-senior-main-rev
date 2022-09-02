export interface IProduct {
	pk: number;
	fields?: IProductField;
}

export interface IProductField {
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
}
