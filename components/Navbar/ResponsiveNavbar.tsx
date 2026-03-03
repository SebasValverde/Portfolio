"use client";
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import { useState } from 'react';

const ResponsiveNavbar = () => {

  const [showNav,setShowNav]= useState(false);

  const openNavHandler =()=> setShowNav (true);
  const closeNavHandler =()=> setShowNav (false);


  return (
    <div>
        <Navbar openNav={openNavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNavbar