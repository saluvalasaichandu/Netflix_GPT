import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const Body = () => {
    const appRoutter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },{
            path:"/browse",
            element:<Browse/>
        },
        
    ]);
  return (
    <div>
        <RouterProvider router={appRoutter}/>
    </div>
   
  )
}

export default Body