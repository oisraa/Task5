import React from 'react'
import './Background.css'
const Background = ({ imageSrc, headingText, paragraphText }) => {
    return (
        <div className="background-container">
        <div className="overlay">
          <div className="overlay-content">
            <h1>{headingText}</h1>
            <p>{paragraphText}</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Background