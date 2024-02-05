import { render, screen } from '@testing-library/react'
import CurrentDay from './CurrentDay'
import { IOneDay } from '../../../../../types/data.interface'
import '@testing-library/jest-dom'

const date: IOneDay = {
  city: 'Moscow',
  dayWeather: {
    date: '2023-10-28',
    day: {
      mintemp_c: 10,
      maxtemp_c: 20,
      maxwind_kph: 6,
      daily_chance_of_rain: 50,
      uv: 1,
    },
    hour: [
      {
        uv: 1,
        chance_of_rain: 30,
        wind_kph: 12,
        feelslike_c: 15,
        temp_c: 12,
        time: ' 2023-10-27 00:00',
      },
    ],
  },
}

describe('current day', () => {
  it('render title', () => {
    render(<CurrentDay date={date} />)
    expect(screen.getByText(/Сегодня:/i)).toBeInTheDocument()
  })
  it('render temperatura', () => {
    render(<CurrentDay date={date} />)
    expect(screen.queryByTestId('temp')).toHaveTextContent(/Температура10-20°C/i)
  })
  it('render wind', () => {
    render(<CurrentDay date={date} />)
    expect(screen.queryByTestId('wind')).toHaveTextContent(/Ветер до 6 км\/ч/i)
  })
  it('render rain', () => {
    render(<CurrentDay date={date} />)
    expect(screen.queryByTestId('rain')).toHaveTextContent(/Дождь 50%/i)
  })
  it('render uv', () => {
    render(<CurrentDay date={date} />)
    expect(screen.queryByTestId('uv')).toHaveTextContent(/UV излучение 1/i)
  })
})
