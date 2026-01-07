import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import type { InputType } from "../types/type";

function Input ({type,value,onChange,label,className}:InputType){
    return(
        <TextField
        id={uuidv4()}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
    //  variant="outlined"
     className={className}
         InputLabelProps={{
        sx: {
          color: "white", // اللون العادي للِّيبل
          "&.Mui-focused": { color: "#2196f3" }, // اللون عند الفوكس
          "&.MuiFormLabel-filled": { color: "#2196f3" }, // اللون لو فيه داتا
        },
      }}
      InputProps={{
        sx: {
          color: "white", // لون النص داخل الانبوت
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // لون الإطار العادي
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90caf9", // عند الهوفر
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2196f3", // عند الفوكس
          },
        },
      }}
     />
   
    )
}

export default Input 