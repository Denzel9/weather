import { FunctionComponent, useState } from 'react'
import NavigationItem from './NavigationItem'

import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BiSearchAlt2 } from 'react-icons/bi'
import { LiaCitySolid } from 'react-icons/lia'

import { CgMenuHotdog } from 'react-icons/cg'
import classNames from 'classnames'

const MobileNav: FunctionComponent = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={classNames(
          show && ' border ',
          ' fixed right-5 bottom-5 p-3 bg-purple rounded-full z-30 sm:hidden'
        )}
      >
        <CgMenuHotdog className=" text-3xl" />
      </button>

      <div
        onClick={(e) => e.preventDefault()}
        className={classNames(
          show ? ' opacity-100 duration-300 ' : ' opacity-0 duration-300 pointer-events-none',
          ' fixed bottom-0 right-0 w-24 h-80 pt-5 bg-purple bg-opacity-80 rounded-tl-xl z-20 '
        )}
      >
        <div className=" flex flex-col gap-3 items-center text-white">
          <NavigationItem
            list={{
              link: '/',
              text: 'Погода',
              icon: <TiWeatherPartlySunny className=" text-4xl " />,
              fn: () => setShow(false),
            }}
          />
          <NavigationItem
            list={{
              link: '/search',
              text: 'Поиск',
              icon: <BiSearchAlt2 className=" text-4xl" />,
              fn: () => setShow(false),
            }}
          />
          <NavigationItem
            list={{
              link: '/cities',
              text: 'Города',
              icon: <LiaCitySolid className=" text-4xl" />,
              fn: () => setShow(false),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default MobileNav
