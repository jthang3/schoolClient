import React from "react";
import APIURL from "../helpers/environment";
const DisplayMe = (props)=>{
    props.updateLog("LOGOUT")
    console.log("THis mother fucker is worknig as well");
    console.log(props.sessionToken);
    const fetchMe = ()=>{
         //fetching happening too quickly for heroku to keep up. 
         fetch(`${APIURL}/advLog/advisorInfo`,{
            method:"GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization":props.sessionToken
            })
        })
        .then(data=>{
            return data.json();
        })
        .then(mydata=>{
            console.log("Asshole this is inside this fucking asshole route");
            props.updateDisplay(mydata.data.length);
            props.updateToken(props.sessionToken);
          
        })
}
return(
    <>
        {fetchMe()}
    </>
)
}

export default DisplayMe;