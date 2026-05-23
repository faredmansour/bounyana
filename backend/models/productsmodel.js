const mongoose = require ("mongoose")
const prodschema = new mongoose.schema({

name :
    {
        type:String,
        require : true, 
        
    } , 

    description : {
        type: String,
       require : true, 
      

    },

    price :{

        type:Number ,
        require:true , 
    },

 createdAt:{
   type :Date  ,
   default: Date.now
 }


})

module.exports=mongoose.model("products",prodschema);