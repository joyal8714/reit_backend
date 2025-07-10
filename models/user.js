const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
username:'String',
email:'String',
password:'String',
role:{type:String, enum:['admin','investor'],default:'investor'}


})

module.exports=mongoose.model('user',userSchema)