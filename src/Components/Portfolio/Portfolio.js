import React, { Component } from 'react';
import airport from '../Portfolio/airport.png';
import yelp from '../Portfolio/yelp.png';
import pos from '../Portfolio/pos.png';
import './Portfolio.scss';


class Portfolio extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    

    render(){
        return (
            <div className="work-container"  id="Portfolio"> 
              <div className="box-section"></div>
              <div className="work-boxes">
                  <div className="box-work"><a href="http://www.theetravelbook.com/" target="_blank" rel="noopener noreferrer"><img className="airplane" src={airport} alt="airplane"/></a></div>
                  <div className="box-work"><img className="pos" src={pos} alt="pos"/></div>
                  <div className="box-work"><img className="yelp" src={yelp} alt="yelp"/></div>
              </div>
            </div>
            
        )
    }

    
}

export default Portfolio