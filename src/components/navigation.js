import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    bttn:{
        color:"white"
    }
  }));

const Header = (props)=>{
    
    const logChange = ()=>{
        if(props.log === "SIGNUP"){
            return(
                <Link to = "/">{props.log}</Link>
            )
        }
        else if(props.log === "LOGIN"){
            return(
                <Link to = "/Login1">{props.log}</Link>
            )
        }
        else if(props.log === "LOGOUT"){
            return(
            <Link to = "/Login1"onClick = {props.clearToken}>{props.log}</Link>
            )
        }
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link className = {classes.bttn} id = "bttn1" to = "/">{props.user}</Link>
          </IconButton>
          </Typography>
        <Button color="inherit"><Link to = "/">{logChange()}</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    );
};

export default Header;