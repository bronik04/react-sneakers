import React from 'react';
import Card from '../components/Card/Card';

const Favorites = ({items, addToFavorites}) => {
  return (
    <main className='content p-40'>
        <h1>Мои закладки</h1>
      <div className={'card__wrapper'}>
        {items
          .map((item, index) => (
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
