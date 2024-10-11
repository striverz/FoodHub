import React from 'react'
import { useState } from 'react';
import "./useOnlineStatus.css"

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus]=useState(true);

    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    })

    return onlineStatus;
  
}

export default useOnlineStatus