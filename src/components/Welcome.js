import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    welcome:{
        textAlign:"center",
        color:"white",
        marginTop:"10%"
    }
  }));
const Welcome = ()=>{
    const classes = useStyles();
    return(
        <div>

            <style>
            @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
            </style>
            <h1 className = {classes.welcome} style = {{fontFamily: 'Abril Fatface'}}>Welcome to our School</h1>
        </div>
    )
}

export default Welcome;