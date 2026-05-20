const {required}=require("joi");
const mongoose = require("mongoose")
const bcrypt = required("bcrypt")
const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true , "uasername is required"]
    },

email:{
    type:String,
    required:[true , "email is required"],

},
password:{
    type:String,
    required:[true , "password is required"],
    minlength:[6,"password must be 6 char"],
    select:false,

},
},{timestamps:true});

adminSchema.pre("save", async function () {
    if(!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password, 10);
    

}) 

adminSchema.methods.comparePassword=async function (matchpassword){
    return await bcrypt.compare(matchpassword, this.password);
}
const admin =mongoose.model("admin,adminSchema");
module.exports=admin;