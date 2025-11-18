import authRoute from "./routes/authRoutes.js";
import aiRoute from "./routes/aiRoutes.js";
import mindMapRoute from "./routes/mindMapRoutes.js";
import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json())

app.use('/api/auth',authRoute);
app.use('/api/aiquery',aiRoute);
app.use('/api/mindmapquery',mindMapRoute);

app.get('/', (req, res) => {
    res.send("✅ API is working");
});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running");
    });
})
.catch((error)=>{
    console.log("Database error");
})