import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../../src/Pages/HomePage.jsx'
import { describe, expect } from '@jest/globals'

describe('HomePage', () => {
  it('renders without crashing and displays welcome message', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByText('Bienvenido a NextSocial')).toBeInTheDocument()
    expect(screen.getByText('Álbumes Recién Visitados')).toBeInTheDocument()
  })
})
