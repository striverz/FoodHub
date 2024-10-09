import React from 'react';
import './RestaurantMenuShimmer.css';

const RestaurantMenuShimmer = () => {
  return (
    <div className="restaurant-menu-shimmer">
      <div className="shimmer-main-section">
        <div className="shimmer-main-section-left">
          <div className="shimmer-img"></div>
        </div>
        <div className="shimmer-main-section-right">
          <div className="shimmer-title"></div>
          <div className="shimmer-cuisine"></div>
          <div className="shimmer-rating"></div>
        </div>
      </div>

      <div className="accordion-shimmer-container">
        {Array(5).fill("").map((_, index) => (
          <div key={index} className="shimmer-accordion">
            <div className="shimmer-accordion-header"></div>
            <div className="shimmer-accordion-body"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
