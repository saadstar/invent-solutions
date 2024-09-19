'use client';
import React from 'react';
import Link from "next/link";


export const Navbar = () => {
  return (
      <div className='navbarContainer'>
          <div className="navWrapper">
        <div className="left">
          <Link href={`/`}>
            <img src="./images/InventSecondry.png" alt="logoImg" className="navLogo" width={120} height={110} />
            </Link>
              </div>
              <div className="right">
                <div className="item"><Link href={`/`}>Home</Link></div>
                <div className="item"><Link href={`/aboutus`}>About us</Link></div>
                <div className="item"><Link href={'/contactus'}>Contact us</Link></div>
              </div>
          </div>
    </div>
  )
}
