import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import protect from "./../Middleware/AuthMiddleware.js";

const addProductRoute = express.Router();





addProductRoute.post("/",protect,asyncHandler(async (req,res)=>{
    const newProduct=new Product({
        ttile:req.body.title,
        description:req.body.description
    })
    newProduct.save();
    res.send(newProduct)

}));
export default addProductRoute;
