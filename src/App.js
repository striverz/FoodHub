import react from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App=()=>{
    return(
        <>
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