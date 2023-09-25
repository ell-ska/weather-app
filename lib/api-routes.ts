import axios from 'axios'

const BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = process.env.API_KEY

const getCurrentWeather = async (city: string) => {
  try {
    const { data, status, statusText } = await axios.get(
      BASE_URL + '/current.json',
      {
        params: {
          key: API_KEY,
          q: city,
        },
      },
    )

    return { data, status, statusText }
  } catch (error: any) {
    return {
      error: {
        status: error?.response?.status,
        statusText: error?.response?.statusText,
      },
    }
  }
}

export { getCurrentWeather }
