import express from "express";
import userRouterProfile from "./router/userProfile.router";
import userRouter from "./router/user.router";

const app = express();
const port = 4200;
app.use(express.json());

app.use("/profile", userRouterProfile);
app.use("/auth", userRouter);

app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
