import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    welcome:{
        textAlign:"center"
    }
  }));
const Welcome = ()=>{
    const classes = useStyles();
    return(
        <h1 className = {classes.welcome}>Welcome to our School</h1>
    )
}

export default Welcome;