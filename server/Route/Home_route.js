import express from 'express';
import User_Controller from '../controller/User_Controller.js';

const Myrouter=express.Router();
 

//covert class into obj
const Controller=new User_Controller;

 //home route
Myrouter.get('/',(req,res)=>{
    res.status(200).send("you are in home page");
    
})

//add route
Myrouter.post("/add",Controller.addUser);

//view route
 Myrouter.get("/view",Controller.viewUser);

 //delete route
 Myrouter.delete("/delete/:id",Controller.deleteUser);

//edit user
  Myrouter.post("/edit/:id",Controller.editUser);

 //getone postdata
 Myrouter.get("/viewone/:id",Controller.viewone);

 export default Myrouter;