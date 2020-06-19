import React, { useState,useEffect } from "react";
import {Container, Row, Col} from "reactstrap";
import APIURL from "../helpers/environment";
import ClassTable from "./ClassTable";
import ClassEdit from "./ClassEdit";
import ClassCreate from "./ClassCreate";
const Classes = (props) =>{
   const [classes,setClasses] = useState([]);
    const [updateActive,setUpdateActive] = useState(false);
    const [classUpdate,setClassUpdate] = useState({});
   const fetchClasses = ()=>{
    fetch(`${APIURL}/advLog/getClasses`,{
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.sessionToken
        })
    })
    .then(res=>res.json())
    .then(json=>{
        setClasses(json);
    })
   }
   const editUpdateClass = (myClass)=>{
       setClassUpdate(myClass);
   }

   const updateOn = ()=>{
       setUpdateActive(true);
   }
   const updateOff = () =>{
       setUpdateActive(false);
   }
   useEffect(()=>{
       fetchClasses();
   },[]);
   return(
    <Container style = {{background:"linear-gradient(90deg, rgba(9,9,121,1) 11%, rgba(2,0,36,1) 77%)"}}>
    <Row>
            {/*Create component will go here */}
            <ClassCreate fetchClasses = {fetchClasses} sessionToken = {props.sessionToken}/>
        </Row>
        <Row className = "moveMe">
            <ClassTable classes = {classes} fetchClasses = {fetchClasses} sessionToken = {props.sessionToken} editUpdateClass = {editUpdateClass}
            updateOn = {updateOn}/>
        {updateActive?<ClassEdit classUpdate = {classUpdate} updateOff = {updateOff} sessionToken = {props.sessionToken}
        fetchClasses = {fetchClasses}/>:null}
    </Row>
</Container>
   )
 
}
export default Classes;