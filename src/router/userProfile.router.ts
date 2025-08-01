import express from "express";
import { createUserProfile } from "../controller/userprofile/createUserProfile.controller";
import { getUserProfile } from "../controller/userprofile/getUserProfile.controller";
import { updateUserProfile } from "../controller/userprofile/updateUserProfile.controller";

const userRouterProfile = express.Router();

userRouterProfile.post("/create-profile/:userId", createUserProfile);
userRouterProfile.get("/view/:username", getUserProfile);
userRouterProfile.patch("/update/:profileId", updateUserProfile);
// userRouterProfile.post("/", createUserProfile);
// userRouterProfile.post("/", createUserProfile);

export default userRouterProfile;
