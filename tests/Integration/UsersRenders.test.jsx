// En tu archivo de test
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../../src/pages/HomePage'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect } from '@jest/globals'

jest.mock('../../src/store/userStore', () => ({
  __esModule: true,
  default: () => ({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ],
    isLoading: false,
    error: null,
    fetchUsers: jest.fn()
  })
}))

describe('HomePage', () => {
  it('renders users correctly', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument()
      expect(getByText('Jane Doe')).toBeInTheDocument()
    })
  })
})
