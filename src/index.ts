import express from "express";

const app = express();
const port = 4200;
app.use(express.json());

// user
// userProfile
//
//
app.listen(port, async () => {
  console.log(`hello prisma port http://localhost:${port}`);
});
