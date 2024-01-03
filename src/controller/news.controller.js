const News= require("../model/news.model");

//addnews
exports.addNews=(req,res)=>{
    const NewsData =new News(req.body);
    NewsData
    .save()
    .then((resdata)=>{
        res.jsonp({
            message:"News added sucessfully",
            status: true,
            result: resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to add news",
            status:false,
        });
    });
};
//getallnews
exports.getAllNews =(req,res)=>{
    News.find()
    .then((resdata)=>{
        res.jsonp({
            message:"News featched sucessfully",
            status:true,
            result: resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to get news",
            status:false,
        });
    });
};
//getbycategoryid
exports.getByCategoryId=(req,res)=>{
    News.findOne({Categoryid : req.params.Categoryid })
        .then((resdata)=>{
            res.jsonp({
                message:"News featched by categoryid ",
                status: true,
                result: resdata,
            });
        })
        .catch((error)=>{
            res.jsonp({
                message:"Unable to get news",
                status:false,
            });
        });
};