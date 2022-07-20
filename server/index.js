import  express, { Router } from "express";
import Myrouter from "./Route/Home_route.js";
import Connection from "./Connection/db.js";
import mongoose from "mongoose";
// import cors from "cors";

const app=express();

//to insert into home page
app.get('/',(req,res,next)=>{
    res.status(200).send("success");
   next(); 
})
//use middleware
app.use(express.json());
// app.use(cors());

//using router 
app.use("/home",Myrouter);

//apply connection to database
Connection();

//sending to database

app.listen(8004,()=>{
    console.log('server is running');
})