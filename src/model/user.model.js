const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose=require("mongoose");

const Userschema = mongoose.Schema({
  Name :{
      type: String,
  },
  Email :{
      type: String,
      required : true,
      unique : true,
  },
  Password:{
      type:String,
      required:true,
  },
  Username:{
      type : String,
      required:true,
      unique:true,
  },
  Gender:{
      type: String,
  },
  DOB:{
      type: Number,
  },
});

Userschema.pre("save", async function(next){
    if(this.isModified("Password")){
        const passwordHash =await bcrypt.hash(this.Password, 10);
        console.log(`password without bcrypt ${this.Password}`);
        this.Password = await bcrypt.hash(this.Password, 10);
        console.log(`password after bcrypt ${this.Password}`);
    };
     next();
 });

module.exports= mongoose.model("User",Userschema);