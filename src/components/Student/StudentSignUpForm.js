import React,{useState} from "react";
import {Button,Form,FormGroup,Label,Input} from "reactstrap";
import APIURL from "../../helpers/environment";
import Sitebar from "../Sitebar";
import "./Student.css"

 const AdvisorForm = (props)=>{
     const [firstName,setFirstName] = useState("");
     const [lastName,setLastName] = useState("");
     const [major,setMajor] = useState("");
     const [DOB,setDob] = useState("");
     const [adv,setAdv] = useState();
     const [classId,setClassId] = useState();
     const [firstMessage,setFirstMessage] = useState("");
     const [lastNameMessage,setLastNameMessage] = useState("");
     const [majorMessage,setMajorMessage] = useState("");
     const [DOBMessage,setDobMessage] = useState("");
     const [advMessage,setAdvMessage] = useState("");
     const [classIdMessage,setClassIdMessage] = useState("");
    props.updateLog("LOGOUT");
    
        if(props.display === 0){
            const handleSubmit = (e) => {
                e.preventDefault();
                if(!firstName){
                    setFirstMessage("First name must be provided");
                }
                else{
                    setFirstMessage("");
                }
                !lastName?setLastNameMessage("Last name must be provided"):setLastNameMessage("");
                !major?setMajorMessage("Major must be provided"):setMajorMessage("");
                !DOB?setDobMessage("DOB must be provided"):setDobMessage("");
                !adv?setAdvMessage("Advisor ID must be provided"):setAdvMessage("");
                !classId?setClassIdMessage("Class ID must be provided"):setClassIdMessage("");
                if(firstName && lastName && major && DOB && adv && classId){
                fetch(`${APIURL}/student/studentInfo`,{
                    method:"POST",
                    body:JSON.stringify({user:{firstName:firstName,lastName:lastName,major:major,dob:DOB,adv:adv,classId:classId}}),
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
                // let myAdvisor = [];
                // fetch(`${APIURL}/student/advisorList`,{
                //     method:"GET",
                //     headers: new Headers({
                //         "Content-type":"application/json",
                //         "Authorization":props.sessionToken
                //     })
                // })
                // .then(data=>data.json())
                // .then(advisors=>{
                //     console.log(advisors.data)
                //     myAdvisor = advisors.data;
                //         // advisors.data.map((advisor,index)=>{
                //         //     console.log(advisor.FirstName);
                //         //     return(
                //         //         <option value = {advisor.id}>
                //         //             {advisor.FirstName}
                //         //         </option>
                //         //     )
                //         // })
                        
                // })

                // const getAdvisor = ()=>{
                //     console.log(myAdvisor);
                // }
                
            return(
               <div className = "authForm">
                   <Form onSubmit = {handleSubmit}>
                   <div style = {{overflowY:"scroll", color:"black",backgroundColor:"white",height:"50vh"}}>
                        <FormGroup className = "special">
                           <Label for = "first">First Name</Label>
                           <Input name = "first" value = {firstName} onChange ={e=>setFirstName(e.target.value)}type = "text" placeholder = "first name"/>
                           {firstMessage}
                       </FormGroup>
                       <FormGroup className = "special">
                           <Label for = "last">Last Name</Label>
                           <Input name = "last" value = {lastName} onChange = {e=>setLastName(e.target.value)}type = "text" placeholder = "last name"/>
                           {lastNameMessage}
                       </FormGroup>
                       <FormGroup className = "special">
                           <Label for = "major">Major</Label>
                           <Input name = "major" value = {major} onChange = {e=>setMajor(e.target.value)}type = "select" id = "email">
                                <option>Pick a major</option>
                                <option value = "Web Developement">Web Developer</option>
                                <option value = "Software Developement">Software Developer</option>
                                <option value = "Cyber Security">Cyber Security</option>
                           </Input>
                           {majorMessage}
                       </FormGroup>
                       <FormGroup className = "special">
                           <Label for = "dob">DOB</Label>
                           <Input name = "dob" value = {DOB} onChange = {e=>setDob(e.target.value)}type = "date"/>
                           {DOBMessage}
                       </FormGroup>
                       <FormGroup className = "special">
                           <Label for = "adv">Advisor ID</Label>
                           <Input name = "adv" value = {adv} onChange = {e=>setAdv(e.target.value)} type = "select">
                                <option value = "7">John</option>
                                <option value = "5">Teresa</option>
                                <option value = "7">Ben</option>
                           </Input>
                           {advMessage}
                       </FormGroup>
                       <FormGroup className = "special">
                           <Label for = "class">Class ID</Label>
                           <Input name = "class" value = {classId} type = "select" onChange = {e=>setClassId(e.target.value)}>
                               <option value = "7">7</option>
                               <option value = "10">10</option>
                               <option value = "11">11</option>
                           </Input>
                           {classIdMessage}
                       </FormGroup>
                   </div>
                       <Button className = "myBtn specialBtn" type = "submit">Sign up</Button>
                   </Form>
               </div>
            )
           
        }
        else{
            return(
                <div>
                    {<Sitebar person = {props.person} sessionToken = {props.sessionToken}/>}
                </div>
            )
        }

 }

 export default AdvisorForm;