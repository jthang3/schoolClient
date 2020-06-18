import React from "react";
import {Table,Button} from "reactstrap";

const AdvisorTable = (props) =>{
    const advisorMapper = ()=>{
        let condition =  props.advisor.data;
        let myAdvisor;
        if(condition !== undefined){
            myAdvisor = condition;
            return (myAdvisor.map((advisor,index)=>{
                return(
                    <tr key = {index}>
                        <td>{advisor.id}</td>
                        <td>{advisor.FirstName}</td>
                        <td>{advisor.LastName}</td>
                        <td>{advisor.email}</td>
                        <td>
                        <Button color = "warning" onClick = {()=>{
                                props.editUpdateAdvisor(advisor);
                                props.updateOn();
                            }}>Update</Button>
                            
                        </td>
                    </tr>
                )
            }))
        }
        else{
            myAdvisor = [];
        }
    }
    return(
        
    <>
        <h3 style = {{color:"black"}}>My Information</h3>
            <hr/>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                    <tbody>
                        {advisorMapper()}
                       
                    </tbody>
            </Table>
    </>
    )
 
}
export default AdvisorTable;