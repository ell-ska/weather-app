'use client'

import { useEffect, useState } from 'react'

import SearchModal from '@/components/modals/SearchModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <SearchModal />
    </>
  )
}

export default ModalProvider
