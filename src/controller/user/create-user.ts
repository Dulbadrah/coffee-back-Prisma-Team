import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";


export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    const user = await prisma.user.create({
        data:{
            email,
            password,
            username,
        }
      
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "api error", error });
  }
};