import { FunctionComponent } from 'react'
import { popularData } from '../home/popular-area/popular.data'
import PopularItem from '../home/popular-area/popular-item/PopularItem'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CitiesPage: FunctionComponent = () => {
  return (
    <div className=" ml-3 w-[880px] h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px]  p-[20px] text-white  ">
      <h1 className=" text-3xl mb-5">Популярные города</h1>
      <div className=" flex items-center justify-between flex-wrap">
        {popularData.map((item) => {
          return <PopularItem key={item.title} {...item} />
        })}
      </div>
      <button className=" mt-5 hover:scale-110 transition-transform ">
        <Link className=" flex items-start" to={'/search'}>
          Поиск по городу <MdKeyboardArrowRight className=" text-3xl" />
        </Link>
      </button>
    </div>
  )
}

export default CitiesPage
