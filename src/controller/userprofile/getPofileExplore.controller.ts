import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { verifyd } from "../../utils/token";

export const getProfileExplore = async (req: Request, res: Response) => {
  try {
    const profiles = await prisma.profile.findMany({
      include: {
        user: true,
      },
    });

    if (!getProfileExplore) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ profiles: profiles });
  } catch (error) {
    console.error("JWT verification or DB error:", error);
    res.status(401).json({ message: "Invalid token or error occurred" });
  }
};
