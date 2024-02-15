import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import TodosPage from '../../src/pages/TodosPage.jsx'
import { describe, expect } from '@jest/globals'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    userId: '1'
  })
}))

jest.mock('../../src/services/apiService', () => ({
  getUserTodos: jest.fn().mockResolvedValue({
    data: [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true }
    ]
  })
}))

describe('TodosPage', () => {
  it('renders without crashing and displays todos', async () => {
    render(
      <BrowserRouter>
        <TodosPage />
      </BrowserRouter>
    )

    const todo1Title = await screen.findByText('Todo 1')
    expect(todo1Title).toBeInTheDocument()
    const todo2Title = await screen.findByText('Todo 2')
    expect(todo2Title).toBeInTheDocument()
  })
})
