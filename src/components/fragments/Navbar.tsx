import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="w-full flex border border-b-3 items-center">
      <select className="p-2" name="" id="">
        <option value="select">All Categories</option>
        <option value="nike">Nike</option>
        <option value="rjordan">Rjordan</option>
        <option value="adidas">Adidas</option>
      </select>
      <input className="p-2 flex justify-center " type="text" placeholder="Search..."  /><FiSearch />
    </div>
  )
}
