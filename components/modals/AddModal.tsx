'use client'

import { useState } from 'react'
import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import { X, Search } from 'lucide-react'

import { useModal } from '@/hooks/use-modal'
import CityCard from '../CityCard'

export type SearchResponse = {
  location: {
    name: string
    time: string
  }
  weather: {
    temp: number
    condition: {
      text: string
      code: number
    }
  }
}

const AddModal = () => {
  const { isOpen, type, onClose } = useModal()
  const isModalOpen = isOpen && type === 'add'

  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState<SearchResponse | null>(null)

  const getSearchResults = async () => {
    try {
      const { data }: { data: SearchResponse | null } = await axios.get(
        '/api/get-weather',
        {
          params: {
            search,
          },
        },
      )
      setSearchResult(data)
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = () => {
    onClose()
    setSearch('')
    setSearchResult(null)
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Content className='absolute right-0 top-0 h-full w-full border-white/50 bg-white/30 px-6 backdrop-blur-lg md:max-w-md md:rounded-l-2xl md:border-l'>
          <nav className='gap flex items-center justify-end gap-4 pb-12 pt-[2.5rem] md:pr-14 md:pt-[3.625rem]'>
            <form
              onSubmit={e => {
                e.preventDefault()
                getSearchResults()
              }}
              className='flex flex-1 gap-4 rounded-full bg-white px-2 py-1 outline-slate-400 focus-within:outline'
            >
              <Search />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type='text'
                placeholder='Search...'
                className='w-full outline-none'
              />
            </form>
            <Dialog.Close asChild>
              <button>
                <X />
              </button>
            </Dialog.Close>
          </nav>
          {searchResult && <CityCard type={'searchResult'} {...searchResult} />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AddModal
