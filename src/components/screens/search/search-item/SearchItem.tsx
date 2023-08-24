import { FunctionComponent, useContext } from 'react'
import { MdLocationCity, MdOutlineFavoriteBorder } from 'react-icons/md'
import SkeletonLoader from '../../../ui/skeleton/Skeleton'
import { DataContext } from '../../../../context/DataContextProvider'

const SearchItem: FunctionComponent<{ data: { [key: string]: string } }> = ({ data }) => {
  const { setCity } = useContext(DataContext)

  return (
    <div className=" w-[260px] max-sm:w-full ">
      {data?.image ? (
        <h2 className=" text-3xl my-5">{data.title}</h2>
      ) : (
        <SkeletonLoader className="my-5" circle={false} width={100} height={30} />
      )}
      {data?.image ? (
        <img className=" rounded-md max-h-[230px]" src={data.image} alt="" />
      ) : (
        <SkeletonLoader circle={false} width={260} height={173} />
      )}

      {data?.image ? (
        <button
          className=" mt-2 flex items-center gap-2 text-lg hover:text-purple transition-color"
          onClick={() => setCity(data.title)}
        >
          <MdLocationCity className=" text-purple" />
          Посмотреть
        </button>
      ) : (
        <SkeletonLoader className=" mt-2 " circle={false} width={150} height={18} />
      )}
      {data?.image ? (
        <button className=" flex items-center gap-2 text-lg hover:text-purple transition-color">
          <MdOutlineFavoriteBorder className=" text-purple" />В избранное
        </button>
      ) : (
        <SkeletonLoader circle={false} width={150} height={18} />
      )}
    </div>
  )
}

export default SearchItem
