import { FunctionComponent } from 'react'
import { IDataInfo, IOneDay } from '../../../../../types/data.interface'
import classNames from 'classnames'

const NavDay: FunctionComponent<{
  data: IDataInfo
  date: IOneDay
  setDate(obj: IOneDay): void
}> = ({ data, date, setDate }) => {
  return (
    <div className=" flex items-center justify-between h-16">
      {data?.weather?.forecast?.forecastday?.map((item) => {
        return (
          <div
            data-testid="divClick"
            key={item.date}
            className="transition-transform hover:scale-110 cursor-pointer"
            onClick={() => setDate({ dayWeather: item, city: data?.oneDays?.city })}
          >
            <img
              data-testid="icon"
              className={classNames(
                date?.dayWeather?.date.slice(8, 10) === item?.date.slice(8, 10)
                  ? 'w-[50px] duration-300'
                  : 'duration-300',
                'w-[30px] m-auto'
              )}
              src={item?.day?.condition?.icon}
              alt={item.date}
            />
            <span className="text-xs">{item.date}</span>
          </div>
        )
      })}
    </div>
  )
}

export default NavDay
