import axios from 'axios'

const BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = process.env.API_KEY

const getWeather = async (city: string) => {
  try {
    const { data, status, statusText } = await axios.get(
      BASE_URL + '/forecast.json',
      {
        params: {
          key: API_KEY,
          q: city,
          days: 3,
        },
      },
    )

    return { data, status, statusText }
  } catch (error: any) {
    console.log(error)
    return error.response
  }
}

export { getWeather }
