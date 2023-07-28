import { FunctionComponent, useContext } from 'react'
import Chart from '../../../ui/chart/Chart'
import { MdAccessTime } from 'react-icons/md'
import { DataContext } from '../../../layout/Layout'

const ForecastDay: FunctionComponent = () => {
  const data = useContext(DataContext)

  const getHoursTemp = () => {
    const hourTemp = data?.forecast.forecastday[0]?.hour.map((item) => Math.round(item.temp_c))
    return hourTemp
  }
  const width = window.screen.width
  return width < 631 ? null : (
    <div className=" mt-3  w-full h-[235px] bg-gray-500 bg-opacity-40 rounded-[40px]  p-[20px] text-white  ">
      <p className=" flex items-center gap-2 text-2xl">
        <MdAccessTime /> Прогноз на 24 часа
      </p>
      <Chart curr={getHoursTemp()} />
    </div>
  )
}

export default ForecastDay
