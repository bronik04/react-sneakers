import React, { useContext, useEffect } from 'react';
import Context from '../../context/context';

const Cart = props => {
  const { cartItems } = useContext(Context);

  useEffect(() => {
    const onEscKeydown = evt => {
      evt.key === 'Escape' && props.onCloseCart();
    };
    document.addEventListener('keydown', onEscKeydown);
    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return (
    <>
      <div
        onClick={props.onCloseCart}
        className='overlay'
      />
      <div className='drawer'>
        <div className={'d-flex justify-between mb-30'}>
          <h2>Корзина</h2>
          <img
            onClick={props.onCloseCart}
            className={'remove-btn'}
            src='/img/btn-remove.svg'
            alt='close'
            width={32}
            height={32}
          />
        </div>
        <div className='drawer__items'>
          {cartItems.map(item => (
            <div
              key={item.id}
              className='drawer__item mb-20'
            >
              <img
                src={item.imageUrl}
                alt='sneakers'
                width={70}
                height={70}
              />
              <div>
                <p className={'drawer__item-text mb-5'}>{item.title}</p>
                <b className={'drawer__item-price'}>{item.price}</b>
              </div>
              <img
                className={'remove-btn'}
                src='/img/btn-remove.svg'
                alt='remove'
                onClick={() => props.onRemove(item.id)}
              />
            </div>
          ))}
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
        <button className={'order-btn'}>Оформить заказ</button>
      </div>
    </>
  );
};

export default Cart;
