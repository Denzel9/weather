import { render, screen } from '@testing-library/react'
import ForecastDay from './ForecastDay'
import '@testing-library/jest-dom'

jest.mock('axios', () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: 'den' },
    }),
  },
}))

describe('render forecast day', () => {
  it('render title', () => {
    render(<ForecastDay />)

    expect(screen.getByText(/Прогноз на 24 часа/i)).toBeInTheDocument()
  })
})
