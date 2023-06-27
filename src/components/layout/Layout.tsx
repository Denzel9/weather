import classNames from 'classnames'
import { FunctionComponent, ReactNode, createContext } from 'react'
import { getWeatherImg } from '../../helpers/getWeatherImg'
import Navigation from '../screens/home/navigation/Navigation'
import { useWeatherData } from '../../hooks/useWeatherData'
import CurrentInfo from '../screens/home/current-info/CurrentInfo'
import { IData } from '../../types/data.interface'

export const DataContext = createContext<IData | undefined>(undefined)
export const SearchContext = createContext<any>(null)

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { data, setCity } = useWeatherData()
  return (
    <div
      className={classNames(
        getWeatherImg(data?.current?.condition?.text),
        'text-white  w-screen h-screen bg-cover bg-center '
      )}
    >
      <div className=" w-[1200px] mx-auto flex items-center justify-between">
        <CurrentInfo data={data} />
      </div>
      <div className=" mt-[24px] flex w-[1330px] mx-auto ">
        <Navigation />
        <DataContext.Provider value={data}>
          <SearchContext.Provider value={setCity}>{children}</SearchContext.Provider>
        </DataContext.Provider>
      </div>
    </div>
  )
}

export default Layout
