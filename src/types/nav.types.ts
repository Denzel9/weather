import { ReactElement } from 'react'

export interface INav {
  link: string
  text: string
  icon: ReactElement
  fn?(show: boolean): void
}
