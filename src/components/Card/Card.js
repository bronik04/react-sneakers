import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl, onPlus, onFavorite, addedToFavatite = false }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(addedToFavatite);

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ title, price, imageUrl });
  }

  const togglePlusClick = () => {
    setIsAdded(!isAdded);
    onPlus({ title, price, imageUrl });
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onFavoriteClick}
          src={!isFavorite ? '/img/heart.png' : '/img/heart_active.svg'}
          alt='heart'
        />
      </div>
      <img
        className={styles.img_main}
        src={imageUrl}
        alt='sneakers'
        width={133}
        height={112}
      />
      <p>{title}</p>
      <div className={'d-flex justify-between align-center'}>
        <div className={'d-flex flex-column'}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          src={isAdded ? './img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt='plus'
          width={32}
          height={32}
          className={styles.plus}
          onClick={togglePlusClick}
        />
      </div>
    </div>
  );
};

export default Card;
