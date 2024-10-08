import React from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Body from "./components/Body/Body";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";

const App=()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
       
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <App/>,

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

            }
        ]
    }
    
])

const root=reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);