import { useEffect, useState } from "react"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; 

function State(){
    const [isconect,setisconect] = useState(navigator.onLine)
    useEffect(()=>{
        const handelOnline = ()=>setisconect(true)
        const handelOffline = ()=>setisconect(false)
        window.addEventListener('online',handelOnline)
        window.addEventListener('offline',handelOffline)
        return ()=>{

            window.removeEventListener('online',handelOnline)
            window.removeEventListener('offline',handelOffline)
        }
        
    },[])
    return(
<div>
    {isconect?<><p className="text-amber-300 font-semibold"> Active User <span className="text-green-500 text-xl"><FiberManualRecordIcon/></span> </p></>:<><p className="text-red-500">Inactive User <span className="text-red-500"><FiberManualRecordIcon/></span></p></>}
</div>
    )
}export default State