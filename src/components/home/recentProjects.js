import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated as a, config } from 'react-spring'
import { Link } from 'gatsby'
import { Button } from '../styled-components/button'

const RecentProjects = () => {
  const [on, toggle] = useState(false)
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
    config: config.molasses,
  })
  return (
    <section className="home-recent-projects">
      <div className="container">
        <div className="recent-projects-content">
          <div className="left">
            <Waypoint
              bottomOffset="15%"
              onEnter={() => {
                if (!on) toggle(true)
              }}
            />
            <a.h2 style={animation} className="sub-title">
              recent projects
            </a.h2>
            <a.p style={animation} className="description-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              voluptate totam, fugit illo eos ratione suscipit aperiam eligendi
              expedita, illum quia. Odit dolorem sequi rerum p
            </a.p>
            <a.div style={animation}>
              <Link to="/work">
                <Button>see our work</Button>
              </Link>
            </a.div>
          </div>
          <div className="right">
            <div className="column-left projects-column">
              <div className="box">
                <img src="/web-development.png" alt="developer coding" />
              </div>
              <div className="box">
                <img src="/web-development.png" alt="developer coding" />
              </div>
            </div>
            <div className="column-right project-column">
              <div className="box">
                <img src="/web-development.png" alt="developer coding" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
