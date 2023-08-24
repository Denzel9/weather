import { FunctionComponent, useContext } from 'react'
import { IPopular } from '../../../../../types/popular.interface'

import SkeletonLoader from '../../../../ui/skeleton/Skeleton'
import { DataContext } from '../../../../../context/DataContextProvider'

const PopularItem: FunctionComponent<IPopular> = ({ title, img }) => {
  const { setCity } = useContext(DataContext)

  return (
    <div
      className=" mt-3 rounded-md cursor-pointer hover:opacity-70 transition-opacity max-md:w-full
      max-md:hover:scale-100 "
      onClick={() => setCity(title)}
    >
      {img ? (
        <img
          className="w-[250px] max-md:w-full max-md:h-[150px] h-[120px] rounded-md
          max-sm:mb-2"
          src={img}
          alt="img"
        />
      ) : (
        <SkeletonLoader circle={false} width={187} height={120} />
      )}
      <span className=" ">{title}</span>
    </div>
  )
}

export default PopularItem
