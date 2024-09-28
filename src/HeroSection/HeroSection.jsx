import React from 'react'
import locationIcon from '../assets/img/location.png';
import priceIcon from '../assets/img/dollar-circle.svg';
import propertyIcon from '../assets/img/house.svg';
import './HeroSection.css';


const HeroSection = ({ headerimg}) => {
  return (
    // <section className='hero'>
    //     <div className="hero-content">
    //       <h1>Discover a place you will love to live</h1>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
    //       {/* Card with icons */}
    //       <div className="property-card">
    //         <div className="icon-group">
    //           <div className="icon-item">
    //           <img  src={locationIcon} alt="Location"  /> 
    //             <span> Location <br/> <h3>Ahmedabad, India </h3></span>
    //           </div>
    //           <div className="icon-item">
    //             <img src={priceIcon} alt="Price" />
    //             <span> Price <br/> <h3 className='txt'> $1000 - $10,000 </h3></span>
    //           </div>
    //           <div className="icon-item">
    //             <img src={propertyIcon} alt="Property Type" />
    //             <span>Type of property <br/> <h3>Apartment </h3></span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <img className="hero-image" src={headerimg} alt="Hero" />
  
    // </section>
    <div className="hero-section">
    <div className="hero-text">
      <h1>Discover a place you will love to live</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
      {/* Card with icons */}
          <div className="property-card">
            <div className="icon-group">
              <div className="icon-item">
              <div className='icons'>
                <img src={locationIcon} alt="Location" />
                </div>
                
                <span>Locatio <br/>Ahmedabad, India</span>
              </div>
              <div className="icon-item">
                <div className='icons'>
                <img src={priceIcon} alt="Price" />
                </div>
                <span> price <br/>$1000 - $10,000</span>
              </div>
              <div className="icon-item">
              <div className='icons'>
                <img src={propertyIcon} alt="Property Type" />
                </div>
                <span>Type of Property <br/>Apartment</span>
              
              </div>
            </div>
          </div>
        </div>
    <div className="hero-image">
      <img src={headerimg} alt="Building" />
    </div>
  </div>
  
  )

}

export default HeroSection