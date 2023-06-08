import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./ui/Theme";
import {useForm} from "react-hook-form";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

// 3) /employee/new
    // POST method
    // send back JSON
    // one thing - data that DB confirmed was added
    // one object - BUT initial return maybe an array of object

const Form = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Salary" variant="outlined" />
    </Box>
    </ThemeProvider>
  )
}

export default Form;