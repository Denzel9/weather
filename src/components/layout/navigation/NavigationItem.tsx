import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { INav } from '../../../types/nav.types'

const NavigationItem: FunctionComponent<{ list: INav }> = ({ list }) => {
  return (
    <>
      <NavLink
        to={list.link}
        onClick={() => list.fn!(false)}
        className={({ isActive }) =>
          isActive
            ? ' text-lg transition-transform hover:scale-110 flex flex-col items-center sm:hidden'
            : ' text-xs transition-transform hover:scale-110 flex flex-col items-center sm:hidden'
        }
      >
        {list.icon}
        <p className=" text-center mt-1">{list.text}</p>
      </NavLink>

      <NavLink
        to={list.link}
        className={({ isActive }) =>
          isActive
            ? ' text-purple transition-all hover:scale-110 flex flex-col items-center max-sm:hidden'
            : ' transition-all hover:scale-110 flex flex-col items-center max-sm:hidden'
        }
      >
        {list.icon}
        <p className=" text-center mt-1">{list.text}</p>
      </NavLink>
    </>
  )
}

export default NavigationItem
