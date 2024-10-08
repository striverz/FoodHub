import react from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";

const App=()=>{
    return(
        <>
        <Navbar/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <App/>
    }
])

const root=reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);