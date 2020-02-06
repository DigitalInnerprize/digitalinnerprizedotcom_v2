import React from 'react'

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        <h2 className='sub-title'>We specialize in</h2>
        <div className="services-list">
          <a href="#" className='services-link'>
            <h3 className='service-title'>app development</h3>
          </a>
          <a href="#" className='services-link'>
            <h3 className='service-title'>web development</h3>
          </a>
          <a href="#" className='services-link'>
            <h3 className='service-title'>ui / ux design</h3>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
