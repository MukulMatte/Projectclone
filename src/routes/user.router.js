const router = require("express").Router();
const UserController=require("../controller/user.controller");
const Usermodel = require("../model/user.model");

router.post("/register",UserController.Register);
router.get("/login",UserController.login);
router.get("/getall",UserController.getAll);


module.exports=router;