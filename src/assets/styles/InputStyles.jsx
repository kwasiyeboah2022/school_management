

import { makeStyles } from '@mui/styles';



const InputStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#627d98', // Set the border color to red
      },
      '&:hover fieldset': {
        borderColor: '#e879f9', // Set the border color on hover to green
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d946ef', // Set the border color when focused to blue
      },
    },
    
  },
}));

export default InputStyles