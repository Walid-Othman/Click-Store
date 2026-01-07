import { Link, useNavigate } from "react-router-dom"
// ==import matirial ==
import StorefrontIcon from '@mui/icons-material/Storefront';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, ToggleButton } from "@mui/material";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useMemo, useState } from "react";
import { linksdata } from "./LInkdata";
import { useDispatch } from "react-redux";
import { LogOut } from "../Redux/slices/userSlice";
import { useAppSelector } from "../Redux/hooks";

//===== import matirial ====

function Navbar(){
const Data = useAppSelector(state => state.products.items)
const islogin = useAppSelector(state=>state.user.isLogin)
const isAdmin = useAppSelector(state=>state.user.isAdmin)
console.log(`this is log in stat from navbar`,islogin)
const Cart = useMemo(()=>{return Data.filter((d)=>d.inCart===true)},[Data]) 
  //STATE STARTS HERE

  const [isopen,setisopen] = useState(false)
   const navcation = useNavigate()
   const dispatch = useDispatch()
  //====STATE ENDSS HERE====

//FUNCTION STARTS HERE 

function handelisopen(){
    setisopen(!isopen)
}

function onclose(){
    setisopen(false)
}

function handelLogOut(){
    dispatch(LogOut())
    navcation('/')
    onclose()
}

//===FUNCTION ENDSS HERE ===
    return(
        <>

<div className="dark:!bg-gray-900 fixed !bg-gray-100 !mb-100 !top-0 sm:!top-15 !w-full z-10 dark:text-white flex items-center justify-between !px-5 !py-1 sm:!py-4 border-b-2 border-gray-300 dark:border-gray-500 ">
    <div className="flex items-center gap-3">
        <StorefrontIcon className="dark:text-blue-200 text-blue-500">
        </StorefrontIcon>
        <h1>  Click <span className="dark:text-blue-200 text-blue-500 text-lg">Store</span></h1>
    </div>
 { islogin?  <ul className="hidden sm:flex  gap-8 items-center text-sm sm:text-lg ">
        {linksdata.map((link,index)=><Link key={index} className="hover:text-blue-500 transition-all" onClick={onclose} to={link.path}>{link.label}</Link>)}
         {isAdmin ?<Link onClick={onclose} className="hover:text-blue-500 transition-all" to={'/Dashboard'}>DashBoard</Link>:''}
    </ul>:''}
    <div className="hidden sm:flex items-center gap-5 text-sm sm:text-lg">
         {islogin?<div className="relative">
    <Link onClick={()=>{onclose()}} className="text-lg" to={'/Cart'}>
    <ShoppingCartIcon> </ShoppingCartIcon>
    </Link>

    <Badge className="absolute -top-4" color="error" badgeContent={Cart.length} showZero> </Badge>
  
 </div>:''}
        {islogin?<button onClick={handelLogOut}  className="hover:bg-red-600 bg-red-700 !p-2 transition-all rounded-lg cursor-pointer text-white" >LogOut</button>:<Link  className="hover:text-blue-500 cursor-pointer transition-all font-semibold" to={'/'}>LogIn</Link>}
        {/* <Link  className="hover:text-blue-500 transition-all" to={'/Sign Up'}>SuinUp</Link> */}
        {/* cart */}

        {/* ===cart== */}
    </div>
    {/* //===For larg scrren==== */}
   <ToggleButton 
   onClick={()=>{handelisopen()}}
   className="dark:!text-white sm:!hidden block" value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>
       
</div>
 <div  className={isopen?'translate-x-0- transition-all z-10 !rounded-xl  duration-800 fixed !top-14 !w-full ':'translate-x-[700px] z-10 !rounded-xl !w-full transition-all duration-800 !top-14 !fixed'} >
            {<div className={"dark:!bg-gray-800 !rounded-b-xl !bg-gray-100  flex flex-wrap justify-center items-center h-20  dark:!text-white sm:hidden !px-5 translate-x-0 transition-all duration-200"} >
   { islogin ?<ul className="flex sm:hidden  gap-8 items-center text-sm sm:text-lg ">
             {linksdata.map((link,index)=><Link key={index} className="hover:text-blue-500 transition-all" onClick={onclose} to={link.path}>{link.label}</Link>)}
             {isAdmin ?<Link onClick={onclose} className="hover:text-blue-500 transition-all" to={'/Dashboard'}>DashBoard</Link>:''}
    </ul>:''}
    <div className="flex sm:hidden items-center gap-5 text-sm sm:text-lg">
             {islogin?<button onClick={handelLogOut}  className="hover:bg-red-400 bg-red-500 !p-2 transition-all rounded-lg w-full !ml-10" >LogOut</button>:<Link onClick={()=>(onclose())}  className="hover:text-blue-500 transition-all" to={'/'}>LogIn</Link>}
        {/* cart */}
         {islogin?<div className="relative">
    <Link onClick={()=>{onclose()}} className="text-lg" to={'/Cart'}>
    <ShoppingCartIcon> </ShoppingCartIcon>
    </Link>

    <Badge className="absolute -top-4" color="error" badgeContent={Cart.length} showZero> </Badge>
  
 </div>:''}
        {/* ===cart== */}
    </div></div>}
    </div>
</>
    )
}
export default Navbar