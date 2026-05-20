const admin = require("../../modles/Admin.model.js")
const adminSchema = require("../validation/Admin.validation ")

const jwt = require ("jsonwebtoken")

const signtoken =(id)=>{
return jwt.sign({id},process.env.JWT_SECRET, {expiresIn:"7d"})
};git 