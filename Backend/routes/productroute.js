const productcontroller = require("../controllers/productcontroller");
const router = require("express").Router();


router
.route("/createProduct")
.post(productcontroller.createProduct);

router
.route("/getproducts/:id")
.get(productcontroller.getproduct);

router
.route("/getAllProducts")  
.get(productcontroller.getAllProducts);

router
.route("/updateProducts/:id")
.patch(productcontroller.UpdateProducts);

router
.route("/deleteProducts/:id")    
.delete(productcontroller.deleteProducts);

router
.route("/searchProduct/:query")
.get(productcontroller.searchProduct);

module.exports = router;
