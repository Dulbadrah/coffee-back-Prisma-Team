import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const createUserProfile = async (req: Request, res: Response) => {
  const {
    about,
    name,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
    userId,
  } = req.body;

  try {
    const profile = await prisma.profile.create({
      data: {
        about,
        name,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
        userId,
      },
    });

    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
