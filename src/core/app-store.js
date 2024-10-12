import { create } from 'zustand'

export const useLoader = create((set) => ({
    visible: false,
    set: (status) => set(() => ({ visible: status })),
}))
