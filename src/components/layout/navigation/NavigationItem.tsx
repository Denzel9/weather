import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { INav } from '../../../types/nav.types'

const NavigationItem: FunctionComponent<{ list: INav }> = ({ list }) => {
  return (
    <NavLink
      to={list.link}
      className={({ isActive }) =>
        isActive
          ? ' text-purple text-xs transition-transform hover:scale-110 flex flex-col items-center'
          : ' text-xs transition-transform hover:scale-110 flex flex-col items-center'
      }
    >
      {list.icon}
      <p className=" text-center mt-1">{list.text}</p>
    </NavLink>
  )
}

export default NavigationItem
