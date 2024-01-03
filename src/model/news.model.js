const mongoose = require("mongoose");

const Newsschema = mongoose.Schema({
    CategoryId:{
        type:mongoose.Types.ObjectId,
        ref: "category",
    },
    Title:{
        type:String,
    },
    Imageurl:{
        type :String,
    },
    Discription:{
        type: String,
    },
});

module.exports=mongoose.model("news",Newsschema);