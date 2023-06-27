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
  return (
    <div className=" mt-3 ml-3 w-[880px] h-[235px] bg-gray-500 bg-opacity-40 rounded-[40px]  p-[20px] text-white  ">
      <p className=" flex items-center gap-2 text-2xl">
        <MdAccessTime /> Прогноз на 24 часа
      </p>
      <Chart curr={getHoursTemp()} data={data} />
    </div>
  )
}

export default ForecastDay
