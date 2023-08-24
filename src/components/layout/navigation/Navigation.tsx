import { FunctionComponent } from 'react'
import NavigationItem from './NavigationItem'

import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiSearchAlt2 } from 'react-icons/bi'
import { LiaCitySolid } from 'react-icons/lia'
import { AiOutlineGitlab } from 'react-icons/ai'

const Navigation: FunctionComponent = () => {
  return (
    <div
      className=" min-w-[100px] h-[450px] bg-gray-500 bg-opacity-40
    rounded-full flex flex-col items-center text-white justify-around
     max-sm:hidden"
    >
      <AiOutlineGitlab className=" mx-auto text-7xl" />
      <div className=" flex-col items-center flex gap-[30px]">
        <NavigationItem
          list={{
            link: '/',
            text: 'Погода',
            icon: <TiWeatherPartlySunny className=" text-4xl" />,
          }}
        />
        <NavigationItem
          list={{
            link: '/search',
            text: 'Поиск',
            icon: <BiSearchAlt2 className=" text-4xl" />,
          }}
        />
        <NavigationItem
          list={{
            link: '/cities',
            text: 'Города',
            icon: <LiaCitySolid className=" text-4xl" />,
          }}
        />
      </div>
    </div>
  )
}

export default Navigation
