import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";
export const createUserProfile = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId || isNaN(Number(userId))) {
    return res.status(400).json({ message: "Invalid or missing userId" });
  }

  const {
    about,
    name,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  try {
    const profile = await prisma.profile.create({
      data: {
        about,
        name,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage, // энэ талбар чинь schema дээр байгаа эсэхээ шалгаарай
        userId: Number(userId),
      },
    });

    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data: { profileId: profile.id },
    });

    res.status(200).json({ updatedUser });
  } catch (error: any) {
    console.error("Profile creation error:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

