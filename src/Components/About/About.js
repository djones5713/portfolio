import React from 'react';
import devices from '../About/devices.png';
import './About.scss';

function About(){
    return (
        <div className="about-container">
            <div className="about-info">
                <p className="about">I am Full Stack Software Engineering with experience in marketing and responsive web design.
                I have a passion for building websites and helping clients create a powerful message online.
                </p>
                <a  className="about-btn" href="https://drive.google.com/file/d/1gQaVO_NZHwSdrWodc1qxLehullI7Ya0x/view?usp=sharing" target="_blank"><button>Resume</button></a>
            </div>
            <img className="devices" src={devices} alt="computers"/>
           
        </div>
    )
}

export default About