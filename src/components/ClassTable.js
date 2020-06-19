import React from "react";
import {Table, Button} from "reactstrap";
import APIURL from "../helpers/environment";
const classTable = (props) =>{


    const deleteClass = (myClass)=>{
        let id = myClass.id;
        console.log(id);
        console.log(props.sessionToken);
        console.log(myClass);
        fetch(`${APIURL}/advLog/deleteClass/${id}`,{
            method:"DELETE",
            headers: new Headers({
                "Content-type":"application/json",
                "Authorization":props.sessionToken
            })
        })

    }

    const classMapper = ()=>{
        let condition =  props.classes.data;
        let classes;
        if(condition !== undefined){
            classes = condition;
            return (classes.map((myClass,index)=>{
                return(
                    <tr key = {index}>
                        <td>{myClass.id}</td>
                        <td>{myClass.Subject}</td>
                        <td>{myClass.RoomNum}</td>
                        <td>{myClass.Capacity}</td>
                        <td><Button color = "warning" onClick = {()=>{
                                props.editUpdateClass(myClass);
                                props.updateOn();
                            }}>Update</Button>
                        &nbsp;	&nbsp;
                        <Button color = "danger" onClick = {()=>{deleteClass(myClass)}}>Delete</Button></td>
                    </tr>
                )
            }))
        }
        else{
            classes = [];
        }
    }
 
    return(
        <>
            <div style = {{overflowY:"scroll", height:"50vh",width:"100%"}}>

                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Room Number</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                        <tbody>
                            {classMapper()}
                            {props.fetchClasses()}
                        </tbody>
                </Table>
            </div>
        </>
    );
}

export default classTable;