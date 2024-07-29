import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import NavbarLayouts from "../elements/NavbarContent";



export default function Navbar() {

  const option = [
    {
      value: "select",
      description: "All Categories"
    },
    {
      value: "Nike",
      description: "Nike"
    },
    {
      value: "Adidas",
      description: "Adidas"
    },
  ]

  return (
    <NavbarLayouts>
      <NavbarLayouts.NavbarSelect options={option} icon={<FiSearch size={20} />} />
      <div className="w-2/12 flex items-center">
        <NavbarLayouts.IconsGroup icons={[<IoIosNotificationsOutline size={30} />, <FaRegHeart size={20} />, <BsHandbag className="" size={20} />]} />
        <NavbarLayouts.ProfileUsers image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </div>
    </NavbarLayouts>
  )
}
