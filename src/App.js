import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-bar">
        <Link className="nav" smooth to="/path#about">About</Link>
        <Link className="nav" smooth to="/path#work">Work</Link>
        <Link className="nav" smooth to="/path#contact">Contact</Link>
      </div>
      </header>
      <Header/>
      <About />

    </div>
  );
}

export default App;
