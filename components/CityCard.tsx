import { useRouter } from 'next/navigation'
import { RefreshCcw } from 'lucide-react'

import { weatherMap } from '@/lib/weather-map'
import { formatTime } from '@/lib/utils'
import { type SearchResponse } from '@/components/modals/SearchModal'

type CityCardProps = SearchResponse & { closeModal: () => void }

const CityCard = ({ closeModal, location, weather }: CityCardProps) => {
  const Icon = weatherMap.find(item => item.code === weather?.condition?.code)
    ?.icon

  const router = useRouter()

  const changeCity = () => {
    closeModal()
    router.push(`/${location?.name.toLowerCase()}`)
  }

  return (
    <>
      <div className='flex items-center justify-between rounded-2xl bg-white px-6 py-4'>
        <div>
          <span className='mb-[2px]'>{formatTime(location?.time)}</span>
          <h3 className='mb-[2px] font-bold'>{location?.name}</h3>
          <span>{weather?.condition?.text}</span>
        </div>
        <div className='flex items-center gap-4'>
          {Icon && <Icon size={32} />}
          <h4 className='text-5xl font-bold'>{weather?.temp.toFixed()}°</h4>
        </div>
      </div>
      <button
        className='mt-4 flex w-full justify-center gap-2'
        onClick={changeCity}
      >
        <span>Change city</span>
        <RefreshCcw />
      </button>
    </>
  )
}

export default CityCard
