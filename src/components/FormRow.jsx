import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';

import InputStyles from "../assets/styles/InputStyles";


// eslint-disable-next-line react/prop-types
const FormRow = ({type,name,value,handleChange,labelText}) => {

        const classes = InputStyles();

  return (
     <TextField
          label={name}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          ba="true"
           className={classes.root}
           type={type}
           name={name}
           value={value}
           onChange={handleChange}
        />
  )
}
export default FormRow