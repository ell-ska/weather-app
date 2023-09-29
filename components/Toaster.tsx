'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

type ToasterProps = {
  message: string
  onClose: () => void
  className?: string
}

const Toaster = ({ message, onClose, className }: ToasterProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        'absolute bottom-4 left-4 z-50 flex items-center gap-4 rounded-lg bg-red-500 px-8 py-4 text-white',
        className,
      )}
    >
      <AlertCircle />
      <p>{message}</p>
    </div>
  )
}

export default Toaster
