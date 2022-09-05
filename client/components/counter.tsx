import styles from '../styles/components/Counter.module.scss';

interface CounterProps {
	count: number;
	label: string;
	onDecrement(count: number): void;
	onIncrement(count: number): void;
}

export default function Counter({
	count,
	label,
	onDecrement,
	onIncrement,
}: CounterProps) {
	const disabledClasses = () => {
		let classes = 'btn btn-primary btn-lg rounded-4 text-siphon';
		return (classes +=
			count === 1 || count === 10 ? 'btn-plum' : 'btn-primary');
	};

	return (
		<div className='text-center mt-3'>
			<p className={styles.qtyLabel}>Qty</p>
			<button
				className={disabledClasses()}
				disabled={count === 1}
				onClick={() => onDecrement(count)}
				data-testid='decrement'
			>
				-
			</button>
			<span className='mx-2 fs-2' title={label}>
				{count}
			</span>
			<button
				className={disabledClasses()}
				onClick={() => onIncrement(count)}
				disabled={count === 10}
			>
				+
			</button>
		</div>
	);
}
