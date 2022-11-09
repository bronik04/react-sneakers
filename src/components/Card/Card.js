import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart.svg" alt="heart"/>
      </div>
      <img
        className={styles.img_main}
        src={props.imageUrl}
        alt="sneakers"
        width={133}
        height={112}
      />
      <p>{props.title}</p>
      <div className={'d-flex justify-between align-center'}>
        <div className={'d-flex flex-column'}>
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button
          className={styles.button}
        >
          <img
            src="/img/plus.svg"
            alt="plus"
            width={11}
            height={11}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
