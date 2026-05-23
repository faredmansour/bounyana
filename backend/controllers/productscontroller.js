const Products = require("../models/productsmodel")


const getproducts = async (req , res )=>{
const getallproducts  = await Products.find({}) 
if(getallproducts.length === 0){
    return res.status(200).json({
        success : true,
        message : "Products",
        product : []
    })
}
if(!getallproducts){
    return res.status(404).json({
        success : false,
        message : "Products not found",
    })
}
res.status(200).json(getallproducts)
}

const getproductsbyid = async (req, res)=>{
    const id = req.params.id
    const product = await Products.findById(id)
    res.status(200).json(product)
}

const postproduct = async (req, res)=>{
    const product = await req.body 
    res.status(201).json(product)
}
const updateproducts = async (req, res)=>{
    const id = req.params.id
   const product = await Products.findById(id)
if(!product){
    return res.status(404).json({message:"Product not found"})
}
    res.status(201).json(updateProduct) 
}

const deleteproduct = async (req, res)=>{
    const id =req.params.id
    const deleteproduct = await Products.findByIdAndDelete(id)
    res.status(204).json(deleteproduct)
}

export{
    getproducts ,
    getproductsbyid , 
    postproduct,
    updateproducts,
    deleteproduct
};