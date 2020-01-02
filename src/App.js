import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// import { Context } from './Context';

import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from './pages/Cart';

function App(props) {
  // const { photosList } = useContext(Context);

  // const photos = photosList.map(item => {
  //   return <img src={item.url} alt={`Amazing something ${item.id}`} />;
  // });

  // console.log(photosList);
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>

        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
