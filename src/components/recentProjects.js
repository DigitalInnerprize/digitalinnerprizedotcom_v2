import React from 'react'
import { Link } from 'gatsby'

const RecentProjects = () => {
  return (
    <section className="home-recent-projects">
        <div className="container">
          <div className="recent-projects-content">
          <div className="left">
            <h2 className="sub-title">recent projects</h2>
            <p className='description-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptate totam, fugit illo eos ratione suscipit aperiam eligendi expedita, illum quia. Odit dolorem sequi rerum p</p>
            <Link to='/work' className='btn large'>see our work</Link>
          </div>
          <div className="right">3 image grid</div>
          </div>
        </div>
      </section>
  )
}

export default RecentProjects
