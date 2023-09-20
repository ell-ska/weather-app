import { Menu, Plus } from 'lucide-react'

const Header = () => {
  return (
    <header className='absolute flex w-full items-center justify-between px-6 pt-8 lg:px-20 lg:pt-12'>
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>Stockholm</span>
        <span>Today, 09:47</span>
      </div>
      <div className='flex gap-4'>
        <button>
          <Plus />
        </button>
        <button>
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Header
