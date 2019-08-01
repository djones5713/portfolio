import React from 'react';
import './About.scss';

function About(){
    return (
        <div className="about-container">
            <hr className="line-work"/>
            
            <div className="sub-container">
                <p className="sub1">developer</p>
                <h1 className="sub3"><span className="sub2">&</span>designer</h1>
            </div>
                <hr className="line-work-side"/>
                <h1 className="title-about">Create</h1>

            <p className="about-p" >I am Full Stack Software Engineering with experience in marketing and responsive web design.
            I have a passion for building websites and help clients create a powerful message online. 
            {/* <br/> Looking for a developer with a designers touch?  */}
            </p>
           
        </div>
    )
}

export default About