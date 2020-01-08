import React, { useContext, useRef } from 'react';
import { Context } from '../Context';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const cartItem = useRef();

  return (
    <li key={item.id} ref={cartItem}>
      <button
        onClick={() => {
          cartItem.current.classList.add('removed');

          setTimeout(() => removeFromCart(item.id), 300);
        }}
        className='btn-remove'
      >
        <i className='ri-delete-bin-line'></i>
      </button>
      <img src={item.url} alt='' />
      <h4>{item.id}</h4>
      <p className='price'>
        <strong>$7.99</strong>
      </p>
    </li>
  );
}

export default CartItem;
