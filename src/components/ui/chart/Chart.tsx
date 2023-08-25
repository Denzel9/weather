import { memo, useContext } from 'react'

import { Line, LineChart, Tooltip, XAxis } from 'recharts'
import { DataContext } from '../../../context/DataContextProvider'

import './paddingChart.css'

function Charts() {
  const { data } = useContext(DataContext)

  return (
    <div className=" max-sm:w-full ">
      <LineChart width={810} height={120} data={data?.chart} className=" mt-5 ">
        <Line type="monotone" dataKey="uv" stroke="#8884d8" name=" " unit={'°C'} />
        <XAxis dataKey="name" tick={{ stroke: 'white' }} />
        <Tooltip
          contentStyle={{ backgroundColor: 'transparent', color: 'red', border: 'none' }}
          labelStyle={{ display: 'none' }}
          separator="+"
        />
      </LineChart>
    </div>
  )
}

export default memo(Charts)
