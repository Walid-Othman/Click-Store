import  {  useState , useRef } from "react"
import Input from "../components/Input"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { AddUser } from "../Redux/slices/userSlice"
import State from "../components/State"
import Gallery from "../components/Jalry"
import { Link } from "react-router-dom"
import { useAppSelector } from "../Redux/hooks"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import { useNavigate } from "react-router-dom"


function Home (){
    const inputRef = useRef<HTMLInputElement>(null);
    const user_name = useAppSelector((stat)=>stat.user.user)
    const islogin = useAppSelector((stat)=>stat.user.isLogin)
    // const navcation = useNavigate()
    const [name,setname]= useState('')
    const [errorMessage,seterrorMessage]= useState('')
    const dispatch = useDispatch()
    function handelsubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(name.trim()===''){
            seterrorMessage('Name is required')
            inputRef.current?.focus();
            return
        }
        seterrorMessage('')
        dispatch(AddUser(name))

    }

    return(
<div className="!pt-40 !pb-10 !px-5 ">
    
    <h1 className="text-[50px] text-center">Click Store</h1>
    <h1 className="text-[30px] text-center">Here you will find all what you want ...</h1>
    {islogin?<div className="flex gap-20 sm:gap-30 bg-gray-800 !mt-4 items-center justify-center w-full !py-1.5 sm:w-2/3 !mx-auto rounded-full"><h1 className="text-[16px] text-red-400 font-semibold flex items-center gap-2 "> <span className="text-amber-400 text-lg"><AccountCircleIcon/></span> {user_name as string} </h1> <State/></div>:<h1 className="text-[20px] text-center">Log in to know more ...</h1>}
   {islogin?<div 
   className="text-center">
   <div className="!my-5">
   <Gallery/>
   </div>
     <Link  className="text-[20px] border-1 border-purple-400 !my-5 rounded-lg hover:border-purple-600 !py-2 !px-5" to={'/Products'}>Show Products</Link>
   </div>: <form className="flex !px-5 flex-col w-full sm:w-2/3 !mx-auto gap-5 !my-10 border-1 !pb-20 !pt-10 rounded-lg" onSubmit={handelsubmit}>
    <h1 className="text-[50px] text-center">Log in ...</h1>
        <Input ref={inputRef}  className='w-full sm:w-2/3 !mx-auto' value={name} onChange={((e)=>setname(e.target.value))} label="Enter you name"/>
        <p className="text-red-400 text-sm w-full !-mt-4 sm:w-2/3 !mx-auto">{errorMessage}</p>
        <Button className='w-2/3 sm:w-1/3 !mx-auto !text-white'sx={{borderBlockColor:'white'}} type="submit" variant="outlined">Log In</Button>
    </form>}
</div>
    )
}
export default Home