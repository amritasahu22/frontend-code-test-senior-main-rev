import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import Footer from '../components/footer';
import CartContext from '../context/cartContext';

export default function Cart() {
	const cartContext = useContext(CartContext);
	const subTotal = Number(cartContext?.totalPrice).toFixed(2);

	return (
		<>
			<main className='py-2 bg-siphon'>
				<Head>
					<title>Cart</title>
				</Head>
				<section className='container-lg'>
					<div className='row'>
						<div className='col-md-8 py-4'>
							<h1 className='mb-2 px-2'>Review Cart</h1>
							{!cartContext?.cartItems.length && (
								<p className='px-2' title='message'>
									There is no item in your cart
								</p>
							)}
							<ul className='list-group'>
								{cartContext?.cartItems.map((item, index) => (
									<li
										key={index}
										className='list-group-item bg-siphon text-ice border-0'
										data-testid='items'
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
															<h2 className='fs-5' data-testid='name'>
																{item.name}
															</h2>
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
														onClick={() => cartContext?.removeItem(item.id)}
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
								<p className='flex-fill' title='subtotal'>
									&pound;{subTotal}
								</p>
							</div>

							<div className='d-grid my-4'>
								<button className='btn btn-primary btn-lg'>Checkout</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
