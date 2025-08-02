import express from "express";

import { createBankCard } from "../controller/bankaccount/createBankCard.controller";
import { changeBankCard } from "../controller/bankaccount/changeBankCard.controller";
import { getBankCard } from "../controller/bankaccount/getBankCard.controller";

const bankRouter = express.Router();

bankRouter.post("/create/:userId", createBankCard);
bankRouter.put ("/update/:bank-card", changeBankCard)
bankRouter.get ("/get/:userId", getBankCard)

export default bankRouter;
