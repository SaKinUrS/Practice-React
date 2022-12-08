import React from 'react';

const Card = () => {
	return (
		<div className="card">
			<div className="card__img">
				<button className="card-favourite button-action">
					<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7 13L5.985 12.0649C2.38 8.7564 0 6.5673 0 3.89646C0 1.70736 1.694 0 3.85 0C5.068 0 6.237 0.573842 7 1.47357C7.763 0.573842 8.932 0 10.15 0C12.306 0 14 1.70736 14 3.89646C14 6.5673 11.62 8.7564 8.015 12.0649L7 13Z" />
					</svg>
				</button>
				<img src="/img/sneakers/01.png" alt="" />
			</div>
			<div className="card__content">
				<div className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</div>
				<div className="card__price price-card">
					<div className="price-card__body">
						<span className="price-card__label">Цена:</span>
						<div className="price-card__cost">12 999 руб.</div>
					</div>
					<button className="price-card__plus button-action">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
