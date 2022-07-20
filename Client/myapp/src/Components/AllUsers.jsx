import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import apiFunctinality from '../Service/api';

// const myapiFunctinality=new apiFunctinality();

const AllUsers = () => {
  const[allUsers,setAllUsers]=useState();
  useEffect( async() => {
    const viewUser= await axios.get("http://localhost:8004/home/view");
    setAllUsers(viewUser);
  });
console.log(allUsers)
  return (
    <div>
     {/* {myapiFunctinality.viewuser()}; */}
    </div>
  )
}

export default AllUsers;