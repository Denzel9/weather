import axios from 'axios'
import { useState, useEffect } from 'react'
import { IData } from '../types/data.interface'

export const useWeatherData = () => {
  const [data, setData] = useState<IData>()
  const [city, setCity] = useState('')
  const getWeather = () => {
    axios
      .get('https://weatherapi-com.p.rapidapi.com/forecast.json', {
        params: {
          q: city || 'москва',
          days: '3',
          lang: 'RU',
        },
        headers: {
          'X-RapidAPI-Key': '1fd63b54eemshab0fee48e90e76ap1bd2ccjsn955168f95359',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      })
      .then((res) => setData(res.data))
      .catch(() => console.log('err'))
  }

  useEffect(() => {
    getWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return { data, setCity }
}
