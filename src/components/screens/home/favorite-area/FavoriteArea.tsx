import { FunctionComponent } from 'react'
import { MdOutlineFavorite } from 'react-icons/md'
import FavoriteItem from './favorite-item/FavoriteItem'

const FavoriteArea: FunctionComponent = () => {
  return (
    <div className=" ml-3 w-[880px] h-[200px] bg-gray-500 bg-opacity-40 rounded-[40px]  p-[20px] text-white  ">
      <h2 className=" flex items-center gap-2 text-2xl">
        <MdOutlineFavorite />
        Избранные города
      </h2>
      <div className=" flex items-center justify-between">
        <FavoriteItem />
      </div>
    </div>
  )
}

export default FavoriteArea
