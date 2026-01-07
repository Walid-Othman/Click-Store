import { createSlice , type PayloadAction } from '@reduxjs/toolkit'
import { Data } from '../../Data'
export type ItemType = {
    id:number,
    title:string,
    smdes:string,
    price:number,
    xldes:string,
    quntty:number,
    type:string,
    imges:string[],
    inCart:boolean,
}

type AddProductPayload = {
  title: string;
  smdes: string;
  price: number;
  xldes: string;
  type: string;
  // خصائص الصور يتم إرسالها بشكل منفصل
  img_one: string | undefined;
  img_two: string | undefined;
  img_three: string | undefined;
  img_four: string | undefined;
  // ... قد تحتاج لإضافة أي خصائص أخرى ترسلها مع الـ payload
}



export interface CounterState {
  items: ItemType[]
    open:boolean,
    message:string



  
//   inCart:boolean
}
const initialState: CounterState = {
 items: Data as unknown as ItemType[],
  open: false,
  message:'',


      
    
}

 const ProductsData = createSlice({
    name:'Products',
    initialState:initialState,
    reducers : {
   Add:(state,action:PayloadAction<AddProductPayload>)=>{
    const payload= action.payload
    const {img_one,img_two,img_three,img_four,...rest}=payload
    console.log('this is rest',{...rest})
   const imgesArey=[img_one,img_two,img_three,img_four].filter(Boolean) as string[]
    const newproduct = {...rest,
        id:Date.now(),
        imges:imgesArey,
        inCart:false,
        quntty:1
    }
    state.open = true
    state.message = 'The product has been added'
 state.items.push(newproduct)
   },
   Edit:(stat,action)=>{
    const {id} = action.payload
    console.log('this is id from slicee',id)
const {img_one,img_two,img_three,img_four,...rest}=action.payload
const imgesAray = [img_one,img_two,img_three,img_four]
const findPro = stat.items.find((pro)=>pro.id==id)
if(findPro){

   Object.assign(findPro, rest);
   findPro.imges = imgesAray
}
stat.open = true
stat.message = 'The product has been modified'

 
    },
   deleteProduct:(state,action)=>{
    const id = action.payload
    const Data = state.items.filter((pro)=>{return pro.id!==id})
    state.items = Data
    state.open = true
    state.message = 'The product has been successfully deleted'
   
   },
AddToCart:(state,action)=>{
    const id = action.payload
     const selectProduct = state.items.find((p)=>p.id==id)
     if(selectProduct){
        selectProduct.inCart = true
        state.open = true
        state.message = 'The product has been successfully added to the cart'
       
     }

},
Remove:(state,action)=>{
    const id = action.payload
    const product = state.items.find((p)=>p.id==id)
    if(product){
        product.inCart = false
        state.open = true
        state.message = 'The product has been deleted from the cart'
        
    }
    
},
AddOne:(state,action)=>{
    const id = action.payload
    const product = state.items.find((pro)=>pro.id==id)
    if(product){
        product.quntty+=1
    }
},
RemoveOne:(state,action)=>{
const id = action.payload
const product = state.items.find((pro)=>pro.id==id)
if(product){
    product.quntty -=1
    if(product.quntty===0)
    product.inCart=false
}
},
closeAlert:(state)=>{
state.open = false
},



    }
})

export const {Add,deleteProduct,AddToCart,Remove,AddOne,RemoveOne,Edit,closeAlert}= ProductsData.actions
export default ProductsData.reducer




