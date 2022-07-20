import User from "../Model/UserModel.js";


class User_Controller{

async addUser(req,res){
    // res.status(200).send("you added successfully")
    const user=  await req.body;
    res.status(200).send("you added successfully");
    // console.log(name,location,email,phone);
    const newUser=new User(user);
    newUser.save();
}


viewUser(req,res){
    res.status(200).send("you are in view page");
}

}
export default User_Controller;