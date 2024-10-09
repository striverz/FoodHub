import React from 'react';
import './RestaurantCard.css';
import { IMG_CDN } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const RestaurantCard = ({ card }) => {
   
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo,sla} = card;

  return (
    <div className="restaurant-card">
      <div className="res-card-img">
        <img src={IMG_CDN + cloudinaryImageId} className="res-img" alt={name} />
      </div>
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <h6 className="cuisines">{cuisines.join(', ')}</h6>
      </div>
       
        <div className="rating">
          <h5 className="avg-rating">
          <FontAwesomeIcon icon={faStar} className="icon"/>
            {avgRating}</h5>
          <h5>{sla.lastMileTravelString}</h5>
          <h5 className="cost-for-two">{costForTwo}</h5>
        </div>
      
    </div>
  );
};

export default RestaurantCard;
