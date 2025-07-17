import User from "../models/User.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'});
}

export const signup = async (req,res)=>{
    const {username,email,password}=req.body;
    try{
        const existingEmail = await User.findOne({email});
        const existingUsername = await User.findOne({username});
        if(existingEmail){
            return res.status(400).json({message:"Email already in use"});
        }
        if(existingUsername){
            return res.status(400).json({message:"Username already taken"});
        }
        
        const newUser = await User.create({username,email,password});
        const token = createToken(newUser._id);

        return res.status(200).json({
            message:"User created successfully",
            user:{
                username:username,
                email:email,
            },
            token
        })
    }
    catch(error){
        return res.status(500).json({message: "Server error",error});
    }
}

export const signin = async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({message:"User not signed up!"});
        }
        if(user.password!==password){
            return res.status(400).json({message:"Invalid password"});
        }
        const username = user?.username;
 
        const token = createToken(user._id);

        return res.status(200).json({
            message: "User successfully signed in",
            user:{
                email:email,
                username:username,
            },
            token
        })
    }
    catch(error){
        return res.status(500).json({message: "Server error"});
    }

}