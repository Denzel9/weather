import { FunctionComponent, memo, useState } from 'react'
import classNames from 'classnames'
import { useCityImage } from '../../../hooks/useCityImage'
import SearchItem from './search-item/SearchItem'

const SearchPage: FunctionComponent = () => {
  const [searchText, setSearchText] = useState('')
  const { img, setDone } = useCityImage(searchText)

  return (
    <div
      className=" h-[450px] bg-gray-500 bg-opacity-40 rounded-[40px] p-[20px] animate-fade
    max-sm:w-full max-sm:h-[550px]"
    >
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={classNames(
          ' py-2 bg-transparent border-b outline-none  text-white max-sm:w-8/12'
        )}
        type="text"
        placeholder="Москва..."
      />
      <button
        onClick={() => setDone(true)}
        className=" text-right pl-10 pr-2 py-2 border-b hover:text-purple transition-colors max-sm:text-right"
      >
        Поиск
      </button>

      {img && <SearchItem data={img!} />}
    </div>
  )
}

export default memo(SearchPage)
