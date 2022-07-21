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
 const data=await User.find({});
   res.status(200).json(data);
    }catch(err){
    res.status(400).send(err);
    }
    next();
}

//delete post
async deleteUser(req,res){
try{
const postdelete=await User.findByIdAndDelete(req.params.id);
res.status(200).json(postdelete);
}catch(err){
    console.log(err);
}
}

//edit user
async editUser(req,res){
   try {
   const EditUser= await User.updateOne(req.params.id,{$set:req.body},{new:true});
   res.status(200).json(EditUser);
   } catch (error) {
    console.log(error);
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