import React, { useState, useEffect } from 'react';
import "./Body.css";
import { RESTAURANT_API } from '../../utils/consts';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { Link } from 'react-router-dom';
import RestaurantCardShimmer from '../RestaurantCardShimmer/RestaurantCardShimmer';

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");

    async function getRestaurantData() {
        try {
            // Use your local backend to fetch restaurant data
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();
            
            // Inspect the JSON data structure here
            console.log(json);

            // Adjust the path to get a larger number of restaurants
            const cards = json?.data?.cards || [];
            let restaurants = [];

            // Iterate through the cards and collect restaurants from multiple sections
            cards.forEach(card => {
                const restaurantData = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (restaurantData) {
                    restaurants = [...restaurants, ...restaurantData]; // Add all restaurant data found
                }
            });

            // Now, limit the data to 28 restaurants
            const limitedRestaurants = restaurants.slice(0, 28); // Slice to 28 if more than that exists

            setAllRestaurants(limitedRestaurants);
            setFilteredRestaurants(limitedRestaurants);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    }

    useEffect(() => {
        getRestaurantData();
    }, []);

    function filterData(searchText, allRestaurants) {
        return allRestaurants.filter((restaurant) => 
            restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        );
    }

    return (allRestaurants === null ? <RestaurantCardShimmer /> :
        <div className="body">
            <div className="search-bar-section">
                <input
                    type="text"
                    placeholder="Search your favourite restaurant..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    onClick={() => {
                        const filteredData = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(filteredData);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link to={"restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} className="restaurant-menu-loader">
                        <RestaurantCard card={restaurant.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
