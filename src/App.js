import { useState, useEffect } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";



function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)
	const [searchValue, setSearchValue] = useState('')


	useEffect(() => {
		fetch('https://639373a7ab513e12c50ee7dc.mockapi.io/items').then(res => {
			return res.json()
		}).then(json => {
			setItems(json)
		})
	}, []);

	const addItemToCart = (obj) => {
		setCartItems(prev => [...prev, obj])
	}

	const onChangeSearch = (event) => {
		setSearchValue(event.target.value)
	}


	return (
		<div className="wrapper">
			{cartOpened && < Cart items={cartItems} closeCart={() => { setCartOpened(false) }} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div section className="catalog">
				<div className="catalog__container">
					<div className="catalog__header">
						<h3 className="catalog__title">{searchValue ? `Поиск по шаблону: "${searchValue}"` : 'Все кроссовки'}</h3>
						<div className="search">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
							</svg>
							<input onChange={onChangeSearch} value={searchValue} type="text" placeholder="Поиск..." />
							{searchValue && <button onClick={() => setSearchValue('')} className="item-cart__remove button-action remove-input">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
								</svg>
							</button>}
						</div>
					</div>
					<div className="catalog__body">
						{items
							.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
							.map(sneaker => (
								<Card
									key={sneaker.title}
									title={sneaker.name}
									price={sneaker.price}
									img={sneaker.img}
									onClickPlus={addItemToCart}
									onClickFavourite={(obj) => addItemToCart(obj)} />
							))

						}

					</div>
				</div>
			</div>
		</div >
	);
}

export default App;
