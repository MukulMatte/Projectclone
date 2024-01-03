const category = require("../model/category.model");

//add category
exports.addCategory=(req,res)=>{
    const categoryData =new category(req.body);
    categoryData
    .save()
    .then((resdata)=>{
        res.jsonp({
            message:"Category added sucessfully",
            status: true,
            result: resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to add",
            status:false,
        });
    });
};

// get all category
exports.getAllCategory =(req,res)=>{
    category.find()
    .then((resdata)=>{
        res.jsonp({
            message:"Categories featched sucessfully",
            status:true,
            result: resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to get user",
            status:false,
        });
    });
};