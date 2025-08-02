import express from "express";
import { createDonation } from "../controller/donation/createDonation.controller";



const donationRouter = express.Router();

donationRouter.post("/create-donation", createDonation);
// donationRouter.get("/received/:userId", getReceived);
// donationRouter.get("/total/:userId", getTotalEarnings)
// donationRouter.get("/search-donations/:userId", getSearchDonations)

export default donationRouter;