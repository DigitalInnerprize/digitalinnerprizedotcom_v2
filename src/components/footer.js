import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  page: PropTypes.string
}

const Footer = ({ page }) => {
  return (
    <footer className={cx({ work: page === 'work' })}>
      <div className={cx('social', { work: page === 'work' })}>
          <a href="https://www.linkedin.com/in/martez-conner-b38038108/" target='_blank' rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com/gqsmoov" target='_blank' rel="noopener noreferrer">GITHUB</a>
      </div>
      <p>2019&copy; Digital Innerprize Llc</p>
    </footer>
  )
}

Footer.propTypes = propTypes

export default Footer;
