import { FunctionComponent, useContext } from 'react'
import { IPopular } from '../../../../../types/popular.interface'
import { SearchContext } from '../../../../layout/Layout'

const PopularItem: FunctionComponent<IPopular> = ({ title, img }) => {
  const search = useContext(SearchContext)
  return (
    <div
      className=" mt-3 rounded-md cursor-pointer hover:scale-110 transition-transform max-md:w-full max-md:hover:scale-100 "
      onClick={() => search(title)}
    >
      <img
        className="w-[250px] max-md:w-full max-md:h-[150px] h-[120px] rounded-md"
        src={img}
        alt="img"
      />
      <span>{title}</span>
    </div>
  )
}

export default PopularItem
