import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Capstone Project</h1>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
