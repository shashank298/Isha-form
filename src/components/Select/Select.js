import React from 'react';
import { makeStyles,FormHelperText } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  mainRoot:{
     margin:'18px 0'
  },
   root: {
        // color: '#FE5454',
        width: '320px',
      },
   errorText:{
     paddingLeft:0,
     color:'red',
     fontWeight:'bold'
   }   
}));

export default function CustomSelect(props) {
  const classes = useStyles();
  const {error,...otherProps}=props
  if(error){
    otherProps.error=true;
    otherProps.helperText=error
  }
    return(
      <div className={classes.mainRoot}>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel  color="secondary" id="select-label">{props.placeholder}</InputLabel>
        <Select
            className={classes.root}
            labelId="select-label"
            color="secondary"
             size="medium"
            {...otherProps}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {
            props?.options.map((opt,key)=>
              <MenuItem key={key} value={opt}>{opt}</MenuItem>
            )
          }
          
        </Select>
        {error ?<FormHelperText className={classes.errorText}>Oops!!  You forget to select </FormHelperText>:null}
      </FormControl>
    </div>  
    )

}