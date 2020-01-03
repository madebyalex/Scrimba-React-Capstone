import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photosList, setPhotosList] = useState([]);

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
        console.log(photo.id);
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

  return (
    <Context.Provider value={{ photosList, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
