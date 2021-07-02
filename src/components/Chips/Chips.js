import React from 'react';
import { makeStyles ,FormControl,FormHelperText} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  mainRoot:{
    width: '320px',
    height: '126px',
    position: 'relative',
    marginTop:'18px',
    },
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: '18px 0',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  floatBtn: {
      position: 'absolute',
      right:0, 
      top:'-8px', 
      backgroundColor:'#FE5454'
  },
   errorText:{
      paddingLeft:'8px',
      paddingTop:'6px',
     color:'red',
     fontWeight:'bold'
   },
   label:{
     color:'#00000099',
     fontWeight:'600',
    fontSize:'14px'
   }
}));

export default function ChipsArray(props) {
  const classes = useStyles();
  const {error,...otherProps}=props
  if(error){
    otherProps.error=true;
  }

  return (
     <FormControl className={classes.mainRoot}> 
         <Typography id="slider-label" variant="caption" className={classes.label} gutterBottom>
            What do you want to pack?
        </Typography>
        <Fab size="small" color="secondary" aria-label="add" className={classes.floatBtn} onClick={() =>props.openAddPopup()}>
          <AddIcon />
        </Fab>
        <div className={classes.root}>
        {props?.chipData.map((data,key) => {
            return (
                <li key={`${data}+${key}`}>
                    <Chip
                    label={data}
                    onDelete={e=>props.onClick(data)}
                    className={classes.chip}
                    />
                </li>
            )})
        }
        </div>
     {error ?<FormHelperText className={classes.errorText}>You seems to have nothing in the Pack, {error}</FormHelperText>:null}
    </FormControl>
  );
}