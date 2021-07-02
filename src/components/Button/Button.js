import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: '#FE5454 0% 0% no-repeat padding-box',
    border: 0,
    borderRadius: '4px',
    boxShadow: '0px 1px 3px #00000033',
    color: 'white',
    height: '36px',
    padding: '12px 24px',
    fontSize: '14px',
    margin:'18px 0',
    transition:'background-color 90ms ease-in',
    '&:hover': {
            backgroundColor: '#f50057',
          },
  },
});

export default function CustomButton(props) {
  const classes = useStyles();
  return(
  <div className='btn-container'>
    <Button className={classes.root} {...props}>{props.children}</Button>
  </div>
  )
}