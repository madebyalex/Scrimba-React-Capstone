import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photosList, setPhotosList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotosList(data);
      });
  }, []);

  function toggleFavorite(id) {
    const updatedArr = photosList.map(photo => {
      if (photo.id === id) {
        // console.log(photo.id);
        // console.log(!photo.isFavorite);

        return {
          ...photo,
          isFavorite: !photo.isFavorite
        };
      }

      return photo;
    });

    setPhotosList(updatedArr);
  }

  function addToCart(newItem) {
    // const curItem = cartItems.find(el => (el.id = newItem.id));

    setCartItems(prevItems => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  console.log(cartItems);

  return (
    <Context.Provider
      value={{
        photosList,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
