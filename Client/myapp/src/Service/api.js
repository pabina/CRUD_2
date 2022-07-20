import axios from "axios";

const url='http://localhost:8004';

export const adduser= async(data)=>{
try{
return await axios.post(`${url}/home/add`,data)
}catch(error){
console.log(error);
}
}