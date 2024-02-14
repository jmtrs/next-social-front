import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import Header from './components/Header.jsx'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <AppLayout>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
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
