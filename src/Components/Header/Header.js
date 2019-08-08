import React from 'react';
import profile from './profile.png';
import github from '../Header/github.png';
import linkedin from '../Header/linkedin.png';
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
                <div className="nav-icons">
                    <a  href=" https://github.com/djones5713" target="_blank"><img className="github" src={github} alt="github code"/></a>
                    <a href="https://www.linkedin.com/in/destinyljones" target="_blank"><img className="linkedin" src={linkedin} alt="linkedin profile"/></a>
                </div>
                <div className="btns">

                    <button className="btn-three"><a href="https://drive.google.com/file/d/1CLbKQKtO5D-hfvc2UGj_WfHkZWkTsneU/view?usp=sharing" target="_blank">Resume</a></button> 
                   
                </div>
            </div>
        </div>
        <div className="box">3</div>
        <div className="box">4</div>
        <hr className="line-header"/>
    </div>
  

)}

export default Header;
