import express from "express";

import bankRouter from "./router/bankAccount.router";
import userRouterProfile from "./router/userProfile.router";
import userRouter from "./router/user.router";
import cors from "cors";

const app = express();
const port = 4200;

app.use(express.json());
app.use(cors());

app.use("/bank", bankRouter);
app.use("/profile", userRouterProfile);
app.use("/auth", userRouter);

app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
