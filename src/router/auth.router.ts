import express from "express";
import { SignUp } from "../controller/sign-up/SignUp";
import { Login } from "../controller/login/Login";


const authRouter = express.Router();

authRouter.post("/sign-up", SignUp);
authRouter.post("/login", Login);

export default authRouter;