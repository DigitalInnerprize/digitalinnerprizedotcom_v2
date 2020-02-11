import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated as a, config } from 'react-spring'
import animatedJson from '../../images/animated/editing-shapes-female-animated.json';
import AnimatedImage from '../animateImage'

const WorkHero = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({ 
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
    config: config.molasses
  });
  return (
    <div className='container'>
      <div className="flex-container">
        <div className="flex-1 align-center">
          <Waypoint
            onEnter={() => {
              if(!on) toggle(true);
            }}
          />
          <a.h1 style={animation} className="title">Work we've done</a.h1>
          <a.p style={animation} className="description-content">Digital Innerprize has designed & built solutions for a range of clients, from startups to multinational corporations. Check out some of our recent projects below</a.p>
        </div>
        <div className="flex-2">
        <AnimatedImage animatedJson={animatedJson} altText="about page image" height={550} width={550} />
        </div>
      </div>
    </div>
  )
}

export default WorkHero
