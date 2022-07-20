import React from 'react';
import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';
import { useEffect } from 'react';
import apiFunctinality from '../Service/api';
import { useState } from 'react';


//styling table
const styleTable=styled(Table)`
width:50%`

const MyapiFunctinality=new apiFunctinality();

const AllUsers = () => {
  
  const [allUsersData,setallData]=useState([]);
  useEffect(()=>{
  console.log("hello");
  getallUsers();
  },[]);

  const getallUsers=async()=>{
   const res= await MyapiFunctinality.viewuser();
   setallData(res.data);
   console.log(res.data);
  }

  return (

    <>
    <styleTable>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>LOCATION</TableCell>
          <TableCell>EMAIL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          allUsersData.map(data=>(
<TableRow>
  <TableCell>{data._id}</TableCell>
  <TableCell>{data.name}</TableCell>
  <TableCell>{data.location}</TableCell>
  <TableCell>{data.email}</TableCell>
  <TableCell>
    <Button variant="contained" style={{marginRight:10}}>Edit</Button>
    <Button variant="contained" color="error">Delete</Button>
  </TableCell>
</TableRow>
          ))
        }
      </TableBody>
    </styleTable>
    </>
  )
}

export default AllUsers