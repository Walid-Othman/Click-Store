
import BasicTable from "../components/Tabel"
import { Link } from "react-router-dom"
import { useAppSelector } from "../Redux/hooks"



function Cart (){
  
    const Data =useAppSelector((stat)=>stat.products.items)
 
    const cart = Data.filter((d)=> d.inCart===true)
    return(

        <div className="lg:min-h-screen !pb-5 w-full flex flex-col lg:flex-row sm:w-2/3 !mx-auto !pt-45 !mb-10 bg-gray-100 lg:!pr-10">
            {cart.length> 0 ? <BasicTable/>:
            <div className="flex items-center flex-col lg:flex-row justify-center ">
            <img className="w-1/2 rounded-lg !mx-auto" src="/imgs/cart_img.jpeg" alt="cart_img" />
             <div className="flex flex-col items-center bg-gray-900 text-gray-100 !p-5 w-full lg:!ml-5 lg:rounded-lg lg:h-[500px] justify-center">
            <h1 className=" text-[40px]">your cart is empty</h1>
            <p className=" text-[25px]">Try to add somthing </p>
            <Link className="text-[20px] border-1 border-purple-400 !my-5 rounded-lg hover:border-purple-600 !py-2 !px-5" to={'/Products'}>Show Products</Link>
            </div>
            </div>}
            
        </div>
    )
}
export default Cart