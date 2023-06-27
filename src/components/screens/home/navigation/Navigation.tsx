import { FunctionComponent } from 'react'
import NavigationItem from './nav-item/NavigationItem'
import { FcLandscape } from 'react-icons/fc'

const Navigation: FunctionComponent = () => {
  return (
    <div className=" w-[100px] h-[450px] bg-gray-500 bg-opacity-40 rounded-full flex flex-col items-center py-[20px] text-white justify-between ">
      <FcLandscape className=" mx-auto w-[50px] h-[50px]" />
      <div className=" flex-col items-center flex gap-[30px]">
        <NavigationItem
          list={{
            link: '/',
            text: 'Погода',
            img: './weather.png',
            classNames: 'w-[40px] h-[40px]',
          }}
        />
        <NavigationItem
          list={{
            link: '/search',
            text: 'Поиск',
            img: './explore.png',
            classNames: 'w-[30px] h-[30px]',
          }}
        />
        <NavigationItem
          list={{
            link: '/cities',
            text: 'Города',
            img: './city.png',
            classNames: 'w-[25px] h-[35px]',
          }}
        />
      </div>
    </div>
  )
}

export default Navigation
