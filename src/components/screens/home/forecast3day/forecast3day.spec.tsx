import { render } from '@testing-library/react'
import Forecast3Day from './Forecast3Day'

jest.mock('axios', () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: 'den' },
    }),
  },
}))

describe('Forecast3Day', () => {
  it('qw', () => {
    render(<Forecast3Day />)
  })
})
