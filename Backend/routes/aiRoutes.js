import express from "express"
import { query } from "../controllers/aiController.js";
const router = express.Router();

router.post('/query',query);

export default router

