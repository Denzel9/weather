import { createContext, FunctionComponent, ReactNode } from 'react'
import { useData } from '../hooks/useWeatherData'
import { IDataContext } from '../types/data.interface'

export const DataContext = createContext<IDataContext>({} as IDataContext)

const DataContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { data, setCity, isLoading } = useData()
  return (
    <DataContext.Provider value={{ setCity, data, isLoading }}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider
