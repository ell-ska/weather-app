import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'

import { weatherMap } from '@/lib/weather-map'
import { formatTime } from '@/lib/utils'
import { type SearchResponse } from '@/components/modals/SearchModal'
import { useModal } from '@/hooks/use-modal'

type CityCardProps = SearchResponse & { closeModal: () => void }

const CityCard = ({ closeModal, location, weather }: CityCardProps) => {
  const Icon = weatherMap.find(item => item.code === weather?.condition?.code)
    ?.icon

  const router = useRouter()

  // const addCity = (newCity: string) => {
  //   try {
  //     const storedCities = localStorage.getItem('cities')

  //     if (!storedCities) {
  //       const newCities = [newCity]
  //       localStorage.setItem('cities', JSON.stringify(newCities))
  //     } else {
  //       const oldCities: string[] = JSON.parse(storedCities)
  //       if (oldCities.includes(newCity)) throw Error('City already saved')

  //       localStorage.setItem('cities', JSON.stringify([...oldCities, newCity]))
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const changeCity = () => {
    closeModal()
    router.push(`/${location?.name.toLowerCase()}`)
  }

  return (
    <>
      <div className='flex items-center justify-between rounded-2xl bg-white px-6 py-4'>
        <div>
          <span className='mb-[2px]'>{formatTime(location?.time)}</span>
          <h3 className='mb-1 font-bold'>{location?.name}</h3>
          <span>{weather?.condition?.text}</span>
        </div>
        <div className='flex items-center gap-4'>
          {Icon && <Icon size={32} />}
          <h4 className='text-5xl font-bold'>{weather?.temp}°</h4>
        </div>
      </div>
      <button
        className='mt-4 flex w-full justify-center gap-2'
        onClick={changeCity}
      >
        <span>Change city</span>
        <Plus />
      </button>
    </>
  )
}

export default CityCard
