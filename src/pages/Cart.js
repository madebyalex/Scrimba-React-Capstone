import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Cart() {
  const { cartItems } = useContext(Context);
  const itemsArr = cartItems.map(item => (
    <li key={item.id}>
      <img src={item.url} alt='' />
      <h4>{item.id}</h4>
    </li>
  ));
  return (
    <main className='cart-page'>
      <h1>Check out</h1>

      {cartItems.length > 0 ? (
        <ul className='items-list'>{itemsArr}</ul>
      ) : (
        <div className='align-center'>
          <h2>Oh, there is no items yet. </h2>
          <p>
            Please <Link to='/'>go to the gallery</Link> and select something
            you like{' '}
            <span role='img' aria-label='Smile'>
              😊
            </span>
          </p>
        </div>
      )}
    </main>
  );
}

export default Cart;
