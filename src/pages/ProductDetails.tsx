import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch} from "react-redux"
import { AddToCart, closeAlert, Remove } from "../Redux/slices/productSlice"
import { Button } from "@mui/material"
import AlertSnak from "../components/SnakBar"
import { useAppSelector } from "../Redux/hooks"


 
function ProductDetails(){
  
    const open = useAppSelector((stat)=>stat.products.open)
    const message = useAppSelector((stat)=>stat.products.message)
    const {productid} = useParams()
    const dispatch = useDispatch()
    function RemoveFromCar(){
        dispatch(Remove(productid))
    }
    function AddToCar(){
        dispatch(AddToCart(productid))
    }
const Data = useAppSelector((stat)=>stat.products.items)
    const prod =  Data.find((pro)=>pro.id==Number(productid))
    console.log(prod)
    const imges = prod?.imges

    const  mainIMg= prod?.imges?.[0]
    
    const [mainimg,setmainimg] = useState(mainIMg)
    function changephoto(img:string){
setmainimg(img)
    }
        const imgsm = imges?.map((img:string,index:number)=><img key={index} src={img} onClick={()=>{changephoto(img)}}
     className={img===mainimg?'w-1/5 scale-120 !mx-auto object-cover border-2 border-blue-600 sm:h-40':'w-1/5 sm:h-40 scale-120 !mx-auto object-cover'}/>)
if(!prod){
    return(
<h1>no products here</h1>
    )
}

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        setTimeout(() => {
            if(open){
                dispatch(closeAlert())
            }
        }, 4000);
    },[open])



return(
    <>
        <h1 className="dark:text-white !pt-20 text-xl text-center sm:!pt-40 !-mb-20">{prod?.title}</h1>
        {open?<AlertSnak label={message} variant="success" className="left-[5%] !px-5 sm:left-[40%] !mt-3 fixed z-10"  />:''}
    <div className="w-full  !my-30 flex flex-col sm:flex-row !items-end justify-end">
        {/* img */}
        <div className=" w-full sm:w-2/3 ">
<div className=" w-full sm:w-2/3  flex !mx-auto  ">
    <img className=" w-full sm:w-3/4 h-[400px] object-cover scale-100 !mx-auto !mb-5 rounded-lg " src={mainimg} alt="product img" />
</div>
    <div  className=" flex !mx-auto  w-2/3   gap-2">
    {imgsm}
    </div>
        {/* ==img== */}
        </div>
        <div className="sm:w-1/3 w-full !mx-auto !px-3 !my-10 sm:!my-auto  !pr-15">
        <h1>{prod?.title}</h1>
        <p>{prod?.xldes}</p>
        <div className="flex flex-row gap-x-2.5">
        <Button className=" w-2/3 !-mb-30 !mx-auto sm:w-1/3 !my-10 !text-white" onClick={()=>{AddToCar()}} variant="outlined">Add to cart</Button>
        {prod.inCart===true &&<Button className=" w-2/3 !-mb-30 !mx-auto sm:w-1/3 !my-10 !text-white border-red-500"  onClick={()=>{RemoveFromCar()}} variant="outlined">removo </Button>}
        </div>
        </div>
    </div>
    </>
)
}
export default ProductDetails