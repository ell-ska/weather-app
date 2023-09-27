'use client'

import { format, isToday, isYesterday } from 'date-fns'
import { Menu, Plus } from 'lucide-react'

import { useModal } from '@/hooks/use-modal'

type HeaderProps = {
  city: string | null
  time: string | null
}

const Header = ({ city, time }: HeaderProps) => {
  const { onOpen } = useModal()

  const currentDate = time && new Date(time)
  const date =
    currentDate &&
    (isToday(currentDate)
      ? `Today, ${format(currentDate, 'HH:mm')}`
      : isYesterday(currentDate)
      ? `Yesterday, ${format(currentDate, 'HH:mm')}`
      : format(currentDate, 'EEE MMM dd, HH:mm'))

  return (
    <header className='absolute flex w-full items-center justify-between px-6 pt-8 lg:px-20 lg:pt-12'>
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>{city}</span>
        <span>{date}</span>
      </div>
      <div className='flex gap-4'>
        <button onClick={() => onOpen('add')}>
          <Plus />
        </button>
        <button onClick={() => onOpen('overview')}>
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Header
