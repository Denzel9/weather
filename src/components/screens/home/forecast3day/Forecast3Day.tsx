import classNames from 'classnames'
import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { MdOutlineWindPower, MdWaterDrop, MdWbSunny, MdDeviceThermostat } from 'react-icons/md'
import { DataContext } from '../../../../context/DataContextProvider'

const Forecast3Day: FunctionComponent = () => {
  const { data } = useContext(DataContext)

  const [date, setDate] = useState<any>()

  useEffect(() => setDate(data?.oneDays), [data])

  return (
    <div
      className="  w-full h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white
    max-sm:h-[400px]"
    >
      <div className=" flex items-center justify-between h-16">
        {data?.weather?.forecast?.forecastday?.map((item: any) => {
          return (
            <div
              key={item.date}
              className="transition-transform hover:scale-110 cursor-pointer"
              onClick={() => setDate({ dayWeather: item, city: data?.oneDays?.city })}
            >
              <img
                className={classNames(
                  date?.dayWeather?.date.slice(8, 10) === item?.date.slice(8, 10)
                    ? 'w-[50px] duration-300'
                    : 'duration-300',
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

      <div
        className=" flex flex-col gap-8 mt-8
       max-sm:gap-7"
      >
        <p className=" text-2xl">Сейчас:</p>
        <p className=" flex gap-1 items-center text-lg">
          <MdDeviceThermostat /> Ощушается как {date?.dayWeather?.day?.avgtemp_c}°C
        </p>
        <p className=" flex gap-1  items-center text-lg">
          <MdOutlineWindPower />
          Ветер до {date?.dayWeather?.day?.maxwind_kph} км/ч
        </p>
        <p className=" flex gap-1  items-center text-lg">
          <MdWaterDrop /> Дождь {date?.dayWeather?.day?.daily_chance_of_rain}%
        </p>
        <p className=" flex gap-1 items-center text-lg">
          <MdWbSunny /> UV излучение {date?.dayWeather?.day?.uv}
        </p>
      </div>
    </div>
  )
}

export default Forecast3Day
