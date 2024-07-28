import { FaEuroSign } from "react-icons/fa";

const HomeConten = ({children}) => {
    return(
        <div className="card w-[250px] grow flex flex-col border-[3px] rounded-md border-gray-300 p-[10px] gap-[10px] hover:border-gray-500 cursor-pointer">
                {children}
            </div>
    )
}
const Product = ({image, tag, icon}) =>{
    return(
        <div className="mbar relative w-full">
                    <img src={image} alt="" className="bg-gray-300 rounded-sm w-full pt-[55px] pb-[10px]" />
                    <p className="absolute top-0 p-[7px] text-[0.8rem] italic" >{tag}</p>
                    <p className="absolute top-0 p-[7px] text-[1.5rem] italic" >{icon}</p>
                    
                </div>
    )
}

const Description = ({title, label}) =>{
    return(
        <div className="product">
        <h3>{title}</h3>
        <h4>{label}</h4>
</div>
    )
}

const Price = ({col1, col2, col3, price}) =>{
    return(
        <div className="w-full flex items-center justify-between">
                    <ul className="w-full flex gap-[5px]">
                        <li className={`min-h-[20px] w-[20px] rounded-md ${col1}`}></li>
                        <li className={`min-h-[20px] w-[20px] rounded-md ${col2}`}></li>
                        <li className={`min-h-[20px] w-[20px] rounded-md ${col3}`}></li>
                    </ul>
                    <h2 className="flex items-center gap-[3px]"><FaEuroSign/>{price}</h2>
                </div>
    )
}


HomeConten.Product = Product
HomeConten.Description = Description
HomeConten.Price = Price

export default HomeConten