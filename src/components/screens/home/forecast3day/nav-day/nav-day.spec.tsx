import { fireEvent, render, screen } from '@testing-library/react'
import { IOneDay } from '../../../../../types/data.interface'
import '@testing-library/jest-dom'
import NavDay from './NavDay'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'
import renderer from 'react-test-renderer'

jest.mock('axios', () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: 'den' },
    }),
  },
}))

const setDate = jest.fn()

const date: IOneDay = {
  city: 'Moscow',
  dayWeather: {
    date: '2023-10-27',
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

const data = {
  chart: [
    {
      name: '00:00',
      uv: '-2',
    },
    {
      name: '00:00',
      uv: '-2',
    },
    {
      name: '00:00',
      uv: '-2',
    },
  ],
  oneDays: {
    city: 'Moscow',
    dayWeather: {
      date: '2023-10-27',
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
  },
  weather: {
    current: {
      condition: {
        icon: '//cdn.weatherapi.com/weather/64x64/day/368.png',
        text: 'Небольшой снег',
      },
      temp_c: 12,
    },
    forecast: {
      forecastday: [
        {
          day: { mintemp_c: 10, maxtemp_c: 20, maxwind_kph: 6, daily_chance_of_rain: 50, uv: 1 },
          date: '2023-10-25',
          hour: [
            {
              uv: 2,
              chance_of_rain: 50,
              wind_kph: 5,
              feelslike_c: 12,
              temp_c: 2,
              time: '2023-10-27 00:00',
            },
          ],
        },
        {
          day: { mintemp_c: 10, maxtemp_c: 20, maxwind_kph: 6, daily_chance_of_rain: 50, uv: 1 },
          date: '2023-10-26',
          hour: [
            {
              uv: 2,
              chance_of_rain: 50,
              wind_kph: 5,
              feelslike_c: 12,
              temp_c: 2,
              time: '2023-10-27 00:00',
            },
          ],
        },
        {
          day: { mintemp_c: 10, maxtemp_c: 20, maxwind_kph: 6, daily_chance_of_rain: 50, uv: 1 },
          date: '2023-10-27',
          hour: [
            {
              uv: 2,
              chance_of_rain: 50,
              wind_kph: 5,
              feelslike_c: 12,
              temp_c: 2,
              time: '2023-10-27 00:00',
            },
          ],
        },
      ],
    },
    location: {
      name: '"Москва"',
      localtime: '2023-10-27 14:47',
      temp_c: 12,
    },
  },
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

describe('navigation day', () => {
  it('render', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <NavDay data={data as any} date={date!} setDate={setDate} />
      </QueryClientProvider>
    )

    expect(screen.getByText(/2023-10-25/i)).toBeInTheDocument()
    expect(screen.getByText(/2023-10-26/i)).toBeInTheDocument()
    expect(screen.getByText(/2023-10-27/i)).toBeInTheDocument()
  })

  it('change day', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <NavDay data={data as any} date={date!} setDate={setDate} />
      </QueryClientProvider>
    )

    expect(screen.queryByAltText(/2023-10-27/i)).toHaveClass('w-[50px]')
    fireEvent.click(screen.queryByAltText(/2023-10-26/i)!)
    expect(setDate).toBeCalled()
    expect(await screen.findByAltText(/2023-10-27/i)).toHaveClass('w-[50px]')
  })

  it('snapshot', async () => {
    const component = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <NavDay data={data as any} date={date!} setDate={setDate} />
        </QueryClientProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
