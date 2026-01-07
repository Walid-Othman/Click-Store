import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard"
import SwiperP from "../components/Swiper"
import {   CircularProgress } from "@mui/material";
//REDUX IMPORT
import { useDispatch } from "react-redux";
import AlertSnak from "../components/SnakBar";
import { closeAlert } from "../Redux/slices/productSlice";
import { Link } from "react-router";
import { useAppSelector } from "../Redux/hooks";

//====REDUX IMPORT===



function Products(){

    const Data = useAppSelector((stat)=>stat.products.items)
    const dispatch = useDispatch()
    const open = useAppSelector((stat)=>stat.products.open) 
    const message = useAppSelector((stat)=>stat.products.message)   
   const labtop ='labtop'
   const phone = 'phone'
   const Earphons = 'earphone'
   const charg = 'charger'
    // const showconfarm = useSelector((stat)=>stat.products.showConfarm)
    // console.log('this is conform from products',showconfarm)
 

    const [isload,setisload]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
            if(open){
                dispatch(closeAlert())
            }
        }, 4000);
    },[open])
   useEffect(()=>{
const timer = setTimeout(() => {
    setisload(false)
    
   
   }, 4000);
   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   ()=>clearTimeout(timer)},[])




 
   
const phoneproduct = useMemo(()=>{return Data.filter((p)=>{return p.type==='phone'})},[Data] )
 const phones = phoneproduct.map((phone,index)=><ProductCard key={index} img={phone.imges![0]} title={phone.title} price={phone.price} smdes={phone.smdes} id={phone.id}/>)
const LaptopProducts = useMemo(()=>{return Data.filter((l)=>l.type==='Laptob')},[Data]) 
 const laps = LaptopProducts.map((lap,index)=><ProductCard key={index} title={lap.title} smdes={lap.smdes} price={lap.price} img={lap.imges![0]} id={lap.id}/>)
const chargers = useMemo(()=>{return Data.filter((charger)=>charger.type==="Charger")},[Data]) 
 const charger = chargers.map((charge,index)=> <ProductCard key={index} title={charge.title} smdes={charge.smdes} price={charge.price} img={charge.imges![0]} id={charge.id}/>)
const EarPhones = useMemo(()=>{return Data.filter((e)=>e.type==='Earphone')},[Data]) 
  const EarBodsPhones = EarPhones.map((EarBodes,index)=><ProductCard key={index} title={EarBodes.title} price={EarBodes.price} smdes={EarBodes.smdes} img={EarBodes.imges![0]} id={EarBodes.id}/>)
    return(
        <>
        {isload?<div className="w-full h-screen !text-white flex justify-center items-center">
      <CircularProgress />
    </div>:
    <div>
<h1 className="text-center dark:text-white text-2xl !pt-20 sm:!pt-40">All products</h1>

{open?<AlertSnak label={message} variant="success" className="left-[15%] !px-5 sm:left-[40%] !mt-3 fixed z-10"  />:''}
<div className="w-full">
    {LaptopProducts.length>0 &&<div className="flex justify-between items-center">
        <h1 className="lg:text-2xl border-b-2 border-gray-400 !pb-2 lg:w-1/7 !ml-10 w-1/2 md:w-1/4 !mt-10 text-gray-400 ">Laptob Dapartment</h1>
        <Link className="!mt-10 !pr-10 text-lg text-gray-400 hover:text-gray-200" to={`/Category/${labtop}`}>Show All</Link>
    </div>}
<SwiperP>{laps}</SwiperP>
</div>
<div className="w-full">
   {phoneproduct.length>0 && <div className="flex justify-between items-center">
        <h1 className="lg:text-2xl border-b-2 border-gray-400 !pb-2 lg:w-1/7 !ml-10 w-1/2 md:w-1/4 !mt-10 text-gray-400 ">Laptob Dapartment</h1>
        <Link className="!mt-10 !pr-10 text-lg text-gray-400 hover:text-gray-200" to={`/Category/${phone}`}>Show All</Link>
    </div>}
<SwiperP>{phones}</SwiperP>
</div>
<div className="w-full">
   { chargers.length>0 &&<div className="flex justify-between items-center">
        <h1 className="lg:text-2xl border-b-2 border-gray-400 !pb-2 lg:w-1/7 !ml-10 w-1/2 md:w-1/4 !mt-10 text-gray-400 ">Laptob Dapartment</h1>
        <Link className="!mt-10 !pr-10 text-lg text-gray-400 hover:text-gray-200" to={`/Category/${charg}`}>Show All</Link>
    </div>}
<SwiperP>{charger}</SwiperP>
</div>
<div className="w-full">
    {EarBodsPhones.length>0 && <div className="flex justify-between items-center">
        <h1 className="lg:text-2xl border-b-2 border-gray-400 !pb-2 lg:w-1/7 !ml-10 w-1/2 md:w-1/4 !mt-10 text-gray-400 ">Laptob Dapartment</h1>
        <Link className="!mt-10 !pr-10 text-lg text-gray-400 hover:text-gray-200" to={`/Category/${Earphons}`}>Show All</Link>
    </div>}
<SwiperP>{EarBodsPhones}</SwiperP>
</div>
</div>
}
</>
    )
}
export default Products