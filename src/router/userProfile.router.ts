import express from "express";
import { createUserProfile } from "../controller/userprofile/createUserProfile.controller";
import { getUserProfile } from "../controller/userprofile/getUserProfile.controller";
import { updateUserProfile } from "../controller/userprofile/updateUserProfile.controller";
import { getProfileCurrentUser } from "../controller/userprofile/getProfileCurrentUser.controller";
import { getProfileExplore } from "../controller/userprofile/getPofileExplore.controller";

const userRouterProfile = express.Router();

userRouterProfile.post("/create-profile/:userId", createUserProfile);
userRouterProfile.get("/view/:username", getUserProfile);
userRouterProfile.patch("/update/:profileId", updateUserProfile);
userRouterProfile.get("/current-user", getProfileCurrentUser);
userRouterProfile.get("/explore", getProfileExplore);


export default userRouterProfile;
