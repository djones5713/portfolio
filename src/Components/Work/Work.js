import React, { Component } from 'react';
import airport from '../Work/airport.png';
import yelp from '../Work/yelp.png';
import pos from '../Work/pos.png';
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
              <div className="box-section"></div>
              <div className="work-boxes">
                  <div className="box-work"><a href="http://www.theetravelbook.com/" target="_blank"><img className="airplane" src={airport} alt="airplane"/></a></div>
                  <div className="box-work"><img className="pos" src={pos} alt="pos"/></div>
                  <div className="box-work"><img className="yelp" src={yelp} alt="yelp"/></div>
              </div>
            </div>
            
        )
    }

    
}

export default Work