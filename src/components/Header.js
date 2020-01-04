import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='page-wrap'>
        <Link to='/'>
          <h2>
            <strong>Snap</strong>Photo
          </h2>
        </Link>
        <Link to='/cart'>
          <i className='icon ri-shopping-cart-line ri-fw ri-2x'></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
