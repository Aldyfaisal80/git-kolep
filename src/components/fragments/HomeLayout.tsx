import aero from '../../../public/assets/images/aero.png'
import pentela from '../../../public/assets/images/pentela.png'
import pink1 from '../../../public/assets/images/pink1.png'
import pink2 from '../../../public/assets/images/pink2.png'
import { RiDiscountPercentFill } from "react-icons/ri";

// import { FaEuroSign } from "react-icons/fa";
import HomeConten from '../elements/HomeContent'

export default function HomeLayout() {
    return(
        <div className= "w-full flex min-h-[20px] overflow-x-auto gap-[10px] p-[10px] ">
            <HomeConten>
                <HomeConten.Product image={aero} tag="Free Shopping"/>
                <HomeConten.Description title={"Converse All Star"} label={"1970 Mi"}/>
                <HomeConten.Price col1={"bg-red-500"} col2={"bg-green-500"} col3={"bg-blue-500"} price={"3500"}/>
            </HomeConten>
            <HomeConten>
                <HomeConten.Product image={pentela} icon={<RiDiscountPercentFill />}/>
                <HomeConten.Description title={"Converse All Star"} label={"1970 Mi"}/>
                <HomeConten.Price col1={"bg-red-500"} col2={"bg-blue-500"} price={"3500"}/>
            </HomeConten>
            <HomeConten>
                <HomeConten.Product image={pink1} tag="Free Shopping"/>
                <HomeConten.Description title={"Converse All Star"} label={"1970 Mi"}/>
                <HomeConten.Price col1={"bg-red-500"} col2={"bg-green-500"} col3={"bg-blue-500"} price={"3500"}/>
            </HomeConten>
            <HomeConten>
                <HomeConten.Product image={pink2} icon={<RiDiscountPercentFill />}/>
                <HomeConten.Description title={"Converse All Star"} label={"1970 Mi"}/>
                <HomeConten.Price col1={"bg-green-500"} col2={"bg-blue-500"} price={"3500"}/>
            </HomeConten>
        </div>
    )
}