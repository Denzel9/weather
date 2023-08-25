import { FunctionComponent, useContext } from 'react'
import { MdOutlineFavorite } from 'react-icons/md'
import PopularItem from './popular-item/PopularItem'
import { popularData } from './popular.data'
import { DataContext } from '../../../../context/DataContextProvider'

const PopularArea: FunctionComponent = () => {
  const { data } = useContext(DataContext)
  return (
    <div
      className="w-full bg-gray-500 bg-opacity-20 backdrop-blur-xl rounded-[40px] p-[20px] text-white
     max-sm:hidden"
    >
      <h2 className=" flex items-center gap-2 text-2xl ">
        <MdOutlineFavorite className=" text-purple" />
        Популярные города
      </h2>
      <div className=" flex items-center gap-5 justify-between max-md:grid max-md:grid-cols-2 max-md:gap-3">
        {popularData
          .filter((item) => item.title !== data?.oneDays?.city)
          .map((item) => {
            return <PopularItem key={item.title} {...item} />
          })
          .slice(0, 4)}
      </div>
    </div>
  )
}

export default PopularArea
