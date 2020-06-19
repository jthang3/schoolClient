import React,{useState} from "react";
import {Form,FormGroup,Label,Input,Button,Row,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import {
    Link
} from "react-router-dom";
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
    const [dropdownOpen,setDropdownOpen] = useState(false);
    props.updateLog("LOGIN");
    props.updatePerson("advisor");
    props.updateDisplay(0);
    const result = ()=>{
        return(
            <Dropdown className = "container" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    sign up as
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem className = "options"><Link to = "/advisor">Advisor</Link></DropdownItem>
                    <DropdownItem className = "options"><Link to = "/student">Student</Link></DropdownItem>
                </DropdownMenu>
             </Dropdown>
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!username){
            setMessage("Username must be provided!");
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
                    while(i < password.length){
                        if(password[i] === '!' || password[i] === '@' || password[i] === "#"){
                            //setPasswordResult("Your password must included at least one of !,@,or #");
                                i = password.length+1;
                        }
                        else{
                            i ++
                        }
                        
                    }
                    if(i === password.length){
                        setPasswordResult("Your password must included at least one of !,@,or #");
                    }
                    else{
                        let condition;
                            var str = username; 
                            var res = str.match(/[a-zA-Z]/g);
                            if(res){
                                res = str.match(/[0-9]/g);
                                if(res){
                                condition = true;
                                }
                                else{
                                condition = false;
                                setMessage("Must include at least one number and one alphabet");
                                }
                            
                            }
                        if(condition){
                            setMessage("");
                            fetch(`${APIURL}/user/advisorSignup`,{
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
                                        console.log(mydata.data.length);
                                       props.updateDisplay(mydata.data.length)
                                       props.updateToken(json.sessionToken);
                                    })
                    
                                })
                        }
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
    const toggle = ()=>setDropdownOpen(prevState=>!prevState);
    return(
        <div className = "authForm">
          <div>
            <Row>{result()}</Row>
            <Form onSubmit = {handleSubmit}autoComplete="off">
                <FormGroup>
                    <Label htmlFor = "username">Username</Label>
                    <Input name = "username" value = {username} onChange = {e=>setUsername(e.target.value)} type = "text" pattern = ".{4,}"/>
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
                    <Button className = "myBtn"type = "submit">SIGN UP</Button>
                <br/><br/>
                <p className = "account">Already have an account <Link to ="/Login1">Log in</Link></p>
              
            </Form>
        </div>
        </div>
    )
}

export default Signup;