import React from 'react';

const Cart = () => {
  return (
    <div style={{display: "none"}} className="overlay">
      <div className="drawer">
        <div className={'d-flex justify-between mb-30'}>
          <h2>Корзина</h2>
          <img
            className={'remove-btn'}
            src="/img/btn-remove.svg"
            alt="close"
            width={32}
            height={32}
          />
        </div>
        <div className="drawer__items">
          <div className="drawer__item mb-20">
            <img
              src="/img/sneakers/1.jpg"
              alt="sneakers"
              width={70}
              height={70}
            />
            <div>
              <p className={'drawer__item-text mb-5'}>Мужские Кроссовки Nike Air Max 270</p>
              <b className={'drawer__item-price'}>12 999 руб.</b>
            </div>
            <img
              className={'remove-btn'}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>
        <ul className={'price-list'}>
          <li className={'d-flex justify-between mb-20'}>
            <span className={'text'}>Итого:</span>
            <b className={'price'}>21 498 руб. </b>
          </li>
          <li className={'d-flex justify-between'}>
            <span>Налог 5%:</span>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button
          className={'order-btn'}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Cart;
