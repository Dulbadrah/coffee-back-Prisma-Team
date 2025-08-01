import express from "express";

import { createBankCard } from "../controller/bankaccount/createBankCard.controller";

const bankRouter = express.Router();

bankRouter.post("/bank-card/:userId", createBankCard);

export default bankRouter;
