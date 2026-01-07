import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import type { InputType } from "../types/type";
import { forwardRef, useMemo } from "react"; 

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ type, value, onChange, label, className }, ref) => {
    const inputId = useMemo(() => uuidv4(), []);

    return (
      <TextField
        inputRef={ref} 
        id={inputId}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        className={className}
        InputLabelProps={{
          sx: {
            // "inherit" تعني خذ لون النص المحيط بك (سواء أبيض في الدارك أو أسود في اللايت)
            color: "inherit", 
            opacity: 0.7, // جعل الليبل أخف قليلاً لتمييزه
            "&.Mui-focused": { color: "#2196f3", opacity: 1 },
            "&.MuiFormLabel-filled": { color: "#2196f3", opacity: 1 },
          },
        }}
        InputProps={{
          sx: {
            // القيمة "currentColor" تضمن أن النص سيأخذ لون الخط المستخدم في الصفحة حالياً
            color: "inherit", 
            "& .MuiOutlinedInput-notchedOutline": {
              // جعل الإطار يظهر بلون النص ولكن بشفافية ليكون شكله ناعم
              borderColor: "currentColor",
              opacity: 0.5,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2196f3",
              opacity: 1,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2196f3",
              opacity: 1,
            },
          },
        }}
      />
    );
  }
);

export default Input;