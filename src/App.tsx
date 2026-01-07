import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import Contect from "./pages/Contect"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
// import LogIn from "./pages/Login"
import Register from "./pages/Register"
import Dashbord from "./pages/Admin/Dashboard"
import{ useEffect, useState } from "react"
import EditProduct from "./pages/Admin/EditProduct"
import HandelScrol from "./components/HandelScrol"
import Category from "./pages/Category"

// import LogIn from "./pages/Login"
// import Register from "./pages/Register"


function App() {

const [isloading,setisloading]=useState(true)
useEffect(()=>{
const stat =  localStorage.getItem('isloading')
if(stat){
 setisloading(false)
}
  setTimeout(() => {
    setisloading(false)
    localStorage.setItem('isloading','true')
  }, 2000);
  
},[isloading])
  return (
    isloading?
    <>
    <video src="/vedio/1.mp4" autoPlay muted width={'100%'} height={'100vh'}></video>
    </>:
    <>
    <Header/>
    <Navbar/>
  <HandelScrol/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
      // <Route path="/About" element ={<About/>}/>
      <Route path="/Contact" element={<Contect/>}/>
      <Route path="/ProductDetails/:productid" element={<ProductDetails/>}/>
      <Route path="/EditProduct/:id" element={<EditProduct/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sign Up" element={<Register/>}/>
      <Route path="/Dashboard" element={<Dashbord/>}/>
      <Route path="/Category/:type" element={<Category/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
