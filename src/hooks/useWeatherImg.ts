import { useEffect, useState } from 'react'
import { currentHour } from '../helpers/getDate'

export const useWeatherImg = (data: any) => {
  const [img, setImg] = useState('')

  const searchImg = () => {
    if (
      data?.weather?.current?.condition?.text === 'Ясно' ||
      data?.weather?.current?.condition?.text === 'Чисто' ||
      data?.weather?.current?.condition?.text === 'Солнечно'
    ) {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Sunny')
    }
    if (
      data?.weather?.current?.condition?.text === 'Дождь' ||
      data?.weather?.current?.condition?.text === 'Местами дождь' ||
      data?.weather?.current?.condition?.text === 'Пасмурно' ||
      data?.weather?.current?.condition?.text ===
        'В отдельных районах умеренный или сильный дождь с грозой' ||
      data?.weather?.current?.condition?.text ===
        'В отдельных районах местами небольшой дождь с грозой'
    ) {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Razor')
    }
    if (
      data?.weather?.current?.condition?.text === 'Облачно' ||
      data?.weather?.current?.condition?.text === 'Переменная облачность'
    ) {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Cloudly')
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchImg(), [data])

  return { img }
}
