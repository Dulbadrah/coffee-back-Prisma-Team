import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";

export const searchDonations = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { search } = req.body;

  try {
    const donations = await prisma.donations.findMany({
      where: {
        donorId: Number(userId),
        OR: [
          {
            donor: {
              email: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            donor: {
              username: {
                contains: search,
                mode: "insensitive",
              },
            },
          },
          {
            specialMessage: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
      include: {
        donor: true,
        user: true,
      },
    });

    if (!donations.length) {
      return res.status(404).json({ message: "Тохирох хандив олдсонгүй." });
    }

    res.json({ donations });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
