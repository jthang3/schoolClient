import React,{useState,useEffect} from "react";
import APIURL from "../helpers/environment";
import AdvisorTable from "./AdvisorTable";
import AdvisorEdit from "./AdvisorEdit";
import {Row} from "reactstrap";
const Home = (props)=>{
    const [advisor,setAdvisor] = useState({});
    const [updateActive,setUpdateActive] = useState(false);
    const [advisorToUpdate,setAdvisorToUpdate] = useState({});
    let advisorInfo = [];
    const fetchAdvisor = () =>{
        fetch(`${APIURL}/advLog/advisorInfo`,{
            method:"GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization":props.sessionToken
            })
        })
        .then(res=>res.json())
        .then(json=>{
            advisorInfo = json;
            setAdvisor(advisorInfo);
        })
        
    }
    const editUpdateAdvisor = (advisor)=>{
        setAdvisorToUpdate(advisor);
    }

    const updateOn = ()=>{
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    useEffect(()=>{
        fetchAdvisor();
    },[]);
    return(
        <Row>
            <AdvisorTable advisor = {advisor} fetchAdvisor = {fetchAdvisor} editUpdateAdvisor = {editUpdateAdvisor}
            updateOn = {updateOn} updateOff = {updateOff} token = {props.sessionToken}/>
            {updateActive?<AdvisorEdit advisorToUpdate = {advisorToUpdate} updateOff = {updateOff} token = {props.sessionToken}
            fetchAdvisor = {fetchAdvisor}/>:<></>}
        </Row>
    )
}

export default Home;