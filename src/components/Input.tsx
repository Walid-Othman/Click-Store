import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import type { InputType } from "../types/type";
import { forwardRef } from "react"; // 1. استيراد forwardRef

// 2. تغليف المكون بـ forwardRef
const Input = forwardRef<HTMLInputElement, InputType>(
  ({ type, value, onChange, label, className }, ref) => {
    return (
      <TextField
        // 3. تمرير الـ ref لخاصية inputRef الخاصة بـ MUI
        inputRef={ref} 
        id={uuidv4()}
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        className={className}
        InputLabelProps={{
          sx: {
            color: "white",
            "&.Mui-focused": { color: "#2196f3" },
            "&.MuiFormLabel-filled": { color: "#2196f3" },
          },
        }}
        InputProps={{
          sx: {
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#90caf9",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2196f3",
            },
          },
        }}
      />
    );
  }
);

export default Input;