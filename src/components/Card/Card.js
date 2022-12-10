import React, { useContext, useState } from 'react';
import styles from './Card.module.scss';
import Context from '../../context/context';

const Card = ({
  _id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  addedToFavatite = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(addedToFavatite);
  const { hasInCart } = useContext(Context);

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ title, price, imageUrl });
  };

  const togglePlusClick = () => {
    onPlus({ _id, title, price, imageUrl });
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
          src={
            hasInCart(_id) ? './img/btn-checked.svg' : '/img/btn-plus.svg'
          }
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
