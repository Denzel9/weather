import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../../context/DataContextProvider'
import CurrentDay from './current-day/CurrentDay'
import NavDay from './nav-day/NavDay'
import { IOneDay } from '../../../../types/data.interface'

const Forecast3Day: FunctionComponent = () => {
  const { data } = useContext(DataContext)

  const [date, setDate] = useState<IOneDay>()

  useEffect(() => setDate(data?.oneDays), [data])
  return (
    <div
      className="w-full h-[450px] bg-gray-500 bg-opacity-20 backdrop-blur-xl rounded-[40px] p-[20px] text-white
    max-sm:h-[400px]"
    >
      <NavDay data={data} date={date!} setDate={setDate} />
      <CurrentDay date={date!} />
    </div>
  )
}

export default Forecast3Day
