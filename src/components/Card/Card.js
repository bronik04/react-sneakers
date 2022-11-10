import React, {useState} from 'react';
import styles from './Card.module.scss';

const Card = ({onPlus ,...props}) => {
  const [isAdded, setIsAdded] = useState(false);

  const togglePlusClick = () => {
    onPlus(props);
    setIsAdded(!isAdded);
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart.png" alt="heart"/>
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
        <img
          src={isAdded ? './img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
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
