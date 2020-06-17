import React,{useState} from "react";
import { Modal, ModalHeader, ModalBody,Form, FormGroup,Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/environment";

const AdvisorEdit = (props)=>{
    const [firstName,setFirstName] = useState(props.advisorToUpdate.FirstName);
     const [lastName,setLastName] = useState(props.advisorToUpdate.LastName);
     const [email,setEmail] = useState(props.advisorToUpdate.email);
    const cancel = (e)=>{
        e.preventDefault();
        props.fetchAdvisor();
        props.updateOff();
    }
    const advisorUpdate = (e)=>{
        e.preventDefault();
        const id = props.advisorToUpdate.id;
        fetch(`${APIURL}/advLog/${id}`,{
            method: "PUT",
            body:JSON.stringify({user:{first:firstName,last:lastName,email:email}}),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then(res=>{
            props.fetchAdvisor();
            props.updateOff();
        })
        // props.fetchAdvisor();
        // props.updateOff();
    }
    return(
        <Modal isOpen = {true}>
            <ModalHeader>Advisor</ModalHeader>
            <ModalBody>
                <Form onSubmit = {advisorUpdate}>
                    <FormGroup>
                        <Label htmlFor = "first">First Name</Label>
                        <Input name = "first" value = {firstName} type = "text"onChange = {(e=>setFirstName(e.target.value))}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "last">Last Name</Label>
                        <Input name = "last" value = {lastName} type = "text"onChange = {e=>setLastName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "email">Email</Label>
                        <Input name = "email" value = {email} type = "text" onChange = {e=>setEmail(e.target.value)}/>
                    </FormGroup>
                    <Button type = "submit">Update the Advisor!</Button>	&nbsp;	&nbsp;	&nbsp;
                    <Button type = "button" onClick = {cancel}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default AdvisorEdit;