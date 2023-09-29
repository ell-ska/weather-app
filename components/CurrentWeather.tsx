import { weatherMap } from '@/lib/weather-map'

type CurrentWeatherProps = {
  condition: { text: string; code: number }
  temperature: number
}

const CurrentWeather = ({ condition, temperature }: CurrentWeatherProps) => {
  const weather = weatherMap.find(item => item.code === condition?.code)
  const Icon = weather?.icon

  return (
    <section className='flex flex-1 items-center justify-center px-6'>
      <div className='flex w-full max-w-sm justify-between'>
        <div className='mt-2 space-y-2'>
          <h3 className='text-xl'>{condition?.text}</h3>
          {Icon && <Icon size={32} />}
        </div>
        <h4 className='text-8xl font-bold'>
          {temperature && `${temperature.toFixed()}°`}
        </h4>
      </div>
    </section>
  )
}

export default CurrentWeather
