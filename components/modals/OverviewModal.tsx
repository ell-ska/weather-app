'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { useModal } from '@/hooks/use-modal'

const OverviewModal = () => {
  const { isOpen, type, onClose } = useModal()

  const isModalOpen = isOpen && type === 'overview'

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={onClose} modal>
      <Dialog.Portal>
        <Dialog.Content>overview</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default OverviewModal
