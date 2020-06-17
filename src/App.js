import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Auth from "./auth/Auth"
import Header from "./Navigation";
import {BrowserRouter as Router} from "react-router-dom";
import AdvisorSignUpForm from "./auth/AdvisorSignUpForm";
//import StudentSignUpForm from "./components/Student/StudentSignUpForm";
function App() {
  const [sessionToken,setSessionToken] = useState("");
  const [user,setUser] = useState("HOME");
  const [login,setLogin] = useState("LOGIN");
  const [display,setDisplay] = useState(1);
  const [person,setPerson] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("token" !== undefined || localStorage.getItem("token"!== ""))){
      setSessionToken(localStorage.getItem("token"));
    }
  },[])


  //log out
  const clearToken = ()=>{
    localStorage.clear();
    setSessionToken("");
    setUser("HOME");
  }

  const updateUser = (user)=>{
    setUser(user);

  }

  const updateLog = (log)=>{
    setLogin(log);
  }

  // const protectedViews = ()=>{
  //   return(
  //     setSessionToken === localStorage.getItem("token")?
  //   )
  // }
  const updateToke = (newToken)=>{
    localStorage.setItem("token",newToken);
    setSessionToken(newToken);
  }
  const updateDisplay = (self) =>{
    setDisplay(self);
  }
  const updatedView = ()=>{
    //return(sessionToken === localStorage.getItem("token")?null: <Auth updateLog = {updateLog} updateToken = {updateToke}/>)
    const showReturn = ()=>{
    if(sessionToken === localStorage.getItem("token")){
      //setLogin("LOGOUT");
  
        return(
          <AdvisorSignUpForm person = {person} home = {user} updateUser = {updateUser} updateDisplay = {updateDisplay} display = {display} updateLog = {updateLog} updateToken = {updateToke} sessionToken = {sessionToken}/>
          )
      
    }
    else{
      return(
        <Auth updatePerson = {setPerson} home = {updateUser} updateDisplay = {updateDisplay} updateLog = {updateLog} updateToken = {updateToke}/>
      );
    }
  }
  return(
    showReturn()
  )
  }
  return (
    <div className = "centerMe">
      <Router>
        <Header clearToken = {clearToken} user = {user}log = {login} updateLog = {updateLog}/>
        <h1 id = "code">Coding bootcamp</h1>
        {updatedView()}
      </Router>
    </div>
  );
}

export default App;
