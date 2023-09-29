import axios from 'axios'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = process.env.API_KEY

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('search')

    if (!query) {
      return new NextResponse('Search query missing', { status: 400 })
    }

    if (query.length < 3) {
      return new NextResponse('Search must contain at least 3 characters', {
        status: 400,
      })
    }

    const city = decodeURI(query)

    const { data } = await axios.get(BASE_URL + '/current.json', {
      params: {
        key: API_KEY,
        q: city,
      },
    })

    const currentWeather = {
      location: {
        name: data?.location?.name,
        time: data?.current?.last_updated,
      },
      weather: {
        temp: data?.current?.temp_c,
        condition: {
          text: data?.current?.condition?.text,
          code: data?.current?.condition?.code,
        },
      },
    }

    return NextResponse.json(currentWeather)
  } catch (error) {
    return new NextResponse('No city found with that name', { status: 400 })
  }
}
