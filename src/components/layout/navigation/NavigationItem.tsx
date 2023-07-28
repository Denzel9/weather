import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const NavigationItem: FunctionComponent<{ list: any }> = ({ list }) => {
  return (
    <Link to={list.link} className=" text-xs transition-transform hover:scale-110">
      <img src={list.img} className={classNames('  m-auto', list.classNames)} alt={list.text} />
      <p className=" text-center mt-1">{list.text}</p>
    </Link>
  )
}

export default NavigationItem
