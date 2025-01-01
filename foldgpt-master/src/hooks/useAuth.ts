import { create } from 'zustand'


export interface User {
    id: string
    email: string
    name: string
    image: string
}
interface AuthStore {
    user: User | null
    setUser: (user: User) => void
    fetchUser: () => void
}

export const useAuth = create<AuthStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    fetchUser: async () => {
        const response = await fetch('/api/user')
        const user = await response.json()
        set({ user })
    }
}))
