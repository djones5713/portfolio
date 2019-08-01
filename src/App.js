import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';
// import Contact from './Components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-bar">
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
        <Link className="nav" to="/work">Work</Link>
        {/* <Link className="nav" to="/contact">Contact</Link> */}
      </div>
      </header>
      <Switch>
        {/* <Route path="/contact" exact strict component={Contact}/> */}
        <Route path="/work" exact strict component={Work}/>
        <Route path="/about" exact strict component={About}/>
        <Route path="/" exact strict component={Header}/>
     
      </Switch>

    </div>
  );
}

export default App;
