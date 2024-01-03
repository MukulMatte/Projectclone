const router=require("express").Router();
const CategoryController = require("../controller/category.controller");
const CategoryModel= require("../model/category.model");

router.post("/add",CategoryController.addCategory);
router.get("/getall",CategoryController.getAllCategory);

module.exports=router;