const JWT = require("jsonwebtoken");

const authMiddleware =(req,res,next) =>{
    try{
const authHeaders = req.headers.authorization;
        if(!authHeaders)return re.status (401).json({msg:"token required"});


       
            const token =  authHeaders.split(" 1 ")
            const payloded = JWT.verifay(token,process.env.JWT_SK);
       
                req.user = payload.id;
                next();

    } catch (error){
       return res.status(401).json({msg:"Token Invaild"});

    }
}
module.exports = authMiddleware;