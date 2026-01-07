import { useState } from "react"
import Input from "../components/Input"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
//IMPORT MATRIL UI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//====IMPORT MATRIL UI====

function LogIn(){
const [isShow,setisShow]=useState(false)
const [inputform,setinputform]= useState({
    email:"",
    password:"",
})

function handelsetshow(){
    setisShow(!isShow)
}
    return(
        <div className=" !my-5 sm:!my-0 sm:h-screen  w-full flex items-center justify-center">
        <div className="dark:bg-gray-300 rounded-lg w-full sm:w-2/3 !mx-auto  !py-10 shadow-lg shadow-cyan-800 ">

        <h1 className="text-center dark:text-gray-800 !text-xl !mb-5">Welcome back</h1>
        <form className="w-full !mx-auto h-auto flex items-center justify-center flex-col gap-8 bg-gray-900 rounded-lg !py-10 " action="">
            
            <Input 
            type="email"
            label="Enter you email" 
            value={inputform.email}
            onChange={((e)=>setinputform(prev=>({...prev,email:e.target.value})))}
            className="sm:w-2/3 "
            />
                <div className="relative w-2/3 !mx-auto">
            <Input 
            type={isShow?'text':'password'}
            label="Enter you password" 
            value={inputform.password}
            onChange={((e)=>setinputform(prev=>({...prev,password:e.target.value})))}
            className="w-full "
            />
            <div onClick={()=>{handelsetshow()}} className="absolute right-5 top-4">
            {isShow?< VisibilityIcon />:<VisibilityOffIcon/>}
            </div>
            </div>
            <div className="flex gap-5 items-center">
            <p className="text-white">Do not have an acount?</p> 
            <Link className="text-gray-300 border-b-2 border-b-cyan-400 !pb-1 hover:border-b-cyan-700" to={'/Sign Up'}>Register</Link>
            </div>
            <Button className="!text-white w-1/3" variant="outlined">LOGIN</Button>
         
        </form>
        </div>
        </div>
    )


    
}
export default LogIn



