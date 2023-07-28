import { FunctionComponent } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { IData } from '../../../../types/data.interface'

const CurrentInfo: FunctionComponent<{ data: IData | undefined }> = ({ data }) => {
  return (
    <div className=" max-md:mb-[4rem]">
      <p className=" flex items-center mt-[40px] gap-2 text-xl ">
        <MdLocationOn /> {data?.location?.name}
      </p>
      <p className=" mt-[40px] text-4xl">{data?.current?.condition?.text}</p>
      <div className=" max-md:absolute right-5 top-5">
        <p className=" text-5xl mt-[70px] max-md:mt-0">{data?.current?.temp_c}°C</p>
        <span className=" text-xs">{data?.location?.localtime.slice(0, 10)}</span> |
        <span className=" text-xs"> {data?.location?.localtime.slice(-5)}</span>
      </div>
    </div>
  )
}

export default CurrentInfo
