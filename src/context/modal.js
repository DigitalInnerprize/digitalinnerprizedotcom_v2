import React, { useState, createContext } from 'react'

const defaultState = {
  isModalOpen: false,
}

export const ModalContext = createContext(defaultState)

export function ModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(!isModalOpen)

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal }}>
      {children}
    </ModalContext.Provider>
  )
}
