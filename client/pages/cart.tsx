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
			<main className='py-2 bg-siphon' style={{ minHeight: '100vh' }}>
				<Head>
					<title>Cart</title>
				</Head>
				<section className='container-lg'>
					<h1 className='mb-1 px-2'>Cart</h1>
					<div className='row'>
						<div className='col-md-8 py-4'>
							<h2 className='mb-2 px-2'>Review Cart</h2>
							{!cartContext?.cartItems.length && (
								<div className='px-2 py-4'>
									<p title='message'>Your shopping bag is empty</p>
									<Link href='/products'>
										<a className='btn btn-primary btn-lg my-4 text-siphon'>
											Shop now
										</a>
									</Link>
								</div>
							)}
							<ul className='list-group'>
								{cartContext?.cartItems.map((item, index) => (
									<li
										key={index}
										className='list-group-item bg-siphon text-ice border-0 py-4'
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
											<div className='container'>
												<div className='ms-3 fs-6 row'>
													<div className='col-sm-6'>
														<Link href={`/products/${item.id}`}>
															<a className='text-decoration-none text-ice'>
																<h2 className='fs-4' data-testid='name'>
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
													<div className='col-sm-6'>
														<button
															className='btn btn-primary btn-sm text-siphon'
															onClick={() => cartContext?.removeItem(item.id)}
														>
															remove
														</button>
													</div>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className='col-md-4 px-4 py-4'>
							<h2 className='mb-4 '>Order Summary</h2>
							<div className='d-flex'>
								<label className='flex-fill'>Total Price: </label>
								<p className='flex-fill' title='subtotal'>
									&pound;{subTotal}
								</p>
							</div>

							<div className='d-grid my-4'>
								<button className='btn btn-primary btn-lg text-siphon'>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
