import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Auth from "./auth/Auth"
import MyNav from "./components/navigation";
function App() {
  const [sessionToken,setSessionToken] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("token" != undefined || localStorage.getItem("token"!== ""))){
      setSessionToken(localStorage.getItem("token"));
    }
  },[])


  //log out
  const clearToken = ()=>{
    localStorage.clear();
    setSessionToken("");
  }

  // const protectedViews = ()=>{
  //   return(
  //     setSessionToken === localStorage.getItem("token")?
  //   )
  // }

  const updatedView = ()=>{
    return(sessionToken === localStorage.getItem("token")?null: <Auth updateToken = {updateToke}/>)
  }
  const updateToke = (newToken)=>{
    localStorage.setItem("token",newToken);
    setSessionToken(newToken);
  }
  return (
    <div className = "centerMe">
      <MyNav/>
      <h1 id = "code">Coding bootcamp</h1>
      {updatedView()}
    </div>
  );
}

export default App;
