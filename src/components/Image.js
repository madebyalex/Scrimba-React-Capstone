import React, { useState, useContext } from 'react';
import { Context } from '../Context';

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  function hoveredIn() {
    setHovered(true);
  }

  function hoveredOut() {
    setHovered(false);
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
          <button className='buy'>
            <i className='ri-add-circle-line cart'></i>
          </button>
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

export default Image;
