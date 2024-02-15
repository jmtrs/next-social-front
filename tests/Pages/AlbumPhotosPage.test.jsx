import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import AlbumPhotosPage from '../../src/pages/AlbumPhotosPage.jsx'
import { describe, expect } from '@jest/globals'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    albumId: '1'
  })
}))

jest.mock('../../src/services/apiService', () => ({
  getAlbumPhotos: jest.fn().mockResolvedValue({
    data: [
      { id: 1, title: 'Photo 1', thumbnailUrl: 'url1' },
      { id: 2, title: 'Photo 2', thumbnailUrl: 'url2' }
    ]
  })
}))

describe('AlbumPhotosPage', () => {
  it('renders without crashing and displays photos', async () => {
    render(
      <BrowserRouter>
        <AlbumPhotosPage />
      </BrowserRouter>
    )

    const photo1Title = await screen.findByAltText('Photo 1')
    expect(photo1Title).toBeInTheDocument()
    const photo2Title = await screen.findByAltText('Photo 2')
    expect(photo2Title).toBeInTheDocument()

    const photo1Image = screen.getByRole('img', { name: 'Photo 1' })
    expect(photo1Image).toHaveAttribute('src', 'url1')
    const photo2Image = screen.getByRole('img', { name: 'Photo 2' })
    expect(photo2Image).toHaveAttribute('src', 'url2')
  })
})
