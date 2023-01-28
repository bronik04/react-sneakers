import React, { useContext } from 'react';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import Context from "../context/context";

const Favorites = ({addToFavorites}) => {
  const { favorites } = useContext(Context);
  return (
    <main className='content p-40'>
      <Link to={'/favorites/cart'}>
        <h1>Мои закладки</h1>
      </Link>
      <div className={'card__wrapper'}>
        {favorites.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            addedToFavatite={true}
          />
        ))}
      </div>
    </main>
  );
};

export default Favorites;
