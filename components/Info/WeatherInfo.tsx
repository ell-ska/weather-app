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
    <section className='scrollbar-hidden grid snap-x snap-mandatory grid-cols-[repeat(3,100%)] gap-6 overflow-x-scroll rounded-t-2xl bg-white py-6 lg:grid-cols-[minmax(0,1fr),2px,minmax(0,1fr),2px,minmax(0,1fr)] lg:px-20'>
      <InfoSection
        cardType='horizontal-compact'
        title='Weather now'
        content={testWeather}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='hidden w-[2px] rounded-full bg-slate-200 lg:block'
      />
      <InfoSection
        cardType='vertical'
        title='Weather today'
        content={testWeather}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='hidden w-[2px] rounded-full bg-slate-200 lg:block'
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
