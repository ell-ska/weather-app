// https://www.weatherapi.com/docs/weather_conditions.json

import { type StaticImageData } from 'next/image'
import {
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudRainWind,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloud,
  Cloudy,
  Moon,
  Snowflake,
  Sun,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import blizzard from '@/public/blizzard.jpg'
import cloudy from '@/public/cloudy.jpg'
import mist from '@/public/mist.jpg'
import overcast from '@/public/overcast.jpg'
import rain from '@/public/rain.jpg'
import sleet from '@/public/sleet.jpg'
import snow from '@/public/snow.jpg'
import sunny from '@/public/sunny.jpg'
import thunder from '@/public/thunder.jpg'

export type Weather = {
  code: number
  desc: string
  icon: LucideIcon
  nightIcon?: LucideIcon
  image: StaticImageData
}

export const weatherMap: Weather[] = [
  {
    code: 1000,
    desc: 'Sunny',
    icon: Sun,
    nightIcon: Moon,
    image: sunny,
  },
  {
    code: 1003,
    desc: 'Partly cloudy',
    icon: CloudSun,
    image: cloudy,
  },
  {
    code: 1006,
    desc: 'Cloudy',
    icon: Cloud,
    image: cloudy,
  },
  {
    code: 1009,
    desc: 'Overcast',
    icon: Cloudy,
    image: overcast,
  },
  {
    code: 1030,
    desc: 'Mist',
    icon: CloudFog,
    image: mist,
  },
  {
    code: 1063,
    desc: 'Patchy rain possible',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1066,
    desc: 'Patchy snow possible',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1069,
    desc: 'Patchy sleet possible',
    icon: CloudHail,
    image: sleet,
  },
  {
    code: 1072,
    desc: 'Patchy freezing drizzle possible',
    icon: CloudHail,
    image: rain,
  },
  {
    code: 1087,
    desc: 'Thundery outbreaks possible',
    icon: Zap,
    image: thunder,
  },
  {
    code: 1114,
    desc: 'Blowing snow',
    icon: CloudRainWind,
    image: blizzard,
  },
  {
    code: 1117,
    desc: 'Blizzard',
    icon: Snowflake,
    image: blizzard,
  },
  {
    code: 1135,
    desc: 'Fog',
    icon: CloudFog,
    image: mist,
  },
  {
    code: 1147,
    desc: 'Freezing fog',
    icon: CloudFog,
    image: mist,
  },
  {
    code: 1150,
    desc: 'Patchy light drizzle',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1153,
    desc: 'Light drizzle',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1168,
    desc: 'Freezing drizzle',
    icon: CloudDrizzle,
    image: snow,
  },
  {
    code: 1171,
    desc: 'Heavy freezing drizzle',
    icon: CloudDrizzle,
    image: snow,
  },
  {
    code: 1180,
    desc: 'Patchy light rain',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1183,
    desc: 'Light rain',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1186,
    desc: 'Moderate rain at times',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1189,
    desc: 'Moderate rain',
    icon: CloudRain,
    image: rain,
  },
  {
    code: 1192,
    desc: 'Heavy rain at times',
    icon: CloudRain,
    image: rain,
  },
  {
    code: 1195,
    desc: 'Heavy rain',
    icon: CloudRain,
    image: rain,
  },
  {
    code: 1198,
    desc: 'Light freezing rain',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1201,
    desc: 'Moderate or heavy freezing rain',
    icon: CloudDrizzle,
    image: rain,
  },
  {
    code: 1204,
    desc: 'Light sleet',
    icon: CloudHail,
    image: sleet,
  },
  {
    code: 1207,
    desc: 'Moderate or heavy sleet',
    icon: CloudHail,
    image: sleet,
  },
  {
    code: 1210,
    desc: 'Patchy light snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1213,
    desc: 'Light snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1216,
    desc: 'Patchy moderate snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1219,
    desc: 'Moderate snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1222,
    desc: 'Patchy heavy snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1225,
    desc: 'Heavy snow',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1237,
    desc: 'Ice pellets',
    icon: CloudHail,
    image: snow,
  },
  {
    code: 1240,
    desc: 'Light rain shower',
    icon: CloudRain,
    image: rain,
  },
  {
    code: 1243,
    desc: 'Moderate or heavy rain shower',
    icon: CloudRainWind,
    image: rain,
  },
  {
    code: 1246,
    desc: 'Torrential rain shower',
    icon: CloudRainWind,
    image: rain,
  },
  {
    code: 1249,
    desc: 'Light sleet showers',
    icon: CloudHail,
    image: sleet,
  },
  {
    code: 1252,
    desc: 'Moderate or heavy sleet showers',
    icon: CloudHail,
    image: sleet,
  },
  {
    code: 1255,
    desc: 'Light snow showers',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1258,
    desc: 'Moderate or heavy snow showers',
    icon: CloudSnow,
    image: snow,
  },
  {
    code: 1261,
    desc: 'Light showers of ice pellets',
    icon: CloudHail,
    image: snow,
  },
  {
    code: 1264,
    desc: 'Moderate or heavy showers of ice pellets',
    icon: CloudHail,
    image: snow,
  },
  {
    code: 1273,
    desc: 'Patchy light rain with thunder',
    icon: CloudLightning,
    image: thunder,
  },
  {
    code: 1276,
    desc: 'Moderate or heavy rain with thunder',
    icon: CloudLightning,
    image: thunder,
  },
  {
    code: 1279,
    desc: 'Patchy light snow with thunder',
    icon: CloudLightning,
    image: thunder,
  },
  {
    code: 1282,
    desc: 'Moderate or heavy snow with thunder',
    icon: CloudLightning,
    image: thunder,
  },
]
