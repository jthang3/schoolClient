import React from "react";
import {Table,Button} from "reactstrap";

const StudentTable = (props) =>{
    const studentMapper = ()=>{
        let condition =  props.student.data;
        let myStudent;
        if(condition !== undefined){
            myStudent = condition;
            return (myStudent.map((student,index)=>{
                return(
                    <tr key = {index}>
                        <td>{student.FirstName}</td>
                        <td>{student.LastName}</td>
                        <td>{student.Major}</td>
                        <td>{student.DOB}</td>
                        <td>{student.classId}</td>
                        <td><Button color = "danger">Delete</Button></td>
                    </tr>
                )
            }))
        }
        else{
            myStudent = [];
        }
    }
    return(
    <>
        <h3 style = {{color:"black"}}>My Student</h3>
        <div style = {{overflowY:"scroll", height:"50vh"}}>
            <Table striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Major</th>
                        <th>DOB</th>
                        <th>Class ID</th>
                    </tr>
                </thead>
                    <tbody>
                        {studentMapper()}
                       
                    </tbody>
            </Table>
        </div>
    </>
    )
 
}
export default StudentTable;