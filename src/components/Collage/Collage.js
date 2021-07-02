import React from 'react';
import { makeStyles,FormControl,FormHelperText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const starterPack=[
    {
        region: 'Kanto',
        images:[
            {alt:'Bulbasaur',src:'/assets/images/Bulbasaur.png'},
            {alt:'Charmander',src:'/assets/images/Charmandar.png'},
            {alt:'Squirtle',src:'/assets/images/Squirtle.png'},
        ]
    },
    {
        region: 'Jhoto',
        images:[
            {alt:'Chikorita',src:'/assets/images/Chikorita.png'},
            {alt:'Cyndaquil',src:'/assets/images/Cyndaquil.png'},
            {alt:'Totodyle',src:'/assets/images/Totodyle.png'},
        ]
    },
    {
        region: 'Hoenn',
        images:[
            {alt:'Treecko',src:'/assets/images/Treecko.png'},
            {alt:'Torchic',src:'/assets/images/Torchic.png'},
            {alt:'Mudkip',src:'/assets/images/Mudkip.png'},
        ]
    },
    {
        region: 'default',
        images:[
            {alt:'Wartortle',src:'/assets/images/Wartortle.png'},
            {alt:'Wartortle',src:'/assets/images/Wartortle.png'},
            {alt:'Wartortle',src:'/assets/images/Wartortle.png'},
        ]
    }

]


const useStyles = makeStyles((theme) => ({
    mainRoot:{
    width: '320px',
    height: '129px',
    margin:'24px 0',
    },
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '18px',
    '& > :not(:first-child)': {
      marginLeft: '18px',
    },
  },
  avatar: {
    width: '70px',
    height: '70px',
    padding:'5px',
    background:'#F0F0F0 0% 0% no-repeat padding-box'
  },
  errorText:{
      paddingLeft: '12px',
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

export default function Collage(props) {
  const classes = useStyles();
  const selectedRegion=props.region || 'default'
  const selectedPack=starterPack.filter(data=>data.region ===selectedRegion)
  const {error,...otherProps}=props
  if(error){
    otherProps.error=true;
  }
  const selectedAvatar=(e,alt,src)=>{
    const avatars=document.querySelectorAll('.MuiAvatar-circle')
    avatars?.forEach(el=>{
        if(el===e.target.parentNode){
        el.classList.add('selected')
      }else{
        el.classList.remove('selected')
      }
    })
    props.onClick(alt,src)
  }

  return (
    <FormControl className={classes.mainRoot}>
        <Typography id="slider-label" variant="caption" className={classes.label} gutterBottom>
           Choose your starter pokemon
        </Typography>
       <div className={classes.root}> 
      {
        selectedPack[0].images.map((img,key)=>{
          return (
            <Avatar key={`${img.alt}${key}`} alt={img.alt} src={img.src} className={classes.avatar} onClick={e=>selectedAvatar(e,img.alt,img.src)} />
          )
        }
        )
      }
      </div>
       {error ?<FormHelperText className={classes.errorText}>{error}</FormHelperText>:null}
    </FormControl>
  );
}