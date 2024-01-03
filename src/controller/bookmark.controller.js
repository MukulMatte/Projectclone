const Bookmark = require("../model/bookmark.model");

// add

exports.Add=(req,res)=>{
    const BookmarkData = new Bookmark(req.body);
    BookmarkData
    .save()
    .then((resdata)=>{
        res.jsonp({
            message:"New bookmark is added",
            status: true,
            result: resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to add bookmark",
            status: false,
        });
    });
};
// getbyuserid

exports.getByUserId= ( req,res)=>{
    Bookmark.findOne({Userid : req.params.Userid})
    .then((resdata)=>{
        res.jsonp({
            message:"Bookmark featched sucessfully",
            status: true,
            result :resdata,
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to get bookmark",
            status:false,
        });
    });
};