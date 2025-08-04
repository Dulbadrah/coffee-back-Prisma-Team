import express from "express";
import { createDonation } from "../controller/donation/createDonation.controller";
import { getReceivedDonation } from "../controller/donation/getDonation-recieved.controller";
import { getTotalEarnings } from "../controller/donation/getDonation-total-earnings.controller";
import { getSearchDonations } from "../controller/donation/getSearchDonation.controller";

const donationRouter = express.Router();

donationRouter.post("/create-donation", createDonation);
donationRouter.get("/received/:userId", getReceivedDonation);
donationRouter.get("/total/:userId", getTotalEarnings);
donationRouter.get("/search-donations/:userId", getSearchDonations);

export default donationRouter;
