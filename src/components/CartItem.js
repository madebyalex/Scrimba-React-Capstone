import React, { useState, useContext, useRef } from 'react';
import { Context } from '../Context';

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const cartItem = useRef();

  const [hovered, setHovered] = useState(false);

  const binIcon = hovered ? 'fill' : 'line';

  return (
    <li key={item.id} ref={cartItem}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          cartItem.current.classList.add('removed');

          setTimeout(() => removeFromCart(item.id), 300);
        }}
        className='btn-remove'
      >
        <i className={`ri-delete-bin-${binIcon}`}></i>
      </button>
      <img src={item.url} alt='' />
      <h4>{item.id}</h4>
      <p className='price'>
        <strong className='item-price'>$7.99</strong>
      </p>
    </li>
  );
}

export default CartItem;
