import React from 'react';
import './RestaurantCardShimmer.css';

const RestaurantCardShimmer = () => {
  const shimmerCards = Array(12).fill(null); // Array to generate 12 shimmer cards

  return (
    <div className="shimmer-container">
      {shimmerCards.map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-card-img shimmer"></div>
          <div className="shimmer-card-details">
            <div className="shimmer-title shimmer"></div>
            <div className="shimmer-cuisines shimmer"></div>
          </div>
          <div className="shimmer-rating">
            <div className="shimmer-rating-bar shimmer"></div>
            <div className="shimmer-rating-bar shimmer"></div>
            <div className="shimmer-rating-bar shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCardShimmer;
