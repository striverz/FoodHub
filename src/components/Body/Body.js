import React from 'react'
import "./Body.css"
import {useState,useEffect} from "react";
import { RESTAURANT_API } from '../../utils/consts';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { Link } from 'react-router-dom';


const Body = () => {

  

    const [allRestaurants,setAllRestaurants]=useState(null);
    const [filteredRestaurants,setFilteredRestaurants]=useState(null);

    const [searchText,setSearchText]=useState("");

    async function getRestaurantData(){

        const data=await fetch(RESTAURANT_API);
        const json=await data.json();

        const Data=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(Data);
        setFilteredRestaurants(Data);

        // console.log(Data);
    }

    useEffect(()=>{
        getRestaurantData();
    },[]);

    function filterData(searchText,allRestaurants){

        return allRestaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
    }

  {
    if(filteredRestaurants==null) {
        <h1>Loading...</h1>;
        return;

    } 
  }
  return (
    <div className="body">
        <div className="search-bar-section">
            <input 
            type="text" 
            placeholder="search your favourite restaurant..."
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            ></input>
            <button
             onClick={()=>{
                const filteredData=filterData(searchText,allRestaurants);
                setFilteredRestaurants(filteredData);
             }}
            >Search</button>
        </div>
        
        
        <div className="restaurant-container">
            {
                filteredRestaurants.map((restaurant)=>{
                    return(
                        <Link to={"restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id} className="restaurant-menu-loader">
                         <RestaurantCard card={restaurant.info}/>
                        </Link>
                       
                    )
                })
            }
           



        </div>
    </div>
  )
}

export default Body