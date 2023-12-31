import classNames from 'classnames'
import { FunctionComponent, ReactNode, useContext } from 'react'
import CurrentInfo from './current-info/CurrentInfo'

import { useWeatherImg } from '../../hooks/useWeatherImg'
import { DataContext } from '../../context/DataContextProvider'
import MobileNav from './navigation/MobileNav'
import Navigation from './navigation/Navigation'
import { useLocation } from 'react-router-dom'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { data, isLoading } = useContext(DataContext)
  const { img } = useWeatherImg(data)
  const { pathname } = useLocation()
  return (
    <div
      className={classNames(
        img,
        pathname === '/' && 'max-sm:h-full',
        'text-white h-screen bg-cover bg-center max-sm:pb-10 '
      )}
    >
      <CurrentInfo data={data?.weather!} isLoading={isLoading} />
      <div className=" mt-[24px] flex gap-5 container mx-auto max-sm:px-5">
        <MobileNav />
        <Navigation />
        {children}
      </div>
    </div>
  )
}

export default Layout
