import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  page: PropTypes.string
}

const Footer = () => {
  return (
    <footer>
      <div className='container'>
      <p>2019&copy; Digital Innerprize Llc</p>
      </div>
    </footer>
  )
}

Footer.propTypes = propTypes

export default Footer;
