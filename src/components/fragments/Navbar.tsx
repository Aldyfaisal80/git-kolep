import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";



export default function Navbar() {

  return (
    <div className="flex border border-b-3 items-center">
      <div className="w-2/3 flex p-2 bg-slate-100 rounded-md">
        <select className="p-2" name="" id="">
          <option value="select">All Categories</option>
          <option value="nike">Nike</option>
          <option value="rjordan">Rjordan</option>
          <option value="adidas">Adidas</option>
        </select>
        <input className="p-2 flex justify-center outline-none w-full bg-slate-100 " type="text" placeholder="Search..." /> <button className=""><FiSearch className="-ml-8" size={20} /></button>
      </div>
      <div className="w-1/3 flex items-center">
        <div className="flex items-center justify-around w-3/4">
          <IoIosNotificationsOutline size={30} />
          <FaRegHeart size={20} />
          <BsHandbag className="" size={20} />
        </div>
        <div className="flex border-l-2 gap-4 border-solid items-center relative">
          <img src="https://placehold.co/100x100" className="rounded-full ml-6 w-[40px]" alt="" />
          <select name="profile" id="">
            <option className="" value="profile"></option>
          </select>
        </div>
      </div>
    </div>
  )
}
