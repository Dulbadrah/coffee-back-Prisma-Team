import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { verify } from "../../utils/token";
export const getProfileCurrentUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verify(token);
    const userId = decoded.payload.userId;

    const profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    res.status(200).json({ user, profile });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token or unauthorized" });
  }
};
