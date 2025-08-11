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
        userId: Number(userId),
      },
    });
    const { id } = profile;

    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data: {
        profileId: id,
      },
    });
    res.status(200).json({ updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
