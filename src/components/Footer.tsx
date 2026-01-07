
//IMPORT MATIRIAL UI 
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { linksdata } from './LInkdata';
import { useAppSelector } from '../Redux/hooks';
//=== IMPORT MATIRIAL UI ===
function Footer (){
    const islogin = useAppSelector((stat)=>stat.user.isLogin)
return(
    <>
    <footer className=" static b-0 w-full dark:bg-gray-900 dark:text-white !py-4 gap-5 sm:gap-0 sm:py-0 sm:!p-5 flex flex-col flex-wrap sm:flex-nowrap sm:flex-row sm:justify-around ">
        {/* LEFT */}
        <div className='border-b-2  gap-2 !pb-3 sm:pb-0 border-blue-400 dark:border-gray-600 sm:border-none w-full flex flex-col items-center '>
              <div className=" flex items-center gap-3  ">
        <StorefrontIcon className="dark:text-blue-200 text-blue-600 w-full">
        </StorefrontIcon>
        <h1>  Click <span className="dark:text-blue-200 text-blue-600 text-lg ">Store</span></h1>
    </div>
        <h4 className='text-xs sm:text-sm !my-2'>Get 10% off your first order</h4>
        <div className='flex gap-5 '>
            <a className='hover:text-blue-600 transition-all' href=""><InstagramIcon/></a>
            <a className='hover:text-blue-600 transition-all' href=""><FacebookIcon/></a>
            <a className='hover:text-blue-600 transition-all' href=""><XIcon/></a>
            <a className='hover:text-blue-600 transition-all' href=""><WhatsAppIcon/></a>
            
            
        </div>
       </div>
        {/*== LEFT== */}
        {/*CENTER */}
  { islogin?  <div className='border-b-2 border-blue-400  dark:border-gray-600 sm:border-none w-full flex flex-col items-center justify-center !pb-3 sm:pb-0'>
            <h1 className='!text-lg  !mb-5'>Quick <span className='dark:text-blue-200 text-blue-600 '>Link</span> </h1>
    <ul className="flex flex-col items-start text-sm sm:text-lg gap-3 ">
        {linksdata.map((link,index)=><Link key={index} className="hover:text-blue-500 transition-all" to={link.path}>{link.label}</Link>)}
    </ul>
        </div>:''}
        {/*==CENTER== */}
        {/*RIGHT */}
        <div className='flex flex-col gap-1 items-center w-full  '>
        <h4>Download <span className='dark:text-blue-200 text-blue-600 ' >App</span></h4>
        <p className='!my-2 sm:my-0'>Save $3 with App New User Only</p>
        <div className='flex gap-3'>
        <img className='w-30' src="/imgs/FooterImgs/AppStore.png" alt="AppStore" />
        <img className='w-30' src="/imgs/FooterImgs/GooglePay.png" alt="GooglePay" />
        </div>
        </div>
        {/*==RIGHT== */}

    </footer>
    </>
)
}
export default Footer