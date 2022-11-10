import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    fetch('https://60d62397943aa60017768e77.mockapi.io/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  const onPlus = (obj) => {
    setCartItems(prevState => [...prevState, obj]);
  }


  return (
    <div className="wrapper clear">
      {cartOpened &&
        <Cart
          onCloseCart={() => setCartOpened(false)}
          cartItems={cartItems}
        />
      }
      <Header onClickCart={() => setCartOpened(true)}/>
      <main className="content p-40">
        <div className={'d-flex align-center justify-between mb-40'}>
          <h1 className={''}>Все кроссовки</h1>
          <div className={'search-block d-flex'}>
            <img src="/img/search.svg" alt="search"/>
            <input placeholder={'Поиск...'} type="text"/>
          </div>
        </div>
        <div className={'card__wrapper'}>
          {items.map(item =>
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={onPlus}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
