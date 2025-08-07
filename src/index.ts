import express from "express";
import cors from "cors";
import bankRouter from "./router/bankAccount.router";
import userRouterProfile from "./router/userProfile.router";
import authRouter from "./router/auth.router";
import donationRouter from "./router/donation.router";

const app = express();
const port = 4200;

app.use(express.json());
app.use(cors());

app.use("/bank", bankRouter);
app.use("/profile", userRouterProfile);
app.use("/auth", authRouter);
app.use("/donation", donationRouter);


app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
