'use client'

import * as Separator from '@radix-ui/react-separator'

import InfoSection from './InfoSection'
import {
  generateWeatherNow,
  generateWeatherToday,
  generateWeatherComingDays,
} from '@/lib/generate-content'

const WeatherInfo = ({ weatherNow, weatherToday, weatherComingDays }: any) => {
  const weatherNowContent = generateWeatherNow(weatherNow)
  const weatherTodayContent = generateWeatherToday(weatherToday)
  const weatherComingDaysContent = generateWeatherComingDays(weatherComingDays)

  if (!weatherNowContent || !weatherTodayContent || !weatherComingDaysContent)
    return null

  return (
    <section className='scrollbar-hidden grid snap-x snap-mandatory grid-cols-[repeat(3,100%)] gap-6 overflow-x-scroll rounded-t-2xl bg-white py-6 lg:grid-cols-[minmax(0,1fr),2px,minmax(0,1fr),2px,minmax(0,1fr)] lg:px-20'>
      <InfoSection
        cardType='horizontal-compact'
        title='Weather now'
        content={weatherNowContent}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='hidden w-[2px] rounded-full bg-slate-200 lg:block'
      />
      <InfoSection
        cardType='vertical'
        title='Weather today'
        content={weatherTodayContent}
      />
      <Separator.Root
        decorative={true}
        orientation='vertical'
        className='hidden w-[2px] rounded-full bg-slate-200 lg:block'
      />
      <InfoSection
        cardType='horizontal-wide'
        title='Weather coming days'
        content={weatherComingDaysContent}
      />
    </section>
  )
}

export default WeatherInfo
