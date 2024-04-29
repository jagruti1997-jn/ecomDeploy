import express from 'express'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, searchProductController, updateProductController } from '../controlllers/productController.js';
import formidable from 'express-formidable'
const router=express.Router()

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)


//get products
router.get("/get-product", getProductController);

//get products
router.get("/get-product/:slug", getSingleProductController);

//get photo

router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update  product
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

  //filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product 
router.get("/search/:keyword", searchProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments route
//token
router.get("/braintree/token",braintreeTokenController)

//payments
router.post("/braintree/payment",requireSignIn,braintreePaymentController)



export default router;