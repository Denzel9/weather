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
      <Title3Day date={date?.dayWeather?.date?.slice(8, 10)} />

      <div
        className=" flex gap-1 items-center text-lg
       sm:hidden"
      >
        <MdDeviceThermostat className="text-purple" />
        Температура от
        <span className=" text-purple">{date && Math.round(date?.dayWeather?.day?.mintemp_c)}</span>
        °C до
        <span className=" text-purple">{date && Math.round(date?.dayWeather?.day?.maxtemp_c)}</span>
        °C
      </div>

      <div
        className=" flex gap-1 items-center text-lg
       max-sm:hidden"
        data-testid="temp"
      >
        <MdDeviceThermostat className="text-purple" />
        Температура
        <span className=" text-purple">{date && Math.round(date?.dayWeather?.day?.mintemp_c)}</span>
        -
        <span className=" text-purple">{date && Math.round(date?.dayWeather?.day?.maxtemp_c)}</span>
        °C
      </div>
      <div className=" flex gap-1  items-center text-lg" data-testid="wind">
        <MdOutlineWindPower className="text-purple" />
        Ветер до <span className=" text-purple">
          {date && date?.dayWeather?.day?.maxwind_kph}
        </span>{' '}
        км/ч
      </div>
      <div className=" flex gap-1  items-center text-lg" data-testid="rain">
        <MdWaterDrop className="text-purple" /> Дождь{' '}
        <span className=" text-purple">{date && date?.dayWeather?.day?.daily_chance_of_rain}</span>%
      </div>
      <div className=" flex gap-1 items-center text-lg" data-testid="uv">
        <MdWbSunny className="text-purple" /> UV излучение{' '}
        <span className=" text-purple">{date && date?.dayWeather?.day?.uv}</span>
      </div>
    </div>
  )
}

export default CurrentDay
