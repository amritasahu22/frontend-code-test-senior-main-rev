import { CartItem } from '../../types/cart';
import { IProductField } from '../../types/product';

export const mockProducts: IProductField[] = [
	{
		id: 100,
		name: 'Test name 1',
		power: '25W',
		description: 'Test description',
		price: 1099,
		quantity: 4,
		brand: 'Test brand 1',
		weight: 77,
		height: 12.6,
		width: 6.2,
		length: 6.2,
		model_code: 'E27 ES',
		colour: 'Cool daylight',
		img_url: 'https://test1.png',
	},
	{
		id: 101,
		name: 'Test name 2',
		power: '55W',
		description: 'Test description 2',
		price: 2055,
		quantity: 2,
		brand: 'Test brand 2',
		weight: 30,
		height: 10,
		width: 10,
		length: 5,
		model_code: 'E27 ES',
		colour: 'Cool daylight',
		img_url: 'https://test2.png',
	},
];

export const mockCartItems: CartItem[] = [
	{
		id: 100,
		name: 'Test name 1',
		power: '25W',
		pricePerUnit: 10.99,
		quantity: 4,
		brand: 'Test brand 1',
		img_url: 'https://test1.png',
		qty: 1,
	},
	{
		id: 101,
		name: 'Test name 2',
		power: '55W',
		pricePerUnit: 20.55,
		quantity: 2,
		brand: 'Test brand 2',
		img_url: 'https://test2.png',
		qty: 2,
	},
];
