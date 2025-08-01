import express from "express";
import userRouter from "./router/user.router";


const app = express();
const port = 4200;
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
