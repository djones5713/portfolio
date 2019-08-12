import React from 'react';
import './Home.scss';
import profile from '../Home/profile.png';
import Name from '../Home/Name.png';
import Des from '../Home/Des.png';

function Home(){
return(
   <div>
     <div className="main-container" id="Home"> 
        <div className="box"><img className="Name" src={Name} alt="destiny-name"/></div>
        <img className="profile" src={profile} alt="destiny"/>
        <div className="box"><img className="Des" src={Des} alt="destiny-tagline"/></div>
     </div>
    </div>

)}

export default Home;
