import { FunctionComponent } from 'react'
import ForecastDay from './forecastDay/ForecastDay'
import Forecast3Day from './forecast3day/Forecast3Day'
import FavoriteArea from './favorite-area/FavoriteArea'

const HomePage: FunctionComponent = () => {
  return (
    <div className=" flex w-[1230px] ">
      <div>
        <FavoriteArea />
        <ForecastDay />
      </div>
      <Forecast3Day />
    </div>
  )
}

export default HomePage
