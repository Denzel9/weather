import { FunctionComponent } from 'react'
import NavigationItem from './NavigationItem'

import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiSearchAlt2 } from 'react-icons/bi'
import { LiaCitySolid } from 'react-icons/lia'

const MobileNav: FunctionComponent = () => {
  return (
    <div
      className=" fixed bottom-0 w-full left-0 right-0 bg-gray-500
    bg-opacity-80 z-10 rounded-tl-3xl rounded-tr-3xl h-24 pt-5 px-10
    sm:hidden"
    >
      <div className=" flex justify-between items-center ">
        <NavigationItem
          list={{
            link: '/',
            text: 'Погода',
            icon: <TiWeatherPartlySunny className="w-[40px] h-[40px]" />,
          }}
        />
        <NavigationItem
          list={{
            link: '/search',
            text: 'Поиск',
            icon: <BiSearchAlt2 className="w-[40px] h-[40px]" />,
          }}
        />
        <NavigationItem
          list={{
            link: '/cities',
            text: 'Города',
            icon: <LiaCitySolid className="w-[40px] h-[40px]" />,
          }}
        />
      </div>
    </div>
  )
}

export default MobileNav
