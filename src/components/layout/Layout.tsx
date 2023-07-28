import classNames from 'classnames'
import { FunctionComponent, ReactNode, createContext } from 'react'
import Navigation from './navigation/Navigation'
import { useWeatherData } from '../../hooks/useWeatherData'
import CurrentInfo from '../screens/home/current-info/CurrentInfo'
import { IData } from '../../types/data.interface'
import { useWeatherImg } from '../../hooks/useWeatherImg'
import MobileNav from './navigation/MobileNav'

export const DataContext = createContext<IData | undefined>(undefined)
export const SearchContext = createContext<any>(null)

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { data, setCity } = useWeatherData()
  const { img } = useWeatherImg(data?.current?.condition?.text || '')

  const width = window.screen.width

  return (
    <div className={classNames(img, 'text-white w-screen h-screen bg-cover bg-center ')}>
      <div className=" w-full flex items-center justify-between container mx-auto max-md:px-5">
        <CurrentInfo data={data} />
      </div>
      <div className=" mt-[24px] flex gap-5 container mx-auto">
        {width < 631 ? <MobileNav /> : <Navigation />}
        <DataContext.Provider value={data}>
          <SearchContext.Provider value={setCity}>{children}</SearchContext.Provider>
        </DataContext.Provider>
      </div>
    </div>
  )
}

export default Layout
