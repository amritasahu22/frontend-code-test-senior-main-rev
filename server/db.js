module.exports = {
	products: [
		{
			model: 'products.product',
			pk: 1,
			fields: {
				id: 1,
				name: 'Energy Saving Light Bulb',
				power: '9W',
				description:
					'Eco-friendly spiral CFL light bulb, ideal for home and office use. Provides soft white light and saves energy.',
				price: 1299,
				quantity: 10,
				brand: 'Philips',
				weight: 65,
				height: 11,
				width: 5,
				length: 5,
				model_code: 'CFL-9W-WHT',
				colour: 'Soft White',
				img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
			},
		},
		{
			model: 'products.product',
			pk: 2,
			fields: {
				id: 2,
				name: 'Premium LED Light Bulb',
				power: '12W',
				description:
					'High-efficiency LED bulb with warm daylight color temperature. Long-lasting and energy-saving lighting solution.',
				price: 1599,
				quantity: 5,
				brand: 'Osram',
				weight: 70,
				height: 10,
				width: 6,
				length: 6,
				model_code: 'LED-12W-WDL',
				colour: 'Warm Daylight',
				img_url:
					'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
			},
		},
		{
			model: 'products.product',
			pk: 3,
			fields: {
				id: 3,
				name: 'Ceiling Fan with Remote',
				power: '60W',
				description:
					'Modern ceiling fan with three-speed remote control and energy-efficient motor. Quiet operation and sleek design.',
				price: 4999,
				quantity: 3,
				brand: 'Lumen',
				weight: 3000,
				height: 40,
				width: 52,
				length: 52,
				model_code: 'CF-60W-REM',
				colour: 'Matte White',
				img_url:
					'https://images.pexels.com/photos/3935340/pexels-photo-3935340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
			},
		},
	],
};
