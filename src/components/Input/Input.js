import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles,FormHelperText,FormControl } from '@material-ui/core';

const useStyles = makeStyles({
  mainRoot:{
     margin:'24px 0',
  },
  root: {
    width: '320px',
    height: '40px',
    borderRadius: '4px 4px 0px 0px',
    borderBottom: "none",
  },
  errorText:{
      paddingLeft: '12px',
      paddingTop:'8px',
     color:'red',
     fontWeight:'bold'
   } 
});

export default function InputField(props) {
  const classes = useStyles();
  const {error,...otherProps}=props
  if(error){
    otherProps.error=true;
  }
  return (
  <FormControl className={classes.mainRoot}>
   <TextField
        className={classes.root}
        variant="filled"
        color="secondary"
        size="medium"
        inputProps={{ disableUnderline: false }}
        {...otherProps}
    />
    {error ?<FormHelperText className={classes.errorText}>{error}</FormHelperText>:null}
    </FormControl>
  );
}
