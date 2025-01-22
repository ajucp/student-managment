const jwt=require('jsonwebtoken');
const {findUserById}=require('../models/studtentM');

const authMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization');
    console.log("token: ",token)
    if(!token){
        return res.status(400).json({message:'No Token Provided'});
    }
    try {
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET_TOKEN);
        console.log("decoded data: ",decoded)
        req.user=await findUserById(decoded.id);
        next();

        
    } catch (err) {
        res.status(401).json({message:'INVALID TOKEN'})
    }
}

const isAdmin=async(req,res,next)=>{
    if(req.user.role !== "admin"){
        return res.status(403).json({message:'Access denied.Admin only!!'})
    }
    next()
}

module.exports={authMiddleware,isAdmin};