import { Route, Routes } from 'react-router'
import './App.scss'
import Layout from './components/layout/Layout'
import Weather from './pages/weather'
import Search from './pages/search'
import Cities from './pages/cities'
import DataContextProvider from './context/DataContextProvider'

function App() {
  return (
    <DataContextProvider>
      <Layout>
        <Routes>
          <Route index element={<Weather />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </Layout>
    </DataContextProvider>
  )
}

export default App
