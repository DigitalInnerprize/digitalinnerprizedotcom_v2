import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import { Link } from 'gatsby'
import {Button} from '../styled-components/Button'
import animatedJson from '../../images/animated/online-buy-products-animated.json';
import AnimatedImage from '../animateImage'

const HomeHero = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <section className="home-hero">
    <div className="container">
      <a.div style={fade} className="home-hero-content">
          <h1 className='title'>digital innerprize</h1>
          <p className='home-hero-text description-content'>For small-to-medium businesses, startups, and enterprise organisations.</p>
          <Link to="/contact"><Button>Get in touch</Button></Link>
      </a.div>
      <div className='home-hero-image'>
        <AnimatedImage animatedJson={animatedJson} width={800} height={675} />
      </div>
      </div>
    </section>
  )
}

export default HomeHero
