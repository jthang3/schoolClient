import React from "react";
import APIURL from "../helpers/environment";
const DisplayMe = (props)=>{
    props.updateLog("LOGOUT")
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
            props.updateDisplay(mydata.data.length)
            props.updateToken()
          
        })
}
return(
    <>
        {fetchMe()}
    </>
)
}

export default DisplayMe;