
import type { CardType } from "../types/type"
// IMPORT MATERIL UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { AddToCart,deleteProduct} from "../Redux/slices/productSlice";
// import { dividerClasses } from "@mui/material";

//IMPORT MATIRIAL UI

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppSelector } from "../Redux/hooks";
// import AlertSnak from "../components/SnakBar";

//===IMPORT MATIRIAL UI===

// ====IMPORT MATERIL UI===

export default function ProductCard({img,title,price,smdes,id,className}:CardType) {
  const isAdmin = useAppSelector(state=>state.user.isAdmin)
  

  const [opendilog,setopendilog]=useState(false)
  const dispatch = useDispatch()
const product = useAppSelector(state=>state.products.items)
const chickproduct = product.find((p)=>p.id==id)

  function AddCart(){
    dispatch(AddToCart(id))

  }

function closeDilog(){
  setopendilog(false)
}

function showdilog(){
  setopendilog(true)
}
    function handelDelete(){
    dispatch(deleteProduct(id))
    setopendilog(false)
  }

 

    const [isgreat,setisgreat]=useState(false)
   
  return (
 
    <>
   
    <Card  className={`${className}!w-full scale-90 sm:scale-70  dark:border-2 dark:border-gray-400 dark:!text-white dark:!bg-gray-900 dark:!shadow-lg dark:!shadow-cyan-800  cursor-pointer `}>
      <Link to={`/ProductDetails/${id}`}>
      <img src={img} alt={title} 
        className='h-80 w-full  object-cover [object-position:30%_15%] rounded-b-lg '
      />
      </Link>
      <div className=" !h-70 sm:!h-60">
      <CardContent>
        <Typography className="flex items-center gap-5" gutterBottom variant="h5" component="div">
          {title}
        <p className="text-amber-200 text-center  !mb-2"><span onClick={()=>{setisgreat(!isgreat)}} className={isgreat?'text-amber-200':'text-white'}><StarIcon/> </span></p>
        </Typography>
        <Typography variant="body2" className='dark:!text-white'>
         {smdes}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-around'>
        <p className='font-bold text-lg'>{price} $</p>
        <Button disabled={chickproduct?.inCart} onClick={()=>{AddCart()}} className='dark:!text-amber-300 scale-155 !rounded-full h-10 !bg-transparent hover:scale-140 ' >{chickproduct?.inCart?'inCart':<ShoppingCartIcon/>}</Button>
      </CardActions>
      {isAdmin?<CardActions className='flex justify-around'>
        <Button onClick={()=>{showdilog()}} className=' !text-red-600 rounded-full !bg-transparent !border-2 hover:!border-red-600 !border-gray-100 ' >{<DeleteIcon/>}</Button>
       <Link to={`/Editproduct/${id}`}> <Button className=' !text-green-600 rounded-full !bg-transparent !border-2 hover:!border-green-600 !border-gray-100 ' >{<EditIcon/>}</Button></Link>
      </CardActions>:<div className="w-full flex justify-center"> <Link to={`/ProductDetails/${id}`}><button className="w-full !px-5 !mx-auto border-1 border-blue-300 hover:border-blue-600 h-12 sm:!mt-5 cursor-pointer !mt-8 !mb-0 text-xl">Show More</button></Link></div>}
      </div>
        {/* {showSnak?<AlertSnak label={showSnakmessage}variant="success" className="left-[15%] !px-5 sm:left-[40%] !mt-3 fixed z-10"  />:''} */}
       {opendilog? <>

      <Dialog
        open={opendilog}
        onClose={closeDilog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDilog} >Cancel</Button>
          <Button onClick={handelDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>:''}
    </Card>
</>
  );
}
