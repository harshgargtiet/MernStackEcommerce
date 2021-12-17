const express =require("express");
const { getAllProducts ,createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controller/productController");
const router= express.Router();
const {isAuthenticatedUser,authorizeRoles} =require("../middleware/auth");

router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,createProduct);
router.route("/product/:id").put(isAuthenticatedUser,updateProduct).delete(isAuthenticatedUser,deleteProduct).get(getProductDetails) ;
module.exports=router