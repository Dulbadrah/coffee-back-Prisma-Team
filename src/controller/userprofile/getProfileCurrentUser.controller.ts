import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { verify } from "../../utils/token";
export const getProfileCurrentUser = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verify(token);

    const profileCurrent = await prisma.profile.findUnique({
      where: {
        userId: decoded.userId,
      },
      include: {
        user: true,
      },
    });

    if (!profileCurrent) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ profileCurrent });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token or unauthorized" });
  }
};
