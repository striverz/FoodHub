import React from 'react'
import "./Accordion.css"
import {useState} from "react";
import AccordionBody from '../AccordionBody/AccordionBody';

const Accordion = ({cards}) => {

    const [accordionClick,setAccordionClick]=useState(false);
    function handleAccordionClick(){
        setAccordionClick(!accordionClick);
    }
    // console.log(cards);
  return (
    <>
    
    <div className="accordion" onClick={handleAccordionClick}>
    {cards?.title}
 
    </div>
    {accordionClick&1 ? 
        cards?.itemCards?.map((card,ind)=>{
            return(
                <AccordionBody cards={card} key={ind}/>
            )
        })
    :null}
    </>
  )
}

export default Accordion