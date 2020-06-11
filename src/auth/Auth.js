import React,{useState} from "react";
import {Row,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import "../auth/Auth.css";
import StudentSignUp from "../auth/StudentSIgnUp";
import AdvisorSignUp from "../auth/AdvisorSignUp";



const Auth = (props)=>{
    const [option,setOption] = useState("1");
    const [dropdownOpen,setDropdownOpen] = useState(false);
    const option1 = ()=>{
        setOption("1");
    }
    const option2 =()=>{
        setOption("2");
    }
    const result = ()=>{
        return(
            <Dropdown className = "container" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    sign up as
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className = "options"onClick = {option1}>Advisor</DropdownItem>
                    <DropdownItem onClick = {option2}>Student</DropdownItem>
                </DropdownMenu>
             </Dropdown>
        )
    }
    const protectView = ()=>{
        if(option == "1"){
            return(
                <AdvisorSignUp updateToken = {props.updateToken}/>
            )
        }
        else{
            return(
                <StudentSignUp updateToken = {props.updateToken}/>
            )
        }
    }
    const toggle = ()=>setDropdownOpen(prevState=>!prevState);
    return(
        <div className = "container">
            <Row>{result()}</Row>
            <Row>{protectView()}</Row>
        </div>
    );
}

export default Auth;