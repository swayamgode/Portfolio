'use client';
import React from 'react'
import Image from 'next/image'
import CatHover from '../components/CatHover'
import '../globals.css'
import SocialIcons from '../components/SocialIcons';

const Hero = () => {
  return (
    <div className="Maincon">
      <div className="Image image-container">
        <Image
          src="/profile2.png"
          alt="Profile Image"
          className="profileImg default-img"
          width={300}
          height={300}
          priority
        />
        <Image
          src="/profilech.png"
          alt="Profile Image Hover"
          className="profileImg hover-img"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="text">
        <h1 className="Title">Hello!, I am Swayam</h1>
        <p className="Subtitle">
          A Passionate Full-Stack Developer Crafting Seamless Web Experiences
        </p>
      </div>
        <SocialIcons/>
    </div>
  )
}

export default Hero