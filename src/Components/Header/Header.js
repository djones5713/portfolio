import React from 'react';
import './Header.scss';
import About from '../About/About';
import Work from '../Work/Work';
import profile from '../Header/profile.png';
import Name from '../Header/Name.png';
import Des from '../Header/Des.png';

function Header(){
return(
   <div>
     <div className="main-container"> 
        <div className="box"><img className="Name" src={Name}/></div>
        <img className="profile" src={profile} alt="destiny"/>
        <div className="box"><img className="Des" src={Des}/></div>
     </div>
     <About/>
     <Work/>
    </div>

)}

export default Header;
