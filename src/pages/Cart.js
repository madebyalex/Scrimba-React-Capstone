import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, paying, payingProcess } = useContext(Context);
  const itemsArr = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  const price = '7.99';
  const totalCost =
    cartItems.length *
    price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  function handleOrder() {
    const orderNumber = Math.floor(Math.random() * 479);
    payingProcess(orderNumber);
  }

  return (
    <main className='cart-page'>
      <h1>{paying !== 'complete' ? 'Check out' : 'Thanks for your order!'}</h1>

      {cartItems.length > 0 ? (
        <>
          <ul className='items-list'>{itemsArr}</ul>
          <aside className='cart-total'>
            Total: <span className='cart-total__value'>${totalCost}</span>
          </aside>
          <footer className='cart-footer'>
            <button className='order-button' onClick={handleOrder}>
              {paying ? 'Ordering...' : 'Place Order'}
            </button>
          </footer>
        </>
      ) : paying !== 'complete' ? (
        <div className='align-center'>
          <h3>Oh, there is no items yet. </h3>
          <p>
            Please <Link to='/'>go to the gallery</Link> and select something
            you like{' '}
            <span role='img' aria-label='Smile'>
              😊
            </span>
          </p>
        </div>
      ) : (
        <div className='align-center'>
          <p>We will ship it during next 24 hours.</p>
        </div>
      )}
    </main>
  );
}

export default Cart;
