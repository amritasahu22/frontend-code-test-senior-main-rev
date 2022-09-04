import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import { useCart } from '../hooks/useCart';

export default function Cart() {
	const { cartItems, totalPrice, removeItem } = useCart();
	const subTotal = Number(totalPrice).toFixed(2);

	return (
		<>
			<main className='py-2 bg-siphon'>
				<Head>
					<title>Cart</title>
				</Head>
				<div className='container-lg'>
					<div className='row'>
						<div className='col-md-8 py-4'>
							<h2 className='mb-2 px-2'>Review Cart</h2>
							{!cartItems.length && (
								<p className='px-2'>There is no item in your cart</p>
							)}
							<ul className='list-group'>
								{cartItems.map(item => (
									<li
										key={item.id}
										className='list-group-item bg-siphon text-ice border-0'
									>
										<div className='d-flex'>
											<Link href={`/products/${item.id}`}>
												<a className='text-decoration-none'>
													<img
														src={item.img_url}
														className='rounded-2 mt-2'
														alt={item.name}
														title='image'
														height='100px'
													/>
												</a>
											</Link>
											<div className='ms-3 fs-6 flex-fill d-sm-flex'>
												<div className='me-3 flex-fill'>
													<Link href={`/products/${item.id}`}>
														<a className='text-decoration-none text-ice'>
															<h2 className='fs-5'>{item.name}</h2>
														</a>
													</Link>

													<p className='text-purpleHaze mb-2'>
														{item.power} // Packet of {item.quantity}
													</p>

													<p className='mb-2'>Qty: {item.qty}</p>
													<p className='mb-2'>
														&pound;{(item.pricePerUnit * item.qty).toFixed(2)}
													</p>
												</div>
												<div className='flex-fill'>
													<button
														className='btn btn-primary btn-sm'
														onClick={() => removeItem(item.id)}
													>
														remove
													</button>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className='col-md-4 px-4 py-4'>
							<h2 className='mb-4'>Order Summary</h2>
							<div className='d-flex'>
								<label className='flex-fill'>Total Price: </label>
								<p className='flex-fill'>&pound;{subTotal}</p>
							</div>

							<div className='d-grid my-4'>
								<button className='btn btn-primary btn-lg'>Checkout</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
