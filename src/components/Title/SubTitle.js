import React from 'react'
import {makeStyles,Typography} from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    color:'#889296',
    fontWeight:'bold',
    margin:'18px 0',
    marginTop:'42px'
  }
});

export default function SubTitle(props) {
     const classes = useStyles();
    return (
        <Typography className={classes.root} variant="subtitle2" color='textSecondary' gutterBottom>
                           {props.children}
        </Typography>
    )
}
