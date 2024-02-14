import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/Header.jsx'

import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <AppLayout>
          <Routes></Routes>
        </AppLayout>
      </Router>
    </ChakraProvider>
  )
}

function AppLayout({ children }) {
  return (
    <div
      style={{
        margin: '90px auto',
        marginX: 'auto',
        width: '100%'
      }}
    >
      {children}
    </div>
  )
}

export default App
