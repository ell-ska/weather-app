import CurrentWeather from '@/components/CurrentWeather'
import WeatherInfo from '@/components/Info/WeatherInfo'
import { getStartCityCurrentWeather } from '@/lib/api-routes'

const Home = async () => {
  const weather = await getStartCityCurrentWeather()
  console.log(weather)

  return (
    <main className='flex min-h-screen flex-col'>
      <CurrentWeather />
      <WeatherInfo />
    </main>
  )
}

export default Home
