import CurrentWeather from '@/components/CurrentWeather'
import WeatherInfo from '@/components/Info/WeatherInfo'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <CurrentWeather />
      <WeatherInfo />
    </main>
  )
}
