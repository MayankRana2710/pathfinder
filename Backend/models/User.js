import express from "express";
import mongoose from "mongoose";

const schema = mongoose.schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true       
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true});

const User = mongoose.model('User',schema);

export default User