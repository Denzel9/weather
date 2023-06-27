import { currentHour } from './getDate'

export const getWeatherImg = (data: any) => {
  if (data === 'Ясно' || 'Чисто') {
    return currentHour > '22' || currentHour < '07' ? 'bg-Night' : 'bg-Sunny'
  }
  if (data === 'Дождь') {
    return currentHour > '22' || currentHour < '07' ? 'bg-Night' : 'bg-Razor'
  }
  if (data === 'Облачно') {
    return currentHour > '22' || currentHour < '07' ? 'bg-Night' : 'bg-Cloudly'
  }
}
