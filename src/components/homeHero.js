import React from 'react'
import { Link } from 'gatsby'

const HomeHero = () => {
  return (
    <section className="home-hero">
    <div className="container">
      <div className="home-hero-content">
          <h1 className='title'>digital innerprize</h1>
          <p className='home-hero-text description-content'>For small-to-medium businesses, startups, and enterprise organisations.</p>
          <Link to="/contact" className="btn large">Get in touch</Link>
      </div>
      <div className='home-hero-image'>
      <img src='/web-developer.png' alt='developer coding' />
      </div>
      </div>
    </section>
  )
}

export default HomeHero
