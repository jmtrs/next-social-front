import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getUsers, getUserTodos } from '../services/apiService.js'

const useUserStore = create(
  persist(
    (set, get) => ({
      users: [],
      isLoading: false,
      error: null,
      fetchUsers: async () => {
        set({ isLoading: true })
        try {
          const response = await getUsers()
          set({ users: response.data, isLoading: false })
        } catch (error) {
          set({ error: error.message, isLoading: false })
        }
      }
    }),
    {
      name: 'user-todos-storage',
      storage: {
        getItem: name => {
          const item = localStorage.getItem(name)
          return item ? JSON.parse(item) : undefined
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: name => {
          localStorage.removeItem(name)
        }
      }
    }
  )
)

export default useUserStore
