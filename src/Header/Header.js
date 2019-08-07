import React from 'react';
import profile from './profile.png';
import './Header.scss';

function Header(){
return(

     <div className="main-container"> 
        <div className="box">
        <img className="Destiny" src={profile} alt="Destiny"/>
        </div>
        <div className="box">
            <div className="title-container">
                <h1 className="title">Destiny Jones</h1>
                <h2 className="sub-title">full stack engineer</h2>
                <div className="btns">
                    <button className="btn-one"><a href="https://www.instagram.com/code_destinee/" target="_blank">Instagram</a></button>
                    <button className="btn-two"><a href="https://www.linkedin.com/in/destinyljones" target="_blank">LinkedIn</a></button>
                    <button className="btn-three"><a href=" https://github.com/djones5713" target="_blank">Github</a></button>
                   
                </div>
            </div>
        </div>
        <div className="box">3</div>
        <div className="box">4</div>
        <hr className="line-header"/>
    </div>
  

)}

export default Header;
