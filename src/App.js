import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Context from './context/context';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getData() {
      const resItem = await axios.get(
        'https://636e00a4182793016f333290.mockapi.io/items',
      );
      const resCart = await axios.get(
        'https://636e00a4182793016f333290.mockapi.io/cart',
      );
      const resFavorites = await axios.get(
        'https://636e00a4182793016f333290.mockapi.io/favorites',
      );

      setItems(resItem.data);
      setCartItems(resCart.data);
      setFavorites(resFavorites.data);
    }

    getData();
  }, []);

  const addToCart = obj => {
    try {
      if (cartItems.find(item => item._id === obj._id)) {
        setCartItems(prevState =>
          prevState.filter(item => item._id !== obj._id),
        );
      } else {
        // axios.post('https://636e00a4182793016f333290.mockapi.io/cart', obj);
        setCartItems(prevState => [...prevState, obj]);
      }
    } catch (error) {
      alert(error);
    }
  };
  const hasInCart = id => cartItems.some(item => item._id === id);
  const addToFavorites = obj => {
    if (favorites.find(item => item.id === obj.id)) {
      setFavorites(prevState =>
        prevState.filter(item => item.id !== obj.id),
      );
    } else {
      setFavorites(prevState => [...prevState, obj]);
    }
    // axios.post(`https://636e00a4182793016f333290.mockapi.io/favorites`, obj);
  };
  const removeCartItem = _id => {
    // axios.delete(`https://636e00a4182793016f333290.mockapi.io/cart/${id}`);
    setCartItems(prevState => prevState.filter(item => item._id !== _id));
  };

  return (
    <Context.Provider value={{ items, cartItems, favorites, hasInCart }}>
      <div className='wrapper clear'>
        <Header onClickCart={() => setCartOpened(true)} />
        {cartOpened && (
          <Cart
            onCloseCart={() => setCartOpened(false)}
            onRemove={removeCartItem}
          />
        )}

        <Routes>
          <Route
            path={'/'}
            element={
              <Home
                onPlus={addToCart}
                addToFavorites={addToFavorites}
              />
            }
          />
          <Route
            path={'/favorites'}
            element={<Favorites addToFavorites={addToFavorites} />}
          ></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
