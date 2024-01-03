const bcrypt = require("bcryptjs");
const User =require("../model/user.model");

//create function to add user in database

exports.Register =(req,res)=>{
    User.findOne({Email:req.body.Email})
    .then((userData)=>{
        if(userData){
            res.jsonp({
                message:"user is already registered"
            });
        }else{
            const userData=new User(req.body);
            userData.save()
            .then((resData)=>{
                res.jsonp({
                    message:"User registered sucessfully",
                    status: true,
                    result: resData,
                });
            })
            .catch((error)=>{
                res.jsonp({message:"Unable register user", status:false});
            });
        }
    })
    .catch((error)=>{
        console.log("unable to get user");
    });
};

//create function to featch all user

exports.login =(req,res)=>{
    User.findOne({Email: req.body.Email})
    .then(async(userData)=>{
        if(userData){
            //password check
            const isMatch =await bcrypt.compare(body.Password, userData.Password);
            if(isMatch){
                res.jsonp({message:"user loged in "});

            } else{
                res.jsonp({message:"Incorrect password. Response code 401"});
            }
        } else{
            res.jsonp({message: "You are not registered with us, please register"});
        }
    })
    .catch((error)=>{
        res.jsonp({message :"Uable to find user"});
    })
};
exports.getAll =(req,res)=>{
    User.find()
    .then((resData)=>{
        res.jsonp({
            message:"user featched sucessfully",
            status:true,
            result: resData
        });
    })
    .catch((error)=>{
        res.jsonp({
            message:"Unable to featched user",
            status:false
        });
    });
};