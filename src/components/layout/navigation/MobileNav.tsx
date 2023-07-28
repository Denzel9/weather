import { FunctionComponent } from 'react'
import NavigationItem from './NavigationItem'

const MobileNav: FunctionComponent = () => {
  return (
    <div className=" fixed bottom-0 w-full left-0 right-0 bg-gray-500 bg-opacity-80 rounded-tl-3xl rounded-tr-3xl h-24 p-5">
      <div className=" flex justify-between items-center ">
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

export default MobileNav
