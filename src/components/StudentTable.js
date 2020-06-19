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
        <div style = {{overflowY:"scroll", height:"50vh",width:"100%"}}>
        <h3 style = {{color:"white"}}>My Student</h3>
            <Table striped style = {{background:"black",color:"white"}}>
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