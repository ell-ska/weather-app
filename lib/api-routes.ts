import axios from 'axios'

const BASE_URL = 'http://api.weatherapi.com/v1'
const API_KEY = process.env.API_KEY

const getStartCityCurrentWeather = async () => {
  try {
    const { data, status, statusText } = await axios.get(
      BASE_URL + '/current.json',
      {
        params: {
          key: API_KEY,
          q: 'stockholm',
        },
      },
    )

    return { data, status, statusText }
  } catch (error) {
    console.log(error)
  }
}

export { getStartCityCurrentWeather }
