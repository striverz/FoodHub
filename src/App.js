import React from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/redux/appStore";


//components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Body from "./components/Body/Body";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Error from "./components/Error/Error";


const App=()=>{
    return(
        <Provider store={appStore}>
       

        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
        </Provider>
        
       
       
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement:<Error/>,

        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            { 
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>

            },
            {
                path:"/login",
                element:<Login/>
            },
            
        ]
    },
   
    
    
])

const root=reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);