import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getReceivedDonation = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("user not found");
    }

    const donations = await prisma.donations.findMany({
      where: {
        recipientId: Number(user.id),
      },
      include: {
        donor: true,
      },
    });

    if (donations.length === 0) {
      return res
        .status(404)
        .json({ message: "No donations found for this user." });
    }

    console.log("donations:", donations);
    res.status(200).json({ donations });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong.", error });
  }
};
