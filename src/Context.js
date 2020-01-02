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

        // console.log(data);
      });
  }, []);

  // setPhotosList(prevData => 'List #2');

  return <Context.Provider value={{ photosList }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
