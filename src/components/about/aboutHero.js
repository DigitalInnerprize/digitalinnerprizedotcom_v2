import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated as a, config } from 'react-spring'
import { Button } from '../styled-components/Button'
import AnimatedImage from '../animateImage'
import animatedJson from '../../images/animated/techno-male-animated.json'

const AboutHero = () => {
  const [on, toggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
    config: config.molasses,
  })
  return (
    <div className="about-page-heading">
      <div className="container">
        <div className="flex-container about-page">
          <div className="flex-1 align-center">
            <Waypoint
              onEnter={() => {
                if (!on) toggle(true)
              }}
            />
            <a.h1 style={animation} className="title">
              Hi from Digital Innerprize
            </a.h1>
            <a.p style={animation} className="description-content">
              We think smart businesses and entrepreneurs must fully embrace
              modern ways of reaching their customers to succeed in today’s
              crowded marketplace your customers are online… and you need to
              meet them there.
            </a.p>
            <a.div style={animation}>
              <Button>request a quote</Button>
            </a.div>
          </div>
          <div className="flex-2">
            <AnimatedImage
              animatedJson={animatedJson}
              altText="about page image"
              height={550}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
