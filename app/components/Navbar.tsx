'use client'
import Link from 'next/link'
import React from 'react'
import '../globals.css'
import Icon from "../components/icons/logo2.svg"; 


function Navbar() {
  return (
    <>
    <div className="conte">
        <Icon  className="logo" onClick={handleSvgClick}/>
        <div className='navcon'>
          <Link className="navitem" href="/">Home</Link>
          <Link className="navitem" href="/about">About</Link>
          <Link className="navitem" href="/projects">Projects</Link>
          <Link className="navitem" href="/contact">Contact</Link>
        </div>
    </div>
    </>

  )
}


  const handleSvgClick = () => {
    window.location.href = '/';
  };
export default Navbar
