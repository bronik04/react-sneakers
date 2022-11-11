import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get('https://60d62397943aa60017768e77.mockapi.io/items')
      .then(res => setItems(res.data));
    axios
      .get('https://60d62397943aa60017768e77.mockapi.io/favorites')
      .then(res => setFavorites(res.data));
    axios
      .get('https://60d62397943aa60017768e77.mockapi.io/cart')
      .then(res => setCartItems(res.data));
  }, []);

  const onPlus = obj => {
    axios.post('https://60d62397943aa60017768e77.mockapi.io/cart', obj);
    setCartItems(prevState => [...prevState, obj]);
  };

  const addToFavorites = obj => {
    axios.post(`https://60d62397943aa60017768e77.mockapi.io/favorites`, obj);
    setFavorites(prevState => [...prevState, obj]);
  };
  const removeCartItem = id => {
    axios.delete(`https://60d62397943aa60017768e77.mockapi.io/cart/${id}`);
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  };

  const onSearchInput = evt => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className='wrapper clear'>
      {cartOpened && (
        <Cart
          onCloseCart={() => setCartOpened(false)}
          cartItems={cartItems}
          onRemove={removeCartItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path={'/'}
          element={
            <Home
              searchValue={searchValue}
              onSearchInput={onSearchInput}
              items={items}
              onPlus={onPlus}
              addToFavorites={addToFavorites}
            />
          }
        />
        <Route
          path={'/favorites'}
          element={
            <Favorites
              items={favorites}
              addToFavorites={addToFavorites}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
