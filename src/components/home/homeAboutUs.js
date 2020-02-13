import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated as a, config } from 'react-spring'
import animatedJson from '../../images/animated/designing-male-animated.json'
import AnimatedImage from '../animateImage'

const HomeAboutUs = () => {
  const [on, toggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
    config: config.molasses,
  })
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about-content">
          <div className="home-about-text">
            <Waypoint
              bottomOffset="15%"
              onEnter={() => {
                if (!on) toggle(true)
              }}
            />
            <a.h2 style={animation} className="sub-title">
              about us
            </a.h2>
            <a.p style={animation} className="description-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, numquam fuga distinctio minus quam id repellendus quos
              ea veritatis excepturi, eaque officia rerum ab quod labore
              laboriosam dignissimos illo quasi!
            </a.p>
          </div>
          <div className="home-about-image">
            <AnimatedImage
              animatedJson={animatedJson}
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutUs
