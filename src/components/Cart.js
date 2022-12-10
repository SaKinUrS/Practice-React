import React from 'react';

const Cart = ({ closeCart, items = [] }) => {
	return (
		<div className="overlay">
			<div className="cart">
				<h3 className="cart__title">
					Корзина
					<button className="item-cart__remove button-action" onClick={closeCart}>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
						</svg>
					</button>
				</h3>
				<div className="cart__body">
					{items.map((item) => (
						<div className="cart__item item-cart">
							<div className="item-cart__img">
								<img src={item.img} alt={item.title} />
							</div>
							<div className="item-cart__content">
								<p className="item-cart__name">{item.title}</p>
								<span className="item-cart__price">{item.price} руб.</span>
							</div>
							<button className="item-cart__remove button-action">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
								</svg>
							</button>
						</div>
					))}



				</div>
				<div className="total-block">
					<ul className="total">
						<li className="total__item">
							<span className="total__label">Итого:</span>
							<div className="total__dashed"></div>
							<h4 className="total__price">21 498 руб. </h4>
						</li>
						<li className="total__item">
							<span className="total__label">Налог 5%: </span>
							<div className="total__dashed"></div>
							<h4 className="total__price">1074 руб.  </h4>
						</li>
					</ul>
					<button className="total__order green-button">
						Оформить заказ
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
