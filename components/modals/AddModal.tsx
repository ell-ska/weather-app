'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { useModal } from '@/hooks/use-modal'

const AddModal = () => {
  const { isOpen, type, onClose } = useModal()

  const isModalOpen = isOpen && type === 'add'

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={onClose} modal>
      <Dialog.Portal>
        <Dialog.Content>add</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AddModal
