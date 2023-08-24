import { FunctionComponent } from 'react'
import { popularData } from '../home/popular-area/popular.data'
import PopularItem from '../home/popular-area/popular-item/PopularItem'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { BsBuildings } from 'react-icons/bs'

const CitiesPage: FunctionComponent = () => {
  return (
    <div
      className="w-full bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] text-white overflow-hidden
     max-sm:mb-32"
    >
      <h1
        className=" text-3xl mb-3 flex items-center gap-2
       max-sm:text-2xl"
      >
        <BsBuildings />
        Популярные города
      </h1>
      <ul className=" grid grid-cols-4 gap-3 overflow-scroll max-sm:grid-cols-1">
        {popularData.map((item) => {
          return <PopularItem key={item.title} {...item} />
        })}
      </ul>

      <Link
        className=" mt-2 w-52 flex items-start transition-colors hover:text-purple"
        to={'/search'}
      >
        Поиск по городу <MdKeyboardArrowRight className=" text-3xl" />
      </Link>
    </div>
  )
}

export default CitiesPage
