import express from "express"
import { format } from "../controllers/mindMapController.js";
const router = express.Router();

router.post('/format',format);

export default router;

