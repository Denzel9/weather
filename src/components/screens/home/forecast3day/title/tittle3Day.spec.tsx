import { render, screen } from '@testing-library/react'
import { currentDay } from '../../../../../helpers/getDate'
import '@testing-library/jest-dom'
import Title3Day from './Title3Day'

describe('render tittle 3 days', () => {
  it('today', () => {
    render(<Title3Day date={String(currentDay)} />)
    expect(screen.getByText(/Сегодня:/i)).toBeInTheDocument()
  })
  it('tomorrow', () => {
    render(<Title3Day date={String(currentDay + 1)} />)
    expect(screen.getByText(/Завтра:/i)).toBeInTheDocument()
  })
  it('tomorrow + 1', () => {
    render(<Title3Day date={String(currentDay + 2)} />)
    expect(screen.getByText(/Послезавтра:/i)).toBeInTheDocument()
  })
})
