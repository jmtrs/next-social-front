import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import AlbumsPage from '../../src/pages/AlbumsPage.jsx'
import { describe, expect } from '@jest/globals'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    userId: '1'
  })
}))

jest.mock('../../src/services/apiService', () => ({
  getUserAlbums: jest.fn().mockResolvedValue({
    data: [
      { id: 1, title: 'Album 1' },
      { id: 2, title: 'Album 2' }
    ]
  })
}))

describe('AlbumsPage', () => {
  it('renders without crashing and displays albums', async () => {
    render(
      <BrowserRouter>
        <AlbumsPage />
      </BrowserRouter>
    )

    const album1 = await screen.findByText('Album 1')
    expect(album1).toBeInTheDocument()
    const album2 = await screen.findByText('Album 2')
    expect(album2).toBeInTheDocument()
  })
})
