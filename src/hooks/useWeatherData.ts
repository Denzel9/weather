import axios from 'axios'
import { IData } from '../types/data.interface'
import { useState } from 'react'
import { useQuery } from 'react-query'

export const useData = () => {
  const [city, setCity] = useState('москва')

  const getSearch = (city: string) => {
    const weather = axios.get<IData>('https://weatherapi-com.p.rapidapi.com/forecast.json', {
      params: {
        q: city,
        days: '3',
        lang: 'RU',
      },
      headers: {
        'X-RapidAPI-Key': '1fd63b54eemshab0fee48e90e76ap1bd2ccjsn955168f95359',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    })
    return weather
  }

  const { data, isLoading } = useQuery([city], () => getSearch(city), {
    select: (res) => ({
      weather: res.data,
      chart: res.data?.forecast.forecastday[0]?.hour.map((item) => ({
        uv: '+' + Math.round(item.temp_c),
        name: item.time.slice(-5),
      })),
      oneDays: { dayWeather: res?.data?.forecast?.forecastday[0], city: res?.data?.location?.name },
    }),
  })
  return { data, setCity, isLoading }
}
