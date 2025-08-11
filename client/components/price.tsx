interface PriceProps {
	price: number;
	className?: string;
}

export default function Price({ price, className }: PriceProps) {
	const formattedPrice = (price / 100).toFixed(2);

	return (
		<p className={`${className} ? ${className}: display-6`} title="price">
			&pound;{formattedPrice}
		</p>
	);
}
