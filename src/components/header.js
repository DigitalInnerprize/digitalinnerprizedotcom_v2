import { Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [isFixed, setFixed] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    const fixed = ref.current && ref.current.offsetTop
    setFixed(window.pageYOffset > fixed)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <section style={{ paddingTop: isFixed && '145px' }}>
      <div className={isFixed ? 'fixed-nav' : 'navigation'} ref={ref}>
        <div className="container">
          <div className="nav-container">
            <div className="logo-container">Logo</div>
            <div className="nav-right">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/">home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">about</Link>
                </li>
                <li className="nav-item">
                  <Link to="/work">work</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
