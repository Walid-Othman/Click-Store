import { useEffect, useState } from "react"
import Input from "../../components/Input"
import { Button, InputLabel, MenuItem, Select } from "@mui/material"
import { useDispatch } from "react-redux"
import { Add, closeAlert } from "../../Redux/slices/productSlice"
import AlertSnak from "../../components/SnakBar"
import { useAppSelector } from "../../Redux/hooks"

function Dashbord(){
    const dispatch = useDispatch()
    const open = useAppSelector((stat)=>stat.products.open)
    const message = useAppSelector((stat)=>stat.products.message)
const [empty,setempty]=useState(false)
const [inputform,setinputform]=useState({
    title:'',price:'',smdes:'',xldes:'',img_one:"",img_two:'',img_three:'',img_four:'',type:'phone'
})

function handelsubmit(e:React.FormEvent<HTMLFormElement>){
   setempty(true)
    e.preventDefault()
    const numericPrice = Number(inputform.price);
    if (isNaN(numericPrice)) {
        alert("الرجاء إدخال سعر صحيح");
        return;
    }
    dispatch(Add({...inputform,price:numericPrice}))
}
    useEffect(()=>{
        setTimeout(() => {
            if(open){
                dispatch(closeAlert())
            }
        }, 4000);
    },[open])
    return(
      <form onSubmit={handelsubmit}>
<div className="  sm:!pt-40 bg-gray-800 !py-20 text-white">
  {open?<AlertSnak label={message} variant="success" className="left-[15%] !px-5 sm:left-[40%] !mt-3 fixed z-10"  />:''}
<h1 className="text-center !mb-10 text-2xl"> Add your Prouduct</h1>
<div className="flex flex-col sm:w-2/3 w-full gap-5 !mx-auto !mb-20 !px-5">
    <Input label="Title" className={empty?'!border-2 !border-red-900':''} onChange={((e)=>setinputform(prev=>({...prev,title:e.target.value})))} value={inputform.title}/>
{empty&&inputform.title===''&&<p className="!text-red-500">Requerd</p>}
    <Input label="small Descrtiption" onChange={((e)=>setinputform(prev=>({...prev,smdes:e.target.value})))} value={inputform.smdes}/>
    {empty?<p className="!text-red-500">Requerd</p>:''}
    <Input label="larg Description" onChange={((e)=>setinputform(prev=>({...prev,xldes:e.target.value})))} value={inputform.xldes}/>
    {empty?<p className="!text-red-500">Requerd</p>:''}
    <Input label="price" onChange={((e)=>setinputform(prev=>({...prev,price:e.target.value})))} value={inputform.price}/>
    {empty?<p className="!text-red-500">Requerd</p>:''}
<div className=" !text-white w-full !mx-auto">
  {/* هنا نحدد لون النص للـ Label باللون الأبيض */}
  <InputLabel 
    id="demo-simple-select-label"
    sx={{ color: 'white'}} 
  >
    Category
  </InputLabel>

  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={inputform.type}
    label="Category"
    onChange={((e)=>setinputform(prev=>({...prev,type:e.target.value})))}
    // هنا نحدد لون النص للقيمة المختارة داخل حقل الإدخال باللون الأبيض
    sx={{ 
      color: 'white', width:'50%',borderColor:'white'
    }}
  >
    
    {/* ملاحظة: عناصر القائمة (MenuItem) ستبقى بلون MUI الافتراضي (عادةً أسود) */}
    <MenuItem value={'phone'}>phone</MenuItem>
    <MenuItem value={'Laptob'}>laptob</MenuItem>
    <MenuItem value={'Earphone'}>Earbuds</MenuItem>
    <MenuItem value={'Charger'}>Charger</MenuItem>
  </Select>
</div>
    <p className="text-center">Enter URL for img </p>
    <div className="flex flex-wrap sm:flex-nowrap  w-2/3 !mx-auto gap-5">
    <Input label="img one" onChange={((e)=>setinputform(prve=>({...prve,img_one:e.target.value})))} value={inputform.img_one} type="url"/>
    <Input label="img two" onChange={((e)=>setinputform(prve=>({...prve,img_two:e.target.value})))} value={inputform.img_two} type="url"/>
    <Input label="img three" onChange={((e)=>setinputform(prve=>({...prve,img_three:e.target.value})))} value={inputform.img_three} type="url"/>
    <Input label="img four" onChange={((e)=>setinputform(prve=>({...prve,img_four:e.target.value})))} value={inputform.img_four} type="url"/>
    </div>
   <Button type="submit" className="w-1/3 !mx-auto" variant="outlined">Add</Button>
</div>
</div>
</form>  
    )

}
export default Dashbord