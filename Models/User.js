const { default: mongoose, mongo } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

 name :{
    type:String
 },
 email:{
    type:String
 },
 username:{
    type:String
 },
 password:{
    type:String
 }
})

const user = mongoose.model("Users",userSchema);

module.exports = user;