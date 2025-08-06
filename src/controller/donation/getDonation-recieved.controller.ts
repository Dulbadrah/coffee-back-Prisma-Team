import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const getReceivedDonation = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const donations = await prisma.donations.findMany({
      where: {
        recipientId: Number(userId),
      },
      include: {
        donor: true, // donor iin infog hamt awah
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

const donanitons = [
  {
    id: 1,
    donorId: "user-1",
    receptentId: "user-2",
  },
  {
    id: 2,
    donorId: "user-2",
    receptentId: "user-1",
  },
];

const userId = "user-1";

const myDonations = donanitons.filter(
  (donaniton) => donaniton.receptentId === userId
);
