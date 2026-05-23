
const { protect, restrictTo } = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

// أي مستخدم يرى المنتجات، لكن الـ Admin فقط يضيف أو يحذف (المرحلة 4)
router.get("/", productController.getAllProducts);
router.post("/", protect, restrictTo("admin"), productController.createProduct);

const express = require("express")
const router = express.Router()
const products = require ('../controllers/productscontroller.js')
productRouter.get("/",products.getproducts);
productRouter.get("/:id", products.getproductsbyid);
productRouter.post("/", products.postproduct);
productRouter.put("/:id", products.updateproducts);
productRouter.delete("/:id", products.deleteproduct);

export default productRouter;