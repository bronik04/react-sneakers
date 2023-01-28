import React from 'react';
import { Link } from 'react-router-dom';
import { useTotalPrice } from '../../hooks/total-price';

const Header = props => {
  const price = useTotalPrice();
  return (
    <header className={'d-flex justify-between align-center p-40'}>
      <div className={'d-flex align-center'}>
        <img
          src='/img/logo.svg'
          alt='logo'
          width={40}
          height={40}
        />
        <Link to={'/'}>
          <div>
            <h3 className={'text-uppercase'}>REACT SNEAKERS</h3>
            <p className={'opacity-5'}>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className={'d-flex align-center'}>
        <li
          className={'mr-30 cu-p'}
          onClick={props.onClickCart}
        >
          <img
            src='/img/cart.svg'
            alt='logo'
            width={18}
            height={18}
          />
          <span>{price} руб.</span>
        </li>
        <li>
          <Link
            className={'d-flex align-center'}
            to={'favorites'}
          >
            <img
              src='/img/favorite.svg'
              alt='heart'
              width={18}
              height={18}
            />
          </Link>
        </li>
        {/*<li className={'d-flex align-center'}>*/}
        {/*  <img*/}
        {/*    src='/img/user.svg'*/}
        {/*    alt='logo'*/}
        {/*    width={18}*/}
        {/*    height={18}*/}
        {/*  />*/}
        {/*</li>*/}
      </ul>
    </header>
  );
};

export default Header;
