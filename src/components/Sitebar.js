import React from "react";
import {Route,Link,Switch} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import Class from "./Classes";
import Welcome from "./Welcome";
import Student from "./Student";
import "./Sitebar.css";

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    perfect:{
        display:"flex",
        justifyContent:"space-around"
    }
    
  }));

const SiteBar = (props)=>{
    const classes = useStyles();
    return(
        <div>
            <div>
                <ul className = {classes.perfect}>
                    <li className = "changeMe"><Link to = "/myInfo">Home</Link></li>
                    <li className = "changeMe"><Link to = "/class">Class</Link></li>
                    <li className = "changeMe"><Link to = "/students">Students</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path = "/Login1/"><Welcome/></Route>
                    <Route exact path = "/myInfo"><Home sessionToken = {props.sessionToken}/></Route>
                    <Route exact path = "/class"><Class sessionToken = {props.sessionToken}/></Route>
                    <Route exact path = "/students"><Student sessionToken = {props.sessionToken}/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default SiteBar;