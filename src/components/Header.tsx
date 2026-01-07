import { Link } from "react-router-dom"
import {Button} from '@mui/material'
import { useSelector } from "react-redux"

function Header (){
    const islogin = useSelector((stat:{user:{isLogin:boolean}})=>stat.user.isLogin)
    console.log('is log in from hedder',islogin)
    return(
        
    
       <div className=" dark:!bg-gray-900 !bg-gray-100  fixed !top-0 !w-full dark:text-white !py-2 hidden !p-0.5 sm:p-2 z-10 h-auto sm:h-15 sm:flex flex-col sm:flex-row  items-center justify-between sm:!px-5 sm:gap-4 border-b-2 border-gray-300 dark:border-gray-600">
        <div className="sm:flex text-center gap-5 items-center">
        <h2 className=" sm:text-sm text-xs  sm:!mb-0 !py-.5">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h2>
      { islogin? <Link className="dark:text-blue-200 text-gray-500 font-bold text-xs sm:text-sm" to={'products'}>
        Shoping now
        </Link>:""}
        </div>
     <Button className=" !hidden sm:!block dark:!text-gray-200" variant="outlined">change languge</Button>
        </div>
        
    )
}

export default Header