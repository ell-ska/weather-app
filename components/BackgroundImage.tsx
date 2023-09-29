import { weatherMap } from '@/lib/weather-map'

type BackgroundImageProps = {
  conditionCode: number
}

const BackgroundImage = ({ conditionCode }: BackgroundImageProps) => {
  const condition = weatherMap.find(item => item.code === conditionCode)

  return (
    <div
      className='absolute inset-0 -z-10 bg-cover bg-center bg-blend-overlay'
      style={{
        backgroundImage: `url(${
          condition?.image.src || weatherMap[1].image.src
        }), linear-gradient(#ffffff33,#ffffff33)`,
      }}
    />
  )
}

export default BackgroundImage
