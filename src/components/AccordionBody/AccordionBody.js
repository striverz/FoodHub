import React from 'react'
import "./AccordionBody.css"
import {useState} from "react";
import { IMG_CDN } from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../Accordion/Accordion';




const AccordionBody = ({cards}) => {
  console.log(cards);

   const dispatch=useDispatch();

   const handleAddItem=(cards)=>{
     dispatch(addItem(cards));
   }
    
   
    
    
    const {name,description,imageId,price,ratings}=cards?.card?.info;
    

   
  return (
    <div className="accordion-body">
        <div className="accordion-body-left">
            <h2>{name}</h2>
            <h4>₹{price/100}</h4>

            <h5 className="avg-rating">
            <FontAwesomeIcon icon={faStar} className="icon"/>
            {ratings?.aggregatedRating?.rating}
            </h5>
            <p>{description!=null? description : "Carefully crafted by our expert chefs, this dish brings out the finest in culinary creativity."}</p>

        </div>

        <div className="accordion-body-right">
            <img src={IMG_CDN+imageId} className="accordion-img"></img>
            <button onClick={()=>handleAddItem(cards)}>ADD</button>
            

        </div>
       
    </div> 
  )
}

export default AccordionBody