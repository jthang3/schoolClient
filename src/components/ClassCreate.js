import React, {useState} from "react";
import {Button,Form,FormGroup,Label,Input} from "reactstrap";
import APIURL from "../helpers/environment";

const ClassCreate = (props)=>{
    const [subject,setSubject] = useState("");
    const [room,setRoom] = useState("");
    const [capacity,setCapacity] = useState();
const handleSubmit = (e)=>{
    e.preventDefault();
    fetch(`${APIURL}/advLog/createClass`,{
        method:"POST",
        body:JSON.stringify({subject:subject,room:room,capacity:capacity}),
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": props.sessionToken
        })
    })
    .then(res=>res.json())
    .then(json=>{
        setSubject("");
        setRoom("");
        setCapacity(0);
        alert("Classes added");
    })
}
    
    return(
        <>
        <h3 style = {{color:"black"}}>Create a class</h3>
        <Form className = "colorMe" onSubmit = {handleSubmit}>
            <FormGroup>
                <Label htmlFor = "subject">Subject</Label>
                <Input name = "subject" type = "select" value = {subject} onChange = {e=>setSubject(e.target.value)}>
                    <option>Pick a subject</option>
                    <option value = "Web Development">Web Development</option>
                    <option value = "Software Development">Software Development</option>
                    <option value = "Cyber Security">Cyber Security</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = "room">Room #</Label>
                <Input name = "room" type = "text" value = {room} onChange = {e=>setRoom(e.target.value)} required/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = "capacity">Capacity</Label>
                <Input name = "capacity" value = {capacity} onChange = {e=>setCapacity(e.target.value)} required/>
            </FormGroup>
            <Button type = "submit">Click to Submit</Button>
        </Form>
    </>
    )
}

export default ClassCreate;