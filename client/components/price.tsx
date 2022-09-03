interface PriceProps {
	price: number;
}

export default function Price({ price }: PriceProps) {
	const formattedPrice = (price / 100).toFixed(2);

	return (
		<p className='display-6' title='Price'>
			&pound;{formattedPrice}
		</p>
	);
}
