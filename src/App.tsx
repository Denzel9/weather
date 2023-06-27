import { Route, Routes } from 'react-router'
import './App.scss'
import Layout from './components/layout/Layout'
import Weather from './pages/weather'
import Search from './pages/search'
import Cities from './pages/cities'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Weather />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
    </Layout>
  )
}

export default App
