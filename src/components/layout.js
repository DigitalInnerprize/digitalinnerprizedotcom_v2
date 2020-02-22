import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import Portal from './portal'
import { ModalContext } from '../context'
import { Modal } from '../components/styled-components/modal'
import '../styles/styles.scss'

const Layout = ({ children }) => {
  const { isModalOpen, openModal } = useContext(ModalContext)
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Portal>
        {isModalOpen && (
          <Modal toggle={openModal}>
            <p>Page Modal</p>
          </Modal>
        )}
      </Portal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
