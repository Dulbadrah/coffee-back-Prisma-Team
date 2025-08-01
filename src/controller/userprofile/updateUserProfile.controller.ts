import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const updateUserProfile = async (req: Request, res: Response) => {
  const { profileId } = req.params;
  const {
    about,
    name,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  try {
   const updatedProfile = await prisma.profile.update({
  where: { id: Number(profileId) },
  data: {
    about,
    name,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  }
});


    res.status(200).json({ updatedProfile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
