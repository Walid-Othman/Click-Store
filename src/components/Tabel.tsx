import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { AddOne, Remove, RemoveOne } from '../Redux/slices/productSlice';
import { useState } from 'react';
import Input from '../components/Input';
import { useAppSelector } from '../Redux/hooks';

export default function BasicTable() {
  const [showModule,setshowModule] = useState(false)
  const Data = useAppSelector((state) => state.products.items);
  const inCart = Data.filter((pro) => pro.inCart);
  const totalPrice = inCart.reduce((acc, item) => acc + item.price * item.quntty, 0);
  const [handelInput,sethandelInput]=useState({
    name:'',
    phone:'',
    address:''
  })
  console.log(totalPrice)
  const dispatch = useDispatch();

  function AddOneToQuntty(id: number) {
    dispatch(AddOne(id));
  }

  function RemoveONeFromQuntty(id: number) {
    dispatch(RemoveOne(id));
  }

  function handeldelpr(id: number) {
    dispatch(Remove(id));
  }

  function handelShow(){
setshowModule(true)
  }
  function handelColse(){
    setshowModule(false)
  }

  return (
    <>
    <div className="w-full font-bold sm:!-mt-5 !-mt-20 relative overFlow-x-hidden ">
      <h2 className='text-black text-center text-[40px]'>Your Products</h2>
      {/* 👇 جدول كبير يظهر فقط في الشاشات الواسعة */}
      <div className="hidden md:block">
        <TableContainer component={Paper} className="shadow-lg rounded-lg">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inCart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <img className="w-20 rounded-lg" src={row.imges[0]} alt={row.title} />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="center">{row.smdes}</TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell className="relative" align="center">
                    {row.quntty}
                    <button
                      onClick={() => AddOneToQuntty(row.id)}
                      className="absolute bottom-10 cursor-pointer right-0  font-bold text-lg text-white bg-gray-800 w-5 rounded-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => RemoveONeFromQuntty(row.id)}
                      className="absolute bottom-10 left-0 cursor-pointer  font-bold text-lg text-white bg-gray-800 w-5 rounded-sm"
                    >
                      -
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    ${(row.price * row.quntty).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handeldelpr(row.id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* 👇 عرض كروت للموبايل */}
      <div className="block md:hidden">
        <div className="flex flex-col  p-3">
          {inCart.map((row) => (
            <div
              key={row.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center !py-5 gap-4"
            >
              <img
                src={row.imges[0]}
                alt={row.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-semibold text-gray-800">{row.title}</h2>
                <p className="text-sm text-gray-500 my-1">{row.smdes}</p>
                <p className="text-gray-700 font-medium">${row.price}</p>
                <div className="flex justify-center sm:justify-start items-center gap-3 mt-2">
                  <button
                    onClick={() => RemoveONeFromQuntty(row.id)}
                    className="px-2 text-lg font-bold text-white bg-gray-800 w-5 rounded-sm "
                  >
                    −
                  </button>
                  <span className="text-gray-700 font-medium">{row.quntty}</span>
                  <button
                    onClick={() => AddOneToQuntty(row.id)}
                    className="px-2 text-lg font-bold text-white bg-gray-800 w-5 rounded-sm "
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-800 !my-3">
                  Total: ${(row.price * row.quntty).toFixed(2)}
                </p>
                <Button
                  onClick={() => handeldelpr(row.id)}
                  variant="outlined"
                  color="error"
                  className="mt-3"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col item-center mt-6 pr-4 ">
  <h2 className="text-xl font-semibold text-gray-800 text-center !my-4">
    Total Price: <span className="text-purple-600">${totalPrice.toFixed(2)}</span>
  </h2>
    <button onClick={()=>{handelShow()}} className='text-gray-800 border-2 border-purple-600 !p-5 sm:w-1/3 !mx-auto rounded-lg text-xl cursor-pointer hover:border-purple-400'>Order Now</button>
</div>

    </div>
    {/* =====START MODULE=== */}
 <div
  className={`fixed top-0 right-0 w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center justify-center bg-gray-900/95 transition-all duration-500 rounded-b-lg z-50 min-h-screen ${
    showModule ? 'translate-x-0' : 'translate-x-full'
  }`}
  
>
  <h1 className="text-gray-100 text-center text-2xl sm:text-3xl font-semibold !mb-6">
    Your Shipping Details
  </h1>

  <form className="w-5/6 sm:w-3/4 flex flex-col gap-5 items-center">
    <Input
      value={handelInput.name}
      onChange={(e)=>sethandelInput(prev=>({...prev,name:e.target.value}))}
      label="Enter your full name"
      className="w-full text-white"
      type="text"
    />
    <Input
      value={handelInput.phone}
      onChange={(e)=>sethandelInput(prev=>({...prev,phone:e.target.value}))}
      label="Enter your phone"
      className="w-full text-white"
      type="tel"
    />
    <Input
      value={handelInput.address}
      onChange={(e)=>sethandelInput(prev=>({...prev,address:e.target.value}))}
      label="Enter address"
      className="w-full text-white"
      type="text"
    />
    <Button
      type="submit"
      className="!text-white w-1/2 sm:w-1/3 mt-4"
      variant="outlined"
    >
      Submit
    </Button>
  </form>
<button onClick={()=>{handelColse()}} className='absolute top-5 left-5 !text-white w-5 cursor-pointer hover:bg-red-600 rounded-sm bg-red-500'>X</button>
</div>
{/* =====END MODULE=== */}
  
    </>

  );
}

