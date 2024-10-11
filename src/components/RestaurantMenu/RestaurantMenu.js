import React, { useState, useEffect } from 'react';
import './RestaurantMenu.css';
import { useParams } from 'react-router-dom';
import { IMG_CDN } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../Accordion/Accordion';
import RestaurantMenuShimmer from '../RestaurantMenuShimmer/RestaurantMenuShimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantMenuData, setRestaurantMenuData] = useState(null);
    const [restaurantAccordionData, setRestaurantAccordionData] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState(null); // Added error state

    const getRestaurantMenuData = async () => {
        try {
            const response = await fetch(`https://foodhub-server-jrcf.onrender.com/api/menu?restaurantId=${resId}&page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780`);
            if (!response.ok) throw new Error('Network response was not ok');

            const json = await response.json();
            const Data1 = json?.data?.cards[2]?.card?.card?.info;
            const Data2 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                (res) => res?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );

            setRestaurantMenuData(Data1);
            setRestaurantAccordionData(Data2);
            setLoading(false); // Set loading to false after data is fetched
        } catch (err) {
            console.error('Failed to fetch restaurant menu data:', err);
            setError(err.message); // Set the error message
            setLoading(false); // Set loading to false on error
        }
    };

    useEffect(() => {
        getRestaurantMenuData();
    }, [resId]); // Adding resId as a dependency

    if (loading) return <RestaurantMenuShimmer />;
    if (error) return <div>Error: {error}</div>; // Display error message
    if (!restaurantMenuData) return <div>No menu data available</div>; // Handle case with no data

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = restaurantMenuData;

    return (
        <div className="restaurant-menu">
            <div className="main-section">
                <div className="main-section-left">
                    <img src={IMG_CDN + cloudinaryImageId} className="res-menu-img" alt={`${name}`} />
                </div>
                <div className="main-section-right">
                    <h1>{name}</h1>
                    <h5>{cuisines.join(', ')}</h5>
                    <div className="res-menu-rating">
                        <h5 className="avg-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            {avgRating}
                        </h5>
                        <h5>{sla.lastMileTravelString}</h5>
                        <h5>₹{costForTwo / 100} for two</h5>
                    </div>
                </div>
            </div>
            <div className="accordion-container">
                {restaurantAccordionData && restaurantAccordionData.map((card, ind) => (
                    <Accordion cards={card?.card?.card} key={ind} />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
