import React,{useState} from "react";
import {Button,Form,FormGroup,Label,Input} from "reactstrap";
import APIURL from "../helpers/environment";
import Sitebar from "../components/Sitebar";


 const AdvisorForm = (props)=>{
     const [firstName,setFirstName] = useState("");
     const [lastName,setLastName] = useState("");
     const [email,setEmail] = useState("");
     const [message,setMessage] = useState("");
    
    props.updateLog("LOGOUT");
        if(props.display === 0){
            const handleSubmit = (e) => {
                e.preventDefault();
                if(!firstName){
                    setMessage("First name must be provided");
                }
                else{
                    setMessage("");
                }
                !lastName?setMessage("Last name must be provided"):setMessage("");
                !email?setMessage("Email must be provided"):setMessage("");
                if(firstName && lastName && email){
                console.log("This is fucking asshole");
                fetch(`${APIURL}/advLog/advisor`,{
                    method:"POST",
                    body:JSON.stringify({user:{first:firstName,last:lastName,email:email}}),
                    headers: new Headers({
                        "Content-Type":"application/json",
                        "Authorization":props.sessionToken
                    })
                })
                .then(data=>data.json())
                .then(json=>{
                    console.log("Mother fucker");
                    props.updateUser(firstName);
                    props.updateDisplay(json.data.length);
                    props.updateToken(props.sessionToken);
                })
            }
            }
            return(
               <div className = "authForm">
                   <Form onSubmit = {handleSubmit}>
                       <FormGroup>
                           <Label for = "first">First Name</Label>
                           <Input name = "first" value = {firstName} onChange ={e=>setFirstName(e.target.value)}type = "text" placeholder = "first name"/>
                           {message}
                       </FormGroup>
                       <FormGroup>
                           <Label for = "last">Last Name</Label>
                           <Input name = "last" value = {lastName} onChange = {e=>setLastName(e.target.value)}type = "text" placeholder = "last name"/>
                           {message}
                       </FormGroup>
                       <FormGroup>
                           <Label for = "email">Email</Label>
                           <Input name = "email" value = {email} onChange = {e=>setEmail(e.target.value)}type = "email" id = "email" placeholder = "email"/>
                           {message}
                       </FormGroup>
                       <Button className = "myBtn" type = "submit">Sign up</Button>
                   </Form>
               </div>
            )
           
        }
        else{
            return(
                <div>
                    {<Sitebar user = {props.home} person = {props.person}sessionToken = {props.sessionToken}/>}
                </div>
            )
        }

 }

 export default AdvisorForm;