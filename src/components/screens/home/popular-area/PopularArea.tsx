import { FunctionComponent } from 'react'
import { MdOutlineFavorite } from 'react-icons/md'
import PopularItem from './popular-item/PopularItem'
import { popularData } from './popular.data'

const PopularArea: FunctionComponent = () => {
  const width = window.screen.width

  return width < 631 ? null : (
    <div className="w-full bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white  ">
      <h2 className=" flex items-center gap-2 text-2xl ">
        <MdOutlineFavorite />
        Популярные города
      </h2>
      <div className=" flex items-center justify-between max-md:grid max-md:grid-cols-2 max-md:gap-3">
        {popularData
          .map((item) => {
            return <PopularItem key={item.title} {...item} />
          })
          .slice(0, 4)}
      </div>
    </div>
  )
}

export default PopularArea
