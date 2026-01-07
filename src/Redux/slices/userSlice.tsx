import { createSlice } from '@reduxjs/toolkit'

export type ItemType = unknown
export interface userData {
 name?:string
 
}
export interface userstat{
    user:null|userData
    isLogin:boolean
    isAdmin:boolean
}



const initialState: userstat = {
  user:null,
  isLogin:false,
  isAdmin:false
}
const usercount = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
AddUser:(state,action)=>{
const name = action.payload
state.user = name
if(name==='Walid Othman'){
    state.isAdmin=true
}else{
    state.isAdmin = false
}
state.isLogin = true

},
LogOut:(state)=>{
 // eslint-disable-next-line @typescript-eslint/no-unused-expressions
 state.user = null,
 state.isLogin = false
}
    }
})

export const {AddUser,LogOut} = usercount.actions
export default usercount.reducer 