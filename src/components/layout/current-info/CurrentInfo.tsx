import { FunctionComponent } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { IData } from '../../../types/data.interface'
import SkeletonLoader from '../../ui/skeleton/Skeleton'

const CurrentInfo: FunctionComponent<{ data: IData; isLoading: boolean }> = ({
  data,
  isLoading,
}) => {
  return (
    <div
      className="  pt-[40px] container mx-auto
        max-sm:px-5 max-sm:pt-[30px]"
    >
      <p
        className=" flex items-center gap-2 text-xl
        "
      >
        <MdLocationOn />
        {isLoading ? (
          <SkeletonLoader circle={false} width={100} height={20} />
        ) : (
          data?.location?.name
        )}
      </p>
      <p
        className=" mt-[40px] text-4xl
       max-sm:mt-[60px]"
      >
        {isLoading ? (
          <SkeletonLoader circle={false} width={100} height={36} />
        ) : (
          data?.current?.condition?.text
        )}
      </p>
      <div className=" max-md:absolute right-5 top-5">
        <p className=" text-5xl mt-[70px] max-md:mt-0">
          {isLoading ? (
            <SkeletonLoader circle={false} width={50} height={48} />
          ) : (
            `${data?.current?.temp_c}°C`
          )}
        </p>
        {isLoading ? (
          <SkeletonLoader circle={false} width={100} height={12} />
        ) : (
          <>
            <span className=" text-xs">{data?.location?.localtime.slice(0, 10)}</span> |
            <span className=" text-xs"> {data?.location?.localtime.slice(-5)}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default CurrentInfo
