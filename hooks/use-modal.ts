import { create } from 'zustand'

type modalType = 'add' | 'overview'

type modal = {
  type: modalType | null
  isOpen: boolean
  onOpen: (type: modalType) => void
  onClose: () => void
}

const useModal = create<modal>(set => ({
  type: null,
  isOpen: false,
  onOpen: (type: modalType) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false, type: null }),
}))

export { useModal }
