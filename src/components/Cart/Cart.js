import React from 'react'
import "./Cart.css"

import { useSelector } from 'react-redux'
import AccordionBody from '../AccordionBody/AccordionBody';

import { clearCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

import emptycart from "../../assets/emptycart.png"
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems=useSelector((store)=>store?.cart?.items);

  const dispatch=useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  

  return (
    <div className="cart">
       <div className="cart-heading">
        <Link to="/" className="add-more"><h4>ADD MORE</h4></Link>
        <h4 onClick={handleClearCart}>CLEAR CART</h4>

       </div>
  
      
      

       { cartItems.length===0 ? 

        <div className="empty-cart">
           <img src={emptycart} className="empty-cart-img"></img>
           <h2>Good food is always cooking</h2>
           <p>Your cart is empty. Add something from the menu</p>
        </div> 
        :
        cartItems.map((cards,ind)=>{
          return(
          <AccordionBody cards={cards} key={ind}/>
          )
        }) 
      }
      
     
    </div>
  )
}

export default Cart