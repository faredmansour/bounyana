const express = require("express")
const router = express.Router()
const Categories = require ('../controllers/categoriescontrollers.js')
CategoryRouter.get("/",Categories.getcategories);
CategoryRouter.get("/:id", Categories.getcatecogriesbyid);
CategoryRouter.post("/", Categories.postcatogry);
CategoryRouter.put("/:id", Categories.updatecategory);
CategoryRouter.delete("/:id", Categories.deletecategory);

export default CategoryRouter;