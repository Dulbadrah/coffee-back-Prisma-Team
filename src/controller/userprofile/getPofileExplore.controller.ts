import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { verifyd } from "../../utils/token";

export const getProfileExplore = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyd(token);

    const getProfileExplore = await prisma.profile.findUnique({
      where: {
        userId: decoded.userId,
      },
      include: {
        user: true,
      },
    });

    if (!getProfileExplore) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ profile: getProfileExplore });
  } catch (error) {
    console.error("JWT verification or DB error:", error);
    res.status(401).json({ message: "Invalid token or error occurred" });
  }
};
