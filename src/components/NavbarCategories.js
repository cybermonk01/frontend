import React from 'react'
import {Box, makeStyles, Typography} from '@material-ui/core'
import { NavData } from '../constants/NavData.js' 

const useStyle = makeStyles({
    component :{
        display : 'flex',
        margin: '55px 130px 0 130px',
        justifyContent:'space-between'
    },
    container :{
        textAlign:'center',
        padding:'12px 8px'
    },
    image:{
        width : 64
    },
    text :{
        fontSize : 14 ,
        fontWeight:600 
    }
})

const NavbarCategories = () => {
    const classes = useStyle();
  return (
    <Box className={classes.component}>
        { 
            NavData.map(data =>( 
                <Box className={classes.container}>
                     <img src = {data.url} className={classes.image} alt =''/>
                     <Typography className={classes.text}>{data.text}</Typography>
                </Box>
                )) 
        }
    </Box>
  )
}

export default NavbarCategories