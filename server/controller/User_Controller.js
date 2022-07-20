import User from "../Model/UserModel.js";


class User_Controller{

    //add post
async addUser(req,res){
    // res.status(200).send("you added successfully")
    const user=  await req.body;
    res.status(200).send("you added successfully");
    // console.log(name,location,email,phone);
    const newUser=new User(user);
    newUser.save();
   
}

//for viewallpost
 async viewUser(req,res,next){
    // res.status(200).send("you are in view page");
    try{
const data=await User.find();
res.status(200).send(data);
    }catch(err){
console.log(err);
    }
    next();
}

//delete post
async deleteUser(req,res){
try{
const postdelete=await User.findByIdAndDelete("62d7a6eb07f2e25bc095ecd8");
res.status(200).send(postdelete);
}catch(err){
    console.log(err);
}
}
 //viewone
 async viewone(req,res){
    try{
   const onedata=await User.findById(req.params.id);
   res.status(200).json(onedata);
    }catch(err){
        console.log(err);
    }
 }
}
export default User_Controller;