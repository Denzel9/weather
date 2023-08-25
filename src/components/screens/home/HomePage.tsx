import { FunctionComponent } from 'react'
import ForecastDay from './forecastDay/ForecastDay'
import Forecast3Day from './forecast3day/Forecast3Day'
import PopularArea from './popular-area/PopularArea'

const HomePage: FunctionComponent = () => {
  return (
    <div
      className="flex gap-5 container mx-auto animate-fade
    max-sm:flex-col "
    >
      <div
        className=" w-[850px]
       max-sm:flex-col-reverse max-sm:w-full"
      >
        <PopularArea />
        <ForecastDay />
      </div>
      <Forecast3Day />
    </div>
  )
}

export default HomePage
