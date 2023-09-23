import { weatherMap } from '@/lib/weather-map'

const BackgroundImage = () => {
  return (
    <div
      className='absolute inset-0 -z-10 bg-cover bg-center bg-blend-overlay'
      style={{
        backgroundImage: `url(${weatherMap[1].image.src}), linear-gradient(#ffffff33,#ffffff33)`,
      }}
    />
  )
}

export default BackgroundImage
