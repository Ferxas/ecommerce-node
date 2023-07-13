import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

// router
const router = express.Router();

// routing

// register
router.post("/register", registerController);

// LOGIN || POST
router.post('/login', loginController)

// test routes
router.get('test', requireSignIn, isAdmin, testController)


export default router;
