import { FaStoreAlt } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { MdOutlineReceipt } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import AsideLink, { AsideTop, AsideBottom } from "../elements/AsideLink";

export default function Aside() {
  return (
    <AsideLink>
      <div className="flex flex-col px-4 gap-1">
        <h1 className="flex items-center text-red-600 text-[3rem] gap-2 font-bold italic cursor-pointer">
          <FaStoreAlt />
          Belzioo
        </h1>
        <p className="text-[2.2rem] font-bold cursor-pointer py-6">Explore</p>
        <AsideTop.IconsGroup
          icons1={<TbCategoryFilled />}
          text="Categories"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
        <AsideTop.IconsGroup
          icons1={<PiSealCheckFill />}
          text="Best Offers"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
        <AsideTop.IconsGroup
          icons1={<FaStoreAlt />}
          text="Sell with Us"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
        <AsideTop.IconsGroup
          icons1={<FaTruck />}
          text="Track Order"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
        <AsideTop.IconsGroup
          icons1={<MdOutlineReceipt />}
          text="Blog"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
      </div>
      <div className="flex flex-col py-2 px-4 pt-8 border-t-2">
        <AsideBottom.IconsGroup
          icons1={<FaUserCog />}
          text="Account"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
        <AsideBottom.IconsGroup
          icons1={<IoMdSettings />}
          text="Settings"
          icons2={<IoIosArrowForward className='text-white'/>}
        />
      </div>
    </AsideLink>
  );
}
