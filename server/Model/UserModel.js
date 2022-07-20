import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

//creating schema
const UserModel=mongoose.Schema({
    name:String,
    location:String,
    email:String,
    phone:String
});

//applying auto-increment
// autoIncrement.initialize(mongoose.connection);
// UserModel.plugin (autoIncrement.plugin,"user");

//creating collection
const user=mongoose.model("user",UserModel);

export default user;