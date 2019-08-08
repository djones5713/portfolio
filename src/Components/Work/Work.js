import React, { Component } from 'react';
import airport from '../Work/airport.png';
import './Work.scss';


class Work extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    

    render(){
        return (
            <div className="work-container">
                <hr className="line-top"/>
                <div className="work-headings">
                    <p className="sub2">Portfolio</p>
                    <h1 className="title-work">Work</h1>
                </div>
                   
                <div className="work-content">
                    <div className="work"><a href="http://www.theetravelbook.com/" target="_blank">
                        <img className="project" src={airport} alt="Travel App Project"/></a>
                        <a href="https://github.com/djones5713/travelbook" target="_blank"><button className="project-btn">Github</button></a>
                    </div>
                    <div className="work"><h2 className="soon">Coming Soon</h2></div>
                    <div className="work"><h2 className="soon">Coming Soon</h2></div> 
                </div>

            </div>
            
        )
    }

    
}

export default Work