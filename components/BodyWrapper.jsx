'use client'

import React from 'react'
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";

const BodyWrapper = ({children}) => {
    const [scrolledDown, setScrolledDown] = useState(false);
   
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setScrolledDown(true) : setScrolledDown(false);
  };



  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
  });

  return (
    <>
        <Nav scrolled={scrolledDown}/>
        {children}
        {/* <p style={{position: 'fixed', top: '200px'}}>{scrollPos}</p> */}
        
    </>
  )
}

export default BodyWrapper