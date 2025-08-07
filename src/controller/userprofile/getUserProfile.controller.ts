import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getUserProfile = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const profile = await prisma.profile.findFirst({
      where: {
        name: username,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
