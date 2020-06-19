import React,{useState,useEffect} from "react";
import APIURL from "../helpers/environment";
import StudentTable from "./StudentTable";
import {Row} from "reactstrap";
const Student = (props)=>{
    const [student,setStudent] = useState({});
    let studentInfo = [];
    const fetchStudent = () =>{
        fetch(`${APIURL}/advLog/myStudent`,{
            method:"GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization":props.sessionToken
            })
        })
        .then(res=>res.json())
        .then(json=>{
            studentInfo = json;
            setStudent(studentInfo);
        })
        
    }
    useEffect(()=>{
        fetchStudent();
    },[]);
    return(
        <Row style = {{marginTop:"5%"}}>
            <StudentTable student = {student} fetchStudent = {fetchStudent} token = {props.sessionToken}/>
        </Row>
    )
}

export default Student;