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
            <div>
                <hr className="line-top"/>
                <div className="work-headings">
                    <p className="sub2">Portfolio</p>
                    <h1 className="title-work">Work</h1>
                </div>

                <div className="work-content">
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div> 
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div> 
                </div>
                <hr className="line-work-bottom"/>
            </div>
        )
    }

    
}

export default Work