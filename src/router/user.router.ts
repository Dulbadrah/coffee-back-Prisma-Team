import express from "express";
import { createUser } from "../controller/user/create-user";

const userRouter = express.Router();

userRouter.post("/sign-up", createUser);

export default userRouter;