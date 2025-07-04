import User from "/../models/User.js"
import jwt from 'jsonwebtoken'

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'});
}

export const signup = async (req,res)=>{
    const {username,email,password}=req.body;
    try{
        const existingEmail = await User.findOne({email});
        const existingPass = await User.findOne({password});
        if(existingEmail){
            return res.status(400).json({message:"Email already in use"});
        }
        if(existingPass){
            return res.status(400).json({message:"Username already taken"});
        }
        
        const newUser = await User.create({username,email.password});
        const token = createToken(newUser._id);

        return res.status(200).json({
            message:"User created successfully",
            user:{
                username:username,
                email:email,
                password: password
            },
            token
        })
    }
    catch(error){
        return res.status(500).json({message: "Server error", error});
    }
}