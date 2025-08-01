import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getUserProfile = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const userByUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    const userId = userByUsername?.id;

    const getProfile = await prisma.profile.findFirst({
      where: {
        userId: Number(userId),
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({ getProfile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
