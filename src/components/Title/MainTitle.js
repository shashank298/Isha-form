import React from 'react'
import {makeStyles,Typography} from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    color:'#FE5454',
    fontWeight:'bold',
    margin:'24px 0'
  }
});

export default function MainTitle(props) {
     const classes = useStyles();
    return (
        <Typography className={classes.root} variant="h4" color="textPrimary" gutterBottom>
                           {props.children}
        </Typography>
    )
}
