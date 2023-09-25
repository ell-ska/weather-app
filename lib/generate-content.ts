import { isFuture, format } from 'date-fns'
import { Droplet, Thermometer, Umbrella, Wind } from 'lucide-react'

import { weatherMap } from './weather-map'

const generateWeatherNow = (weather: any) => {
  return [
    {
      icon: Thermometer,
      title: 'Feels like',
      value: `${weather?.feelslike_c.toFixed()}°`,
    },
    {
      icon: Wind,
      title: 'Wind',
      value: `${weather?.wind_kph.toFixed()} km/h`,
    },
    {
      icon: Umbrella,
      title: 'Precipitation',
      value: `${weather?.precip_mm.toFixed()} mm`,
    },
    { icon: Droplet, title: 'Humidity', value: `${weather?.humidity} %` },
  ]
}

const generateWeatherToday = (weather: any) => {
  return weather?.hour
    .filter((hour: any) => isFuture(new Date(hour.time)))
    .map((hour: any) => {
      const hours = new Date(hour.time).getHours()
      const isNight = hours > 6 && hours > 20
      const condition = weatherMap.find(
        item => item.code === hour.condition.code,
      )
      const icon =
        isNight && condition?.nightIcon ? condition.nightIcon : condition?.icon

      return {
        icon,
        title: format(new Date(hour.time), 'HH'),
        value: `${hour.temp_c.toFixed()}°`,
      }
    })
}

const generateWeatherComingDays = (weather: any) => {
  return weather?.map((day: any) => ({
    icon: weatherMap.find(item => item.code === day.day.condition.code)?.icon,
    title: format(new Date(day.date), 'EEEE'),
    value: `${day.day.maxtemp_c.toFixed()}°/${day.day.mintemp_c.toFixed()}°`,
  }))
}

export { generateWeatherNow, generateWeatherToday, generateWeatherComingDays }
