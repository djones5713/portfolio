import React from 'react';
import { Link } from "react-scroll";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import github from '../src/Components/Header/github.png';
import linkedin from '../src/Components/Header/linkedin.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-icons">
          <a href="https://github.com/djones5713" target="_blank" rel="noopener noreferrer"><img className="github icons" src={github} alt="github-link"/></a>
          <a href="https://www.linkedin.com/in/destinyljones/" target="_blank" rel="noopener noreferrer"><img className="linkedin icons" src={linkedin} alt="linkedin-link"/></a>
      </div>
      <div className="nav-bar">
        <Link className="nav" to="Home">Home</Link>
        <Link className="nav" to="about">About</Link>
        <Link className="nav" to="Portfolio">Portfolio</Link>
      </div>
      </header>
      <Home
        smooth={true}
        duration={500}
      />
      <About  
        
        smooth={true}
        duration={500}
      />
      <Portfolio
        smooth={true}
        duration={500}
      />
    </div>
  );
}



export default App;
