import React, { useState,useEffect } from 'react'
import  {DataGrid}  from '@material-ui/data-grid';
import {getData} from '../../services/index';
import { makeStyles} from '@material-ui/core';
import Title from '../../components/Title/MainTitle';


const useStyles = makeStyles((theme) => ({
  root:{
      backgroundColor:'white',
      color:'black',
      margin:'8px 0',
  }
})
)
const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'fullName', headerName: 'Full name', width: 160 },
    { field: 'codeName', headerName: 'code name', width: 160 },
    { field: 'slider', headerName: 'Distance', width: 140 },
    { field: 'region',headerName: 'Region',width: 140,},
    {
        field: 'avatar',
        headerName: 'Avatar',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>{
        return `${params.value.name}`
        }
    },
    {
        field: 'packs',
        headerName: 'packs',
        description: 'packs data',
        sortable: false,
        width: 240,
        valueGetter: (params) =>{
        return `${params.value.join()}`
        }
    },
];

export default function View() {
    const classes = useStyles();
    const [rows, setRows] = useState([])

    useEffect(() => {
       const data=getData()
       if(data!==null){
           const rows=data.map((el,id)=> {
            return { id,...el}
            })
           setRows(rows)
       }
    }, [])

    return (
        <div className='view-page'>
            <Title>Pokeman so far...</Title>
                <DataGrid rows={rows} columns={columns} pageSize={5} className={classes.root}/>
        </div>
    )
    
}
