import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
elContainer:{
    width: '320px',
    height: '80px',
    margin:'6px 0',
    marginTop:'48px',
    padding:'3px'
},      
root: {
    color: '#FE5454',
    width:'100%'
  },
  label:{
    fontWeight:'600',
    fontSize:'12px'
  }
}));


export default function CustomSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.elContainer}>
      <Slider
        {...props}
        className={classes.root}
        aria-labelledby="slider-label"
        valueLabelDisplay="on"
      />
      <Typography id="slider-label" variant="caption" className={classes.label} gutterBottom>
        {props.placeholder}
      </Typography>
    </div>
  );
}