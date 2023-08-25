import { FunctionComponent } from 'react'
import { MdDeviceThermostat, MdOutlineWindPower, MdWaterDrop, MdWbSunny } from 'react-icons/md'
import Title3Day from '../title/Title3Day'
import { IOneDay } from '../../../../../types/data.interface'

const CurrentDay: FunctionComponent<{ date: IOneDay }> = ({ date }) => {
  return (
    <div
      className=" flex flex-col gap-8 mt-8
   max-sm:gap-7"
    >
      <Title3Day date={date?.dayWeather?.date.slice(8, 10)} />

      <p
        className=" flex gap-1 items-center text-lg
       sm:hidden"
      >
        <MdDeviceThermostat className="text-purple" /> Температура от
        <span className=" text-purple">{Math.round(date?.dayWeather?.day?.mintemp_c)}</span>°C до
        <span className=" text-purple">{Math.round(date?.dayWeather?.day?.maxtemp_c)}</span>°C
      </p>

      <p
        className=" flex gap-1 items-center text-lg
       max-sm:hidden"
      >
        <MdDeviceThermostat className="text-purple" /> Температура
        <span className=" text-purple">{Math.round(date?.dayWeather?.day?.mintemp_c)}</span>-
        <span className=" text-purple">{Math.round(date?.dayWeather?.day?.maxtemp_c)}</span>°C
      </p>
      <p className=" flex gap-1  items-center text-lg">
        <MdOutlineWindPower className="text-purple" />
        Ветер до <span className=" text-purple">{date?.dayWeather?.day?.maxwind_kph}</span> км/ч
      </p>
      <p className=" flex gap-1  items-center text-lg">
        <MdWaterDrop className="text-purple" /> Дождь{' '}
        <span className=" text-purple">{date?.dayWeather?.day?.daily_chance_of_rain}</span>%
      </p>
      <p className=" flex gap-1 items-center text-lg">
        <MdWbSunny className="text-purple" /> UV излучение{' '}
        <span className=" text-purple">{date?.dayWeather?.day?.uv}</span>
      </p>
    </div>
  )
}

export default CurrentDay
