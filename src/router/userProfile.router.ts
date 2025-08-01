import express from "express";
import { createUserProfile } from "../controller/userprofile/createUserProfile.controller";

const userRouter = express.Router();

userRouter.post("/", createUserProfile);

export default userRouter;
