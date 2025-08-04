import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt";


export const SignUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 8)
  try {
    const user = await prisma.user.create({
        data:{
            email,
            password: hashedPassword,
            username,
        }
      
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "api error", error });
  }
};