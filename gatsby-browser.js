import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/components/styled/theme'
import { ContextProvider } from './src/context/state'
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ContextProvider>{element}</ContextProvider>
  </ThemeProvider>
)
