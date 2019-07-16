import React from 'react';
import './About.scss';

function About(){
    return (
        <div className="about-container">
            <hr className="line-work"/>
            
            <div className="sub-container">
                <p className="sub1">forge</p>
                <p className="sub2">creativity</p>
                <h1 className="sub3">&design</h1>
            </div>
                <hr className="line-work-side"/>
                <h1 className="title-about">Create</h1>

            <p className="about-p" >It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. The 
            point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using 'Content here, content 
            ', making it look like readable English. Many desktop publishing packages
             and web page editors now use Lorem Ipsum as their default model 
             text, and a search for 'lorem ipsum' will uncover many web sites 
             still in their infancy. </p>
           
           <div className="btns">
            <button className="btn-one">Resume</button>
            <button className="btn-two">LinkedIn</button>
           </div>

           <hr className="line-work-bottom"/>
        </div>
    )
}

export default About