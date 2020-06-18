import React,{useState} from "react";
import {Button,Form,FormGroup,Label,Input} from "reactstrap";
import APIURL from "../helpers/environment";
import Sitebar from "../components/Sitebar";


 const AdvisorForm = (props)=>{
     const [firstName,setFirstName] = useState("");
     const [lastName,setLastName] = useState("");
     const [email,setEmail] = useState("");
     const [major,setMajor] = useState("");
     const [dob,setDob] = useState("");
     const [adv,setAdv] = useState();
     const [myclass,SetMyclass] = useState();
     const [firstNameMessage,setFirstNameMessage] = useState("");
     const [lastNameMessage,setLastNameMessage] = useState("");
     const [emailMessage,setEmailMessage] = useState("");
     const [majorMessage,setMajorMessage] = useState("");
     const [dobMessage,setDobMessage] = useState("");
     const [advMessage,setAdvMessage] = useState("");
     const [myclassMessage,SetMyclassMessage] = useState();
    props.updateLog("LOGOUT");
        console.log(props.display);
        if(props.display === 0){
            if(props.person === "advisor"){

                const handleSubmit = (e) => {
                    e.preventDefault();
                    if(!firstName){
                        setFirstNameMessage("First name must be provided");
                    }
                    else{
                        setFirstNameMessage("");
                    }
                    !lastName?setLastNameMessage("Last name must be provided"):setLastNameMessage("");
                    !email?setEmailMessage("Email must be provided"):setEmailMessage("");
                    if(firstName && lastName && email){
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
                               {firstNameMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "last">Last Name</Label>
                               <Input name = "last" value = {lastName} onChange = {e=>setLastName(e.target.value)}type = "text" placeholder = "last name"/>
                               {lastNameMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "email">Email</Label>
                               <Input name = "email" value = {email} onChange = {e=>setEmail(e.target.value)}type = "email" id = "email" placeholder = "email"/>
                               {emailMessage}
                           </FormGroup>
                           <Button className = "myBtn" type = "submit">Sign up</Button>
                       </Form>
                   </div>
                )
            }
            else{
                const handleSubmit = (e) => {
                    e.preventDefault();
                    if(!firstName){
                        setFirstNameMessage("First name must be provided");
                    }
                    else{
                        setFirstNameMessage("");
                    }
                    !lastName?setLastNameMessage("Last name must be provided"):setLastNameMessage("");
                    !major?setMajorMessage("Major must be provided"):setMajorMessage("");
                    !dob?setDobMessage("DOB must be provided"):setDobMessage("");
                    !adv?setAdvMessage("advisor id must be provided"):setAdvMessage("");
                    !myclass?SetMyclassMessage("Class ID must be provided"):SetMyclassMessage("");
                    if(firstName && lastName && major && dob && adv && myclass){
                    fetch(`${APIURL}/student/studentInfo`,{
                        method:"POST",
                        body:JSON.stringify({user:{firstName:firstName,lastName:lastName,major:major,dob:dob,adv:adv,classId:myclass}}),
                        headers: new Headers({
                            "Content-Type":"application/json",
                            "Authorization":props.sessionToken
                        })
                    })
                    .then(data=>data.json())
                    .then(json=>{
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
                               {firstNameMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "last">Last Name</Label>
                               <Input name = "last" value = {lastName} onChange = {e=>setLastName(e.target.value)}type = "text" placeholder = "last name"/>
                               {lastNameMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "Major">Major</Label>
                               <Input name = "Major" value = {major} onChange = {e=>setMajor(e.target.value)}type = "select">
                                   <option>Pick a Major</option>
                                   <option value = "web">Web developement</option>
                                   <option value = "software">Softwarement</option>
                                   <option value = "cyber">Cyber Security</option>
                               </Input>
                               {majorMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "dob">DOB</Label>
                               <Input name = "dob" value = {dob} onChange = {e=>setDob(e.target.value)}type = "text"/>
                               {dobMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "adv">Advisor ID</Label>
                               <Input name = "adv" value = {adv} onChange = {e=>setAdv(e.target.value)}type = "number"/>
                               {advMessage}
                           </FormGroup>
                           <FormGroup>
                               <Label for = "class">DOB</Label>
                               <Input name = "class" value = {myclass} onChange = {e=>SetMyclass(e.target.value)}type = "number"/>
                               {myclassMessage}
                           </FormGroup>
                           <Button className = "myBtn" type = "submit">Sign up</Button>
                       </Form>
                   </div>
                )
            }
           
        }
        else{
            if(props.person === "student"){
                return(
                    <h1>Form submitted. Will update this site later</h1>
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

 }

 export default AdvisorForm;