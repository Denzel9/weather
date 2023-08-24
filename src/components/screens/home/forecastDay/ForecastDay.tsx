import { FunctionComponent } from 'react'
import { MdAccessTime } from 'react-icons/md'
import Charts from '../../../ui/chart/Chart'

const ForecastDay: FunctionComponent = () => {
  return (
    <div
      className=" mt-3 w-full h-[200px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white
     max-sm:hidden"
    >
      <p className=" flex items-center gap-2 text-2xl">
        <MdAccessTime className=" text-purple" /> Прогноз на 24 часа
      </p>
      <Charts />
    </div>
  )
}

export default ForecastDay
