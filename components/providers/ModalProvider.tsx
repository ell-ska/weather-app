'use client'

import { useEffect, useState } from 'react'

import AddModal from '@/components/modals/AddModal'
import OverviewModal from '@/components/modals/OverviewModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AddModal />
      <OverviewModal />
    </>
  )
}

export default ModalProvider
