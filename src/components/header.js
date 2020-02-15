import { Link } from 'gatsby'
import React, { useEffect, useRef, useState, useContext } from 'react'
import { ModalContext } from '../context'

const Header = () => {
  const [isFixed, setFixed] = useState(false)
  const { openModal } = useContext(ModalContext)
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
                <li className="nav-item" onClick={openModal}>
                  contact
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
