import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import HomePage from './pages/HomePage'
import Header from './components/Header.jsx'
import AlbumsPage from './pages/AlbumsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <AppLayout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/user/:userId/albums/' element={<AlbumsPage />} />
            <Route path='*' element={<NotFoundPage />} />
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
