import { FunctionComponent, useContext } from 'react'
import { IPopular } from '../../../../../types/popular.interface'
import { SearchContext } from '../../../../layout/Layout'

const PopularItem: FunctionComponent<IPopular> = ({ title, img }) => {
  const search = useContext(SearchContext)
  return (
    <div
      className=" mt-3 rounded-md cursor-pointer hover:scale-110 transition-transform"
      onClick={() => search(title)}
    >
      <img className="w-[190px] h-[100px] rounded-md" src={img} alt="" />
      <span>{title}</span>
    </div>
  )
}

export default PopularItem
