import React from "react";
import {Route,Switch} from "react-router-dom";
import "../auth/Auth.css";
import {Row} from "reactstrap";
//import StudentSignUp from "../auth/StudentSIgnUp";
import AdvisorSignUp from "../auth/AdvisorSignUp";
import Login from "../auth/Login";



const Auth = (props)=>{
    
    const protectView = ()=>{
        return(
            <Switch>
                <Route exact path = "/"><AdvisorSignUp updatePerson = {props.updatePerson} home = {props.home} updateDisplay = {props.updateDisplay} updateLog = {props.updateLog} updateToken = {props.updateToken}/></Route>
                <Route exact path = "/advisor"><AdvisorSignUp updatePerson = {props.updatePerson} home = {props.home} updateDisplay = {props.updateDisplay} updateLog = {props.updateLog} updateToken = {props.updateToken}/></Route>
                {/* <Route exact path = "/student"><StudentSignUp updatePerson = {props.updatePerson} home = {props.home} updateDisplay = {props.updateDisplay} updateLog = {props.updateLog} updateToken = {props.updateToken}/></Route> */}
                <Route exact path = "/Login1"><Login home = {props.home} updateDisplay = {props.updateDisplay} updateToken = {props.updateToken} updateLog = {props.updateLog}/></Route>
            </Switch>
        )
    }
    return(
        <div className = "container">
            <Row>{protectView()}</Row>
        </div>
    );
}

export default Auth;