import React,{useState} from "react";
import { Modal, ModalHeader, ModalBody,Form, FormGroup,Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";
const ClassEdit = (props)=>{
    const [subject,setSubject] = useState(props.classUpdate.Subject);
    const [room,setRoom] = useState(props.classUpdate.RoomNum);
    const [capacity,setCapacity] = useState(props.classUpdate.Capacity);

    const cancel = (e)=>{
        e.preventDefault();
        props.fetchClasses();
        props.updateOff();
    }
    const classUpdate = (e,myClass)=>{
        e.preventDefault();
        const id = props.classUpdate.id;
        fetch(`${APIURL}/advLog/classes/${id}`,{
            method: "PUT",
            body: JSON.stringify({subject:subject,room:room,capacity:capacity}),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.sessionToken
            })
        })
        .then(res=>{
            props.fetchClasses();
            props.updateOff();
        })

    }
    return(
        <Modal isOpen = {true}>
            <ModalHeader>Update a class</ModalHeader>
            <ModalBody>
                <Form className = "colorMe" onSubmit = {classUpdate}>
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
                        <Button type = "submit">Update the Class</Button>	&nbsp;	&nbsp;	&nbsp;
                    <Button type = "button" onClick = {cancel}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ClassEdit;