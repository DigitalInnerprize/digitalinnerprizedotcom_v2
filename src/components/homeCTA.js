import React from 'react'
import { Link } from 'gatsby'

const HomeCTA = () => {
  return (
    <section className="home-cta">
      <div className='container'>
      <h2 className='sub-title center'>got a project or idea?</h2>
      <div className="btn-container">
        <Link to="/contact" className="btn large">Get in touch</Link>
      </div>
      </div>
    </section>
  )
}

export default HomeCTA
