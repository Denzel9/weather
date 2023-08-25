import { FunctionComponent } from 'react'
import { MdAccessTime } from 'react-icons/md'
import Charts from '../../../ui/chart/Chart'
import classNames from 'classnames'

import styles from './scrollbar.module.css'

const ForecastDay: FunctionComponent = () => {
  return (
    <div
      className={classNames(
        styles.scroll,
        ' mt-3 w-full h-[200px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white overflow-x-scroll overflow-y-hidden  '
      )}
    >
      <p
        className=" flex items-center gap-2 text-2xl
       max-sm:sticky left-0"
      >
        <MdAccessTime className=" text-purple" /> Прогноз на 24 часа
      </p>
      <Charts />
    </div>
  )
}

export default ForecastDay
