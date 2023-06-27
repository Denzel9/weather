import { FunctionComponent, useContext } from 'react'
import { MdLocationCity, MdOutlineFavoriteBorder } from 'react-icons/md'
import { SearchContext } from '../../../layout/Layout'

const SearchItem: FunctionComponent<{ data: { [key: string]: string } }> = ({ data }) => {
  const search = useContext(SearchContext)
  return (
    <div className=" w-[260px]">
      <h2 className=" text-3xl my-5">{data.title}</h2>
      <img className=" rounded-md" src={data.image} alt="" />
      <button
        className=" mt-2 flex items-center gap-2 text-lg hover:scale-110 transition-transform"
        onClick={() => search(data.title)}
      >
        <MdLocationCity />
        Посмотреть
      </button>
      <button className=" flex items-center gap-2 text-lg hover:scale-110 transition-transform">
        <MdOutlineFavoriteBorder />В избранное
      </button>
    </div>
  )
}

export default SearchItem
