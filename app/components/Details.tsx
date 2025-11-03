import React from 'react'
import TechStack from './TechStack'
function Details() {
  return (
    <>
    <div className="Maincon">
        <div className="details-container">
            <h2 className="details-title">Details</h2>
            <p>
                I am a dedicated Full-Stack Developer with a passion for creating seamless web experiences. With expertise in both front-end and back-end technologies, I specialize in building responsive and user-friendly applications. My goal is to deliver high-quality solutions that meet client needs and exceed expectations.
            </p>
        </div>
        <div className="tech">
           <TechStack/>
        </div>
        </div>
    </>
   
  )
}

export default Details
