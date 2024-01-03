const express= require("express");
const mongoose = require("mongoose");
const app = express();
const port = 1111;
const bodyParser= require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse application/json
app.use(bodyParser.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/shortdb")
    .then(()=>{
        console.log("Database id connected");
    })
    .catch((error)=>{
        console.log("Unable to connect database");
    });

    


    const UserRoutes = require("./src/routes/user.router");
    app.use("/authentication",UserRoutes);
    const NewsRoutes = require("./src/routes/news.routes");
    app.use("/news",NewsRoutes);
    const CategoryRoutes = require("./src/routes/category.routes");
    app.use("/category",CategoryRoutes);
    const BookmarkRoutes = require("./src/routes/bookmark.routes");
    app.use("/bookmark",BookmarkRoutes);
app.listen(port,function(){
    console.log("Running on port",port);
});