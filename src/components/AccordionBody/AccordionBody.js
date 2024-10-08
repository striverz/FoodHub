import React from 'react'
import "./AccordionBody.css"
import {useState} from "react";
import { IMG_CDN } from '../../utils/consts';

const AccordionBody = ({cards}) => {
    console.log(cards?.card?.info);
    
    const {name,description,imageId}=cards?.card?.info;
    

   
  return (
    <div className="accordion-body">
        <div className="accordion-body-left">
            <h1>{name}</h1>
            <p>{description}</p>

        </div>

        <div className="accordion-body-right">
            <img src={IMG_CDN+imageId}></img>
            <button>Add+</button>
            

        </div>
       
    </div> 
  )
}

export default AccordionBody