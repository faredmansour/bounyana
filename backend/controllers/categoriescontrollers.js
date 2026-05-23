const Categories = require ("../models/categoreismodel.js")

const getcategories = async (res , req )=>{
const allcategories  = await Categories.find({}) 
res.status(200).json(allcategories)
}


const getcatecogriesbyid = async (res,req)=>{
    const id = req.params.id
    const category = await Categories.findById(id)
    res.status(200).json(category)
}

const postcatogry = async (res,req)=>{
    const cat = await req.body 
    res.status(201).json(cat)
}
const updatecategory = async (res,req)=>{
    const category = req.body.id
    const updatecategory = await Products.findById(id)
    if(!category){
    return res.status(404).json({message:"category not found"})
}
    res.status(201).json(updatecategory) 
}

const deletecategory = async (res,req)=>{
    const id =req.params.id
    const deletecategory = await Categories.deletecategory(id)
    res.status(204).json(deletecategory)
}

export {
    getcategories, 
    getcatecogriesbyid,
    postcatogry ,
    updatecategory, 
    deletecategory
};