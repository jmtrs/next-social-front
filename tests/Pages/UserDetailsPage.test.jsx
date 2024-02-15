import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import UserDetailsPage from '../../src/pages/UserDetailsPage.jsx'
import { describe, expect } from '@jest/globals'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    userId: '1'
  })
}))

jest.mock('../../src/services/apiService', () => ({
  getUserDetails: jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      address: {
        city: 'Cityville'
      },
      website: 'www.example.com',
      company: {
        name: 'Company Inc.'
      }
    }
  }),
  getUserAlbums: jest.fn().mockResolvedValue({ data: [] })
}))

describe('UserDetailsPage', () => {
  it('renders without crashing and displays user information', async () => {
    render(
      <BrowserRouter>
        <UserDetailsPage />
      </BrowserRouter>
    )

    const userName = await screen.findByText('John Doe')
    expect(userName).toBeInTheDocument()

    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('johndoe')).toBeInTheDocument()
    expect(screen.getByText('Cityville')).toBeInTheDocument()
    expect(screen.getByText('www.example.com')).toBeInTheDocument()
    expect(screen.getByText('Company Inc.')).toBeInTheDocument()
  })
})
