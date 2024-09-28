import React from 'react';
import TrendingCard from './TrendingCard';
import './TrendingSection.css';

const TrendingSection = ({ title, description, cardsData }) => {
  return (
    <section className="trending-section">
      {/* Section Title and Description */}
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
        <p7 className="section-description">{description}</p7>
      </div>

      {/* Cards Grid */}
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <TrendingCard
            key={index}
            image={card.image}
            price={card.price}
            title={card.title}
            address={card.address}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
