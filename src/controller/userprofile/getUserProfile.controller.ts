import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getUserProfile = async (req: Request, res: Response) => {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const profile = await prisma.profile.findFirst({
      where: {
        user: {
          username, // Profile.user -> User.username
        },
      },
      include: {
        user: true,
      },
    });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ message });
  }
};
