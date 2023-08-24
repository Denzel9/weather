import { FunctionComponent } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ISkeleton {
  circle: boolean
  width: number
  height: number
  className?: string
}

const SkeletonLoader: FunctionComponent<ISkeleton> = (props) => {
  return <Skeleton baseColor=" #8884d8" {...props} />
}

export default SkeletonLoader
