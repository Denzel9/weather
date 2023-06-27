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
  date: string
  hour: IHourItem[]
}
export interface IHourItem {
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
