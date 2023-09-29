import { weatherMap } from '@/lib/weather-map'
import { formatTime } from '@/lib/utils'
import { type SearchResponse } from '@/components/modals/AddModal'

type CityCardProps = SearchResponse

const CityCard = ({ location, weather }: CityCardProps) => {
  const Icon = weatherMap.find(item => item.code === weather?.condition?.code)
    ?.icon

  return (
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
  )
}

export default CityCard
