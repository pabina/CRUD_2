import {
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    styled,
    Button,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useState } from "react";
  import apiFunctinality from "../Service/api";
  import { useNavigate, useParams} from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
   
  

  
  
  // const myid=useParams(id);
  // 
  const MyapiFunctinality = new apiFunctinality();
  // import { adduser } from '../Service/api';
  // import { adduser } from '../servi=ce/api';
  
  const Container = styled(FormControl)`
    width: 50%;
    margin: 2rem 10rem;
    position: static;
  `;
  
  // const defaultValue = {
  //   name: "",
  //   location: "",
  //   email: "",
  //   phone: "",
  // };

  
  
  const EditUser= () => {
    let {id}=useParams();
    console.log(id);

    
    //FOR editing USER
     const navigate=useNavigate();
    // const [state, setState] = useState({ defaultValue });
    

    
  
    // const valuechange = function (e) {
    //   // e.preventDefault();
    //   console.log({ ...state, [e.target.name]: e.target.value });
    //   setState({ ...state, [e.target.name]: e.target.value });
      
    // };
    
    
  
    // const onbuttonClick = async function () {
    //   await MyapiFunctinality.edituser(state,id);
    //   console.log("you have clicked button");
    //   navigate("/allUsers");
    // };
    const onbuttonClick=function(){

    };

//   const [data,setData]=useState({});

//    useEffect(()=>{
//  const fetchOneData=async()=>{
//   const res=await axios.get(`http://localhost:8004/home/viewone/${id}`);
//   setData(res.data);
//   console.log(res.data);
//  }

//  fetchOneData();
//    },[]);
//    console.log(data);

//getting one data each time
const [data,setData]=useState({});
useEffect(()=>{
  console.log("hello");
  getUser();
  },[]);

  const getUser=async()=>{
   const res= await MyapiFunctinality.getoneUser(`${id}`);
   setData(res.data);
   console.log(res);
  }
  const [name,setName]=useState(data.name);
  const [location,setlocation]=useState(data.location);
  const [email,setemail]=useState(data.email);
  const [phone,setphone]=useState(data.phone);

   const handleChange=(e)=>{
   setName(name=>({
    ...name,[e.target.name]:e.target.value}))
   }
  
    return (
      <>
        <Container>
          <Typography variant="h3">Edit User</Typography>
          <FormControl>
            <InputLabel>Name </InputLabel>
            <Input
              onChange={(e) => {
               setName(e.target.value); 
              }}
              name="name"
              value={data.name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>location</InputLabel>
            <Input
              onChange={(e) => {
               setlocation(e.target.value)
              }}
              name="location"
              value={data.location}
            />
          </FormControl>
          <FormControl>
            <InputLabel>email </InputLabel>
            <Input
              onChange={handleChange}
              name="email"
              value={data.email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>phone</InputLabel>
            <Input
              onChange={(e) => {
               setphone(e.target.phone);
              }}
              name="phone"
              value={data.phone}
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              onClick={() => {
                onbuttonClick();
              }}
            >
              Edit user
            </Button>
          </FormControl>
        </Container>
      </>
    );
  };
  
  export default EditUser;
  