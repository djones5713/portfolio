import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import github from '../src/Components/Header/github.png';
import linkedin from '../src/Components/Header/linkedin.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-icons">
          <a href="https://github.com/djones5713" target="_blank"><img className="github icons" src={github} alt="github-link"/></a>
          <a href="https://www.linkedin.com/in/destinyljones/" target="_blank"><img className="linkedin icons" src={linkedin} alt="linkedin-link"/></a>
      </div>
      <div className="nav-bar">
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
        <Link className="nav" to="/work">Portfolio</Link>
      </div>
      </header>
      
      <Switch>
        <Route path="/work" exact strict component={Work}/>
        <Route path="/about" exact strict component={About}/>
        <Route path="/" exact strict component={Header}/>
      </Switch>

    </div>
  );
}



export default App;
