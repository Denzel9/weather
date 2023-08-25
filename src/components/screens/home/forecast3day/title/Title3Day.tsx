import { FunctionComponent } from 'react'
import { currentDay } from '../../../../../helpers/getDate'

const Title3Day: FunctionComponent<{ date: string }> = ({ date }) => {
  return (
    <>
      {currentDay === +date && <p className=" text-2xl">Сегодня:</p>}
      {currentDay + 1 === +date && <p className=" text-2xl">Завтра:</p>}
      {currentDay + 2 === +date && <p className=" text-2xl">Послезавтра:</p>}
    </>
  )
}

export default Title3Day
