import { FunctionComponent } from 'react'
import ForecastDay from './forecastDay/ForecastDay'
import Forecast3Day from './forecast3day/Forecast3Day'
import PopularArea from './popular-area/PopularArea'

const HomePage: FunctionComponent = () => {
  return (
    <div className=" flex gap-5 container mx-auto max-md:flex-col-reverse max-md:px-5">
      <div>
        <PopularArea />
        <ForecastDay />
      </div>
      <Forecast3Day />
    </div>
  )
}

export default HomePage
