export interface IData {
  current: ICurrent
  forecast: IForecast
  location: ILocation
}
export interface ICurrent {
  condition: ICondition
  temp_c: number
}
export interface IForecast {
  forecastday: IForecastDay[]
}
export interface IForecastDay {
  day: any
  date: string
  hour: IHourItem[]
}
export interface IHourItem {
  uv: number
  chance_of_rain: number
  wind_kph: number
  feelslike_c: number
  temp_c: number
  time: string
}
export interface ILocation {
  name: string
  localtime: string
  temp_c: number
}
export interface ICondition {
  text: string
  icon: string
}
export interface IHour {
  [key: string]: string | number
}

export interface IDataContext {
  setCity(string: string): void
  data: any
  isLoading: boolean
}

export interface IDataInfo {
  weather: IData
  chart: IChart
  oneDays: IOneDay
}
export interface IChart {
  uv: string
  name: string
}
export interface IOneDay {
  city: string
  dayWeather: IForecastDay
}
