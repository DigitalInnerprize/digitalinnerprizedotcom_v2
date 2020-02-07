import React from 'react'

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        <h2 className='sub-title'>We specialize in</h2>
        <div className="services-list">
          <div href="#" className='service-link'>
            <img 
              src='/app-development.png' 
              alt='developer coding'
              className='service-image'
            />
            <h3 className='service-title'>app development</h3>
          </div>
          <div href="#" className='service-link'>
            <img 
              src='/web-development.png' 
              alt='developer coding' 
              className='service-image'
            />
            <h3 className='service-title'>web development</h3>
          </div>
          <div href="#" className='service-link'>
            <img 
              src='/web-development.png' 
              alt='developer coding' 
              className='service-image'
            />
            <h3 className='service-title'>ui / ux design</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
