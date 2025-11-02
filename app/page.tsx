import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
const page = () => {
  return (
    <div className='container'>
      <div>
        <div className="text">
         <Hero/>
        </div>
      </div>
      <Details/>
    </div>
  )
}

export default page
