import React,{useState} from "react";
import {Form,FormGroup,Label,Input,Button} from "reactstrap";
import APIURL from "../helpers/environment";

const Login = (props)=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    props.updatePerson("advisor");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "" || password === ""){
            setMessage("Username/password is required");
        }
        else{
            setMessage("");
            fetch(`${APIURL}/user/advisorLogin`,{
                method: "POST",
                body:JSON.stringify({user:{username:username,password:password}}),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
            .then(data=>data.json())
            .then(json=>{
                fetch(`${APIURL}/advLog/advisorInfo`,{
                    method:"GET",
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization":json.sessionToken
                    })
                })
                .then(data=>{
                    return data.json();
                })
                .then(mydata=>{
                    //console.log(mydata.data.length);mydata.data[0].FirstName
                    mydata.data.length>0?props.home(mydata.data[0].FirstName):props.home("HOME");
                    // console.log("This is testing");
                    //console.log(mydata.data[0].FirstName);
                   props.updateDisplay(mydata.data.length);
                   props.updateToken(json.sessionToken);
                })
            })
        }
    }
    props.updateLog("SIGNUP");
    return(
            <div className = "authForm formMe">
                <Form onSubmit = {handleSubmit}autoComplete="off">
                    <fieldset>
                        <legend>LOGIN</legend>
                        <FormGroup>
                            <Label htmlFor = "username">Username</Label>
                            <Input name = "username" value = {username} onChange = {e=>setUsername(e.target.value)}type = "text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = "password">Password</Label>
                            <Input name = "password" value = {password} onChange = {e=>setPassword(e.target.value)}type = "password"/>
                            {message}
                        </FormGroup>
                        <Button className = "myBtn"type = "submit">Log in</Button>
                    </fieldset>
                </Form>
            </div>
        )
}

export default Login;