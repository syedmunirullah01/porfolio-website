"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";


const ResponsiveNav = () => {
    const [showNav, setshowNav] = useState(false);

    const showNavHandler = () => setshowNav(true);
    const closeNavHandler = () => setshowNav(false);
  return (
    <div>
          <Nav openNav={showNavHandler} />
          <MobileNav showNav={showNav }  closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
