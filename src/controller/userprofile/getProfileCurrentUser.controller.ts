import { Response, Request } from "express";
import { prisma } from "../../utils/prisma";

export const getProfileCurrentUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const getProfileCurrentUser = await prisma.profile.findUnique({
      where: {
        id: Number(userId),
      },
    });
    res.status(200).json({ getProfileCurrentUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
