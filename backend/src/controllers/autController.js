const User = require("../models/User");

const {registerSchema, loginSchema }= require("./validation/authValidation");
const register = async (req,res) => {
    try{
        const{error ,value} = registerSchema.validate(req.body,{
            abortEarly:false,
            stripUnknown:true
        })
        if(error){
            return res.status(400).json({
                msg:error.details.map((err)=>err.message),
            });
        }



const{username,email,password} = value;

const existUser = await User.findOne({email});
if(existUser) return res.status(400).json({msg:"user alredy exist"});
const hashPassword = await bcrypt.hash(password,10);

const newUser = await User.create({
    username,
    email,
    password: hashPassword

})
res.status(201).json({
    msg:  "done creat"
});



        
    }catch (error){
        res.status(500).json({
            msg:"Server Error",
        });

    }
};


const login = async (req,res) => {
    try{
         const{error ,value} = loginSchema.validate(req.body,{
            abortEarly:false,
            stripUnknown:true
        });
          if(error){
            return res.status(400).json({
                msg:error.details.map((err)=>err.message),
            });
        }

  

    const{email,password}= value;
    const user =  await User.findOne({email});
    if (!user) return res.status(400).json({msg:"create account"});
      }catch (error){}
}

const logout = async (req,res) => {
    try{

    }catch (error){

    }
}


module.exports = {
    register,
    login,
    logout,
};
