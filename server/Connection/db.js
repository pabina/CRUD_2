
import mongoose from "mongoose";


  const Connection=async()=>{
    const url= `mongodb://localhost:27017/1hr_project`
    try{
     await mongoose.connect(url,{useunifiedTopology:true,useNewurlparser:true})
     console.log("database connected successfully");
    
    }catch(error){
      console.log(`my error:${error}`);  
    }
 }
 export default Connection;