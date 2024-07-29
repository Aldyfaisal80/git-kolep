import menShoesImg from '../../../public/assets/images/menshoes.jpeg'
import adidasImg from '../../../public/assets/images/adidas.png';
import nikeImg from '../../../public/assets/images/nike.png';
import filaImg from '../../../public/assets/images/fila.png';
import saleImg from '../../../public/assets/images/sale.jpeg';
import { FaChevronRight } from 'react-icons/fa';
export default function Hero() {
  return (
    <div className="flex py-4">
        <div className="flex pr-4">
          <div className="flex-shrink-0">
            <img src={menShoesImg} alt="" className="w-[11vw] h-full" />
          </div>
          <div className="px-5 py-5 bg-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3vw] h-[0.3vh] bg-black"></div>
              <p>Special offers</p>
            </div>
            <div className="mb-5">
              <h2 className="text-2xl">Men Shoes</h2>
              <p className="pt-2 text-sm text-gray-600">
                Best Shoes Discount <b className="text-black">35% OFF</b> On all Men Shoes!
              </p>
            </div>
            <div className="flex items-center gap-[407px]">
              <ul className="flex items-center gap-2">
                <li className="list-none">
                  <img src={adidasImg} alt="" className="w-10" />
                </li>
                <li className="list-none">
                  <img src={nikeImg} alt="" className="w-10" />
                </li>
                <li className="list-none">
                  <img src={filaImg} alt="" className="w-10" />
                </li>
              </ul>
              <button className="w-9 h-9 bg-black text-white text-sm flex items-center justify-center">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img src={saleImg} alt="" className="w-[15vw] h-full" />
        </div>
      </div>

  )
}
