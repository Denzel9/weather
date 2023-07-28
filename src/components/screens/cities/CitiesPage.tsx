import { FunctionComponent } from 'react'
import { popularData } from '../home/popular-area/popular.data'
import PopularItem from '../home/popular-area/popular-item/PopularItem'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CitiesPage: FunctionComponent = () => {
  return (
    <div className="mx-5 w-full h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white overflow-hidden ">
      <h1 className=" text-3xl mb-3 max-md:mb-0">Популярные города</h1>
      <ul className=" grid grid-cols-4 gap-3 max-md:grid-cols-1 max-md:py-1 max-md:h-[385px] overflow-scroll">
        {popularData.map((item) => {
          return <PopularItem key={item.title} {...item} />
        })}
      </ul>
      <button className=" mt-5 hover:scale-110 transition-transform ">
        <Link className=" flex items-start" to={'/search'}>
          Поиск по городу <MdKeyboardArrowRight className=" text-3xl" />
        </Link>
      </button>
    </div>
  )
}

export default CitiesPage
