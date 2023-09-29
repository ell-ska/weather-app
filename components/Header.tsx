'use client'

import { Search } from 'lucide-react'

import { useModal } from '@/hooks/use-modal'
import { formatDate } from '@/lib/utils'

type HeaderProps = {
  city: string | null
  time: string | null
}

const Header = ({ city, time }: HeaderProps) => {
  const { onOpen } = useModal()

  const date = time && formatDate(time)

  return (
    <header className='absolute flex w-full items-center justify-between px-6 pt-8 lg:px-20 lg:pt-12'>
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>{city}</span>
        <span>{date}</span>
      </div>
      <div className='flex gap-4'>
        <button onClick={() => onOpen('search')}>
          <Search />
        </button>
      </div>
    </header>
  )
}

export default Header
