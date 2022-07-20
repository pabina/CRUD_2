import axios from "axios";

const url='http://localhost:8004';

// export const adduser= async(data)=>{
// try{
// return await axios.post(`${url}/home/add`,data);
// }catch(error){
// console.log(error);
// }
// }
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

// async viewuser(){
//     try{
//    return await axios.get(`${url}/home/view`);
//     }catch(error){
//     console.log(error);
//     }
// }
}
export default apiFunctinality;