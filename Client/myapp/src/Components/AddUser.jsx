import { FormControl, FormGroup, Input, InputLabel,styled,Button, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import { adduser } from '../Service/api';
// import { adduser } from '../service/api';

const Container=styled(FormControl)`
width:50%;
margin:2rem 10rem  ;
position:static`;

 const defaultValue={
  name:"",
  locatin:"",
  email:"",
  phone:""
 };

const AddUser = () => {

 const [state,setState]=useState({defaultValue})

  const valuechange=function(e){
    console.log({...state,[e.target.name]:e.target.value})
    setState({...state,[e.target.name]:e.target.value})
  // var mydata=e.target.value;
  // console.log(mydata);
  }
  const onbuttonClick= async function(){
    await adduser(state);
     console.log("you have clicked button");
  }
  
    
  
  return (
    <>
  <Container>
    <Typography variant='h3'>Add User</Typography>
      <FormControl>
        <InputLabel>Name </InputLabel>
        <Input onChange={(e)=>{valuechange(e)}} name="name"/>
         </FormControl> 
         <FormControl>
        <InputLabel>location</InputLabel>
        <Input onChange={(e)=>{valuechange(e)}} name="location"/>
         </FormControl> 
         <FormControl>
        <InputLabel>email </InputLabel> 
        <Input onChange={(e)=>{valuechange(e)}} name="email"/>
         </FormControl> 
         <FormControl>
        <InputLabel>phone</InputLabel>
        <Input onChange={(e)=>{valuechange(e)}} name="phone"/>
         </FormControl> 
         <FormControl>
         <Button variant="contained" onClick={()=>{onbuttonClick()}}>Add user</Button>
      
         </FormControl>
         </Container>
    </>
  )
}

export default AddUser;