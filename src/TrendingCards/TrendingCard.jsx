import React from 'react';
import './TrendingCard.css';

const TrendingCard = ({ image, price, title, address , icon}) => {
  return (
    <div className="trending-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h5 className="card-price">{price}</h5>
        <p2 className="card-title">{title}</p2>
        <p3 className="card-address">
          <i className="location-icon">{icon}</i> {address}
        </p3>
      </div>
    </div>
  );
};

export default TrendingCard;
