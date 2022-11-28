const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const mongo = require("./db");
const { ObjectId } = require("mongodb");

const protect = asyncHandler(async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
    
            let decode = await JWT.verify(token,process.env.JWT);
            req.user = await mongo.selectedDB.collection("users").find({_id: ObjectId(decode.user_id)}).toArray();
            next();
        }
        catch(err){
            res.status(401);
            throw new Error("Unauthorized");
        }
    }

    if(!token){
        res.status(401);
        throw new Error("Please pass proper Auth");
    }
})

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    return hashedPassword;
}

const generateToken = async (user_id) => {
    const resp = await JWT.sign(
        {user_id},process.env.JWT,
    {
        expiresIn: "30d"
    })

    return resp;
}

module.exports = {protect,encryptPassword,generateToken};