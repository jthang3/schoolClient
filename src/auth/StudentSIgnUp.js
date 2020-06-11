import React,{useState} from "react";
import {Form,FormGroup,Label,Input,Button} from "reactstrap";
import APIURL from "../helpers/environment";

const Signup = (props)=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [secondPassword,setSecondPassword] = useState("");
    const [message,setMessage] = useState("");
    const [passwordMatch,setPasswordMatch] = useState("");
    const [secondPasswordMatch,setSecondPasswordMatch] = useState("");
    const [passwordResult,setPasswordResult] = useState("");
    const [match,setMatch] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!username){
            setMessage("User name must be provided!");
        }
        else{
            setMessage("");
            if(password === "" || secondPassword === ""){
                if(password === ""){
                    setPasswordMatch("Password must be provided");
                }
                else{
                    setPasswordMatch("");
                }
                if(secondPassword === ""){
                    setSecondPasswordMatch("Password must be provided");
                }
                else{
                    setPasswordMatch("");
                }
         }
         else{
             setSecondPasswordMatch("");
             setPasswordMatch("");
             if(password === secondPassword){
                 setMatch("");
                 if(password.length < 6){
                    setPasswordResult("Password must be longer than 5");
                 }
                 else{

                     setPasswordResult("");
                    let i = 0;
                    let j = 0;
                    while(i < password.length){
                        if(password[i] === '!' || password[i] === '@' || password[i] === "#"){
                            //setPasswordResult("Your password must included at least one of !,@,or #");
                            fetch(`${APIURL}/user/signup`,{
                                method: "POST",
                                body:JSON.stringify({user:{username:username,password:password}}),
                                headers: new Headers({
                                    "Content-Type": "application/json"
                                })
                            })
                                .then(data=>{
                                    return data.json();
                                })
                                .then(json=>{
                                    props.updateToken(json.sessionToken);
                                })

                            i = password.length+1;
                        }
                        else{
                            i ++
                        }
                        
                    }
                    if(i === password.length){
                        setPasswordResult("Your password must included at least one of !,@,or #");
                    }
                 }
             }
             else{
                 setPasswordResult("");
                 setPasswordResult("");
                 setMatch("Password did not match");
             }
         }
        }
    }
    return(
        <div className = "authForm">
          <div>
            <h4>Student Sign up</h4>
            <Form onSubmit = {handleSubmit}autoComplete="off">
                <FormGroup>
                    <Label htmlFor = "username">Username</Label>
                    <Input name = "username" value = {username} onChange = {e=>setUsername(e.target.value)}type = "text"/>
                    {message}<br/>
                    <Label htmlFor = "password">Password</Label>
                    <Input name = "password" value = {password} onChange = {e=>setPassword(e.target.value)}type = "password"/>
                    {passwordMatch}<br/>
                    <Label htmlFor = "password">Re-enter Password</Label>
                    <Input name = "password" value = {secondPassword} onChange = {e=>setSecondPassword(e.target.value)}type = "password"/>
                    {secondPasswordMatch}
                    {passwordResult}
                    {match}
                </FormGroup>
                <Button type = "submit">Sign up</Button>
            </Form>
        </div>
        </div>
    )
}

export default Signup;