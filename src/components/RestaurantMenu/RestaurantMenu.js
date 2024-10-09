import React from 'react'
import "./RestaurantMenu.css"
import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react";
import { IMG_CDN, RESTAURANT_MENU_API } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../Accordion/Accordion';
import RestaurantCardShimmer from '../RestaurantCardShimmer/RestaurantCardShimmer';
import RestaurantMenuShimmer from '../RestaurantMenuShimmer/RestaurantMenuShimmer';

const RestaurantMenu = () => {
    const {resId}=useParams();
   

    const [restaurantMenuData,setRestaurantMenuData]=useState(null);
    const [restaurantAccordionData,setRestaurantAccordionData]=useState(null);

    async function getRestaurantMenuData(){
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data.json();
        const Data1=json?.data?.cards[2]?.card?.card?.info;
        const Data2=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((res)=>res?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        
        
        
        setRestaurantMenuData(Data1);
        setRestaurantAccordionData(Data2);
       
    }
    useEffect(()=>{
         getRestaurantMenuData();
    },[]);

    {
        if(restaurantMenuData==null) return <RestaurantMenuShimmer/>;
    }

    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=restaurantMenuData;


  return (
    
    <div className="restaurant-menu">

        <div className="main-section">
            <div className="main-section-left">
                <img src={IMG_CDN+cloudinaryImageId} className="res-menu-img"></img>
            </div>
            <div className="main-section-right">
                <h1>{name}</h1>
                <h5>{cuisines.join(", ")}</h5>

                
                <div className="res-menu-rating">
                  <h5 className="avg-rating"> 
                    <FontAwesomeIcon icon={faStar} className="icon"/>
                    {avgRating}
                  </h5>
                    <h5>{sla.lastMileTravelString}</h5>
                    <h5>₹{costForTwo/100} for two</h5>

                </div>

            </div>


        </div>

        <div className="accordion-container">
          {
            restaurantAccordionData.map((card,ind)=>{
              
              // console.log(card?.card?.card);
              return(
                <Accordion cards={card?.card?.card} key={ind}/>
              )
              
            })
          }
          

        </div>
    </div>
  )
}

export default RestaurantMenu