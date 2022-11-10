import React from 'react';

const Header = (props) => {
  return (
    <header className={'d-flex justify-between align-center p-40'}>
      <div className={'d-flex align-center'}>
        <img
          src="/img/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <div>
          <h3 className={'text-uppercase'}>REACT SNEAKERS</h3>
          <p className={'opacity-5'}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={'d-flex align-center'}>
        <li className={'mr-30'}>
          <img
            onClick={props.onClickCart}
            src="/img/cart.svg"
            alt="logo"
            width={18}
            height={18}
            className={'cu-p'}
          />
          <span>1205 руб.</span>
        </li>
        <li className={'d-flex align-center'}>
          <img
            src="/img/user.svg"
            alt="logo"
            width={18}
            height={18}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
