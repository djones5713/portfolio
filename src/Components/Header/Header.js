import React from 'react';
// import profile from './profile.gif';
import './Header.scss';

function Header(){
return(
     <div className="main-container"> 
        <div className="box">
        {/* <img className="Destiny" src={profile} alt="Destiny"/> */}
        </div>
        <div className="box">
            <div className="title-container">
                <h1 className="title">Destiny Jones</h1>
                <h2 className="sub-title">full stack engineer</h2>
            </div>
        </div>
        <div className="box">3</div>
        <div className="box">4</div>
        <hr className="line-header"/>
    

        
    </div>
)}

export default Header;