import { Link } from 'gatsby'
import {
  MenuItem,
  Menu,
  MenuButton
} from './hamburgerMenu'
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

              <div className="mobile-nav">
                <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} color='#090C08'/>
                <Menu open={menuOpen}>
                  <Link to="/">
                    <MenuItem
                      delay={`${0.1}s`}
                      open={menuOpen}
                      onClick={() => setMenuOpen(false)}>
                      Home
                    </MenuItem>
                  </Link>
                  <Link to="/about">
                    <MenuItem
                      delay={`${0.1}s`}
                      open={menuOpen}
                      onClick={() => setMenuOpen(false)}>
                      About
                    </MenuItem>
                  </Link>
                  <Link to="/work">
                    <MenuItem
                      delay={`${0.1}s`}
                      open={menuOpen}
                      onClick={() => setMenuOpen(false)}>
                      Work
                    </MenuItem>
                  </Link>
                  <Link to="/contact">
                    <MenuItem
                      delay={`${0.1}s`}
                      open={menuOpen}
                      onClick={() => setMenuOpen(false)}>
                      Contact
                    </MenuItem>
                  </Link>
                </Menu>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
