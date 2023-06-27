import classNames from 'classnames'
import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { currentHour, currentTime, getApPm } from '../../../../helpers/getDate'
import { MdOutlineWindPower, MdWaterDrop, MdWbSunny, MdDeviceThermostat } from 'react-icons/md'
import { DataContext } from '../../../layout/Layout'
import { IForecastDay } from '../../../../types/data.interface'

const Forecast3Day: FunctionComponent = () => {
  const data = useContext(DataContext)

  const [date, setDate] = useState<IForecastDay>()

  useEffect(() => setDate(data?.forecast?.forecastday[0]), [data])

  const currentDayHour = () =>
    date?.hour?.filter((item) => (item.time.slice(11, 13) === currentHour ? item : ''))

  useEffect(() => {
    currentDayHour()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="  ml-3 w-[324px] h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white  ">
      <div className=" flex items-center justify-between">
        {data?.forecast?.forecastday?.map((item: any) => {
          return (
            <div
              className="transition-transform hover:scale-110 cursor-pointer"
              key={item.date}
              onClick={() => setDate(item)}
            >
              <img
                className={classNames(
                  date?.date === item.date ? 'w-[50px]' : '',
                  'w-[30px] m-auto'
                )}
                src={item?.day?.condition?.icon}
                alt={item.date}
              />
              <span className=" text-xs">{item.date}</span>
            </div>
          )
        })}
      </div>
      <p className=" text-center mt-2">{currentTime + getApPm(currentTime)}</p>
      <p className=" text-3xl mt-4">Сейчас:</p>
      {currentDayHour()?.map((item: any) => {
        return (
          <div className=" flex flex-col gap-6 mt-8" key={item.feelslike_c}>
            <p className=" flex gap-1  items-center text-xl">
              <MdDeviceThermostat /> Ощушается как {item.feelslike_c}°C
            </p>
            <p className=" flex gap-1  items-center text-xl">
              <MdOutlineWindPower />
              Скорость ветра {item.wind_kph} km/h
            </p>
            <p className=" flex gap-1  items-center text-xl">
              <MdWaterDrop /> Вероятность дождя {item.chance_of_rain}%
            </p>
            <p className=" flex gap-1 items-center text-xl">
              <MdWbSunny /> UV излучение {item.uv}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Forecast3Day
