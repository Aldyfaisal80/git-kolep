import aero from '../../../public/assets/images/aero.png'

export default function HomeContent() {
    return(
        <div className= "w-full flex min-h-[20px] border-2 border-sky-500 overflow-x-auto gap-[10px] p-[10px] ">
            <div className="card w-[15%] flex flex-col border-2 border-sky-500 p-[5px] gap-[10px]">
                <div className="mbar relative">
                    <img src={aero} alt="" className="bg-gray-300" />
                    <p className="absolute top-0 p-[5px]">Free shoping</p>
                </div>
                <div className="product">
                    <h3>converse all star</h3>
                    <h4>1970 Mi</h4>
                </div>
                <div className="w-full flex items-center justify-between">
                    <ul className="w-full flex gap-[5px]">
                        <li className="min-h-[20px] w-[20px] bg-fuchsia-800"></li>
                        <li className="min-h-[20px] w-[20px] bg-cyan-500"></li>
                        <li className="min-h-[20px] w-[20px] bg-red-800"></li>
                    </ul>
                    <h2>$300</h2>
                </div>
            </div>
        </div>
    )
}