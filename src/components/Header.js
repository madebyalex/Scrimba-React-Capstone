import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Header() {
  const { cartItems, paying, payingProcess } = useContext(Context);

  function cartButton() {
    if (cartItems.length > 0) {
      return (
        <button className='btn-cart'>
          <span className='badge'>{cartItems.length}</span>
          <i className='icon ri-shopping-cart-fill ri-fw ri-2x'></i>
        </button>
      );
    } else {
      return (
        <button className='btn-cart'>
          <i className='icon ri-shopping-cart-line ri-fw ri-2x'></i>
        </button>
      );
    }
  }

  function resetCart() {
    if (paying === 'complete') {
      payingProcess('reset');
    }
  }

  return (
    <header>
      <div className='page-wrap'>
        <Link onClick={resetCart} to='/'>
          <h2>
            <strong>Snap</strong>Photo
          </h2>
        </Link>
        <Link to='/cart'>{cartButton()}</Link>
      </div>
    </header>
  );
}

export default Header;
