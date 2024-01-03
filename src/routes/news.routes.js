const router=require("express").Router();
const NewsController= require("../controller/news.controller");
const NewsModel = require("../model/news.model");

router.post("/add",NewsController.addNews);
router.get("/getAll",NewsController.getAllNews);
router.get("/get/:categoryid",NewsController.getByCategoryId);

module.exports=router;