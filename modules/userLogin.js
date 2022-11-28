const mongo = require("./../db");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { generateToken, encryptPassword } = require("../config");

const loginUser = asyncHandler(async (req,res,next) => {
    const {email,password} = req.body;
 
    const user = await mongo.selectedDB.collection("users")
    .find({ email })
    .toArray();

    if(user.length > 0 && (await bcrypt.compare(password,user[0].password))){
        console.log(user[0]);
        res.status(200).send({
            _id: user[0]._id,
            name: user[0].name,
            email: user[0].email,
            token: await generateToken(user[0]._id)
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
})


const signUpUser = asyncHandler(async (req,res,next) => {
    const {email,password,name} = req.body;
    const user = await mongo.selectedDB.collection("users")
    .find({ email : email })
    .toArray();

    if(user.length !==0){
        res.status(400);
        throw new Error("User Already Exists.Try Logging In");
    }

    const getSaltedPassword = await encryptPassword(password);
    const insert = await mongo.selectedDB.collection("users").insertOne({email,password : getSaltedPassword,name})

    res.status(201).send({
        _id: insert.insertedId,
        name: name,
        email: email,
        token: await generateToken(insert.insertedId)
    });

})
module.exports = {signUpUser,loginUser}