import React from 'react';
// import './InfoCard.css';

const InfoCard = ({ icon, text }) => {
  return (
    <div className="info-card">
      <div className={`icon ${icon}`}></div>
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;