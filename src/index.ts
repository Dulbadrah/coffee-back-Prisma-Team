import express from "express";
import userRouter from "./router/userProfile.router";
import bankRouter from "./router/bankAccount.router";

const app = express();
const port = 4200;
app.use(express.json());

app.use("/bank", bankRouter);

//
//
app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
