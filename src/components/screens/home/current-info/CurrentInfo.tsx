import { FunctionComponent } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { IData } from '../../../../types/data.interface'

const CurrentInfo: FunctionComponent<{ data: IData | undefined }> = ({ data }) => {
  return (
    <div>
      <p className=" flex items-center mt-[40px] gap-2 text-xl ">
        <MdLocationOn /> {data?.location?.name}
      </p>
      <p className=" mt-[40px] text-4xl">{data?.current?.condition?.text}</p>
      <p className=" text-5xl mt-[70px]">{data?.current?.temp_c}°C</p>
      <span className=" text-xs">{data?.location?.localtime.slice(0, 10)}</span> |
      <span className=" text-xs"> {data?.location?.localtime.slice(-5)}</span>
    </div>
  )
}

export default CurrentInfo
