import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const propTypes = {
  page: PropTypes.string
}

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrapper">
      <div className='container'>
      <div className="footer-top">
        <div className="contact-info">
          <h3 className='mini-title'>contact</h3>
          <p className='footer-email'>digitalinnerprize@gmail.com</p>
        </div>
        <div className="socials">
          <h3 className='mini-title'>follow us</h3>
          <ul className="social-links">
            <li>
              <a href="#" className="social-link">facebook</a>
            </li>
            <li>
              <a href="#" className="social-link">instagram</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='footer-bottom'>
      <div className='container'>
        <div className="footer-bottom-content">
        <div className="copyright">
          <p>2019&copy; Digital Innerprize Llc</p>
        </div>
        <ul className="footer-links">
          <li>
            <Link to='/' className="footer-link">home</Link>
          </li>
          <li>
            <Link to='/about' className="footer-link">about</Link>
          </li>
          <li>
            <Link to='/work' className="footer-link">work</Link>
          </li>
          <li>
            <Link to='/' className="footer-link">privacy</Link>
          </li>
          <li>
            <Link to='/contact' className="footer-link">contact</Link>
          </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = propTypes

export default Footer;
