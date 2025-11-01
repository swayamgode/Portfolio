import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>


    <div className="Maincon">
      <div className="Image">
        <Image
          src="/profile2.png" // If image is in public folder
          alt="Profile Image"
          className="profileImg"
          width={300}
          height={300}
          priority // Add this for above-the-fold images
        />
      </div>

       <div className="text">
        <h1 className="Title">Hello!, I am Swayam</h1>
        <p className="Subtitle">
          A Passionate Full-Stack Developer Crafting Seamless Web Experiences
        </p>
      </div>
    </div>
  
    </>
  )
}

export default Hero