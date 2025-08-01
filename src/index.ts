import express from "express";
import userRouterProfile from "./router/userProfile.router";

const app = express();
const port = 4200;
app.use(express.json());

app.use("/profile", userRouterProfile);
app.use("/profile", userRouterProfile);
// app.use("/profile", userRouterProfile);
// app.use("/profile", userRouterProfile);
// app.use("/profile", userRouterProfile);

app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
