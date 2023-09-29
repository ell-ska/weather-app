import { weatherMap } from '@/lib/weather-map'
import Image from 'next/image'

type BackgroundImageProps = {
  conditionCode: number
}

const BackgroundImage = ({ conditionCode }: BackgroundImageProps) => {
  const condition = weatherMap.find(item => item.code === conditionCode)

  return (
    <div className='absolute inset-0 -z-10'>
      <Image
        src={condition?.image.src || weatherMap[1].image.src}
        alt=''
        fill
        placeholder='blur'
        blurDataURL={
          condition?.image.blurDataURL || weatherMap[1].image.blurDataURL
        }
        className='object-cover'
      ></Image>
      <div className='absolute inset-0 bg-white/20' />
    </div>
  )
}

export default BackgroundImage
