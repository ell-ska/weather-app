'use client'

import { Droplet, Thermometer, Umbrella, Wind } from 'lucide-react'
import * as Separator from '@radix-ui/react-separator'

import InfoSection from './InfoSection'

const testWeather = [
  { icon: <Thermometer />, title: 'Feels like', value: '15°' },
  { icon: <Wind />, title: 'Wind', value: '10km/h' },
  { icon: <Umbrella />, title: 'Precipitation', value: '20%' },
  { icon: <Droplet />, title: 'Humidity', value: '79%' },
]

const WeatherInfo = () => {
  return (
    <section className='flex gap-6 rounded-t-2xl bg-white px-20 py-6'>
      <InfoSection
        cardType='horizontal-compact'
        title='Weather now'
        content={testWeather}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='w-[2px] rounded-full bg-slate-200'
      />
      <InfoSection
        cardType='vertical'
        title='Weather today'
        content={testWeather}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='w-[2px] rounded-full bg-slate-200'
      />
      <InfoSection
        cardType='horizontal-wide'
        title='Weather coming days'
        content={testWeather}
      />
    </section>
  )
}

export default WeatherInfo
