import axios from "axios";
// import { useParams } from "react-router-dom";

const url='http://localhost:8004';

// export const adduser= async(data)=>{
// try{
// return await axios.post(`${url}/home/add`,data);
// }catch(error){
// console.log(error);
// }
// }


// const location=useLocation();
// console.log(location);
// const path=location.split()

class apiFunctinality{

async adduser(data){
    try{
    return await axios.post(`${url}/home/add`,data);
    }catch(error){
        console.log(error);
    }
}
async viewuser(){
    try{
   return await axios.get(`${url}/home/view`)
    }catch(error){
        console.log(error);
    }
}
//path
// const location=useLocation();


// async editUser(){
//     try {
//      return await axios.get(`${url}/home/edit/:id`)  
//     } catch (error) {
//        console.log(error); 
//     }
// }

// async viewuser(){
//     try{
//    return await axios.get(`${url}/home/view`);
//     }catch(error){
//     console.log(error);
//     }
// }

//for getting one userdata
async getoneUser(id){
    try{
   return await axios.get(`${url}/home/viewone/${id}`);
    }catch(error){
    console.log(error);
    }
}
async edituser(user,id){
    try{
   return await axios.post(`${url}/home/edit/${id}`,user);
    }catch(error){
    console.log(error);
    }
}


}
export default apiFunctinality;