import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFoundPage from '../../src/Pages/NotFoundPage.jsx'
import { describe, expect, test } from '@jest/globals'

describe('NotFoundPage Component', () => {
  test('renders the not found message', () => {
    render(<NotFoundPage />)
    const headingElement = screen.getByRole('heading', {
      name: /404 - Página no encontrada/i
    })
    expect(headingElement).toBeInTheDocument()
    const paragraphElement = screen.getByText(
      /lo sentimos, la página que estás buscando no existe./i
    )
    expect(paragraphElement).toBeInTheDocument()
  })
})
