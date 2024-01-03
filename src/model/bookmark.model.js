const mongoose = require("mongoose");
const BookmarkSchema = mongoose.Schema({
    UserId:{
        type: mongoose.Types.ObjectId,
        ref:"user",
    },

    NewsId:{
        type: mongoose.Types.ObjectId,
        ref : "news",
    },
// ref: news
});

module.exports= mongoose.model("Bookmark",BookmarkSchema);