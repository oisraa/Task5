import React, { useState } from 'react';
import './RealEstateDeals.css';
import greenhome from '../assets/img/greenhome.jpg'; // Imported image
import brownhome from '../assets/img/brownhome.jpg'; // Make sure this path is correct
import lighthome from '../assets/img/lighthome.jpg'; // Make sure this path is correct

const propertyData = {
  Residential: [
    { id: 1, src: greenhome, label: 'Featured', type: '3D' },
    { id: 2, src: brownhome, label: 'Featured', type: '3D' },
    { id: 3, src: lighthome, label: 'Featured', type: '3D' },
  ],
  Commercial: [
    { id: 4, src: greenhome, label: 'Featured', type: '3D' },
    { id: 5, src: lighthome, label: 'Featured', type: '3D' },
  ],
  Agriculture: [
    { id: 6, src: brownhome, label: 'Featured', type: '3D' },
    { id: 7, src: greenhome, label: 'Featured', type: '3D' },
  ],
  Industrial: [
    { id: 8, src: brownhome, label: 'Featured', type: '3D' },
  ],
};

const RealEstateDeals = () => {
  const [selectedCategory, setSelectedCategory] = useState('Residential');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="real-estate-container">
        <div className='fortexts'>
      <h5 className="real-estate-title">Best Real Estate Deals</h5>
      <p3 className="real-estate-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p3>
      </div>
      <div className="real-estate-categories">
        {Object.keys(propertyData).map((category) => (
          <button
            key={category}
            className={`real-estate-btn ${selectedCategory === category ? 'real-estate-btn-active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category} Property
          </button>
        ))}
      </div>

      <div className="real-estate-grid">
        {propertyData[selectedCategory].map((property) => (
          <div key={property.id} className="real-estate-card">
            <img src={property.src} alt={property.type} />
            <div className="real-estate-label">
              <span>{property.label}</span>
              <span>{property.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateDeals;
