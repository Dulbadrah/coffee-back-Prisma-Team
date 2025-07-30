import { PrismaClient } from "../generated/prisma";
import express from "express";

const prisma = new PrismaClient();
const app = express();
const port = 4200;

app.post("/user", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "    jsdfkv niksd",
    },
  });
  res.status(200).json({ mesege: user });
});

app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
