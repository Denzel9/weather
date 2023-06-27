import { useEffect, useState } from 'react'
import { currentHour } from '../helpers/getDate'

export const useWeatherImg = (data: string) => {
  const [img, setImg] = useState('')
  const searchImg = () => {
    if (data === 'Ясно' || data === 'Чисто' || data === 'Солнечно') {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Sunny')
    }
    if (
      data === 'Дождь' ||
      data === 'Местами дождь' ||
      data === 'Пасмурно' ||
      data === 'В отдельных районах умеренный или сильный дождь с грозой'
    ) {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Razor')
    }
    if (data === 'Облачно' || data === 'Переменная облачность') {
      return currentHour >= '22' || currentHour <= '07' ? setImg('bg-Night') : setImg('bg-Cloudly')
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchImg(), [data])

  return { img }
}
