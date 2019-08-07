import React, { Component } from 'react';
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
                    <div className="work"></div>
                    <div className="work"><h2 className="soon">Coming Soon</h2></div>
                    <div className="work"><h2 className="soon">Coming Soon</h2></div> 
                </div>
            </div>
            
        )
    }

    
}

export default Work