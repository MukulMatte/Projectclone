const router= require("express").Router();
const BookmarkController=require("../controller/bookmark.controller");
const BookmarkModel= require("../model/bookmark.model");

router.post("/add",BookmarkController.Add);
router.get("/get/:userid",BookmarkController.getByUserId);

module.exports=router;