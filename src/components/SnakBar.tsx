import { Alert} from "@mui/material";
interface Alerttype {
    label:string,
    className?:string,
    variant:"error" | "warning" | "info" | "success"
    
}
function AlertSnak({label,className,variant}:Alerttype){
    return(
        <>
  
        <Alert
          // onClose={handleClose}
          className={className}
          severity={variant}
          variant="filled"
          // sx={{ width: '20%' }}
        >
           {label}
        </Alert>
      
        </>
    )
}
export default AlertSnak