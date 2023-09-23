import { weatherMap } from '@/lib/weather-map'

const CurrentWeather = () => {
  const Icon = weatherMap[1].icon

  return (
    <section className='flex flex-1 items-center justify-center px-6'>
      <div className='flex w-full max-w-sm justify-between'>
        <div className='mt-2 space-y-2'>
          <h3 className='text-xl'>{weatherMap[1].desc}</h3>
          <Icon size={32} />
        </div>
        <h4 className='text-8xl font-bold'>14°</h4>
      </div>
    </section>
  )
}

export default CurrentWeather
