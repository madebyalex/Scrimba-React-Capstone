import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(
    Context
  );

  function hoveredIn() {
    setHovered(true);
  }

  function hoveredOut() {
    setHovered(false);
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(el => el.id === img.id);

    if (alreadyInCart) {
      return (
        <button className='buy' onClick={() => removeFromCart(img.id)}>
          <i className='ri-shopping-cart-fill cart'></i>
        </button>
      );
    } else if (hovered) {
      return (
        <button className='buy' onClick={() => addToCart(img)}>
          <i className='ri-add-circle-line cart'></i>
        </button>
      );
    }
    // if the item is already in the cart
    // return <i className="ri-shopping-cart-fill cart"></i>
    // else if the image is being hovered
    // return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  }

  return (
    <div
      onMouseEnter={hoveredIn}
      onMouseLeave={hoveredOut}
      className={`${className} image-container`}
    >
      {hovered ? (
        <div className='top-panel'>
          <button onClick={() => toggleFavorite(img.id)} className='fav'>
            {img.isFavorite ? (
              <i className='ri-heart-fill favorite'></i>
            ) : (
              <i className='ri-heart-line favorite'></i>
            )}
          </button>
          {cartIcon()}
        </div>
      ) : (
        img.isFavorite && (
          <div className='top-panel'>
            <button onClick={() => toggleFavorite(img.id)} className='fav'>
              <i className='ri-heart-fill favorite'></i>
            </button>
          </div>
        )
      )}

      <img className='image-grid' src={img.url} alt='' />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
