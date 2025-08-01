import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const createUserProfile = async (req: Request, res: Response) => {
  const { userId } = req.params;
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
        successMessage,
        user: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });

    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
