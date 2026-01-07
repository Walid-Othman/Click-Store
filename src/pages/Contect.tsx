 import WhatsAppIcon from '@mui/icons-material/WhatsApp';
 import XIcon from '@mui/icons-material/X';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import FacebookIcon from '@mui/icons-material/Facebook';
import Input from '../components/Input';
import { useState } from 'react';
import { Button } from '@mui/material';
 function Contect (){
    const icons = [<WhatsAppIcon/>,<XIcon/>,<InstagramIcon/>,<FacebookIcon/>]
    const dataP =['Contact us for any inquiries.','We’re here to help you anytime.','We’re happy to receive your messages and feedback.','Don’t hesitate to contact us.']
    const [inputform,setinputform] = useState({
        name:'',
        email:'',
        message:'',
        number:''
    })
    return(
        <div className=" w-full !pb-5  min-h-screen !px-4 sm:!px-8 !pt-15 md:!pt-30 sm:!pt-20 bg-gray-200 text-gray-600 flex flex-col lg:flex-row justify-around items-center ">
        <div className='flex  flex-col gap-5'>
            <h1 className="text-[30px] text-center sm:text-start font-bold">Contect With Us</h1>
            {dataP.map((p,i)=><p className='' key={i}>{p}</p>)}
            <div className='flex gap-5 justify-center lg:justify-start'>
                {icons.map((icon,i)=><a className="text-gray-700  hover:text-red-600 cursor-pointer transition-transform duration-200 hover:scale-110" key={i}>{icon}</a>)}
            </div>
        </div>
        <div className='bg-gray-900 w-full lg:w-2/3 !p-5 rounded-lg !mt-5 sm:!mt-0  h-auto '>
        <h1 className='text-center !my-5 text-[30px] text-white'>Contect Us </h1>
            <form className='flex flex-col gap-5 w-full' action="">
                <Input value={inputform.name} onChange={((e)=>setinputform(prev=>({...prev,name:e.target.value})))} label='Enter your name' className='' type='text'/>
                <Input value={inputform.email} onChange={((e)=>setinputform(prev=>({...prev,email:e.target.value})))} label='Enter your E-mail' className='' type='email'/>
                <Input value={inputform.number} onChange={((e)=>setinputform(prev=>({...prev,number:e.target.value})))} label='Enter your phone number' className='' type='number'/>
                <textarea placeholder='Enter your message' className='text-white border-2 border-white outline-none !p-5'/>
                <Button className='w-1/3 !mx-auto !text-white' variant="outlined">Submit</Button>
            </form>
        </div>
        </div>
    )
 }
 export default Contect 