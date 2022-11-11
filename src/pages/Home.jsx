import React from 'react';
import Card from '../components/Card/Card';

const Home = ({
  searchValue,
  onSearchInput,
  items,
  onPlus,
  addToFavorites,
}) => {
  return (
    <main className='content p-40'>
      <div className={'d-flex align-center justify-between mb-40'}>
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className={'search-block d-flex'}>
          <img
            src='/img/search.svg'
            alt='search'
          />
          <input
            onChange={onSearchInput}
            placeholder={'Поиск...'}
            type='text'
          />
        </div>
      </div>
      <div className={'card__wrapper'}>
        {items
          .filter(item =>
            item.title.toUpperCase().includes(searchValue.toUpperCase()),
          )
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={onPlus}
              onFavorite={addToFavorites}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
