import BackgroundImage from '@/components/BackgroundImage'
import Header from '@/components/Header'
import CurrentWeather from '@/components/CurrentWeather'
import WeatherInfo from '@/components/Info/WeatherInfo'
import { getCurrentWeather } from '@/lib/api-routes'

export const revalidate = 60

const Home = async () => {
  const weather = await getCurrentWeather('stockholm')

  return (
    <main className='flex min-h-screen flex-col'>
      <BackgroundImage
        conditionCode={weather?.data?.current?.condition?.code}
      />
      <Header
        city={weather?.data?.location?.name}
        time={weather?.data?.location?.localtime}
      />
      <CurrentWeather
        condition={weather?.data?.current?.condition}
        temperature={weather?.data?.current?.temp_c}
      />
      <WeatherInfo />
    </main>
  )
}

export default Home
