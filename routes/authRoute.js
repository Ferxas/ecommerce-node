import express from "express";
import { registerController } from "../controllers/authControllers.js";

// router
const router = express.Router();

// routing

// register
router.post("/register", registerController);

export default router;
