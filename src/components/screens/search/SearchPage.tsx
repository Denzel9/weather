import { FunctionComponent, useState } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'
import { useCityImage } from '../../../hooks/useCityImage'
import SearchItem from './search-item/SearchItem'

const SearchPage: FunctionComponent = () => {
  const [searchText, setSearchText] = useState('')
  const { img, setDone } = useCityImage(searchText)
  return (
    <div className=" ml-3 w-[300px] h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px]  p-[20px]  ">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={classNames(
          styles.input,
          ' py-2 bg-transparent border-b outline-none text-white'
        )}
        type="search"
        placeholder="Москва..."
      />
      <button
        onClick={() => setDone(true)}
        className=" text-right px-4 py-2 border-b hover:text-gold transition-colors"
      >
        Поиск
      </button>
      <SearchItem data={img} />
    </div>
  )
}

export default SearchPage
