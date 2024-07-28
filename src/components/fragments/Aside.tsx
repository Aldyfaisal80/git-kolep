import { FaStoreAlt } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { MdOutlineReceipt } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Aside() {
  return (
    <aside className="flex flex-col w-[280px] min-h-full justify-between">
      <div className="flex flex-col px-4 gap-6">
        <h1 className="flex items-center text-red-600 text-[3rem] gap-2 font-bold italic cursor-pointer">
          <FaStoreAlt />
          Belzio
        </h1>
        <p className="text-[2.2rem] font-bold cursor-pointer">Explore</p>
        <div className="flex flex-col">
          <button className="flex items-center justify-between px-4 py-5 text-white bg-gradient-to-r from-red-600 to-fuchsia-900">
            <span className="flex items-center gap-2 text-[1.1rem]">
              <TbCategoryFilled className="text-[1.4rem]" /> Categories
            </span>
            <IoIosArrowForward />
          </button>
          <button className="flex items-center justify-between px-4 py-4 text-gray-500 hover:text-gray-950">
            <span className="flex items-center gap-2 text-[1.1rem]">
              <PiSealCheckFill className="text-[1.4rem]" /> Best Offers
            </span>
          </button>
          <button className="flex items-center justify-between px-4 py-4 text-gray-500 hover:text-gray-950">
            <span className="flex items-center gap-2 text-[1.1rem]">
              <FaStoreAlt className="text-[1.4rem]" /> Sell with Us
            </span>
          </button>
          <button className="flex items-center justify-between px-4 py-4 text-gray-500 hover:text-gray-950">
            <span className="flex items-center gap-2 text-[1.1rem]">
              <FaTruck className="text-[1.4rem]" /> Track Order
            </span>
          </button>
          <button className="flex items-center justify-between px-4 py-4 text-gray-500 hover:text-gray-950">
            <span className="flex items-center gap-2 text-[1.1rem]">
              <MdOutlineReceipt className="text-[1.4rem]" /> Blog
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col py-2 px-4 pt-8 border-t-2">
        <button className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-gray-950">
          <span className="flex items-center gap-2 text-[1.1rem]">
            <FaUserCog className="text-[1.4rem]" /> Account
          </span>
        </button>
        <button className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-gray-950">
          <span className="flex items-center gap-2 text-[1.1rem]">
            <IoMdSettings className="text-[1.4rem]" /> Settings
          </span>
        </button>
      </div>
    </aside>
  );
}
