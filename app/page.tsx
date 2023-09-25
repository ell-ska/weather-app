import BackgroundImage from '@/components/BackgroundImage'
import Header from '@/components/Header'
import CurrentWeather from '@/components/CurrentWeather'
import WeatherInfo from '@/components/Info/WeatherInfo'
import { getCurrentWeather } from '@/lib/api-routes'

const Home = async () => {
  const weather = await getCurrentWeather('stockholm')
  console.log(weather)

  return (
    <main className='flex min-h-screen flex-col'>
      <BackgroundImage />
      <Header
        city={weather?.data?.location?.name}
        time={weather?.data?.location?.localtime}
      />
      <CurrentWeather />
      <WeatherInfo />
    </main>
  )
}

export default Home
