const mongoose =require("mongoose");
const Categoryschema = mongoose.Schema({
    Title :{
        type: String,
    },
    ImageURL:{
        type: String,
    },
    Discription:{
        type: String,
    },
});

module.exports= mongoose.model("category",Categoryschema);
