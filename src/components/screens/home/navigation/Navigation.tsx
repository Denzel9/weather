import { FunctionComponent } from 'react'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navigation: FunctionComponent = () => {
  return (
    <div className=" w-[100px] h-[450px] bg-gray-500 bg-opacity-40 rounded-full flex flex-col items-center py-[20px] text-white justify-between ">
      <Link
        to={'/auth'}
        className=" w-[50px] h-[50px] rounded-full bg-black bg-base text-4xl transition-transform hover:scale-110"
      >
        <MdOutlinePersonOutline className=" m-auto mt-1" />
      </Link>

      <div className=" flex-col items-center flex gap-[30px]">
        <Link to={'/'} className=" text-xs transition-transform hover:scale-110">
          <img className=" w-[40px] h-[40px]  m-auto" src="./weather.png" alt="weather" />
          <p className=" text-center mt-1">Погода</p>
        </Link>
        <Link to={'/search'} className="  text-xs transition-transform hover:scale-110">
          <img className="w-[30px] h-[30px]  m-auto" src="./explore.png" alt="explore" />
          <p className=" text-center mt-1">Поиск</p>
        </Link>
        <button className=" text-xs transition-transform hover:scale-110">
          <img className=" w-[25px] h-[35px]  m-auto" src="./city.png" alt="city" />
          <p className=" text-center mt-1">Города</p>
        </button>
        <button className="text-xs transition-transform hover:scale-110">
          <img className="w-[30px] h-[30px] m-auto" src="./settings.png" alt="settings" />
          <p className=" text-center mt-1">Настройки</p>
        </button>
      </div>
    </div>
  )
}

export default Navigation
